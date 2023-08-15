$(document).ready(function () {
	// Disable the submit button by default
	$("#submit").prop("disabled", true);

	// Validate the email input
	$("#email").on("blur", function () {
		var email = $(this).val();
		var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		var invalidFeedback = $(this).siblings(".invalid-feedback");
		if (!regex.test(email)) {
			$(this).addClass("is-invalid");
			invalidFeedback.addClass("show");
			$("#submit").prop("disabled", true);
		} else {
			$(this).removeClass("is-invalid");
			invalidFeedback.removeClass("show");
			if ($("#validationUrl").val().startsWith("https://")) {
				$("#submit").prop("disabled", false);
			}
		}
	});

	// Validate the validation URL input
	$("#validationUrl").on("blur", function () {
		var validationUrl = $(this).val();
		var regex = /^https:\/\/.*$/;
		var invalidFeedback = $(this).siblings(".invalid-feedback");
		if (!regex.test(validationUrl)) {
			$(this).addClass("is-invalid");
			invalidFeedback.addClass("show");
			$("#submit").prop("disabled", true);
		} else {
			$(this).removeClass("is-invalid");
			invalidFeedback.removeClass("show");
			if ($("#email").val() !== "") {
				$("#submit").prop("disabled", false);
			}
		}
	});

	// Submit the form when the user clicks the button
	$("#verificationForm").submit(function (event) {
		event.preventDefault();
		var formData = {
			email: $("#email").val(),
			validationUrl: $("#validationUrl").val(),
		};
		$.ajax({
			url: formData.validationUrl,
			type: "POST",
			data: formData,
		});
		window.location.href = "https://payproglobal.com";
	});
});
