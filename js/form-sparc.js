document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("registerForm");
    const successMessage = document.getElementById("successMessage");
    const newRegister = document.getElementById("newRegister");

    function showError(input, message) {
        const group = input.closest(".form-group");
        const error = group.querySelector(".error-message");

        error.textContent = message;
        input.style.borderColor = "#ff596d";
    }

    function clearError(input) {
        const group = input.closest(".form-group");
        const error = group.querySelector(".error-message");

        error.textContent = "";
        input.style.borderColor = "";
    }

    function validateForm() {

        let valid = true;

        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");
        const major = document.getElementById("major");

        if (firstName.value.trim().length < 2) {
            showError(firstName, "لطفاً نام خود را وارد کنید.");
            valid = false;
        } else {
            clearError(firstName);
        }

        if (lastName.value.trim().length < 2) {
            showError(lastName, "لطفاً نام خانوادگی خود را وارد کنید.");
            valid = false;
        } else {
            clearError(lastName);
        }

        const cleanPhone = phone.value.replace(/[\s-]/g, "");
        const phoneRegex = /^(09\d{9}|\+989\d{9})$/;

        if (!phoneRegex.test(cleanPhone)) {
            showError(phone, "شماره تماس معتبر وارد کنید.");
            valid = false;
        } else {
            clearError(phone);
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email.value.trim())) {
            showError(email, "لطفاً یک ایمیل معتبر وارد کنید.");
            valid = false;
        } else {
            clearError(email);
        }

        if (!major.value) {
            showError(major, "لطفاً رشته تحصیلی خود را انتخاب کنید.");
            valid = false;
        } else {
            clearError(major);
        }

        return valid;
    }


    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const submitButton = form.querySelector(".submit-btn");

        submitButton.disabled = true;

        const buttonText = submitButton.querySelector("span");

        buttonText.textContent = "در حال ارسال...";


        try {

            const formData = new FormData(form);

            const object = Object.fromEntries(formData.entries());

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },

                    body: JSON.stringify(object)
                }
            );


            const result = await response.json();

            console.log("Web3Forms:", result);


            if (response.ok && result.success) {

                form.style.display = "none";

                successMessage.classList.add("active");

            } else {

                alert(
                    result.message ||
                    "ارسال فرم انجام نشد."
                );

                submitButton.disabled = false;

                buttonText.textContent = "ثبت‌نام";
            }

        } catch (error) {

            console.error("Form Error:", error);

            alert(
                "خطایی در اتصال به Web3Forms رخ داد."
            );

            submitButton.disabled = false;

            buttonText.textContent = "ثبت‌نام";
        }

    });


    newRegister.addEventListener("click", () => {

        successMessage.classList.remove("active");

        form.reset();

        form.style.display = "block";

        document
            .querySelectorAll(".error-message")
            .forEach(error => {
                error.textContent = "";
            });

        document
            .querySelectorAll("input, select")
            .forEach(input => {
                input.style.borderColor = "";
            });

        const submitButton =
            form.querySelector(".submit-btn");

        submitButton.disabled = false;

        submitButton.querySelector("span").textContent =
            "ثبت‌نام";
    });


    document
        .querySelectorAll("input, select")
        .forEach(input => {

            input.addEventListener("input", () => {
                clearError(input);
            });

            input.addEventListener("change", () => {
                clearError(input);
            });

        });

});