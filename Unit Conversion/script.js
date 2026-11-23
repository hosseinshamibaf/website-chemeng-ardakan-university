/* =========================================
   UNIT CONVERTER
========================================= */


/* =========================================
   UNIT DATA
========================================= */

const units = {

    /* ---------- LENGTH ---------- */

    length: {

        meter: {
            name: "متر",
            factor: 1
        },

        kilometer: {
            name: "کیلومتر",
            factor: 1000
        },

        centimeter: {
            name: "سانتی‌متر",
            factor: 0.01
        },

        millimeter: {
            name: "میلی‌متر",
            factor: 0.001
        },

        micrometer: {
            name: "میکرومتر",
            factor: 0.000001
        },

        nanometer: {
            name: "نانومتر",
            factor: 0.000000001
        },

        mile: {
            name: "مایل",
            factor: 1609.344
        },

        yard: {
            name: "یارد",
            factor: 0.9144
        },

        foot: {
            name: "فوت",
            factor: 0.3048
        },

        inch: {
            name: "اینچ",
            factor: 0.0254
        },

        nauticalMile: {
            name: "مایل دریایی",
            factor: 1852
        }

    },


    /* ---------- AREA ---------- */

    area: {

        squareMeter: {
            name: "متر مربع",
            factor: 1
        },

        squareKilometer: {
            name: "کیلومتر مربع",
            factor: 1000000
        },

        squareCentimeter: {
            name: "سانتی‌متر مربع",
            factor: 0.0001
        },

        squareMillimeter: {
            name: "میلی‌متر مربع",
            factor: 0.000001
        },

        hectare: {
            name: "هکتار",
            factor: 10000
        },

        acre: {
            name: "آکر",
            factor: 4046.8564224
        },

        squareFoot: {
            name: "فوت مربع",
            factor: 0.09290304
        },

        squareInch: {
            name: "اینچ مربع",
            factor: 0.00064516
        }

    },


    /* ---------- VOLUME ---------- */

    volume: {

        cubicMeter: {
            name: "متر مکعب",
            factor: 1
        },

        liter: {
            name: "لیتر",
            factor: 0.001
        },

        milliliter: {
            name: "میلی‌لیتر",
            factor: 0.000001
        },

        cubicCentimeter: {
            name: "سانتی‌متر مکعب",
            factor: 0.000001
        },

        cubicKilometer: {
            name: "کیلومتر مکعب",
            factor: 1000000000
        },

        gallon: {
            name: "گالن",
            factor: 0.003785411784
        },

        quart: {
            name: "کوارت",
            factor: 0.000946352946
        },

        pint: {
            name: "پینت",
            factor: 0.000473176473
        },

        cup: {
            name: "فنجان",
            factor: 0.0002365882365
        }

    },


    /* ---------- MASS ---------- */

    mass: {

        kilogram: {
            name: "کیلوگرم",
            factor: 1
        },

        gram: {
            name: "گرم",
            factor: 0.001
        },

        milligram: {
            name: "میلی‌گرم",
            factor: 0.000001
        },

        ton: {
            name: "تن",
            factor: 1000
        },

        pound: {
            name: "پوند",
            factor: 0.45359237
        },

        ounce: {
            name: "اونس",
            factor: 0.028349523125
        },

        stone: {
            name: "استون",
            factor: 6.35029318
        }

    },


    /* ---------- TEMPERATURE ---------- */

    temperature: {

        celsius: {
            name: "سلسیوس"
        },

        fahrenheit: {
            name: "فارنهایت"
        },

        kelvin: {
            name: "کلوین"
        }

    },


    /* ---------- TIME ---------- */

    time: {

        second: {
            name: "ثانیه",
            factor: 1
        },

        millisecond: {
            name: "میلی‌ثانیه",
            factor: 0.001
        },

        microsecond: {
            name: "میکروثانیه",
            factor: 0.000001
        },

        minute: {
            name: "دقیقه",
            factor: 60
        },

        hour: {
            name: "ساعت",
            factor: 3600
        },

        day: {
            name: "روز",
            factor: 86400
        },

        week: {
            name: "هفته",
            factor: 604800
        },

        year: {
            name: "سال",
            factor: 31536000
        }

    },


    /* ---------- SPEED ---------- */

    speed: {

        meterPerSecond: {
            name: "متر بر ثانیه",
            factor: 1
        },

        kilometerPerHour: {
            name: "کیلومتر بر ساعت",
            factor: 0.2777777778
        },

        milePerHour: {
            name: "مایل بر ساعت",
            factor: 0.44704
        },

        knot: {
            name: "گره دریایی",
            factor: 0.5144444444
        },

        footPerSecond: {
            name: "فوت بر ثانیه",
            factor: 0.3048
        }

    },


    /* ---------- PRESSURE ---------- */

    pressure: {

        pascal: {
            name: "پاسکال",
            factor: 1
        },

        kilopascal: {
            name: "کیلوپاسکال",
            factor: 1000
        },

        megapascal: {
            name: "مگاپاسکال",
            factor: 1000000
        },

        bar: {
            name: "بار",
            factor: 100000
        },

        atmosphere: {
            name: "اتمسفر",
            factor: 101325
        },

        psi: {
            name: "PSI",
            factor: 6894.757293
        },

        torr: {
            name: "تور",
            factor: 133.322368
        }

    },


    /* ---------- ENERGY ---------- */

    energy: {

        joule: {
            name: "ژول",
            factor: 1
        },

        kilojoule: {
            name: "کیلوژول",
            factor: 1000
        },

        calorie: {
            name: "کالری",
            factor: 4.184
        },

        kilocalorie: {
            name: "کیلوکالری",
            factor: 4184
        },

        wattHour: {
            name: "وات ساعت",
            factor: 3600
        },

        kilowattHour: {
            name: "کیلووات ساعت",
            factor: 3600000
        },

        electronVolt: {
            name: "الکترون‌ولت",
            factor: 1.602176634e-19
        }

    },


    /* ---------- POWER ---------- */

    power: {

        watt: {
            name: "وات",
            factor: 1
        },

        kilowatt: {
            name: "کیلووات",
            factor: 1000
        },

        megawatt: {
            name: "مگاوات",
            factor: 1000000
        },

        horsepower: {
            name: "اسب بخار",
            factor: 745.699872
        }

    },


    /* ---------- DIGITAL DATA ---------- */

    data: {

        bit: {
            name: "بیت",
            factor: 1
        },

        byte: {
            name: "بایت",
            factor: 8
        },

        kilobit: {
            name: "کیلوبیت",
            factor: 1000
        },

        kilobyte: {
            name: "کیلوبایت",
            factor: 8000
        },

        megabit: {
            name: "مگابیت",
            factor: 1000000
        },

        megabyte: {
            name: "مگابایت",
            factor: 8000000
        },

        gigabit: {
            name: "گیگابیت",
            factor: 1000000000
        },

        gigabyte: {
            name: "گیگابایت",
            factor: 8000000000
        },

        terabit: {
            name: "ترابیت",
            factor: 1000000000000
        },

        terabyte: {
            name: "ترابایت",
            factor: 8000000000000
        }

    },


    /* ---------- ANGLE ---------- */

    angle: {

        degree: {
            name: "درجه",
            factor: 1
        },

        radian: {
            name: "رادیان",
            factor: 180 / Math.PI
        },

        gradian: {
            name: "گرادیان",
            factor: 0.9
        },

        arcMinute: {
            name: "دقیقه قوسی",
            factor: 1 / 60
        },

        arcSecond: {
            name: "ثانیه قوسی",
            factor: 1 / 3600
        }

    },


    /* ---------- FREQUENCY ---------- */

    frequency: {

        hertz: {
            name: "هرتز",
            factor: 1
        },

        kilohertz: {
            name: "کیلوهرتز",
            factor: 1000
        },

        megahertz: {
            name: "مگاهرتز",
            factor: 1000000
        },

        gigahertz: {
            name: "گیگاهرتز",
            factor: 1000000000
        }

    },


    /* ---------- FORCE ---------- */

    force: {

        newton: {
            name: "نیوتن",
            factor: 1
        },

        kilonewton: {
            name: "کیلونیوتن",
            factor: 1000
        },

        dyne: {
            name: "داین",
            factor: 0.00001
        },

        poundForce: {
            name: "پوند نیرو",
            factor: 4.4482216153
        }

    },


    /* ---------- VOLTAGE ---------- */

    voltage: {

        volt: {
            name: "ولت",
            factor: 1
        },

        millivolt: {
            name: "میلی‌ولت",
            factor: 0.001
        },

        microvolt: {
            name: "میکروولت",
            factor: 0.000001
        },

        kilovolt: {
            name: "کیلوولت",
            factor: 1000
        },

        megavolt: {
            name: "مگاولت",
            factor: 1000000
        }

    }

};


/* =========================================
   DOM ELEMENTS
========================================= */

const categorySelect =
    document.getElementById("category");

const fromUnit =
    document.getElementById("fromUnit");

const toUnit =
    document.getElementById("toUnit");

const inputValue =
    document.getElementById("inputValue");

const resultValue =
    document.getElementById("resultValue");

const convertButton =
    document.getElementById("convertButton");

const swapButton =
    document.getElementById("swapButton");

const resultNumber =
    document.getElementById("resultNumber");

const resultUnit =
    document.getElementById("resultUnit");

const resultDescription =
    document.getElementById("resultDescription");

const categoryButtons =
    document.querySelectorAll(".category-item");


/* =========================================
   LOAD UNITS
========================================= */

function loadUnits(category) {

    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    const categoryUnits =
        units[category];

    Object.entries(categoryUnits).forEach(
        ([key, unit]) => {

            const optionFrom =
                document.createElement("option");

            optionFrom.value = key;
            optionFrom.textContent = unit.name;

            fromUnit.appendChild(optionFrom);


            const optionTo =
                document.createElement("option");

            optionTo.value = key;
            optionTo.textContent = unit.name;

            toUnit.appendChild(optionTo);

        }
    );


    /* Default selections */

    const unitKeys =
        Object.keys(categoryUnits);

    fromUnit.value =
        unitKeys[0];

    toUnit.value =
        unitKeys[1] || unitKeys[0];


    convert();
}


