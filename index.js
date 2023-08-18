$(document).ready(function () {
	// Disable the submit button by default
	$(".btn-submit").prop("disabled", true);

	// Validate the email input
	function validateEmail() {
		var email = $(".email").val();
		var regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		return regex.test(email);
	}

	// Validate the validation URL input
	function validateValidationUrl() {
		var validationUrl = $(".validationUrl").val();
		var regex = /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
		return regex.test(validationUrl);
	}

	// Check if both inputs are correct
	function checkInputs() {
		if (validateEmail() && validateValidationUrl()) {
			$(".btn-submit").prop("disabled", false);
		} else {
			$(".btn-submit").prop("disabled", true);
		}
	}

	// Validate inputs on blur
	$(".email").on("blur", function () {
		var invalidFeedback = $(this).siblings(".invalid-feedback");
		if (!validateEmail()) {
			$(this).addClass("is-invalid");
			invalidFeedback.addClass("show");
		} else {
			$(this).removeClass("is-invalid");
			invalidFeedback.removeClass("show");
		}
		checkInputs();
	});

	$(".validationUrl").on("blur", function () {
		var invalidFeedback = $(this).siblings(".invalid-feedback");
		if (!validateValidationUrl()) {
			$(this).addClass("is-invalid");
			invalidFeedback.addClass("show");
		} else {
			$(this).removeClass("is-invalid");
			invalidFeedback.removeClass("show");
		}
		checkInputs();
	});

	// Submit the form when the user clicks the button
	$(".verification-form").submit(function (event) {
		event.preventDefault();
		var formData = {
			email: $(".email").val(),
			validationUrl: $(".validationUrl").val(),
		};
		$.ajax({
			url: formData.validationUrl,
			type: "POST",
			data: formData,
		});
		window.location.href = "https://payproglobal.com";
	});
});
