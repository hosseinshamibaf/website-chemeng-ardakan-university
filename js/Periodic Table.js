"use strict";

/* =========================================================
   PERIODIC TABLE - COMPLETE JAVASCRIPT
========================================================= */

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
   ELEMENT DATA - 118 ELEMENTS
========================================================= */

const elements = [
    { number: 1, symbol: "H", name: "هیدروژن", english: "Hydrogen", mass: "1.008", period: 1, group: 1, category: "nonmetal", categoryName: "نافلز" },
    { number: 2, symbol: "He", name: "هلیم", english: "Helium", mass: "4.0026", period: 1, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 3, symbol: "Li", name: "لیتیوم", english: "Lithium", mass: "6.94", period: 2, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 4, symbol: "Be", name: "بریلیم", english: "Beryllium", mass: "9.0122", period: 2, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },
    { number: 5, symbol: "B", name: "بور", english: "Boron", mass: "10.81", period: 2, group: 13, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 6, symbol: "C", name: "کربن", english: "Carbon", mass: "12.011", period: 2, group: 14, category: "nonmetal", categoryName: "نافلز" },
    { number: 7, symbol: "N", name: "نیتروژن", english: "Nitrogen", mass: "14.007", period: 2, group: 15, category: "nonmetal", categoryName: "نافلز" },
    { number: 8, symbol: "O", name: "اکسیژن", english: "Oxygen", mass: "15.999", period: 2, group: 16, category: "nonmetal", categoryName: "نافلز" },
    { number: 9, symbol: "F", name: "فلوئور", english: "Fluorine", mass: "18.998", period: 2, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 10, symbol: "Ne", name: "نئون", english: "Neon", mass: "20.180", period: 2, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 11, symbol: "Na", name: "سدیم", english: "Sodium", mass: "22.990", period: 3, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 12, symbol: "Mg", name: "منیزیم", english: "Magnesium", mass: "24.305", period: 3, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },
    { number: 13, symbol: "Al", name: "آلومینیوم", english: "Aluminium", mass: "26.982", period: 3, group: 13, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 14, symbol: "Si", name: "سیلیسیم", english: "Silicon", mass: "28.085", period: 3, group: 14, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 15, symbol: "P", name: "فسفر", english: "Phosphorus", mass: "30.974", period: 3, group: 15, category: "nonmetal", categoryName: "نافلز" },
    { number: 16, symbol: "S", name: "گوگرد", english: "Sulfur", mass: "32.06", period: 3, group: 16, category: "nonmetal", categoryName: "نافلز" },
    { number: 17, symbol: "Cl", name: "کلر", english: "Chlorine", mass: "35.45", period: 3, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 18, symbol: "Ar", name: "آرگون", english: "Argon", mass: "39.948", period: 3, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 19, symbol: "K", name: "پتاسیم", english: "Potassium", mass: "39.098", period: 4, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 20, symbol: "Ca", name: "کلسیم", english: "Calcium", mass: "40.078", period: 4, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },
    { number: 21, symbol: "Sc", name: "اسکاندیم", english: "Scandium", mass: "44.956", period: 4, group: 3, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 22, symbol: "Ti", name: "تیتانیم", english: "Titanium", mass: "47.867", period: 4, group: 4, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 23, symbol: "V", name: "وانادیم", english: "Vanadium", mass: "50.942", period: 4, group: 5, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 24, symbol: "Cr", name: "کروم", english: "Chromium", mass: "51.996", period: 4, group: 6, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 25, symbol: "Mn", name: "منگنز", english: "Manganese", mass: "54.938", period: 4, group: 7, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 26, symbol: "Fe", name: "آهن", english: "Iron", mass: "55.845", period: 4, group: 8, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 27, symbol: "Co", name: "کبالت", english: "Cobalt", mass: "58.933", period: 4, group: 9, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 28, symbol: "Ni", name: "نیکل", english: "Nickel", mass: "58.693", period: 4, group: 10, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 29, symbol: "Cu", name: "مس", english: "Copper", mass: "63.546", period: 4, group: 11, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 30, symbol: "Zn", name: "روی", english: "Zinc", mass: "65.38", period: 4, group: 12, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 31, symbol: "Ga", name: "گالیم", english: "Gallium", mass: "69.723", period: 4, group: 13, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 32, symbol: "Ge", name: "ژرمانیم", english: "Germanium", mass: "72.630", period: 4, group: 14, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 33, symbol: "As", name: "آرسنیک", english: "Arsenic", mass: "74.922", period: 4, group: 15, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 34, symbol: "Se", name: "سلنیوم", english: "Selenium", mass: "78.971", period: 4, group: 16, category: "nonmetal", categoryName: "نافلز" },
    { number: 35, symbol: "Br", name: "بروم", english: "Bromine", mass: "79.904", period: 4, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 36, symbol: "Kr", name: "کریپتون", english: "Krypton", mass: "83.798", period: 4, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 37, symbol: "Rb", name: "روبیدیم", english: "Rubidium", mass: "85.468", period: 5, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 38, symbol: "Sr", name: "استرانسیم", english: "Strontium", mass: "87.62", period: 5, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },
    { number: 39, symbol: "Y", name: "ایتریم", english: "Yttrium", mass: "88.906", period: 5, group: 3, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 40, symbol: "Zr", name: "زیرکونیم", english: "Zirconium", mass: "91.224", period: 5, group: 4, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 41, symbol: "Nb", name: "نیوبیم", english: "Niobium", mass: "92.906", period: 5, group: 5, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 42, symbol: "Mo", name: "مولیبدن", english: "Molybdenum", mass: "95.95", period: 5, group: 6, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 43, symbol: "Tc", name: "تکنسیم", english: "Technetium", mass: "(98)", period: 5, group: 7, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 44, symbol: "Ru", name: "روتنیم", english: "Ruthenium", mass: "101.07", period: 5, group: 8, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 45, symbol: "Rh", name: "رودیم", english: "Rhodium", mass: "102.91", period: 5, group: 9, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 46, symbol: "Pd", name: "پالادیم", english: "Palladium", mass: "106.42", period: 5, group: 10, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 47, symbol: "Ag", name: "نقره", english: "Silver", mass: "107.87", period: 5, group: 11, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 48, symbol: "Cd", name: "کادمیم", english: "Cadmium", mass: "112.41", period: 5, group: 12, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 49, symbol: "In", name: "ایندیم", english: "Indium", mass: "114.82", period: 5, group: 13, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 50, symbol: "Sn", name: "قلع", english: "Tin", mass: "118.71", period: 5, group: 14, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 51, symbol: "Sb", name: "آنتیموان", english: "Antimony", mass: "121.76", period: 5, group: 15, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 52, symbol: "Te", name: "تلوریم", english: "Tellurium", mass: "127.60", period: 5, group: 16, category: "metalloid", categoryName: "شبه‌فلز" },
    { number: 53, symbol: "I", name: "ید", english: "Iodine", mass: "126.90", period: 5, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 54, symbol: "Xe", name: "زنون", english: "Xenon", mass: "131.29", period: 5, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 55, symbol: "Cs", name: "سزیم", english: "Caesium", mass: "132.91", period: 6, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 56, symbol: "Ba", name: "باریم", english: "Barium", mass: "137.33", period: 6, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },

    { number: 57, symbol: "La", name: "لانتان", english: "Lanthanum", mass: "138.91", period: 6, group: 3, category: "lanthanide", categoryName: "لانتانید" },
    { number: 58, symbol: "Ce", name: "سریم", english: "Cerium", mass: "140.12", period: 6, group: 4, category: "lanthanide", categoryName: "لانتانید" },
    { number: 59, symbol: "Pr", name: "پرازئودیمیم", english: "Praseodymium", mass: "140.91", period: 6, group: 5, category: "lanthanide", categoryName: "لانتانید" },
    { number: 60, symbol: "Nd", name: "نئودیمیم", english: "Neodymium", mass: "144.24", period: 6, group: 6, category: "lanthanide", categoryName: "لانتانید" },
    { number: 61, symbol: "Pm", name: "پرومتیم", english: "Promethium", mass: "(145)", period: 6, group: 7, category: "lanthanide", categoryName: "لانتانید" },
    { number: 62, symbol: "Sm", name: "ساماریم", english: "Samarium", mass: "150.36", period: 6, group: 8, category: "lanthanide", categoryName: "لانتانید" },
    { number: 63, symbol: "Eu", name: "یوروپیم", english: "Europium", mass: "151.96", period: 6, group: 9, category: "lanthanide", categoryName: "لانتانید" },
    { number: 64, symbol: "Gd", name: "گادولینیم", english: "Gadolinium", mass: "157.25", period: 6, group: 10, category: "lanthanide", categoryName: "لانتانید" },
    { number: 65, symbol: "Tb", name: "تربیم", english: "Terbium", mass: "158.93", period: 6, group: 11, category: "lanthanide", categoryName: "لانتانید" },
    { number: 66, symbol: "Dy", name: "دیسپروزیم", english: "Dysprosium", mass: "162.50", period: 6, group: 12, category: "lanthanide", categoryName: "لانتانید" },
    { number: 67, symbol: "Ho", name: "هولمیم", english: "Holmium", mass: "164.93", period: 6, group: 13, category: "lanthanide", categoryName: "لانتانید" },
    { number: 68, symbol: "Er", name: "اربیم", english: "Erbium", mass: "167.26", period: 6, group: 14, category: "lanthanide", categoryName: "لانتانید" },
    { number: 69, symbol: "Tm", name: "تولیم", english: "Thulium", mass: "168.93", period: 6, group: 15, category: "lanthanide", categoryName: "لانتانید" },
    { number: 70, symbol: "Yb", name: "ایتربیم", english: "Ytterbium", mass: "173.05", period: 6, group: 16, category: "lanthanide", categoryName: "لانتانید" },
    { number: 71, symbol: "Lu", name: "لوتتیم", english: "Lutetium", mass: "174.97", period: 6, group: 17, category: "lanthanide", categoryName: "لانتانید" },

    { number: 72, symbol: "Hf", name: "هافنیم", english: "Hafnium", mass: "178.49", period: 6, group: 4, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 73, symbol: "Ta", name: "تانتالوم", english: "Tantalum", mass: "180.95", period: 6, group: 5, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 74, symbol: "W", name: "تنگستن", english: "Tungsten", mass: "183.84", period: 6, group: 6, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 75, symbol: "Re", name: "رنیوم", english: "Rhenium", mass: "186.21", period: 6, group: 7, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 76, symbol: "Os", name: "اسمیم", english: "Osmium", mass: "190.23", period: 6, group: 8, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 77, symbol: "Ir", name: "ایریدیم", english: "Iridium", mass: "192.22", period: 6, group: 9, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 78, symbol: "Pt", name: "پلاتین", english: "Platinum", mass: "195.08", period: 6, group: 10, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 79, symbol: "Au", name: "طلا", english: "Gold", mass: "196.97", period: 6, group: 11, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 80, symbol: "Hg", name: "جیوه", english: "Mercury", mass: "200.59", period: 6, group: 12, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 81, symbol: "Tl", name: "تالیم", english: "Thallium", mass: "204.38", period: 6, group: 13, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 82, symbol: "Pb", name: "سرب", english: "Lead", mass: "207.2", period: 6, group: 14, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 83, symbol: "Bi", name: "بیسموت", english: "Bismuth", mass: "208.98", period: 6, group: 15, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 84, symbol: "Po", name: "پولونیم", english: "Polonium", mass: "(209)", period: 6, group: 16, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 85, symbol: "At", name: "استاتین", english: "Astatine", mass: "(210)", period: 6, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 86, symbol: "Rn", name: "رادون", english: "Radon", mass: "(222)", period: 6, group: 18, category: "noble-gas", categoryName: "گاز نجیب" },

    { number: 87, symbol: "Fr", name: "فرانسیم", english: "Francium", mass: "(223)", period: 7, group: 1, category: "alkali-metal", categoryName: "فلز قلیایی" },
    { number: 88, symbol: "Ra", name: "رادیم", english: "Radium", mass: "(226)", period: 7, group: 2, category: "alkaline-earth", categoryName: "فلز قلیایی خاکی" },

    { number: 89, symbol: "Ac", name: "اکتینیم", english: "Actinium", mass: "(227)", period: 7, group: 3, category: "actinide", categoryName: "اکتینید" },
    { number: 90, symbol: "Th", name: "توریم", english: "Thorium", mass: "232.04", period: 7, group: 4, category: "actinide", categoryName: "اکتینید" },
    { number: 91, symbol: "Pa", name: "پروتاکتینیم", english: "Protactinium", mass: "231.04", period: 7, group: 5, category: "actinide", categoryName: "اکتینید" },
    { number: 92, symbol: "U", name: "اورانیم", english: "Uranium", mass: "238.03", period: 7, group: 6, category: "actinide", categoryName: "اکتینید" },
    { number: 93, symbol: "Np", name: "نپتونیم", english: "Neptunium", mass: "(237)", period: 7, group: 7, category: "actinide", categoryName: "اکتینید" },
    { number: 94, symbol: "Pu", name: "پلوتونیم", english: "Plutonium", mass: "(244)", period: 7, group: 8, category: "actinide", categoryName: "اکتینید" },
    { number: 95, symbol: "Am", name: "آمریسیم", english: "Americium", mass: "(243)", period: 7, group: 9, category: "actinide", categoryName: "اکتینید" },
    { number: 96, symbol: "Cm", name: "کوریوم", english: "Curium", mass: "(247)", period: 7, group: 10, category: "actinide", categoryName: "اکتینید" },
    { number: 97, symbol: "Bk", name: "برکلیم", english: "Berkelium", mass: "(247)", period: 7, group: 11, category: "actinide", categoryName: "اکتینید" },
    { number: 98, symbol: "Cf", name: "کالیفرنیم", english: "Californium", mass: "(251)", period: 7, group: 12, category: "actinide", categoryName: "اکتینید" },
    { number: 99, symbol: "Es", name: "اینشتینیم", english: "Einsteinium", mass: "(252)", period: 7, group: 13, category: "actinide", categoryName: "اکتینید" },
    { number: 100, symbol: "Fm", name: "فرمیم", english: "Fermium", mass: "(257)", period: 7, group: 14, category: "actinide", categoryName: "اکتینید" },
    { number: 101, symbol: "Md", name: "مندلیفیم", english: "Mendelevium", mass: "(258)", period: 7, group: 15, category: "actinide", categoryName: "اکتینید" },
    { number: 102, symbol: "No", name: "نوبلیم", english: "Nobelium", mass: "(259)", period: 7, group: 16, category: "actinide", categoryName: "اکتینید" },
    { number: 103, symbol: "Lr", name: "لورنسیم", english: "Lawrencium", mass: "(266)", period: 7, group: 17, category: "actinide", categoryName: "اکتینید" },

    { number: 104, symbol: "Rf", name: "رادرفوردیم", english: "Rutherfordium", mass: "(267)", period: 7, group: 4, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 105, symbol: "Db", name: "دوبنیم", english: "Dubnium", mass: "(268)", period: 7, group: 5, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 106, symbol: "Sg", name: "سیبورگیم", english: "Seaborgium", mass: "(269)", period: 7, group: 6, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 107, symbol: "Bh", name: "بوهریم", english: "Bohrium", mass: "(270)", period: 7, group: 7, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 108, symbol: "Hs", name: "هاسیم", english: "Hassium", mass: "(269)", period: 7, group: 8, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 109, symbol: "Mt", name: "مایتنریم", english: "Meitnerium", mass: "(278)", period: 7, group: 9, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 110, symbol: "Ds", name: "دارمشتاتیم", english: "Darmstadtium", mass: "(281)", period: 7, group: 10, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 111, symbol: "Rg", name: "رونتگنیم", english: "Roentgenium", mass: "(282)", period: 7, group: 11, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 112, symbol: "Cn", name: "کوپرنیسیم", english: "Copernicium", mass: "(285)", period: 7, group: 12, category: "transition-metal", categoryName: "فلز واسطه" },
    { number: 113, symbol: "Nh", name: "نیهونیم", english: "Nihonium", mass: "(286)", period: 7, group: 13, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 114, symbol: "Fl", name: "فلروویم", english: "Flerovium", mass: "(289)", period: 7, group: 14, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 115, symbol: "Mc", name: "مسکوویم", english: "Moscovium", mass: "(290)", period: 7, group: 15, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 116, symbol: "Lv", name: "لیورموریم", english: "Livermorium", mass: "(293)", period: 7, group: 16, category: "post-transition-metal", categoryName: "فلز پس‌واسطه" },
    { number: 117, symbol: "Ts", name: "تنسیسن", english: "Tennessine", mass: "(294)", period: 7, group: 17, category: "halogen", categoryName: "هالوژن" },
    { number: 118, symbol: "Og", name: "اوگانسون", english: "Oganesson", mass: "(294)", period: 7, group: 18, category: "noble-gas", categoryName: "گاز نجیب" }
];