/* =========================================
   TEMPERATURE CONVERSION
========================================= */

function convertTemperature(
    value,
    from,
    to
) {

    let celsius;


    /* From → Celsius */

    if (from === "celsius") {

        celsius = value;

    } else if (from === "fahrenheit") {

        celsius =
            (value - 32) * 5 / 9;

    } else if (from === "kelvin") {

        celsius =
            value - 273.15;

    }


    /* Celsius → Target */

    if (to === "celsius") {

        return celsius;

    }

    if (to === "fahrenheit") {

        return (
            celsius * 9 / 5
        ) + 32;

    }

    if (to === "kelvin") {

        return celsius + 273.15;

    }

}


/* =========================================
   MAIN CONVERSION
========================================= */

function convert() {

    const category =
        categorySelect.value;

    const from =
        fromUnit.value;

    const to =
        toUnit.value;

    const value =
        parseFloat(inputValue.value);


    if (
        Number.isNaN(value)
    ) {

        resultValue.value = "";

        resultNumber.textContent =
            "—";

        resultUnit.textContent =
            "";

        resultDescription.textContent =
            "لطفاً یک مقدار معتبر وارد کنید.";

        return;
    }


    let result;


    /* Temperature */

    if (category === "temperature") {

        result =
            convertTemperature(
                value,
                from,
                to
            );

    }

    /* Normal units */

    else {

        const fromFactor =
            units[category][from].factor;

        const toFactor =
            units[category][to].factor;


        /* Convert to base unit */

        const baseValue =
            value * fromFactor;


        /* Base → destination */

        result =
            baseValue / toFactor;

    }


    resultValue.value =
        formatNumber(result);

    resultNumber.textContent =
        formatNumber(result);

    resultUnit.textContent =
        units[category][to].name;


    resultDescription.textContent =
        `${formatNumber(value)} ${units[category][from].name} = ${formatNumber(result)} ${units[category][to].name}`;
}


/* =========================================
   NUMBER FORMAT
========================================= */

function formatNumber(number) {

    if (!Number.isFinite(number)) {
        return "خطا";
    }


    /* Very small numbers */

    if (
        Math.abs(number) > 0 &&
        Math.abs(number) < 0.000001
    ) {

        return number.toExponential(6);

    }


    /* Very large numbers */

    if (
        Math.abs(number) >= 1000000000000
    ) {

        return number.toExponential(6);

    }


    return Number(
        number.toFixed(10)
    ).toLocaleString("en-US");

}


/* =========================================
   CATEGORY CHANGE
========================================= */

categorySelect.addEventListener(
    "change",
    () => {

        loadUnits(
            categorySelect.value
        );


        updateActiveCategory(
            categorySelect.value
        );

    }
);


/* =========================================
   INPUT CHANGE
========================================= */

inputValue.addEventListener(
    "input",
    convert
);

fromUnit.addEventListener(
    "change",
    convert
);

toUnit.addEventListener(
    "change",
    convert
);


/* =========================================
   CONVERT BUTTON
========================================= */

convertButton.addEventListener(
    "click",
    convert
);


/* =========================================
   SWAP UNITS
========================================= */

swapButton.addEventListener(
    "click",
    () => {

        const oldFrom =
            fromUnit.value;

        fromUnit.value =
            toUnit.value;

        toUnit.value =
            oldFrom;

        convert();

    }
);


/* =========================================
   CATEGORY BUTTONS
========================================= */

categoryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                categorySelect.value =
                    category;


                loadUnits(category);


                updateActiveCategory(
                    category
                );

            }
        );

    }
);


/* =========================================
   ACTIVE CATEGORY
========================================= */

function updateActiveCategory(
    category
) {

    categoryButtons.forEach(
        button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        }
    );

}


/* =========================================
   INITIALIZE
========================================= */

loadUnits("length");