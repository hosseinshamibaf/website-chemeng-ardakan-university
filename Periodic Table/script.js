"use strict";

/* =========================================================
   DOM ELEMENTS
========================================================= */

const periodicTable = document.getElementById("periodicTable");
const lanthanidesContainer = document.getElementById("lanthanides");
const actinidesContainer = document.getElementById("actinides");

const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

const filterButtons = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("elementModal");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModal = document.getElementById("closeModal");


/* =========================================================
   ELEMENT DATA
   اطلاعات پایه 118 عنصر
========================================================= */

const elements = [

    // Period 1
    {
        number: 1,
        symbol: "H",
        name: "هیدروژن",
        english: "Hydrogen",
        mass: "1.008",
        period: 1,
        group: 1,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 2,
        symbol: "He",
        name: "هلیوم",
        english: "Helium",
        mass: "4.0026",
        period: 1,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 2
    {
        number: 3,
        symbol: "Li",
        name: "لیتیوم",
        english: "Lithium",
        mass: "6.94",
        period: 2,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 4,
        symbol: "Be",
        name: "بریلیم",
        english: "Beryllium",
        mass: "9.0122",
        period: 2,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 5,
        symbol: "B",
        name: "بور",
        english: "Boron",
        mass: "10.81",
        period: 2,
        group: 13,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 6,
        symbol: "C",
        name: "کربن",
        english: "Carbon",
        mass: "12.011",
        period: 2,
        group: 14,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 7,
        symbol: "N",
        name: "نیتروژن",
        english: "Nitrogen",
        mass: "14.007",
        period: 2,
        group: 15,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 8,
        symbol: "O",
        name: "اکسیژن",
        english: "Oxygen",
        mass: "15.999",
        period: 2,
        group: 16,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 9,
        symbol: "F",
        name: "فلوئور",
        english: "Fluorine",
        mass: "18.998",
        period: 2,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 10,
        symbol: "Ne",
        name: "نئون",
        english: "Neon",
        mass: "20.180",
        period: 2,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 3
    {
        number: 11,
        symbol: "Na",
        name: "سدیم",
        english: "Sodium",
        mass: "22.990",
        period: 3,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 12,
        symbol: "Mg",
        name: "منیزیم",
        english: "Magnesium",
        mass: "24.305",
        period: 3,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 13,
        symbol: "Al",
        name: "آلومینیوم",
        english: "Aluminium",
        mass: "26.982",
        period: 3,
        group: 13,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 14,
        symbol: "Si",
        name: "سیلیسیم",
        english: "Silicon",
        mass: "28.085",
        period: 3,
        group: 14,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 15,
        symbol: "P",
        name: "فسفر",
        english: "Phosphorus",
        mass: "30.974",
        period: 3,
        group: 15,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 16,
        symbol: "S",
        name: "گوگرد",
        english: "Sulfur",
        mass: "32.06",
        period: 3,
        group: 16,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 17,
        symbol: "Cl",
        name: "کلر",
        english: "Chlorine",
        mass: "35.45",
        period: 3,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 18,
        symbol: "Ar",
        name: "آرگون",
        english: "Argon",
        mass: "39.948",
        period: 3,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 4
    {
        number: 19,
        symbol: "K",
        name: "پتاسیم",
        english: "Potassium",
        mass: "39.098",
        period: 4,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 20,
        symbol: "Ca",
        name: "کلسیم",
        english: "Calcium",
        mass: "40.078",
        period: 4,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 21,
        symbol: "Sc",
        name: "اسکاندیم",
        english: "Scandium",
        mass: "44.956",
        period: 4,
        group: 3,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 22,
        symbol: "Ti",
        name: "تیتانیوم",
        english: "Titanium",
        mass: "47.867",
        period: 4,
        group: 4,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 23,
        symbol: "V",
        name: "وانادیم",
        english: "Vanadium",
        mass: "50.942",
        period: 4,
        group: 5,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 24,
        symbol: "Cr",
        name: "کروم",
        english: "Chromium",
        mass: "51.996",
        period: 4,
        group: 6,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 25,
        symbol: "Mn",
        name: "منگنز",
        english: "Manganese",
        mass: "54.938",
        period: 4,
        group: 7,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 26,
        symbol: "Fe",
        name: "آهن",
        english: "Iron",
        mass: "55.845",
        period: 4,
        group: 8,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 27,
        symbol: "Co",
        name: "کبالت",
        english: "Cobalt",
        mass: "58.933",
        period: 4,
        group: 9,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 28,
        symbol: "Ni",
        name: "نیکل",
        english: "Nickel",
        mass: "58.693",
        period: 4,
        group: 10,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 29,
        symbol: "Cu",
        name: "مس",
        english: "Copper",
        mass: "63.546",
        period: 4,
        group: 11,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 30,
        symbol: "Zn",
        name: "روی",
        english: "Zinc",
        mass: "65.38",
        period: 4,
        group: 12,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 31,
        symbol: "Ga",
        name: "گالیوم",
        english: "Gallium",
        mass: "69.723",
        period: 4,
        group: 13,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 32,
        symbol: "Ge",
        name: "ژرمانیم",
        english: "Germanium",
        mass: "72.630",
        period: 4,
        group: 14,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 33,
        symbol: "As",
        name: "آرسنیک",
        english: "Arsenic",
        mass: "74.922",
        period: 4,
        group: 15,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 34,
        symbol: "Se",
        name: "سلنیوم",
        english: "Selenium",
        mass: "78.971",
        period: 4,
        group: 16,
        category: "nonmetal",
        categoryName: "نافلز"
    },

    {
        number: 35,
        symbol: "Br",
        name: "برم",
        english: "Bromine",
        mass: "79.904",
        period: 4,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 36,
        symbol: "Kr",
        name: "کریپتون",
        english: "Krypton",
        mass: "83.798",
        period: 4,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 5
    {
        number: 37,
        symbol: "Rb",
        name: "روبیدیوم",
        english: "Rubidium",
        mass: "85.468",
        period: 5,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 38,
        symbol: "Sr",
        name: "استرانسیم",
        english: "Strontium",
        mass: "87.62",
        period: 5,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 39,
        symbol: "Y",
        name: "ایتریم",
        english: "Yttrium",
        mass: "88.906",
        period: 5,
        group: 3,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 40,
        symbol: "Zr",
        name: "زیرکونیم",
        english: "Zirconium",
        mass: "91.224",
        period: 5,
        group: 4,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 41,
        symbol: "Nb",
        name: "نیوبیوم",
        english: "Niobium",
        mass: "92.906",
        period: 5,
        group: 5,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 42,
        symbol: "Mo",
        name: "مولیبدن",
        english: "Molybdenum",
        mass: "95.95",
        period: 5,
        group: 6,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 43,
        symbol: "Tc",
        name: "تکنسیم",
        english: "Technetium",
        mass: "98",
        period: 5,
        group: 7,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 44,
        symbol: "Ru",
        name: "روتنیم",
        english: "Ruthenium",
        mass: "101.07",
        period: 5,
        group: 8,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 45,
        symbol: "Rh",
        name: "رودیم",
        english: "Rhodium",
        mass: "102.906",
        period: 5,
        group: 9,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 46,
        symbol: "Pd",
        name: "پالادیم",
        english: "Palladium",
        mass: "106.42",
        period: 5,
        group: 10,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 47,
        symbol: "Ag",
        name: "نقره",
        english: "Silver",
        mass: "107.868",
        period: 5,
        group: 11,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 48,
        symbol: "Cd",
        name: "کادمیم",
        english: "Cadmium",
        mass: "112.414",
        period: 5,
        group: 12,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 49,
        symbol: "In",
        name: "ایندیم",
        english: "Indium",
        mass: "114.818",
        period: 5,
        group: 13,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 50,
        symbol: "Sn",
        name: "قلع",
        english: "Tin",
        mass: "118.710",
        period: 5,
        group: 14,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 51,
        symbol: "Sb",
        name: "آنتیموان",
        english: "Antimony",
        mass: "121.760",
        period: 5,
        group: 15,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 52,
        symbol: "Te",
        name: "تلوریم",
        english: "Tellurium",
        mass: "127.60",
        period: 5,
        group: 16,
        category: "metalloid",
        categoryName: "شبه‌فلز"
    },

    {
        number: 53,
        symbol: "I",
        name: "ید",
        english: "Iodine",
        mass: "126.904",
        period: 5,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 54,
        symbol: "Xe",
        name: "زنون",
        english: "Xenon",
        mass: "131.293",
        period: 5,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 6
    {
        number: 55,
        symbol: "Cs",
        name: "سزیم",
        english: "Cesium",
        mass: "132.905",
        period: 6,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 56,
        symbol: "Ba",
        name: "باریم",
        english: "Barium",
        mass: "137.327",
        period: 6,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 57,
        symbol: "La",
        name: "لانتان",
        english: "Lanthanum",
        mass: "138.905",
        period: 6,
        group: 3,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 58,
        symbol: "Ce",
        name: "سریم",
        english: "Cerium",
        mass: "140.116",
        period: 6,
        group: 4,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 59,
        symbol: "Pr",
        name: "پرازئودیمیم",
        english: "Praseodymium",
        mass: "140.908",
        period: 6,
        group: 5,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 60,
        symbol: "Nd",
        name: "نئودیمیم",
        english: "Neodymium",
        mass: "144.242",
        period: 6,
        group: 6,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 61,
        symbol: "Pm",
        name: "پرومتیم",
        english: "Promethium",
        mass: "145",
        period: 6,
        group: 7,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 62,
        symbol: "Sm",
        name: "ساماریم",
        english: "Samarium",
        mass: "150.36",
        period: 6,
        group: 8,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 63,
        symbol: "Eu",
        name: "یوروپیم",
        english: "Europium",
        mass: "151.964",
        period: 6,
        group: 9,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 64,
        symbol: "Gd",
        name: "گادولینیم",
        english: "Gadolinium",
        mass: "157.25",
        period: 6,
        group: 10,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 65,
        symbol: "Tb",
        name: "تربیوم",
        english: "Terbium",
        mass: "158.925",
        period: 6,
        group: 11,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 66,
        symbol: "Dy",
        name: "دیسپروزیم",
        english: "Dysprosium",
        mass: "162.500",
        period: 6,
        group: 12,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 67,
        symbol: "Ho",
        name: "هولمیم",
        english: "Holmium",
        mass: "164.930",
        period: 6,
        group: 13,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 68,
        symbol: "Er",
        name: "اربیم",
        english: "Erbium",
        mass: "167.259",
        period: 6,
        group: 14,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 69,
        symbol: "Tm",
        name: "تولیم",
        english: "Thulium",
        mass: "168.934",
        period: 6,
        group: 15,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 70,
        symbol: "Yb",
        name: "ایتربیوم",
        english: "Ytterbium",
        mass: "173.045",
        period: 6,
        group: 16,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 71,
        symbol: "Lu",
        name: "لوتتیم",
        english: "Lutetium",
        mass: "174.967",
        period: 6,
        group: 17,
        category: "lanthanide",
        categoryName: "لانتانید"
    },

    {
        number: 72,
        symbol: "Hf",
        name: "هافنیم",
        english: "Hafnium",
        mass: "178.49",
        period: 6,
        group: 4,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 73,
        symbol: "Ta",
        name: "تانتال",
        english: "Tantalum",
        mass: "180.948",
        period: 6,
        group: 5,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 74,
        symbol: "W",
        name: "تنگستن",
        english: "Tungsten",
        mass: "183.84",
        period: 6,
        group: 6,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 75,
        symbol: "Re",
        name: "رنیوم",
        english: "Rhenium",
        mass: "186.207",
        period: 6,
        group: 7,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 76,
        symbol: "Os",
        name: "اسمیم",
        english: "Osmium",
        mass: "190.23",
        period: 6,
        group: 8,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 77,
        symbol: "Ir",
        name: "ایریدیم",
        english: "Iridium",
        mass: "192.217",
        period: 6,
        group: 9,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 78,
        symbol: "Pt",
        name: "پلاتین",
        english: "Platinum",
        mass: "195.084",
        period: 6,
        group: 10,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 79,
        symbol: "Au",
        name: "طلا",
        english: "Gold",
        mass: "196.967",
        period: 6,
        group: 11,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 80,
        symbol: "Hg",
        name: "جیوه",
        english: "Mercury",
        mass: "200.592",
        period: 6,
        group: 12,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 81,
        symbol: "Tl",
        name: "تالیم",
        english: "Thallium",
        mass: "204.38",
        period: 6,
        group: 13,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 82,
        symbol: "Pb",
        name: "سرب",
        english: "Lead",
        mass: "207.2",
        period: 6,
        group: 14,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 83,
        symbol: "Bi",
        name: "بیسموت",
        english: "Bismuth",
        mass: "208.980",
        period: 6,
        group: 15,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 84,
        symbol: "Po",
        name: "پولونیوم",
        english: "Polonium",
        mass: "209",
        period: 6,
        group: 16,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 85,
        symbol: "At",
        name: "آستاتین",
        english: "Astatine",
        mass: "210",
        period: 6,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 86,
        symbol: "Rn",
        name: "رادون",
        english: "Radon",
        mass: "222",
        period: 6,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    },


    // Period 7
    {
        number: 87,
        symbol: "Fr",
        name: "فرانسیم",
        english: "Francium",
        mass: "223",
        period: 7,
        group: 1,
        category: "alkali-metal",
        categoryName: "فلز قلیایی"
    },

    {
        number: 88,
        symbol: "Ra",
        name: "رادیم",
        english: "Radium",
        mass: "226",
        period: 7,
        group: 2,
        category: "alkaline-earth",
        categoryName: "فلز قلیایی خاکی"
    },

    {
        number: 89,
        symbol: "Ac",
        name: "اکتینیم",
        english: "Actinium",
        mass: "227",
        period: 7,
        group: 3,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 90,
        symbol: "Th",
        name: "توریم",
        english: "Thorium",
        mass: "232.038",
        period: 7,
        group: 4,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 91,
        symbol: "Pa",
        name: "پروتاکتینیم",
        english: "Protactinium",
        mass: "231.036",
        period: 7,
        group: 5,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 92,
        symbol: "U",
        name: "اورانیوم",
        english: "Uranium",
        mass: "238.029",
        period: 7,
        group: 6,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 93,
        symbol: "Np",
        name: "نپتونیم",
        english: "Neptunium",
        mass: "237",
        period: 7,
        group: 7,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 94,
        symbol: "Pu",
        name: "پلوتونیم",
        english: "Plutonium",
        mass: "244",
        period: 7,
        group: 8,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 95,
        symbol: "Am",
        name: "آمریکیم",
        english: "Americium",
        mass: "243",
        period: 7,
        group: 9,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 96,
        symbol: "Cm",
        name: "کوریوم",
        english: "Curium",
        mass: "247",
        period: 7,
        group: 10,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 97,
        symbol: "Bk",
        name: "برکلیم",
        english: "Berkelium",
        mass: "247",
        period: 7,
        group: 11,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 98,
        symbol: "Cf",
        name: "کالیفرنیم",
        english: "Californium",
        mass: "251",
        period: 7,
        group: 12,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 99,
        symbol: "Es",
        name: "اینشتینیم",
        english: "Einsteinium",
        mass: "252",
        period: 7,
        group: 13,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 100,
        symbol: "Fm",
        name: "فرمیم",
        english: "Fermium",
        mass: "257",
        period: 7,
        group: 14,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 101,
        symbol: "Md",
        name: "مندلیفیم",
        english: "Mendelevium",
        mass: "258",
        period: 7,
        group: 15,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 102,
        symbol: "No",
        name: "نوبلیم",
        english: "Nobelium",
        mass: "259",
        period: 7,
        group: 16,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 103,
        symbol: "Lr",
        name: "لارنسیم",
        english: "Lawrencium",
        mass: "266",
        period: 7,
        group: 17,
        category: "actinide",
        categoryName: "اکتینید"
    },

    {
        number: 104,
        symbol: "Rf",
        name: "رادرفوردیم",
        english: "Rutherfordium",
        mass: "267",
        period: 7,
        group: 4,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 105,
        symbol: "Db",
        name: "دوبنیوم",
        english: "Dubnium",
        mass: "268",
        period: 7,
        group: 5,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 106,
        symbol: "Sg",
        name: "سیبورگیم",
        english: "Seaborgium",
        mass: "269",
        period: 7,
        group: 6,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 107,
        symbol: "Bh",
        name: "بوهریم",
        english: "Bohrium",
        mass: "270",
        period: 7,
        group: 7,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 108,
        symbol: "Hs",
        name: "هاسیم",
        english: "Hassium",
        mass: "269",
        period: 7,
        group: 8,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 109,
        symbol: "Mt",
        name: "مایتنریم",
        english: "Meitnerium",
        mass: "278",
        period: 7,
        group: 9,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 110,
        symbol: "Ds",
        name: "دارمشتاتیم",
        english: "Darmstadtium",
        mass: "281",
        period: 7,
        group: 10,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 111,
        symbol: "Rg",
        name: "رونتگنیم",
        english: "Roentgenium",
        mass: "282",
        period: 7,
        group: 11,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 112,
        symbol: "Cn",
        name: "کوپرنیسیم",
        english: "Copernicium",
        mass: "285",
        period: 7,
        group: 12,
        category: "transition-metal",
        categoryName: "فلز واسطه"
    },

    {
        number: 113,
        symbol: "Nh",
        name: "نیهونیم",
        english: "Nihonium",
        mass: "286",
        period: 7,
        group: 13,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 114,
        symbol: "Fl",
        name: "فلروویوم",
        english: "Flerovium",
        mass: "289",
        period: 7,
        group: 14,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 115,
        symbol: "Mc",
        name: "مسکوویم",
        english: "Moscovium",
        mass: "290",
        period: 7,
        group: 15,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 116,
        symbol: "Lv",
        name: "لیورموریم",
        english: "Livermorium",
        mass: "293",
        period: 7,
        group: 16,
        category: "post-transition-metal",
        categoryName: "فلز پس‌واسطه"
    },

    {
        number: 117,
        symbol: "Ts",
        name: "تنسین",
        english: "Tennessine",
        mass: "294",
        period: 7,
        group: 17,
        category: "halogen",
        categoryName: "هالوژن"
    },

    {
        number: 118,
        symbol: "Og",
        name: "اوگانسون",
        english: "Oganesson",
        mass: "294",
        period: 7,
        group: 18,
        category: "noble-gas",
        categoryName: "گاز نجیب"
    }
];


/* =========================================================
   EXTRA INFORMATION
   نمونه اطلاعات تکمیلی
========================================================= */

const elementDetails = {

    1: {
        electron: "1s¹",
        melting: -259.16,
        boiling: -252.879,
        density: 0.00008988,
        state: "گاز",
        uses: [
            "سوخت و فناوری‌های هیدروژنی",
            "تولید آمونیاک",
            "پالایش نفت",
            "کاربردهای صنعتی و آزمایشگاهی"
        ]
    },

    2: {
        electron: "1s²",
        melting: -272.20,
        boiling: -268.93,
        density: 0.0001785,
        state: "گاز",
        uses: [
            "پر کردن بالن و بالن‌های علمی",
            "سیستم‌های خنک‌کننده",
            "MRI و تجهیزات پزشکی",
            "تشخیص نشتی"
        ]
    },

    3: {
        electron: "[He] 2s¹",
        melting: 180.50,
        boiling: 1342,
        density: 0.534,
        state: "جامد",
        uses: [
            "باتری‌های لیتیومی",
            "آلیاژهای سبک",
            "ذخیره‌سازی انرژی",
            "برخی کاربردهای صنعتی"
        ]
    },

    4: {
        electron: "[He] 2s²",
        melting: 1287,
        boiling: 2469,
        density: 1.848,
        state: "جامد",
        uses: [
            "صنایع هوافضا",
            "آلیاژهای سبک",
            "تجهیزات دقیق",
            "کاربردهای هسته‌ای"
        ]
    },

    5: {
        electron: "[He] 2s² 2p¹",
        melting: 2076,
        boiling: 3927,
        density: 2.34,
        state: "جامد",
        uses: [
            "شیشه‌های مقاوم به حرارت",
            "مواد شوینده و ترکیبات بوراتی",
            "نیمه‌رساناها",
            "مواد سرامیکی"
        ]
    },

    6: {
        electron: "[He] 2s² 2p²",
        melting: 3550,
        boiling: 4027,
        density: 2.267,
        state: "جامد",
        uses: [
            "فولاد و آلیاژها",
            "گرافیت و الکترودها",
            "مواد کامپوزیتی",
            "فناوری‌های پیشرفته"
        ]
    },

    7: {
        electron: "[He] 2s² 2p³",
        melting: -210.00,
        boiling: -195.79,
        density: 0.0012506,
        state: "گاز",
        uses: [
            "تولید آمونیاک",
            "کودهای شیمیایی",
            "محیط‌های بی‌اثر",
            "صنایع غذایی"
        ]
    },

    8: {
        electron: "[He] 2s² 2p⁴",
        melting: -218.79,
        boiling: -182.95,
        density: 0.001429,
        state: "گاز",
        uses: [
            "پزشکی و اکسیژن‌رسانی",
            "جوشکاری",
            "فرآیندهای صنعتی",
            "تصفیه و تصفیه‌خانه‌ها"
        ]
    },

    9: {
        electron: "[He] 2s² 2p⁵",
        melting: -219.67,
        boiling: -188.11,
        density: 0.001696,
        state: "گاز",
        uses: [
            "تولید ترکیبات فلوئوردار",
            "صنایع شیمیایی",
            "مواد تخصصی صنعتی",
            "کاربردهای آزمایشگاهی"
        ]
    },

    10: {
        electron: "[He] 2s² 2p⁶",
        melting: -248.59,
        boiling: -246.08,
        density: 0.0008999,
        state: "گاز",
        uses: [
            "تابلوهای نئون",
            "لامپ‌ها",
            "لیزرها",
            "برخی تجهیزات الکترونیکی"
        ]
    },

    11: {
        electron: "[Ne] 3s¹",
        melting: 97.79,
        boiling: 883,
        density: 0.971,
        state: "جامد",
        uses: [
            "صنایع شیمیایی",
            "انتقال حرارت",
            "لامپ‌های بخار سدیم",
            "تولید ترکیبات شیمیایی"
        ]
    },

    12: {
        electron: "[Ne] 3s²",
        melting: 650,
        boiling: 1091,
        density: 1.738,
        state: "جامد",
        uses: [
            "آلیاژهای سبک",
            "صنایع هوافضا",
            "ساخت قطعات صنعتی",
            "تولید مواد شیمیایی"
        ]
    },

    13: {
        electron: "[Ne] 3s² 3p¹",
        melting: 660.32,
        boiling: 2519,
        density: 2.70,
        state: "جامد",
        uses: [
            "ساخت هواپیما",
            "قوطی و بسته‌بندی",
            "کابل و سیم برق",
            "آلیاژهای صنعتی"
        ]
    },

    14: {
        electron: "[Ne] 3s² 3p²",
        melting: 1414,
        boiling: 3265,
        density: 2.3296,
        state: "جامد",
        uses: [
            "تولید تراشه‌های الکترونیکی",
            "پنل‌های خورشیدی",
            "صنایع نیمه‌رسانا",
            "ساخت شیشه و سرامیک"
        ]
    },

    15: {
        electron: "[Ne] 3s² 3p³",
        melting: 44.15,
        boiling: 280.5,
        density: 1.823,
        state: "جامد",
        uses: [
            "کودهای شیمیایی",
            "تولید مواد شیمیایی",
            "صنایع غذایی",
            "مواد شوینده"
        ]
    },

    16: {
        electron: "[Ne] 3s² 3p⁴",
        melting: 115.21,
        boiling: 444.72,
        density: 2.067,
        state: "جامد",
        uses: [
            "تولید اسید سولفوریک",
            "کودهای شیمیایی",
            "تولید لاستیک",
            "صنایع شیمیایی"
        ]
    },

    17: {
        electron: "[Ne] 3s² 3p⁵",
        melting: -101.5,
        boiling: -34.04,
        density: 0.003214,
        state: "گاز",
        uses: [
            "ضدعفونی آب",
            "تولید PVC",
            "مواد شوینده",
            "صنایع شیمیایی"
        ]
    },

    18: {
        electron: "[Ne] 3s² 3p⁶",
        melting: -189.34,
        boiling: -185.85,
        density: 0.001784,
        state: "گاز",
        uses: [
            "محیط بی‌اثر در جوشکاری",
            "لامپ‌ها",
            "تولید نیمه‌رساناها",
            "کاربردهای آزمایشگاهی"
        ]
    },

    26: {
        electron: "[Ar] 3d⁶ 4s²",
        melting: 1538,
        boiling: 2862,
        density: 7.874,
        state: "جامد",
        uses: [
            "ساخت فولاد",
            "ساختمان‌سازی",
            "تولید خودرو",
            "ماشین‌آلات صنعتی"
        ]
    },

    29: {
        electron: "[Ar] 3d¹⁰ 4s¹",
        melting: 1084.62,
        boiling: 2562,
        density: 8.96,
        state: "جامد",
        uses: [
            "سیم و کابل برق",
            "تولید آلیاژها",
            "لوله‌کشی",
            "قطعات الکترونیکی"
        ]
    },

    47: {
        electron: "[Kr] 4d¹⁰ 5s¹",
        melting: 961.78,
        boiling: 2162,
        density: 10.49,
        state: "جامد",
        uses: [
            "جواهرات",
            "قطعات الکترونیکی",
            "آینه‌ها",
            "اتصالات الکتریکی"
        ]
    },

    79: {
        electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        melting: 1064.18,
        boiling: 2970,
        density: 19.30,
        state: "جامد",
        uses: [
            "جواهرات",
            "قطعات الکترونیکی",
            "ذخیره ارزش",
            "برخی کاربردهای صنعتی"
        ]
    }

};


/* =========================================================
   HELPERS
========================================================= */

function getElementDetails(element) {

    return elementDetails[element.number] || {

        electron: "اطلاعات ثبت نشده",

        melting: null,

        boiling: null,

        density: null,

        state: "اطلاعات ثبت نشده",

        uses: [
            "اطلاعات کاربرد این عنصر در حال تکمیل است."
        ]

    };

}


/* =========================================================
   CREATE ELEMENT CARD
========================================================= */

function createElement(element) {

    const card = document.createElement("article");

    card.className = `element ${element.category}`;

    card.dataset.number = String(element.number);

    card.dataset.name = element.name.toLowerCase();

    card.dataset.english = element.english.toLowerCase();

    card.dataset.symbol = element.symbol.toLowerCase();


    card.innerHTML = `

        <span class="atomic-number">
            ${element.number}
        </span>

        <span class="symbol">
            ${element.symbol}
        </span>

        <span class="element-name">
            ${element.name}
        </span>

    `;


    card.addEventListener("click", function () {

        openModal(element);

    });


    return card;
}


/* =========================================================
   RENDER TABLE
========================================================= */

function renderTable() {

    periodicTable.innerHTML = "";

    lanthanidesContainer.innerHTML = "";

    actinidesContainer.innerHTML = "";


    elements.forEach(element => {

        /*
         * لانتانیدها
         */

        if (
            element.number >= 57 &&
            element.number <= 71
        ) {

            lanthanidesContainer.appendChild(
                createElement(element)
            );

            return;
        }


        /*
         * اکتینیدها
         */

        if (
            element.number >= 89 &&
            element.number <= 103
        ) {

            actinidesContainer.appendChild(
                createElement(element)
            );

            return;
        }


        /*
         * جدول اصلی
         */

        const card = createElement(element);

        card.style.gridColumn = element.group;

        card.style.gridRow = element.period;

        periodicTable.appendChild(card);

    });


    applyFilters();

}


/* =========================================================
   SEARCH & FILTER
========================================================= */

function applyFilters() {

    const query = searchInput.value
        .trim()
        .toLowerCase();


    const cards =
        document.querySelectorAll(".element");


    cards.forEach(card => {

        const number =
            card.dataset.number || "";

        const name =
            card.dataset.name || "";

        const english =
            card.dataset.english || "";

        const symbol =
            card.dataset.symbol || "";


        const matchesSearch =

            query === "" ||

            number.includes(query) ||

            name.includes(query) ||

            english.includes(query) ||

            symbol.includes(query);


        const matchesCategory =

            currentCategory === "all" ||

            card.classList.contains(currentCategory);


        if (
            matchesSearch &&
            matchesCategory
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

}


/* =========================================================
   CURRENT FILTER
========================================================= */

let currentCategory = "all";


/* =========================================================
   SEARCH EVENT
========================================================= */

searchInput.addEventListener(
    "input",
    applyFilters
);


/* =========================================================
   CLEAR SEARCH
========================================================= */

clearSearch.addEventListener(
    "click",
    function () {

        searchInput.value = "";

        applyFilters();

        searchInput.focus();

    }
);


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            currentCategory =
                this.dataset.category;


            applyFilters();

        }
    );

});


/* =========================================================
   OPEN MODAL
========================================================= */

function openModal(element) {

    const details =
        getElementDetails(element);


    /*
     * Header
     */

    const modalCategory =
        document.getElementById("modalCategory");

    const modalSymbol =
        document.getElementById("modalSymbol");

    const modalNumber =
        document.getElementById("modalNumber");

    const modalName =
        document.getElementById("modalName");

    const modalEnglishName =
        document.getElementById("modalEnglishName");


    if (modalCategory) {

        modalCategory.textContent =
            element.categoryName;

    }


    if (modalSymbol) {

        modalSymbol.textContent =
            element.symbol;

    }


    if (modalNumber) {

        modalNumber.textContent =
            `عنصر ${element.number}`;

    }


    if (modalName) {

        modalName.textContent =
            element.name;

    }


    if (modalEnglishName) {

        modalEnglishName.textContent =
            element.english;

    }


    /*
     * اطلاعات پایه
     */

    setText(
        "modalAtomicNumber",
        element.number
    );


    setText(
        "modalMass",
        element.mass
    );


    setText(
        "modalPeriod",
        element.period
    );


    setText(
        "modalGroup",
        element.group
    );


    /*
     * حالت ماده
     */

    setText(
        "modalState",
        details.state
    );


    /*
     * چگالی
     */

    setText(
        "modalDensity",

        details.density !== null
            ? `${details.density} g/cm³`
            : "—"

    );


    /*
     * نقطه ذوب
     */

    setText(
        "modalMelting",

        details.melting !== null
            ? details.melting
            : "—"

    );


    /*
     * نقطه جوش
     */

    setText(
        "modalBoiling",

        details.boiling !== null
            ? details.boiling
            : "—"

    );


    /*
     * آرایش الکترونی
     */

    setText(
        "modalElectron",
        details.electron
    );


    /*
     * کاربردها
     */

    const usesContainer =
        document.getElementById("modalUses");


    if (usesContainer) {

        usesContainer.innerHTML = "";


        details.uses.forEach(use => {

            const item =
                document.createElement("div");


            item.className =
                "use-item";


            item.textContent =
                use;


            usesContainer.appendChild(item);

        });

    }


    /*
     * نمایش Modal
     */

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   SAFE TEXT SETTER
========================================================= */

function setText(id, value) {

    const element =
        document.getElementById(id);


    if (!element) {
        return;
    }


    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        element.textContent = "—";

        return;

    }


    element.textContent = value;

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeElementModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================================
   CLOSE BUTTON
========================================================= */

closeModal.addEventListener(
    "click",
    closeElementModal
);


/* =========================================================
   CLICK OUTSIDE
========================================================= */

modalOverlay.addEventListener(
    "click",
    closeElementModal
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeElementModal();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderTable();