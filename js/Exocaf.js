
const product = document.querySelector(".product");
const visual = document.querySelector(".visual");

const notifyBtn = document.getElementById("notifyBtn");
const notification = document.getElementById("notification");


/* =========================================
   PRODUCT MOUSE EFFECT
========================================= */

if (
    product &&
    visual &&
    window.matchMedia("(pointer: fine)").matches
) {

    visual.addEventListener("mousemove", (event) => {

        const rect =
            visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left)
            / rect.width - 0.5;

        const y =
            (event.clientY - rect.top)
            / rect.height - 0.5;


        product.style.transform = `
            translate(
                ${x * 16}px,
                ${y * 12}px
            )
        `;
    });


    visual.addEventListener("mouseleave", () => {

        product.style.transform = "";

    });

}


/* =========================================
   NOTIFICATION
========================================= */

notifyBtn.addEventListener("click", () => {

    notification.classList.add("show");


    setTimeout(() => {

        notification.classList.remove("show");

    }, 3000);

});


/* =========================================
   SMALL PARALLAX FOR ORBITS
========================================= */

const orbits =
    document.querySelectorAll(".visual-orbit");


visual.addEventListener("mousemove", (event) => {

    if (
        !window.matchMedia("(pointer: fine)").matches
    ) {
        return;
    }


    const rect =
        visual.getBoundingClientRect();


    const x =
        (event.clientX - rect.left)
        / rect.width - 0.5;

    const y =
        (event.clientY - rect.top)
        / rect.height - 0.5;


    orbits.forEach((orbit, index) => {

        const amount =
            (index + 1) * 5;

        orbit.style.marginLeft =
            `${x * amount}px`;

        orbit.style.marginTop =
            `${y * amount}px`;

    });

});


visual.addEventListener("mouseleave", () => {

    orbits.forEach((orbit) => {

        orbit.style.marginLeft = "";
        orbit.style.marginTop = "";

    });

});

/* =========================================
   COUNTDOWN TIMER
========================================= */

// تاریخ رونمایی
const launchDate = new Date("2026-12-25T00:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");


function updateCountdown() {

    const now = new Date().getTime();

    const distance = launchDate - now;


    // اگر زمان به پایان رسیده باشد
    if (distance <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        return;
    }


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");
}


// اجرای اولیه
updateCountdown();


// بروزرسانی هر ثانیه
setInterval(updateCountdown, 1000);

