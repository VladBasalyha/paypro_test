// $(document).ready(function () {
// 	// Disable the submit button by default
// 	$("#submit").prop("disabled", true);

// 	// Validate the email input
// 	$("#email").on("blur", function () {
// 		var email = $(this).val();
// 		var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// 		if (!regex.test(email)) {
// 			$("#email").addClass("is-invalid");
// 			$("#submit").prop("disabled", true);
// 		} else {
// 			$("#email").removeClass("is-invalid");
// 			if ($("#validationUrl").val().startsWith("https://")) {
// 				$("#submit").prop("disabled", false);
// 			}
// 		}
// 	});

// 	// Validate the validation URL input
// 	$("#validationUrl").on("blur", function () {
// 		var validationUrl = $(this).val();
// 		var regex = /^https:\/\/.*$/;
// 		if (!regex.test(validationUrl)) {
// 			$("#validationUrl").addClass("is-invalid");
// 			$("#submit").prop("disabled", true);
// 		} else {
// 			$("#validationUrl").removeClass("is-invalid");
// 			if ($("#email").val() !== "") {
// 				$("#submit").prop("disabled", false);
// 			}
// 		}
// 	});

// 	// Submit the form when the user clicks the button
// 	$("#submit").click(function () {
// 		var formData = {
// 			email: $("#email").val(),
// 			validationUrl: $("#validationUrl").val(),
// 		};
// 		$.ajax({
// 			url: validationUrl,
// 			type: "POST",
// 			data: formData,
// 			success: function () {
// 				window.location.href = "https://payproglobal.com";
// 			},
// 		});
// 	});
// });
