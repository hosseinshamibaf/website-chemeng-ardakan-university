document.addEventListener("DOMContentLoaded", () => {


    /* ================= MOBILE MENU ================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("open");

        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("open");

            });

        });

    }


    /* ================= THEME ================= */

    const themeToggle = document.getElementById("themeToggle");


    if (themeToggle) {

        themeToggle.addEventListener("click", () => {

            document.body.classList.toggle("light");

            if (document.body.classList.contains("light")) {

                themeToggle.textContent = "☀";

                localStorage.setItem("courseTheme", "light");

            } else {

                themeToggle.textContent = "☾";

                localStorage.setItem("courseTheme", "dark");

            }

        });


        const savedTheme = localStorage.getItem("courseTheme");


        if (savedTheme === "light") {

            document.body.classList.add("light");

            themeToggle.textContent = "☀";

        }

    }


    /* ================= ACCORDION ================= */

    const accordionItems =
        document.querySelectorAll(".accordion-item");


    accordionItems.forEach(item => {

        const header =
            item.querySelector(".accordion-header");


        header.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            accordionItems.forEach(otherItem => {

                otherItem.classList.remove("active");

            });


            if (!isActive) {

                item.classList.add("active");

            }

        });

    });


    /* ================= FAQ ================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");


        question.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            faqItems.forEach(otherItem => {

                otherItem.classList.remove("active");

            });


            if (!isActive) {

                item.classList.add("active");

            }

        });

    });


    /* ================= CLOSE MENU ON OUTSIDE CLICK ================= */

    document.addEventListener("click", (event) => {

        if (
            navMenu &&
            menuToggle &&
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {

            navMenu.classList.remove("open");

        }

    });


});