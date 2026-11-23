document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    const body = document.body;
    const html = document.documentElement;
    


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function (event) {

            event.stopPropagation();

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        /* بستن منو با کلیک روی لینک */

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        /* بستن منو با کلیک بیرون */

        document.addEventListener("click", function (event) {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

        anchor.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            const y =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                90;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
            THEME TOGGLE
    ===================================================== */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        body.classList.add("light-mode");
        html.classList.add("light-mode");

        if (themeIcon) {
            themeIcon.src = "photo/sun.png";
        }

    } else {

        body.classList.remove("light-mode");
        html.classList.remove("light-mode");

        if (themeIcon) {
            themeIcon.src = "photo/moon.png";
        }

    }

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            body.classList.toggle("light-mode");
            html.classList.toggle("light-mode");

            const isLight =
                body.classList.contains("light-mode");

            localStorage.setItem(
                "theme",
                isLight ? "light" : "dark"
            );

            if (themeIcon) {

                themeIcon.src =
                    isLight
                        ? "photo/sun.png"
                        : "photo/moon.png";

            }

        });

    }

    /* =====================================================
       SEARCH
    ===================================================== */

    const searchInput =
        document.querySelector(".search-bar input");

    const searchButton =
        document.querySelector(".search-bar button");


    if (searchInput && searchButton) {

        const pages = [
            "notium.html",
            "notium1.html",
            "notium2.html",
            "notium3.html",
            "notium4.html",
            "notium5.html",
            "notium6.html",
            "notium7.html",
            "notium8.html",
            "notium9.html"
        ];


        function normalizeText(text) {

            return text
                .toLowerCase()
                .replace(/ي/g, "ی")
                .replace(/ى/g, "ی")
                .replace(/ك/g, "ک")
                .replace(/ة/g, "ه")
                .replace(/ۀ/g, "ه")
                .replace(/\s+/g, " ")
                .trim();

        }


        function highlightNote(card) {

            card.style.transition = "0.4s";

            card.style.transform = "scale(1.02)";

            setTimeout(function () {

                card.style.transform = "scale(1)";

            }, 1200);

        }


        async function searchAllPages() {

            const searchText =
                normalizeText(searchInput.value);

            if (!searchText) {

                alert("لطفاً نام جزوه را وارد کنید.");

                return;
            }


            /* صفحه فعلی */

            const currentPage =
                window.location.pathname
                    .split("/")
                    .pop() || "notium.html";


            const currentCards =
                document.querySelectorAll(".note-row-card");


            for (const card of currentCards) {

                const title = card.querySelector("h3");

                if (!title) {
                    continue;
                }

                const noteName =
                    normalizeText(title.textContent);

                if (noteName.includes(searchText)) {

                    card.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    highlightNote(card);

                    return;
                }

            }


            /* صفحات دیگر */

            for (const page of pages) {

                if (page === currentPage) {
                    continue;
                }

                try {

                    const response = await fetch(page);

                    if (!response.ok) {
                        continue;
                    }

                    const html =
                        await response.text();

                    const parser =
                        new DOMParser();

                    const doc =
                        parser.parseFromString(
                            html,
                            "text/html"
                        );

                    const cards =
                        doc.querySelectorAll(
                            ".note-row-card"
                        );


                    for (const card of cards) {

                        const title =
                            card.querySelector("h3");

                        if (!title) {
                            continue;
                        }

                        const noteName =
                            normalizeText(
                                title.textContent
                            );


                        if (noteName.includes(searchText)) {

                            window.location.href =
                                page +
                                "?search=" +
                                encodeURIComponent(
                                    searchText
                                );

                            return;
                        }

                    }

                } catch (error) {

                    console.log(
                        "خطا در بررسی صفحه:",
                        page,
                        error
                    );

                }

            }


            alert(
                "❌ جزوه‌ای با این نام در هیچ‌کدام از صفحات پیدا نشد."
            );

        }


        searchButton.addEventListener(
            "click",
            searchAllPages
        );


        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    searchAllPages();

                }

            }
        );


        /* جستجوی ارسال‌شده از صفحه دیگر */

        const urlParams =
            new URLSearchParams(
                window.location.search
            );

        const searchFromURL =
            urlParams.get("search");


        if (searchFromURL) {

            const searchText =
                normalizeText(searchFromURL);

            const cards =
                document.querySelectorAll(
                    ".note-row-card"
                );


            setTimeout(function () {

                for (const card of cards) {

                    const title =
                        card.querySelector("h3");

                    if (!title) {
                        continue;
                    }

                    const noteName =
                        normalizeText(
                            title.textContent
                        );


                    if (noteName.includes(searchText)) {

                        card.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });

                        highlightNote(card);

                        break;
                    }

                }

            }, 300);

        }

    }


    console.log("Website JavaScript initialized.");

});