/* =========================================================
   ELEMENT DETAILS
   اطلاعات تکمیلی عناصر
========================================================= */

const elementDetails = {

    1: { electron: "1s¹", melting: -259.16, boiling: -252.87, density: 0.00008988, state: "گاز", uses: ["تولید آمونیاک", "سوخت و فناوری‌های هیدروژنی", "پالایش نفت", "کاربردهای صنعتی و آزمایشگاهی"] },
    2: { electron: "1s²", melting: -272.20, boiling: -268.93, density: 0.0001785, state: "گاز", uses: ["پر کردن بالن‌ها", "سیستم‌های خنک‌کننده", "تجهیزات پزشکی و MRI", "تشخیص نشتی"] },
    3: { electron: "[He] 2s¹", melting: 180.54, boiling: 1342, density: 0.534, state: "جامد", uses: ["باتری‌های لیتیومی", "آلیاژهای سبک", "ذخیره‌سازی انرژی", "صنایع شیمیایی"] },
    4: { electron: "[He] 2s²", melting: 1287, boiling: 2469, density: 1.848, state: "جامد", uses: ["آلیاژهای سبک", "صنایع هوافضا", "تجهیزات دقیق", "کاربردهای هسته‌ای"] },
    5: { electron: "[He] 2s² 2p¹", melting: 2076, boiling: 3927, density: 2.34, state: "جامد", uses: ["شیشه‌های مقاوم به حرارت", "ترکیبات بوراتی", "نیمه‌رساناها", "مواد سرامیکی"] },
    6: { electron: "[He] 2s² 2p²", melting: 3550, boiling: 4027, density: 2.267, state: "جامد", uses: ["تولید فولاد و آلیاژها", "گرافیت و الکترودها", "مواد کامپوزیتی", "فناوری‌های پیشرفته"] },
    7: { electron: "[He] 2s² 2p³", melting: -210, boiling: -195.79, density: 0.0012506, state: "گاز", uses: ["تولید آمونیاک", "تولید کودهای شیمیایی", "ایجاد محیط‌های بی‌اثر", "صنایع غذایی"] },
    8: { electron: "[He] 2s² 2p⁴", melting: -218.79, boiling: -182.95, density: 0.001429, state: "گاز", uses: ["پزشکی و اکسیژن‌رسانی", "جوشکاری", "فرآیندهای صنعتی", "تصفیه آب"] },
    9: { electron: "[He] 2s² 2p⁵", melting: -219.67, boiling: -188.11, density: 0.001696, state: "گاز", uses: ["تولید ترکیبات فلوئوردار", "صنایع شیمیایی", "مواد تخصصی صنعتی", "کاربردهای آزمایشگاهی"] },
    10: { electron: "[He] 2s² 2p⁶", melting: -248.59, boiling: -246.08, density: 0.0008999, state: "گاز", uses: ["تابلوهای نئون", "لامپ‌ها", "لیزرها", "برخی تجهیزات الکترونیکی"] },

    11: { electron: "[Ne] 3s¹", melting: 97.79, boiling: 883, density: 0.971, state: "جامد", uses: ["لامپ‌های بخار سدیم", "انتقال حرارت", "صنایع شیمیایی", "تولید ترکیبات شیمیایی"] },
    12: { electron: "[Ne] 3s²", melting: 650, boiling: 1091, density: 1.738, state: "جامد", uses: ["آلیاژهای سبک", "صنایع هوافضا", "ساخت قطعات صنعتی", "تولید مواد شیمیایی"] },
    13: { electron: "[Ne] 3s² 3p¹", melting: 660.32, boiling: 2519, density: 2.70, state: "جامد", uses: ["ساخت هواپیما", "قوطی و بسته‌بندی", "کابل و سیم برق", "آلیاژهای صنعتی"] },
    14: { electron: "[Ne] 3s² 3p²", melting: 1414, boiling: 3265, density: 2.3296, state: "جامد", uses: ["تراشه‌های الکترونیکی", "پنل‌های خورشیدی", "صنایع نیمه‌رسانا", "ساخت شیشه و سرامیک"] },
    15: { electron: "[Ne] 3s² 3p³", melting: 44.15, boiling: 280.5, density: 1.823, state: "جامد", uses: ["تولید کودهای شیمیایی", "تولید مواد شیمیایی", "صنایع غذایی", "مواد شوینده"] },
    16: { electron: "[Ne] 3s² 3p⁴", melting: 115.21, boiling: 444.72, density: 2.067, state: "جامد", uses: ["تولید اسید سولفوریک", "کودهای شیمیایی", "تولید لاستیک", "صنایع شیمیایی"] },
    17: { electron: "[Ne] 3s² 3p⁵", melting: -101.5, boiling: -34.04, density: 0.003214, state: "گاز", uses: ["ضدعفونی آب", "تولید PVC", "تولید مواد شیمیایی", "صنایع دارویی و بهداشتی"] },
    18: { electron: "[Ne] 3s² 3p⁶", melting: -189.34, boiling: -185.85, density: 0.001784, state: "گاز", uses: ["محیط بی‌اثر در جوشکاری", "لامپ‌ها", "تولید نیمه‌رساناها", "کاربردهای آزمایشگاهی"] },

    19: { electron: "[Ar] 4s¹", melting: 63.38, boiling: 759, density: 0.862, state: "جامد", uses: ["تولید کودهای شیمیایی", "صنایع شیشه", "تولید صابون", "کاربردهای شیمیایی"] },
    20: { electron: "[Ar] 4s²", melting: 842, boiling: 1484, density: 1.55, state: "جامد", uses: ["ساختمان و سیمان", "تولید آلیاژها", "صنایع متالورژی", "تولید ترکیبات کلسیمی"] },
    21: { electron: "[Ar] 3d¹ 4s²", melting: 1541, boiling: 2836, density: 2.985, state: "جامد", uses: ["آلیاژهای آلومینیوم", "صنایع هوافضا", "لامپ‌های تخصصی", "تحقیقات مواد"] },
    22: { electron: "[Ar] 3d² 4s²", melting: 1668, boiling: 3287, density: 4.506, state: "جامد", uses: ["هوافضا", "ایمپلنت‌های پزشکی", "رنگدانه‌های سفید", "آلیاژهای مقاوم"] },
    23: { electron: "[Ar] 3d³ 4s²", melting: 1910, boiling: 3407, density: 6.11, state: "جامد", uses: ["آلیاژهای فولادی", "ابزارهای صنعتی", "کاتالیزورها", "تولید رنگدانه‌ها"] },
    24: { electron: "[Ar] 3d⁵ 4s¹", melting: 1907, boiling: 2671, density: 7.19, state: "جامد", uses: ["فولاد ضدزنگ", "آلیاژهای مقاوم", "آبکاری فلزات", "رنگدانه‌ها"] },
    25: { electron: "[Ar] 3d⁵ 4s²", melting: 1246, boiling: 2061, density: 7.21, state: "جامد", uses: ["تولید فولاد", "باتری‌ها", "آلیاژهای صنعتی", "رنگدانه‌ها"] },
    26: { electron: "[Ar] 3d⁶ 4s²", melting: 1538, boiling: 2862, density: 7.874, state: "جامد", uses: ["ساخت فولاد", "ساختمان‌سازی", "تولید خودرو", "ماشین‌آلات صنعتی"] },
    27: { electron: "[Ar] 3d⁷ 4s²", melting: 1495, boiling: 2927, density: 8.90, state: "جامد", uses: ["آلیاژهای مقاوم", "باتری‌ها", "رنگدانه‌ها", "تجهیزات صنعتی"] },
    28: { electron: "[Ar] 3d⁸ 4s²", melting: 1455, boiling: 2913, density: 8.908, state: "جامد", uses: ["آلیاژهای مقاوم", "آبکاری فلزات", "سکه‌ها", "تجهیزات صنعتی"] },
    29: { electron: "[Ar] 3d¹⁰ 4s¹", melting: 1084.62, boiling: 2562, density: 8.96, state: "جامد", uses: ["سیم و کابل برق", "تولید آلیاژها", "لوله‌کشی", "قطعات الکترونیکی"] },
    30: { electron: "[Ar] 3d¹⁰ 4s²", melting: 419.53, boiling: 907, density: 7.14, state: "جامد", uses: ["گالوانیزه کردن فولاد", "باتری‌ها", "آلیاژهای برنجی", "قطعات صنعتی"] },
    31: { electron: "[Ar] 3d¹⁰ 4s² 4p¹", melting: 29.76, boiling: 2204, density: 5.91, state: "جامد", uses: ["نیمه‌رساناها", "LEDها", "دماسنج‌های تخصصی", "آلیاژهای صنعتی"] },
    32: { electron: "[Ar] 3d¹⁰ 4s² 4p²", melting: 938.25, boiling: 2820, density: 5.323, state: "جامد", uses: ["نیمه‌رساناها", "فیبرهای نوری", "آلیاژهای صنعتی", "تجهیزات الکترونیکی"] },
    33: { electron: "[Ar] 3d¹⁰ 4s² 4p³", melting: 817, boiling: 614, density: 5.727, state: "جامد", uses: ["نیمه‌رساناها", "آلیاژهای صنعتی", "تجهیزات الکترونیکی", "کاربردهای پژوهشی"] },
    34: { electron: "[Ar] 3d¹⁰ 4s² 4p⁴", melting: 221, boiling: 685, density: 4.81, state: "جامد", uses: ["سلول‌های خورشیدی", "نیمه‌رساناها", "شیشه‌های تخصصی", "صنایع الکترونیکی"] },
    35: { electron: "[Ar] 3d¹⁰ 4s² 4p⁵", melting: -7.2, boiling: 58.8, density: 3.1028, state: "مایع", uses: ["تولید مواد شیمیایی", "ضدعفونی‌کننده‌ها", "داروسازی", "مواد عکاسی"] },
    36: { electron: "[Ar] 3d¹⁰ 4s² 4p⁶", melting: -157.36, boiling: -153.42, density: 0.003733, state: "گاز", uses: ["لامپ‌ها", "لیزرها", "عایق‌های گازی", "کاربردهای پژوهشی"] },

    37: { electron: "[Kr] 5s¹", melting: 39.31, boiling: 688, density: 1.532, state: "جامد", uses: ["پژوهش‌های فیزیکی", "تجهیزات خلأ", "ساعت‌های اتمی", "کاربردهای پژوهشی"] },
    38: { electron: "[Kr] 5s²", melting: 777, boiling: 1382, density: 2.64, state: "جامد", uses: ["تولید رنگدانه‌ها", "سرامیک‌ها", "شیشه‌های تخصصی", "مواد آتش‌نشانی"] },
    39: { electron: "[Kr] 4d¹ 5s²", melting: 1526, boiling: 3338, density: 4.472, state: "جامد", uses: ["لیزرها", "سرامیک‌های تخصصی", "ابررساناها", "تحقیقات مواد"] },
    40: { electron: "[Kr] 4d² 5s²", melting: 1855, boiling: 4409, density: 6.52, state: "جامد", uses: ["روکش‌های مقاوم", "راکتورهای هسته‌ای", "سرامیک‌ها", "آلیاژهای صنعتی"] },
    41: { electron: "[Kr] 4d⁴ 5s¹", melting: 2477, boiling: 4744, density: 8.57, state: "جامد", uses: ["ابررساناها", "آلیاژهای مقاوم", "تجهیزات پزشکی", "صنایع هوافضا"] },
    42: { electron: "[Kr] 4d⁵ 5s¹", melting: 2623, boiling: 4639, density: 10.28, state: "جامد", uses: ["فولادهای مقاوم", "کاتالیزورها", "تجهیزات صنعتی", "صنایع الکترونیکی"] },
    43: { electron: "[Kr] 4d⁵ 5s²", melting: 2157, boiling: 4265, density: 11, state: "جامد", uses: ["تصویربرداری پزشکی", "پژوهش‌های هسته‌ای", "ردیاب‌های علمی", "تحقیقات شیمیایی"] },
    44: { electron: "[Kr] 4d⁷ 5s¹", melting: 2334, boiling: 4150, density: 12.45, state: "جامد", uses: ["کاتالیزورها", "آلیاژهای مقاوم", "مقاومت‌های الکتریکی", "تجهیزات الکترونیکی"] },
    45: { electron: "[Kr] 4d⁸ 5s¹", melting: 1964, boiling: 3695, density: 12.41, state: "جامد", uses: ["کاتالیزور خودرو", "کاتالیزورهای صنعتی", "آلیاژهای مقاوم", "پوشش‌های تخصصی"] },
    46: { electron: "[Kr] 4d¹⁰", melting: 1554.9, boiling: 2963, density: 12.023, state: "جامد", uses: ["کاتالیزور خودرو", "جواهرات", "تجهیزات الکترونیکی", "پوشش‌های مقاوم"] },
    47: { electron: "[Kr] 4d¹⁰ 5s¹", melting: 961.78, boiling: 2162, density: 10.49, state: "جامد", uses: ["جواهرات", "قطعات الکترونیکی", "آینه‌ها", "اتصالات الکتریکی"] },
    48: { electron: "[Kr] 4d¹⁰ 5s²", melting: 321.07, boiling: 767, density: 8.69, state: "جامد", uses: ["باتری‌های تخصصی", "آبکاری فلزات", "رنگدانه‌ها", "آلیاژهای صنعتی"] },
    49: { electron: "[Kr] 4d¹⁰ 5s² 5p¹", melting: 156.6, boiling: 2072, density: 7.31, state: "جامد", uses: ["نیمه‌رساناها", "صفحات لمسی", "آلیاژهای تخصصی", "تجهیزات الکترونیکی"] },
    50: { electron: "[Kr] 4d¹⁰ 5s² 5p²", melting: 231.93, boiling: 2602, density: 7.287, state: "جامد", uses: ["لحیم‌کاری", "روکش فلزات", "آلیاژها", "تجهیزات الکترونیکی"] },
    51: { electron: "[Kr] 4d¹⁰ 5s² 5p³", melting: 630.63, boiling: 1587, density: 6.697, state: "جامد", uses: ["آلیاژهای صنعتی", "نیمه‌رساناها", "مواد ضدحریق", "تجهیزات الکترونیکی"] },
    52: { electron: "[Kr] 4d¹⁰ 5s² 5p⁴", melting: 449.51, boiling: 988, density: 6.232, state: "جامد", uses: ["نیمه‌رساناها", "سلول‌های خورشیدی", "آلیاژها", "تجهیزات الکترونیکی"] },
    53: { electron: "[Kr] 4d¹⁰ 5s² 5p⁵", melting: 113.7, boiling: 184.3, density: 4.933, state: "جامد", uses: ["داروسازی", "ضدعفونی‌کننده‌ها", "نمک یددار", "تصویربرداری پزشکی"] },
    54: { electron: "[Kr] 4d¹⁰ 5s² 5p⁶", melting: -111.75, boiling: -108.12, density: 0.005887, state: "گاز", uses: ["لامپ‌های تخصصی", "لیزرها", "تصویربرداری پزشکی", "تجهیزات پژوهشی"] },

    55: { electron: "[Xe] 6s¹", melting: 28.44, boiling: 671, density: 1.873, state: "جامد", uses: ["ساعت‌های اتمی", "پژوهش‌های فیزیکی", "تجهیزات خلأ", "کاربردهای پژوهشی"] },
    56: { electron: "[Xe] 6s²", melting: 727, boiling: 1897, density: 3.594, state: "جامد", uses: ["تصویربرداری پزشکی", "شیشه‌های تخصصی", "حفاری نفت و گاز", "پژوهش‌های علمی"] },

    57: { electron: "[Xe] 5d¹ 6s²", melting: 920, boiling: 3464, density: 6.162, state: "جامد", uses: ["شیشه‌های نوری", "کاتالیزورها", "آلیاژهای تخصصی", "تجهیزات نوری"] },
    58: { electron: "[Xe] 4f¹ 5d¹ 6s²", melting: 798, boiling: 3360, density: 6.77, state: "جامد", uses: ["کاتالیزور خودرو", "شیشه‌های نوری", "پودرهای صیقل‌دهنده", "آلیاژها"] },
    59: { electron: "[Xe] 4f³ 6s²", melting: 931, boiling: 3520, density: 6.77, state: "جامد", uses: ["شیشه‌های نوری", "مغناطیس‌ها", "آلیاژهای تخصصی", "تجهیزات نوری"] },
    60: { electron: "[Xe] 4f⁴ 6s²", melting: 1024, boiling: 3074, density: 7.01, state: "جامد", uses: ["آهنرباهای دائمی", "لیزرها", "شیشه‌های نوری", "تجهیزات الکترونیکی"] },
    61: { electron: "[Xe] 4f⁵ 6s²", melting: 1042, boiling: 3000, density: 7.26, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "منابع پرتوزا", "تحقیقات علمی", "مطالعات ایزوتوپی"] },
    62: { electron: "[Xe] 4f⁶ 6s²", melting: 1072, boiling: 1794, density: 7.52, state: "جامد", uses: ["آهنرباهای دائمی", "لیزرها", "شیشه‌های تخصصی", "تجهیزات الکترونیکی"] },
    63: { electron: "[Xe] 4f⁷ 6s²", melting: 826, boiling: 1529, density: 5.244, state: "جامد", uses: ["فسفرهای نمایشگر", "لیزرها", "شیشه‌های تخصصی", "پژوهش‌های علمی"] },
    64: { electron: "[Xe] 4f⁷ 5d¹ 6s²", melting: 1312, boiling: 3273, density: 7.9, state: "جامد", uses: ["MRI", "آهنرباها", "فسفرهای نمایشگر", "پژوهش‌های پزشکی"] },
    65: { electron: "[Xe] 4f⁹ 6s²", melting: 1356, boiling: 3230, density: 8.23, state: "جامد", uses: ["لیزرها", "تجهیزات الکترونیکی", "آلیاژهای تخصصی", "پژوهش‌های علمی"] },
    66: { electron: "[Xe] 4f¹⁰ 6s²", melting: 1412, boiling: 2567, density: 8.54, state: "جامد", uses: ["آهنرباهای دائمی", "لیزرها", "تجهیزات الکترونیکی", "پژوهش‌های علمی"] },
    67: { electron: "[Xe] 4f¹¹ 6s²", melting: 1474, boiling: 2700, density: 8.79, state: "جامد", uses: ["لیزرها", "آهنرباها", "تجهیزات نوری", "پژوهش‌های علمی"] },
    68: { electron: "[Xe] 4f¹² 6s²", melting: 1529, boiling: 2868, density: 9.066, state: "جامد", uses: ["لیزرها", "فیبرهای نوری", "تقویت‌کننده‌های نوری", "تجهیزات پزشکی"] },
    69: { electron: "[Xe] 4f¹³ 6s²", melting: 1545, boiling: 1950, density: 9.32, state: "جامد", uses: ["لیزرهای پزشکی", "پژوهش‌های علمی", "تجهیزات نوری", "آلیاژهای تخصصی"] },
    70: { electron: "[Xe] 4f¹⁴ 6s²", melting: 819, boiling: 1196, density: 6.90, state: "جامد", uses: ["لیزرها", "فیبرهای نوری", "تجهیزات الکترونیکی", "پژوهش‌های علمی"] },
    71: { electron: "[Xe] 4f¹⁴ 5d¹ 6s²", melting: 1663, boiling: 3402, density: 9.841, state: "جامد", uses: ["پژوهش‌های علمی", "آشکارسازها", "پوشش‌های تخصصی", "تجهیزات پزشکی"] },

    72: { electron: "[Xe] 4f¹⁴ 5d² 6s²", melting: 2233, boiling: 4603, density: 13.31, state: "جامد", uses: ["آلیاژهای مقاوم", "صنایع هوافضا", "تجهیزات صنعتی", "روکش‌های مقاوم"] },
    73: { electron: "[Xe] 4f¹⁴ 5d³ 6s²", melting: 3017, boiling: 5458, density: 16.69, state: "جامد", uses: ["خازن‌های الکترونیکی", "آلیاژهای مقاوم", "تجهیزات پزشکی", "قطعات صنعتی"] },
    74: { electron: "[Xe] 4f¹⁴ 5d⁴ 6s²", melting: 3422, boiling: 5555, density: 19.25, state: "جامد", uses: ["رشته لامپ‌ها", "ابزارهای صنعتی", "آلیاژهای مقاوم", "قطعات الکترونیکی"] },
    75: { electron: "[Xe] 4f¹⁴ 5d⁵ 6s²", melting: 3186, boiling: 5596, density: 21.02, state: "جامد", uses: ["کاتالیزورها", "آلیاژهای مقاوم", "تجهیزات الکترونیکی", "پژوهش‌های علمی"] },
    76: { electron: "[Xe] 4f¹⁴ 5d⁶ 6s²", melting: 3033, boiling: 5012, density: 22.59, state: "جامد", uses: ["آلیاژهای مقاوم", "کاتالیزورها", "نوک قلم‌ها", "تجهیزات صنعتی"] },
    77: { electron: "[Xe] 4f¹⁴ 5d⁷ 6s²", melting: 2446, boiling: 4428, density: 22.56, state: "جامد", uses: ["آلیاژهای مقاوم", "تجهیزات الکترونیکی", "پوشش‌های تخصصی", "پژوهش‌های علمی"] },
    78: { electron: "[Xe] 4f¹⁴ 5d⁹ 6s¹", melting: 1768.3, boiling: 3825, density: 21.45, state: "جامد", uses: ["کاتالیزورها", "جواهرات", "تجهیزات الکترونیکی", "ابزارهای آزمایشگاهی"] },
    79: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", melting: 1064.18, boiling: 2970, density: 19.30, state: "جامد", uses: ["جواهرات", "قطعات الکترونیکی", "ذخیره ارزش", "برخی کاربردهای صنعتی"] },
    80: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", melting: -38.83, boiling: 356.73, density: 13.534, state: "مایع", uses: ["تجهیزات اندازه‌گیری قدیمی", "لامپ‌های تخصصی", "پژوهش‌های علمی", "کاربردهای صنعتی محدود"] },
    81: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", melting: 304, boiling: 1473, density: 11.85, state: "جامد", uses: ["نیمه‌رساناها", "شیشه‌های تخصصی", "تجهیزات الکترونیکی", "پژوهش‌های علمی"] },
    82: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", melting: 327.46, boiling: 1749, density: 11.34, state: "جامد", uses: ["باتری‌ها", "محافظ‌های پرتویی", "آلیاژها", "تجهیزات صنعتی"] },
    83: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", melting: 271.4, boiling: 1564, density: 9.78, state: "جامد", uses: ["آلیاژهای تخصصی", "تجهیزات الکترونیکی", "مواد ترموالکتریک", "پژوهش‌های علمی"] },
    84: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", melting: 254, boiling: 962, density: 9.196, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات پرتوزایی", "تحقیقات علمی", "مطالعات مواد"] },
    85: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", melting: 302, boiling: 337, density: 7, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات شیمیایی", "تحقیقات پزشکی", "تحقیقات آزمایشگاهی"] },
    86: { electron: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", melting: -71, boiling: -61.7, density: 0.00973, state: "گاز", uses: ["پژوهش‌های علمی", "مطالعات زمین‌شناسی", "تحقیقات محیط‌زیستی", "آزمایش‌های پرتوزایی"] },

    87: { electron: "[Rn] 7s¹", melting: 27, boiling: 677, density: 1.87, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات پرتوزایی", "تحقیقات علمی", "مطالعات عناصر سنگین"] },
    88: { electron: "[Rn] 7s²", melting: 700, boiling: 1737, density: 5.5, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات پرتوزایی", "پژوهش‌های پزشکی"] },
    89: { electron: "[Rn] 6d¹ 7s²", melting: 1050, boiling: 3200, density: 10.07, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "پژوهش‌های پرتوزایی"] },
    90: { electron: "[Rn] 6d² 7s²", melting: 1750, boiling: 4788, density: 11.72, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات زمین‌شناسی", "تاریخ‌گذاری علمی", "تحقیقات مواد"] },
    91: { electron: "[Rn] 5f² 6d¹ 7s²", melting: 1568, boiling: 4027, density: 15.37, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات عناصر سنگین", "تحقیقات علمی", "مطالعات پرتوزایی"] },
    92: { electron: "[Rn] 5f³ 6d¹ 7s²", melting: 1135, boiling: 4131, density: 19.05, state: "جامد", uses: ["تولید انرژی هسته‌ای", "پژوهش‌های هسته‌ای", "مطالعات علمی", "تولید برخی ایزوتوپ‌های پژوهشی"] },
    93: { electron: "[Rn] 5f⁴ 6d¹ 7s²", melting: 644, boiling: 3902, density: 20.45, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات عناصر سنگین", "تحقیقات علمی", "مطالعات ایزوتوپی"] },
    94: { electron: "[Rn] 5f⁶ 7s²", melting: 639, boiling: 3228, density: 19.84, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات عناصر سنگین", "تحقیقات علمی", "مطالعات ایزوتوپی"] },
    95: { electron: "[Rn] 5f⁷ 7s²", melting: 1176, boiling: 2607, density: 13.67, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات عناصر سنگین", "تحقیقات علمی", "مطالعات ایزوتوپی"] },
    96: { electron: "[Rn] 5f⁷ 6d¹ 7s²", melting: 1345, boiling: 3110, density: 13.51, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    97: { electron: "[Rn] 5f⁹ 7s²", melting: 986, boiling: 2627, density: 14.78, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "مطالعات عناصر سنگین", "تحقیقات علمی", "مطالعات ایزوتوپی"] },
    98: { electron: "[Rn] 5f¹⁰ 7s²", melting: 900, boiling: 1470, density: 15.1, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    99: { electron: "[Rn] 5f¹¹ 7s²", melting: 860, boiling: 996, density: 8.84, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    100: { electron: "[Rn] 5f¹² 7s²", melting: 1527, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    101: { electron: "[Rn] 5f¹³ 7s²", melting: 827, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    102: { electron: "[Rn] 5f¹⁴ 7s²", melting: 827, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },
    103: { electron: "[Rn] 5f¹⁴ 7s² 7p¹", melting: 1627, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های هسته‌ای", "تحقیقات علمی", "مطالعات عناصر سنگین", "مطالعات ایزوتوپی"] },

    104: { electron: "[Rn] 5f¹⁴ 6d² 7s²", melting: 2100, boiling: 5500, density: 23.2, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    105: { electron: "[Rn] 5f¹⁴ 6d³ 7s²", melting: 2000, boiling: 5500, density: 29.3, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    106: { electron: "[Rn] 5f¹⁴ 6d⁴ 7s²", melting: 1920, boiling: 3500, density: 35, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    107: { electron: "[Rn] 5f¹⁴ 6d⁵ 7s²", melting: null, boiling: null, density: 37.1, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    108: { electron: "[Rn] 5f¹⁴ 6d⁶ 7s²", melting: null, boiling: null, density: 40.7, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    109: { electron: "[Rn] 5f¹⁴ 6d⁷ 7s²", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    110: { electron: "[Rn] 5f¹⁴ 6d⁸ 7s²", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    111: { electron: "[Rn] 5f¹⁴ 6d⁹ 7s²", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    112: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    113: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    114: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    115: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    116: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    117: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", melting: null, boiling: null, density: null, state: "جامد", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] },
    118: { electron: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", melting: null, boiling: null, density: null, state: "گاز", uses: ["پژوهش‌های عناصر سنگین", "مطالعات هسته‌ای", "تحقیقات علمی", "مطالعات ساختار اتمی"] }
};


/* =========================================================
   CURRENT FILTER
========================================================= */

let currentCategory = "all";


/* =========================================================
   GET DETAILS
========================================================= */

function getElementDetails(element) {
    return elementDetails[element.number] || {
        electron: "اطلاعات ثبت نشده",
        melting: null,
        boiling: null,
        density: null,
        state: "اطلاعات ثبت نشده",
        uses: ["اطلاعات کاربرد این عنصر در حال تکمیل است."]
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

    if (!periodicTable) {
        console.error("periodicTable element not found.");
        return;
    }

    periodicTable.innerHTML = "";

    if (lanthanidesContainer) {
        lanthanidesContainer.innerHTML = "";
    }

    if (actinidesContainer) {
        actinidesContainer.innerHTML = "";
    }

    elements.forEach(element => {

        /* لانتانیدها */
        if (element.number >= 57 && element.number <= 71) {

            if (lanthanidesContainer) {
                lanthanidesContainer.appendChild(
                    createElement(element)
                );
            }

            return;
        }

        /* اکتینیدها */
        if (element.number >= 89 && element.number <= 103) {

            if (actinidesContainer) {
                actinidesContainer.appendChild(
                    createElement(element)
                );
            }

            return;
        }

        /* جدول اصلی */
        const card = createElement(element);

        card.style.gridColumn = String(element.group);
        card.style.gridRow = String(element.period);

        periodicTable.appendChild(card);
    });

    applyFilters();
}


/* =========================================================
   SEARCH & FILTER
========================================================= */

function applyFilters() {

    if (!searchInput) {
        return;
    }

    const query = searchInput.value
        .trim()
        .toLowerCase();

    const cards = document.querySelectorAll(".element");

    cards.forEach(card => {

        const number = card.dataset.number || "";
        const name = card.dataset.name || "";
        const english = card.dataset.english || "";
        const symbol = card.dataset.symbol || "";

        const matchesSearch =
            query === "" ||
            number.includes(query) ||
            name.includes(query) ||
            english.includes(query) ||
            symbol.includes(query);

        const matchesCategory =
            currentCategory === "all" ||
            card.classList.contains(currentCategory);

        if (matchesSearch && matchesCategory) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}


/* =========================================================
   SEARCH EVENT
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );
}


/* =========================================================
   CLEAR SEARCH
========================================================= */

if (clearSearch) {

    clearSearch.addEventListener(
        "click",
        function () {

            if (searchInput) {
                searchInput.value = "";
                searchInput.focus();
            }

            applyFilters();
        }
    );
}


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
                this.dataset.category || "all";

            applyFilters();
        }
    );
});


/* =========================================================
   SET TEXT
========================================================= */

function setText(id, value) {

    const element = document.getElementById(id);

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
   OPEN MODAL
========================================================= */

function openModal(element) {

    if (!modal) {
        return;
    }

    const details = getElementDetails(element);

    /* Header */

    setText(
        "modalCategory",
        element.categoryName
    );

    setText(
        "modalSymbol",
        element.symbol
    );

    setText(
        "modalNumber",
        `عنصر ${element.number}`
    );

    setText(
        "modalName",
        element.name
    );

    setText(
        "modalEnglishName",
        element.english
    );


    /* اطلاعات پایه */

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


    /* حالت ماده */

    setText(
        "modalState",
        details.state
    );


    /* چگالی */

    setText(
        "modalDensity",
        details.density !== null
            ? `${details.density} g/cm³`
            : "—"
    );


    /* نقطه ذوب */

    setText(
        "modalMelting",
        details.melting !== null
            ? `${details.melting} °C`
            : "—"
    );


    /* نقطه جوش */

    setText(
        "modalBoiling",
        details.boiling !== null
            ? `${details.boiling} °C`
            : "—"
    );


    /* آرایش الکترونی */

    setText(
        "modalElectron",
        details.electron
    );


    /* کاربردها */

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


    /* نمایش Modal */

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeElementModal() {

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================================================
   CLOSE BUTTON
========================================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeElementModal
    );
}


/* =========================================================
   CLICK OUTSIDE MODAL
========================================================= */

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeElementModal
    );
}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            modal &&
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

console.log(
    `Periodic Table loaded successfully: ${elements.length} elements`
);