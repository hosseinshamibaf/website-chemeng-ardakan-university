document.addEventListener("DOMContentLoaded", function () {

    const audio =
        document.getElementById("specialAudio");

    const playButton =
        document.getElementById("specialPlay");

    const playSvg =
        document.getElementById("playSvg");

    const progress =
        document.getElementById("specialProgress");

    const progressFill =
        document.getElementById("specialProgressFill");

    const playerStatus =
        document.getElementById("playerStatus");

    const playerTime =
        document.getElementById("playerTime");

    const coverBox =
        document.querySelector(".special-cover-box");


    /* =====================================
       CHECK
    ===================================== */

    if (!audio || !playButton) {

        console.error(
            "Special Episode Player پیدا نشد."
        );

        return;

    }


    /* =====================================
       TIME FORMAT
    ===================================== */

    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {

            return "00:00";

        }


        const minutes =
            Math.floor(seconds / 60);

        const secondsPart =
            Math.floor(seconds % 60);


        return (
            String(minutes).padStart(2, "0") +
            ":" +
            String(secondsPart).padStart(2, "0")
        );

    }


    /* =====================================
       UPDATE TIME
    ===================================== */

    function updateTime() {

        playerTime.textContent =
            formatTime(audio.currentTime) +
            " / " +
            formatTime(audio.duration);

    }


    /* =====================================
       AUDIO READY
    ===================================== */

    audio.addEventListener(
        "loadedmetadata",
        function () {

            updateTime();

            playerStatus.textContent =
                "آماده پخش";

        }
    );


    /* =====================================
       PLAY BUTTON
    ===================================== */

    playButton.addEventListener(
        "click",
        async function () {

            try {

                if (audio.paused) {

                    await audio.play();

                } else {

                    audio.pause();

                }

            } catch (error) {

                console.error(
                    "Audio Error:",
                    error
                );

                playerStatus.textContent =
                    "خطا در پخش";

            }

        }
    );


    /* =====================================
       PLAY
    ===================================== */

    audio.addEventListener(
        "play",
        function () {

            playSvg.innerHTML = `
                <path d="M7 5h4v14H7z"></path>
                <path d="M13 5h4v14h-4z"></path>
            `;


            playerStatus.textContent =
                "در حال پخش";


            if (coverBox) {

                coverBox.classList.add(
                    "playing"
                );

            }

        }
    );


    /* =====================================
       PAUSE
    ===================================== */

    audio.addEventListener(
        "pause",
        function () {

            playSvg.innerHTML = `
                <path d="M8 5v14l11-7z"></path>
            `;


            if (!audio.ended) {

                playerStatus.textContent =
                    "متوقف شده";

            }


            if (coverBox) {

                coverBox.classList.remove(
                    "playing"
                );

            }

        }
    );


    /* =====================================
       PROGRESS
    ===================================== */

    audio.addEventListener(
        "timeupdate",
        function () {

            updateTime();


            if (
                Number.isFinite(audio.duration) &&
                audio.duration > 0
            ) {

                const percentage =
                    (
                        audio.currentTime /
                        audio.duration
                    ) * 100;


                progressFill.style.width =
                    percentage + "%";

            }

        }
    );


    /* =====================================
       CLICK PROGRESS
    ===================================== */

    progress.addEventListener(
        "click",
        function (event) {

            if (
                !Number.isFinite(audio.duration) ||
                audio.duration <= 0
            ) {

                return;

            }


            const rect =
                progress.getBoundingClientRect();


            const position =
                event.clientX - rect.left;


            const percentage =
                position / rect.width;


            audio.currentTime =
                percentage * audio.duration;

        }
    );


    /* =====================================
       END
    ===================================== */

    audio.addEventListener(
        "ended",
        function () {

            audio.currentTime = 0;

            progressFill.style.width =
                "0%";


            playSvg.innerHTML = `
                <path d="M8 5v14l11-7z"></path>
            `;


            playerStatus.textContent =
                "پایان اپیزود";


            updateTime();


            if (coverBox) {

                coverBox.classList.remove(
                    "playing"
                );

            }

        }
    );


    /* =====================================
       ERROR
    ===================================== */

    audio.addEventListener(
        "error",
        function () {

            console.error(
                "فایل صوتی بارگذاری نشد."
            );


            playerStatus.textContent =
                "خطا در فایل صوتی";

        }
    );


    /* =====================================
       INITIAL STATE
    ===================================== */

    audio.pause();

    audio.currentTime = 0;

    progressFill.style.width =
        "0%";

    playerStatus.textContent =
        "آماده پخش";

    updateTime();

});