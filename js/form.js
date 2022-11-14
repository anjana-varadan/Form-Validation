

$(document).ready(function () {

    //hide error message while clicking reset button
    $("#reset").click(function () {
        $("#name-error").hide();
        $("#email-error").hide();
        $("#password-error").hide();
        $("#confirmPassword-error").hide();
        $("#number-error").hide();
    });

    $("#myform").validate({
        rules: {
            name: {
                required: true,
                validName: true
            },
            email: {
                required: true,
                validEmail: false
            },
            confirmPassword: {
                equalTo: "#password"
            },
            telenumber: {
                teleNum: true,
            },
            email: {
                email: true,
            }
        },

        //error message 
        messages: {
            name: {
                required: "Name is required",
            },
            email: {
                required: "Email is Required"
            },
            password: {
                required: "Password is Required"
            },
            confirmPassword: {
                required: "Confirm Password is Required",
                equalTo: "Please enter same password as above"
            }
        }
    })
})

//add method for phone number validation
jQuery.validator.addMethod("teleNum", function (value, element) {
    return this.optional(element) || /^\+[0-9]\([0-9]{3}\)[0-9]{3}\-[0-9]{4}$/.test(value);
}, "Please enter valid telephone number");

//add method for email validation
jQuery.validator.addMethod("email", function (value, element) {
    return /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(value);
}, "Please enter valid email");

//add method for empty space in name validation
jQuery.validator.addMethod("validName", function (value) {
    return value.trim() !== "";
}, "Name cannot be empty");