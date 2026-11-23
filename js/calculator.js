
"use strict";

/* =========================================================
   ENGINEERING CALCULATOR
   FIXED / IMPROVED VERSION
========================================================= */

/* =========================================================
   STATE
========================================================= */

const state = {
    expression: "",
    answer: 0,
    memory: 0,
    angle: "DEG",
    format: "NORM",
    history: []
};


/* =========================================================
   DOM
========================================================= */

const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const errorDisplay = document.getElementById("error");

const angleMode = document.getElementById("angleMode");
const formatMode = document.getElementById("formatMode");
const memoryStatus = document.getElementById("memoryStatus");

const historyPanel = document.getElementById("historyPanel");
const historyList = document.getElementById("historyList");


/* =========================================================
   CONSTANTS
========================================================= */

const EPSILON = 1e-12;

const FUNCTIONS = new Set([
    "sin",
    "cos",
    "tan",

    "asin",
    "acos",
    "atan",

    "sinh",
    "cosh",
    "tanh",

    "asinh",
    "acosh",
    "atanh",

    "sqrt",
    "cbrt",

    "abs",
    "floor",
    "ceil",
    "round",

    "log",
    "ln",
    "log2",

    "exp",

    "mod",
    "gcd",
    "lcm",

    "nCr",
    "nPr",

    "mean",
    "average",
    "median",
    "mode",

    "variance",
    "stdev",
    "pstdev",

    "min",
    "max",

    "sum",
    "prod",
    "product",

    "percentile",
    "zscore"
]);


/* =========================================================
   SAFE DOM
========================================================= */

function getElement(id) {
    return document.getElementById(id);
}


/* =========================================================
   ERROR
========================================================= */

function showError(message) {
    if (errorDisplay) {
        errorDisplay.textContent =
            message || "خطای محاسباتی.";
    }
}


function clearError() {
    if (errorDisplay) {
        errorDisplay.textContent = "";
    }
}


/* =========================================================
   ANGLE
========================================================= */

function toRadians(value) {

    if (state.angle === "DEG") {
        return value * Math.PI / 180;
    }

    if (state.angle === "GRAD") {
        return value * Math.PI / 200;
    }

    return value;
}


function fromRadians(value) {

    if (state.angle === "DEG") {
        return value * 180 / Math.PI;
    }

    if (state.angle === "GRAD") {
        return value * 200 / Math.PI;
    }

    return value;
}


/* =========================================================
   NUMBER FORMAT
========================================================= */

function formatNumber(value) {

    if (!Number.isFinite(value)) {
        return "Error";
    }

    if (Object.is(value, -0)) {
        value = 0;
    }

    if (state.format === "SCI" && value !== 0) {
        return value.toExponential(8);
    }

    const absolute = Math.abs(value);

    if (
        absolute >= 1e12 ||
        (
            absolute > 0 &&
            absolute < 1e-10
        )
    ) {
        return value.toExponential(10);
    }

    if (Number.isInteger(value)) {
        return String(value);
    }

    return String(
        Number(
            value.toPrecision(12)
        )
    );
}


/* =========================================================
   FACTORIAL
========================================================= */

function factorial(n) {

    if (!Number.isFinite(n)) {
        throw new Error("عدد نامعتبر است.");
    }

    if (!Number.isInteger(n)) {
        throw new Error(
            "فاکتوریل فقط برای عدد صحیح است."
        );
    }

    if (n < 0) {
        throw new Error(
            "فاکتوریل عدد منفی مجاز نیست."
        );
    }

    if (n > 170) {
        throw new Error(
            "عدد بیش از محدوده مجاز است."
        );
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}


/* =========================================================
   GCD / LCM
========================================================= */

function gcd(a, b) {

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        throw new Error("مقادیر نامعتبر هستند.");
    }

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        throw new Error(
            "gcd فقط عدد صحیح می‌پذیرد."
        );
    }

    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}


function lcm(a, b) {

    if (
        !Number.isInteger(a) ||
        !Number.isInteger(b)
    ) {
        throw new Error(
            "lcm فقط عدد صحیح می‌پذیرد."
        );
    }

    if (a === 0 || b === 0) {
        return 0;
    }

    return Math.abs(
        (a / gcd(a, b)) * b
    );
}


/* =========================================================
   COMBINATORICS
========================================================= */

function nCr(n, r) {

    if (
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        n < 0 ||
        r < 0 ||
        r > n
    ) {
        throw new Error(
            "مقادیر nCr نامعتبر هستند."
        );
    }

    r = Math.min(r, n - r);

    let result = 1;

    for (let i = 1; i <= r; i++) {
        result =
            result *
            (n - r + i) /
            i;
    }

    return Math.round(result);
}


function nPr(n, r) {

    if (
        !Number.isInteger(n) ||
        !Number.isInteger(r) ||
        n < 0 ||
        r < 0 ||
        r > n
    ) {
        throw new Error(
            "مقادیر nPr نامعتبر هستند."
        );
    }

    let result = 1;

    for (let i = 0; i < r; i++) {
        result *= n - i;
    }

    return result;
}


/* =========================================================
   TOKENIZER
========================================================= */

function tokenize(input) {

    const tokens = [];

    let i = 0;

    while (i < input.length) {

        const char = input[i];

        /* SPACE */

        if (/\s/.test(char)) {
            i++;
            continue;
        }


        /* NUMBER */

        if (
            /[0-9.]/.test(char)
        ) {

            let value = "";
            let dots = 0;

            while (
                i < input.length &&
                /[0-9.]/.test(input[i])
            ) {

                if (input[i] === ".") {
                    dots++;
                }

                if (dots > 1) {
                    throw new Error(
                        "عدد اعشاری نامعتبر است."
                    );
                }

                value += input[i];
                i++;
            }

            if (
                value === "." ||
                value === ""
            ) {
                throw new Error(
                    "عدد نامعتبر است."
                );
            }

            const number = Number(value);

            if (!Number.isFinite(number)) {
                throw new Error(
                    "عدد نامعتبر است."
                );
            }

            tokens.push({
                type: "number",
                value: number
            });

            continue;
        }


        /* CONSTANT π */

        if (char === "π") {

            tokens.push({
                type: "number",
                value: Math.PI
            });

            i++;
            continue;
        }


        /* CONSTANT φ */

        if (char === "φ") {

            tokens.push({
                type: "number",
                value:
                    (1 + Math.sqrt(5)) / 2
            });

            i++;
            continue;
        }


        /* IDENTIFIER */

        if (/[a-zA-Z_]/.test(char)) {

            let name = "";

            while (
                i < input.length &&
                /[a-zA-Z0-9_]/.test(input[i])
            ) {
                name += input[i];
                i++;
            }


            /* ANS */

            if (
                name.toLowerCase() === "ans"
            ) {

                tokens.push({
                    type: "number",
                    value: state.answer
                });

                continue;
            }


            /* E */

            if (name === "e") {

                tokens.push({
                    type: "number",
                    value: Math.E
                });

                continue;
            }


            /* VARIABLE X */

            if (
                name === "x" ||
                name === "X"
            ) {

                tokens.push({
                    type: "variable",
                    value: "x"
                });

                continue;
            }


            /* FUNCTION */

            if (FUNCTIONS.has(name)) {

                tokens.push({
                    type: "function",
                    value: name
                });

                continue;
            }


            throw new Error(
                `تابع یا متغیر ناشناخته: ${name}`
            );
        }


        /* OPERATORS */

        if (
            "+-*/^%!".includes(char)
        ) {

            tokens.push({
                type: "operator",
                value: char
            });

            i++;
            continue;
        }


        /* PARENTHESES */

        if (
            char === "(" ||
            char === ")"
        ) {

            tokens.push({
                type: "parenthesis",
                value: char
            });

            i++;
            continue;
        }


        /* COMMA */

        if (char === ",") {

            tokens.push({
                type: "comma",
                value: ","
            });

            i++;
            continue;
        }


        throw new Error(
            `کاراکتر نامعتبر: ${char}`
        );
    }


    return addImplicitMultiplication(tokens);
}


/* =========================================================
   IMPLICIT MULTIPLICATION
========================================================= */

function canEndExpression(token) {

    if (!token) {
        return false;
    }

    return (
        token.type === "number" ||
        token.type === "variable" ||
        (
            token.type === "parenthesis" &&
            token.value === ")"
        ) ||
        (
            token.type === "operator" &&
            (
                token.value === "!" ||
                token.value === "%"
            )
        )
    );
}


function canStartExpression(token) {

    if (!token) {
        return false;
    }

    return (
        token.type === "number" ||
        token.type === "variable" ||
        token.type === "function" ||
        (
            token.type === "parenthesis" &&
            token.value === "("
        )
    );
}


function addImplicitMultiplication(tokens) {

    const output = [];

    for (const current of tokens) {

        const previous =
            output[output.length - 1];

        if (
            canEndExpression(previous) &&
            canStartExpression(current)
        ) {

            /*
             * Do NOT add * between:
             * sin (x)
             * sqrt (x)
             * etc.
             */

            const isFunctionCall =
                previous &&
                previous.type === "function" &&
                current.type === "parenthesis" &&
                current.value === "(";

            if (!isFunctionCall) {

                output.push({
                    type: "operator",
                    value: "*"
                });
            }
        }

        output.push(current);
    }

    return output;
}


/* =========================================================
   PARSER
========================================================= */

function evaluate(
    expression,
    variables = {}
) {

    const tokens =
        tokenize(expression);

    if (!tokens.length) {
        throw new Error(
            "عبارت خالی است."
        );
    }

    let position = 0;


    function peek() {
        return tokens[position];
    }


    function consume() {
        return tokens[position++];
    }


    /* -------------------------
       EXPRESSION
    ------------------------- */

    function parseExpression() {

        let value =
            parseTerm();

        while (
            peek() &&
            peek().type === "operator" &&
            (
                peek().value === "+" ||
                peek().value === "-"
            )
        ) {

            const operator =
                consume().value;

            const right =
                parseTerm();

            if (operator === "+") {
                value += right;
            }
            else {
                value -= right;
            }
        }

        return value;
    }


    /* -------------------------
       TERM
    ------------------------- */

    function parseTerm() {

        let value =
            parseUnary();

        while (
            peek() &&
            peek().type === "operator" &&
            (
                peek().value === "*" ||
                peek().value === "/"
            )
        ) {

            const operator =
                consume().value;

            const right =
                parseUnary();

            if (operator === "*") {
                value *= right;
            }
            else {

                if (
                    Math.abs(right) < EPSILON
                ) {
                    throw new Error(
                        "تقسیم بر صفر مجاز نیست."
                    );
                }

                value /= right;
            }
        }

        return value;
    }


    /* -------------------------
       UNARY
    ------------------------- */

    function parseUnary() {

        if (
            peek() &&
            peek().type === "operator" &&
            peek().value === "+"
        ) {

            consume();

            return parseUnary();
        }


        if (
            peek() &&
            peek().type === "operator" &&
            peek().value === "-"
        ) {

            consume();

            return -parseUnary();
        }


        return parsePower();
    }


    /* -------------------------
       POWER
    ------------------------- */

    function parsePower() {

        const base =
            parsePostfix();

        if (
            peek() &&
            peek().type === "operator" &&
            peek().value === "^"
        ) {

            consume();

            const exponent =
                parseUnary();

            return Math.pow(
                base,
                exponent
            );
        }

        return base;
    }


    /* -------------------------
       POSTFIX
    ------------------------- */

    function parsePostfix() {

        let value =
            parsePrimary();

        while (
            peek() &&
            peek().type === "operator" &&
            (
                peek().value === "!" ||
                peek().value === "%"
            )
        ) {

            const operator =
                consume().value;

            if (operator === "!") {
                value = factorial(value);
            }
            else {
                value /= 100;
            }
        }

        return value;
    }


    /* -------------------------
       PRIMARY
    ------------------------- */

    function parsePrimary() {

        const token =
            consume();

        if (!token) {
            throw new Error(
                "عبارت ناقص است."
            );
        }


        /* NUMBER */

        if (
            token.type === "number"
        ) {
            return token.value;
        }


        /* VARIABLE */

        if (
            token.type === "variable"
        ) {

            return variables.x ?? 0;
        }


        /* PARENTHESES */

        if (
            token.type === "parenthesis" &&
            token.value === "("
        ) {

            const value =
                parseExpression();

            if (
                !peek() ||
                peek().type !== "parenthesis" ||
                peek().value !== ")"
            ) {

                throw new Error(
                    "پرانتز بسته نشده است."
                );
            }

            consume();

            return value;
        }


        /* FUNCTION */

        if (
            token.type === "function"
        ) {

            if (
                !peek() ||
                peek().type !== "parenthesis" ||
                peek().value !== "("
            ) {

                throw new Error(
                    `بعد از ${token.value} باید ( قرار بگیرد.`
                );
            }

            consume();

            const args = [];


            /*
             * Empty function arguments
             * are not allowed.
             */

            if (
                peek() &&
                peek().type === "parenthesis" &&
                peek().value === ")"
            ) {

                consume();

                throw new Error(
                    `${token.value} آرگومان می‌خواهد.`
                );
            }


            while (true) {

                args.push(
                    parseExpression()
                );


                if (
                    !peek() ||
                    peek().type !== "comma"
                ) {
                    break;
                }

                consume();


                if (
                    !peek() ||
                    (
                        peek().type === "parenthesis" &&
                        peek().value === ")"
                    )
                ) {

                    throw new Error(
                        "آرگومان تابع ناقص است."
                    );
                }
            }


            if (
                !peek() ||
                peek().type !== "parenthesis" ||
                peek().value !== ")"
            ) {

                throw new Error(
                    `پرانتز ${token.value} بسته نشده است.`
                );
            }

            consume();


            return callFunction(
                token.value,
                args
            );
        }


        throw new Error(
            "عبارت نامعتبر است."
        );
    }


    const result =
        parseExpression();


    if (
        position < tokens.length
    ) {

        throw new Error(
            "عبارت کامل نیست."
        );
    }


    if (!Number.isFinite(result)) {
        throw new Error(
            "نتیجه عددی معتبر نیست."
        );
    }


    return result;
}


/* =========================================================
   FUNCTION CALLER
========================================================= */

function callFunction(
    name,
    args
) {

    function one(callback) {

        if (args.length !== 1) {
            throw new Error(
                `${name} فقط یک آرگومان می‌خواهد.`
            );
        }

        return callback(args[0]);
    }


    function two(callback) {

        if (args.length !== 2) {
            throw new Error(
                `${name} دقیقاً دو آرگومان می‌خواهد.`
            );
        }

        return callback(
            args[0],
            args[1]
        );
    }


    switch (name) {

        /* -------------------------
           TRIGONOMETRY
        ------------------------- */

        case "sin":

            return one(
                x =>
                    Math.sin(
                        toRadians(x)
                    )
            );


        case "cos":

            return one(
                x =>
                    Math.cos(
                        toRadians(x)
                    )
            );


        case "tan":

            return one(
                x => {

                    const angle =
                        toRadians(x);

                    if (
                        Math.abs(
                            Math.cos(angle)
                        ) < EPSILON
                    ) {
                        throw new Error(
                            "tan در این زاویه تعریف نشده است."
                        );
                    }

                    return Math.tan(angle);
                }
            );


        case "asin":

            return one(
                x => {

                    if (x < -1 || x > 1) {
                        throw new Error(
                            "asin فقط برای بازه -1 تا 1 تعریف شده."
                        );
                    }

                    return fromRadians(
                        Math.asin(x)
                    );
                }
            );


        case "acos":

            return one(
                x => {

                    if (x < -1 || x > 1) {
                        throw new Error(
                            "acos فقط برای بازه -1 تا 1 تعریف شده."
                        );
                    }

                    return fromRadians(
                        Math.acos(x)
                    );
                }
            );


        case "atan":

            return one(
                x =>
                    fromRadians(
                        Math.atan(x)
                    )
            );


        /* -------------------------
           HYPERBOLIC
        ------------------------- */

        case "sinh":
            return one(Math.sinh);

        case "cosh":
            return one(Math.cosh);

        case "tanh":
            return one(Math.tanh);

        case "asinh":
            return one(Math.asinh);


        case "acosh":

            return one(
                x => {

                    if (x < 1) {
                        throw new Error(
                            "acosh دامنه نامعتبر دارد."
                        );
                    }

                    return Math.acosh(x);
                }
            );


        case "atanh":

            return one(
                x => {

                    if (
                        Math.abs(x) >= 1
                    ) {
                        throw new Error(
                            "atanh دامنه نامعتبر دارد."
                        );
                    }

                    return Math.atanh(x);
                }
            );


        /* -------------------------
           ROOTS
        ------------------------- */

        case "sqrt":

            return one(
                x => {

                    if (x < 0) {
                        throw new Error(
                            "ریشه عدد منفی در اعداد حقیقی تعریف نشده."
                        );
                    }

                    return Math.sqrt(x);
                }
            );


        case "cbrt":
            return one(Math.cbrt);


        /* -------------------------
           BASIC
        ------------------------- */

        case "abs":
            return one(Math.abs);

        case "floor":
            return one(Math.floor);

        case "ceil":
            return one(Math.ceil);

        case "round":
            return one(Math.round);


        /* -------------------------
           LOG
        ------------------------- */

        case "log":

            return one(
                x => {

                    if (x <= 0) {
                        throw new Error(
                            "log فقط برای اعداد مثبت تعریف شده."
                        );
                    }

                    return Math.log10(x);
                }
            );


        case "ln":

            return one(
                x => {

                    if (x <= 0) {
                        throw new Error(
                            "ln فقط برای اعداد مثبت تعریف شده."
                        );
                    }

                    return Math.log(x);
                }
            );


        case "log2":

            return one(
                x => {

                    if (x <= 0) {
                        throw new Error(
                            "log2 فقط برای اعداد مثبت تعریف شده."
                        );
                    }

                    return Math.log2(x);
                }
            );


        case "exp":

            return one(Math.exp);


        /* -------------------------
           MOD
        ------------------------- */

        case "mod":

            return two(
                (a, b) => {

                    if (
                        Math.abs(b) < EPSILON
                    ) {
                        throw new Error(
                            "mod بر صفر مجاز نیست."
                        );
                    }

                    return a % b;
                }
            );


        /* -------------------------
           GCD / LCM
        ------------------------- */

        case "gcd":
            return two(gcd);

        case "lcm":
            return two(lcm);


        /* -------------------------
           COMBINATORICS
        ------------------------- */

        case "nCr":
            return two(nCr);

        case "nPr":
            return two(nPr);


        /* -------------------------
           STATISTICS
        ------------------------- */

        case "mean":
        case "average":
            return mean(args);


        case "median":
            return median(args);


        case "mode":
            return mode(args);


        case "variance":
            return sampleVariance(args);


        case "stdev":
            return Math.sqrt(
                sampleVariance(args)
            );


        case "pstdev":
            return Math.sqrt(
                populationVariance(args)
            );


        case "min":

            if (!args.length) {
                throw new Error(
                    "min حداقل یک مقدار می‌خواهد."
                );
            }

            return Math.min(...args);


        case "max":

            if (!args.length) {
                throw new Error(
                    "max حداقل یک مقدار می‌خواهد."
                );
            }

            return Math.max(...args);


        case "sum":

            if (!args.length) {
                throw new Error(
                    "sum حداقل یک مقدار می‌خواهد."
                );
            }

            return args.reduce(
                (a, b) => a + b,
                0
            );


        case "prod":
        case "product":

            if (!args.length) {
                throw new Error(
                    "product حداقل یک مقدار می‌خواهد."
                );
            }

            return args.reduce(
                (a, b) => a * b,
                1
            );


        /* -------------------------
           PERCENTILE
        ------------------------- */

        case "percentile":

            if (args.length < 2) {
                throw new Error(
                    "percentile به داده و درصد نیاز دارد."
                );
            }

            return percentile(
                args.slice(0, -1),
                args[args.length - 1]
            );


        /* -------------------------
           Z-SCORE
        ------------------------- */

        case "zscore":

            if (args.length < 2) {
                throw new Error(
                    "zscore(x,data...) لازم است."
                );
            }

            const data =
                args.slice(1);

            const deviation =
                Math.sqrt(
                    populationVariance(data)
                );

            if (
                Math.abs(deviation) < EPSILON
            ) {
                throw new Error(
                    "انحراف معیار صفر است."
                );
            }

            return (
                args[0] -
                mean(data)
            ) / deviation;


        default:

            throw new Error(
                `تابع ${name} پیاده‌سازی نشده است.`
            );
    }
}


/* =========================================================
   STATISTICS
========================================================= */

function mean(data) {

    if (!data.length) {
        throw new Error(
            "داده‌ای وارد نشده است."
        );
    }

    return data.reduce(
        (sum, value) =>
            sum + value,
        0
    ) / data.length;
}


function median(data) {

    if (!data.length) {
        throw new Error(
            "داده‌ای وارد نشده است."
        );
    }

    const sorted =
        [...data].sort(
            (a, b) => a - b
        );

    const middle =
        Math.floor(
            sorted.length / 2
        );

    if (
        sorted.length % 2 === 1
    ) {
        return sorted[middle];
    }

    return (
        sorted[middle - 1] +
        sorted[middle]
    ) / 2;
}


function mode(data) {

    if (!data.length) {
        throw new Error(
            "داده‌ای وارد نشده است."
        );
    }

    const map = new Map();

    let best = data[0];
    let maxCount = 0;

    for (const value of data) {

        const count =
            (map.get(value) || 0) + 1;

        map.set(
            value,
            count
        );

        if (
            count > maxCount
        ) {
            maxCount = count;
            best = value;
        }
    }

    return best;
}


function populationVariance(data) {

    if (!data.length) {
        throw new Error(
            "داده‌ای وارد نشده است."
        );
    }

    const average =
        mean(data);

    return data.reduce(
        (sum, value) =>
            sum +
            Math.pow(
                value - average,
                2
            ),
        0
    ) / data.length;
}


function sampleVariance(data) {

    if (data.length < 2) {
        throw new Error(
            "برای واریانس حداقل دو داده لازم است."
        );
    }

    const average =
        mean(data);

    return data.reduce(
        (sum, value) =>
            sum +
            Math.pow(
                value - average,
                2
            ),
        0
    ) / (data.length - 1);
}


function percentile(
    data,
    percent
) {

    if (
        !data.length ||
        percent < 0 ||
        percent > 100
    ) {
        throw new Error(
            "درصد باید بین 0 تا 100 باشد."
        );
    }

    const sorted =
        [...data].sort(
            (a, b) => a - b
        );

    const index =
        percent / 100 *
        (sorted.length - 1);

    const lower =
        Math.floor(index);

    const upper =
        Math.ceil(index);

    if (lower === upper) {
        return sorted[lower];
    }

    return (
        sorted[lower] +
        (
            sorted[upper] -
            sorted[lower]
        ) *
        (index - lower)
    );
}


/* =========================================================
   CALCULUS
========================================================= */

function evaluateFunction(
    expression,
    x
) {

    return evaluate(
        expression,
        { x }
    );
}


function numericalDerivative(
    expression,
    x
) {

    if (!Number.isFinite(x)) {
        throw new Error(
            "نقطه مشتق نامعتبر است."
        );
    }

    const h =
        Math.max(
            1e-5,
            Math.abs(x) * 1e-5
        );

    const left =
        evaluateFunction(
            expression,
            x - h
        );

    const right =
        evaluateFunction(
            expression,
            x + h
        );

    return (
        right - left
    ) / (2 * h);
}


function numericalIntegral(
    expression,
    a,
    b
) {

    if (
        !Number.isFinite(a) ||
        !Number.isFinite(b)
    ) {
        throw new Error(
            "حدود انتگرال نامعتبر هستند."
        );
    }

    if (a === b) {
        return 0;
    }

    /*
     * Simpson's Rule
     * n must be even.
     */

    const n = 1000;

    const h =
        (b - a) / n;

    let sum =
        evaluateFunction(
            expression,
            a
        ) +
        evaluateFunction(
            expression,
            b
        );

    for (
        let i = 1;
        i < n;
        i++
    ) {

        const x =
            a + i * h;

        const value =
            evaluateFunction(
                expression,
                x
            );

        sum +=
            (
                i % 2 === 0
                    ? 2
                    : 4
            ) * value;
    }

    return (
        sum * h / 3
    );
}


function numericalLimit(
    expression,
    x
) {

    if (!Number.isFinite(x)) {
        throw new Error(
            "نقطه حد نامعتبر است."
        );
    }

    const h =
        Math.max(
            1e-6,
            Math.abs(x) * 1e-6
        );

    const left =
        evaluateFunction(
            expression,
            x - h
        );

    const right =
        evaluateFunction(
            expression,
            x + h
        );

    if (
        !Number.isFinite(left) ||
        !Number.isFinite(right)
    ) {
        throw new Error(
            "حد در این نقطه قابل محاسبه نیست."
        );
    }

    if (
        Math.abs(left - right) >
        1e-4 *
        Math.max(
            1,
            Math.abs(left),
            Math.abs(right)
        )
    ) {
        throw new Error(
            "حد چپ و راست برابر نیستند."
        );
    }

    return (
        left + right
    ) / 2;
}


/* =========================================================
   FUNCTION ARGUMENT PARSER
========================================================= */

function splitArguments(text) {

    const result = [];

    let current = "";
    let depth = 0;

    for (let i = 0; i < text.length; i++) {

        const char = text[i];

        if (char === "(") {
            depth++;
            current += char;
            continue;
        }

        if (char === ")") {

            depth--;

            if (depth < 0) {
                throw new Error(
                    "پرانتز نامعتبر است."
                );
            }

            current += char;
            continue;
        }

        if (
            char === "," &&
            depth === 0
        ) {

            if (!current.trim()) {
                throw new Error(
                    "آرگومان خالی است."
                );
            }

            result.push(
                current.trim()
            );

            current = "";

            continue;
        }

        current += char;
    }

    if (depth !== 0) {
        throw new Error(
            "پرانتزها به‌درستی بسته نشده‌اند."
        );
    }

    if (current.trim()) {
        result.push(
            current.trim()
        );
    }

    return result;
}


/* =========================================================
   EXTRACT FUNCTION
========================================================= */

function extractFunctionCall(
    expression,
    functionName
) {

    const prefix =
        `${functionName}(`;

    if (
        !expression.startsWith(prefix) ||
        !expression.endsWith(")")
    ) {
        throw new Error(
            `فرمت ${functionName} نامعتبر است.`
        );
    }

    return expression.slice(
        prefix.length,
        -1
    );
}


/* =========================================================
   CALCULUS EXPRESSION PARSER
========================================================= */

function parseCalculusCall(
    expression,
    functionName,
    expectedArgs
) {

    const inside =
        extractFunctionCall(
            expression,
            functionName
        );

    const parts =
        splitArguments(inside);

    if (
        parts.length !== expectedArgs
    ) {
        throw new Error(
            `${functionName} به ${expectedArgs} آرگومان نیاز دارد.`
        );
    }

    return parts;
}


/* =========================================================
   MAIN CALCULATION
========================================================= */

function calculate() {

    if (
        !state.expression.trim()
    ) {
        return;
    }

    clearError();

    try {

        const expression =
            state.expression.trim();

        let result;


        /* DERIV */

        if (
            expression.startsWith("deriv(")
        ) {

            const parts =
                parseCalculusCall(
                    expression,
                    "deriv",
                    2
                );

            const x =
                evaluate(parts[1]);

            result =
                numericalDerivative(
                    parts[0],
                    x
                );
        }


        /* INTEGRAL */

        else if (
            expression.startsWith("integral(")
        ) {

            const parts =
                parseCalculusCall(
                    expression,
                    "integral",
                    3
                );

            const a =
                evaluate(parts[1]);

            const b =
                evaluate(parts[2]);

            result =
                numericalIntegral(
                    parts[0],
                    a,
                    b
                );
        }


        /* LIMIT */

        else if (
            expression.startsWith("limit(")
        ) {

            const parts =
                parseCalculusCall(
                    expression,
                    "limit",
                    2
                );

            const x =
                evaluate(parts[1]);

            result =
                numericalLimit(
                    parts[0],
                    x
                );
        }


        /* SOLVE */

        else if (
            expression.startsWith("solve(")
        ) {

            const parts =
                parseCalculusCall(
                    expression,
                    "solve",
                    2
                );

            const guess =
                evaluate(parts[1]);

            result =
                solveEquation(
                    parts[0],
                    guess
                );
        }


        /* NORMAL */

        else {

            result =
                evaluate(expression);
        }


        if (!Number.isFinite(result)) {
            throw new Error(
                "نتیجه معتبر نیست."
            );
        }


        state.answer =
            result;


        if (resultDisplay) {

            resultDisplay.textContent =
                formatNumber(result);
        }


        addHistory(
            expression,
            result
        );


        updateProgrammer(
            result
        );

    }

    catch (error) {

        if (resultDisplay) {
            resultDisplay.textContent =
                "Error";
        }

        showError(
            error.message
        );
    }
}


/* =========================================================
   SOLVE EQUATION
========================================================= */

function solveEquation(
    expression,
    guess
) {

    if (
        !Number.isFinite(guess)
    ) {
        throw new Error(
            "حدس اولیه نامعتبر است."
        );
    }

    let x = guess;

    for (
        let i = 0;
        i < 100;
        i++
    ) {

        const y =
            evaluateFunction(
                expression,
                x
            );

        if (
            Math.abs(y) < 1e-10
        ) {
            return x;
        }

        const derivative =
            numericalDerivative(
                expression,
                x
            );

        if (
            Math.abs(derivative) < 1e-12
        ) {
            throw new Error(
                "مشتق نزدیک صفر است؛ حل معادله ممکن نیست."
            );
        }

        const next =
            x -
            y / derivative;

        if (
            !Number.isFinite(next)
        ) {
            throw new Error(
                "حل معادله واگرا شد."
            );
        }

        if (
            Math.abs(next - x) < 1e-12
        ) {
            return next;
        }

        x = next;
    }

    throw new Error(
        "معادله در تعداد تکرار مجاز حل نشد."
    );
}


/* =========================================================
   INSERT
========================================================= */

function insert(value) {

    clearError();

    state.expression += String(value);

    updateDisplay();
}


/* =========================================================
   CLEAR
========================================================= */

function clearCalculator() {

    state.expression = "";

    if (resultDisplay) {
        resultDisplay.textContent = "0";
    }

    updateDisplay();

    clearError();
}


/* =========================================================
   DELETE
========================================================= */

function deleteLast() {

    if (!state.expression) {
        return;
    }

    const functions = [
        "integral(",
        "deriv(",
        "limit(",
        "solve(",

        "percentile(",
        "variance(",
        "stdev(",
        "pstdev(",

        "average(",
        "median(",
        "product(",

        "sqrt(",
        "cbrt(",

        "asin(",
        "acos(",
        "atan(",

        "sinh(",
        "cosh(",
        "tanh(",

        "asinh(",
        "acosh(",
        "atanh(",

        "sin(",
        "cos(",
        "tan(",

        "log(",
        "log2(",
        "ln(",

        "mean(",
        "mode(",

        "gcd(",
        "lcm(",

        "nCr(",
        "nPr(",

        "sum(",
        "prod(",

        "mod(",

        "abs(",
        "floor(",
        "ceil(",
        "round(",
        "exp(",
        "min(",
        "max(",
        "zscore("
    ];

    const matched =
        functions.find(
            fn =>
                state.expression.endsWith(fn)
        );

    if (matched) {

        state.expression =
            state.expression.slice(
                0,
                -matched.length
            );
    }
    else {

        state.expression =
            state.expression.slice(
                0,
                -1
            );
    }

    updateDisplay();
}


/* =========================================================
   SIGN
========================================================= */

function toggleSign() {

    if (!state.expression) {

        state.expression = "-";
    }

    else {

        state.expression =
            `-(${state.expression})`;
    }

    updateDisplay();
}


/* =========================================================
   DISPLAY
========================================================= */

function updateDisplay() {

    if (!expressionDisplay) {
        return;
    }

    expressionDisplay.textContent =
        state.expression || "0";
}


/* =========================================================
   MEMORY
========================================================= */

function memoryAction(action) {

    let value =
        state.answer;

    try {

        if (state.expression) {

            value =
                evaluate(
                    state.expression
                );
        }

    }
    catch {

        value =
            state.answer;
    }


    switch (action) {

        case "mc":

            state.memory = 0;

            break;


        case "mr":

            insert(
                formatNumber(
                    state.memory
                )
            );

            break;


        case "mplus":

            state.memory += value;

            break;


        case "mminus":

            state.memory -= value;

            break;


        case "ms":

            state.memory = value;

            break;


        default:

            return;
    }


    if (memoryStatus) {

        memoryStatus.textContent =
            state.memory === 0
                ? "M"
                : "M*";
    }
}


/* =========================================================
   HISTORY - LOAD
========================================================= */

function loadHistory() {

    try {

        const saved =
            localStorage.getItem(
                "engineeringCalculatorHistory"
            );

        if (saved) {

            const parsed =
                JSON.parse(saved);

            if (Array.isArray(parsed)) {
                state.history = parsed;
            }
        }

    }
    catch {

        state.history = [];
    }

    renderHistory();
}


/* =========================================================
   HISTORY - SAVE
========================================================= */

function saveHistory() {

    try {

        localStorage.setItem(
            "engineeringCalculatorHistory",
            JSON.stringify(
                state.history
            )
        );

    }
    catch {
        /* Storage unavailable */
    }
}


/* =========================================================
   HISTORY - ADD
========================================================= */

function addHistory(
    expression,
    result
) {

    state.history.unshift({
        expression,
        result
    });

    state.history =
        state.history.slice(
            0,
            50
        );

    saveHistory();

    renderHistory();
}


/* =========================================================
   HISTORY - RENDER
========================================================= */

function renderHistory() {

    if (!historyList) {
        return;
    }

    if (!state.history.length) {

        historyList.innerHTML = `
            <div class="empty-history">
                هنوز محاسبه‌ای ثبت نشده است.
            </div>
        `;

        return;
    }


    historyList.innerHTML =
        state.history
            .map(
                (item, index) => {

                    const result =
                        Number(item.result);

                    return `
                        <div
                            class="history-item"
                            data-history="${index}"
                        >

                            <div class="history-expression">
                                ${escapeHTML(
                                    item.expression
                                )}
                            </div>

                            <div class="history-result">
                                =
                                ${escapeHTML(
                                    formatNumber(result)
                                )}
                            </div>

                        </div>
                    `;
                }
            )
            .join("");


    document
        .querySelectorAll(
            ".history-item"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    const index =
                        Number(
                            item.dataset.history
                        );

                    const historyItem =
                        state.history[index];

                    if (!historyItem) {
                        return;
                    }

                    state.expression =
                        historyItem.expression;

                    state.answer =
                        Number(
                            historyItem.result
                        );

                    if (resultDisplay) {

                        resultDisplay.textContent =
                            formatNumber(
                                state.answer
                            );
                    }

                    updateDisplay();

                    if (historyPanel) {

                        historyPanel
                            .classList
                            .remove("open");
                    }
                }
            );
        });
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );
}


/* =========================================================
   MATRIX
========================================================= */

function parseMatrix(text) {

    if (
        typeof text !== "string" ||
        !text.trim()
    ) {
        throw new Error(
            "ماتریس خالی است."
        );
    }

    const rows =
        text
            .trim()
            .split(";")
            .filter(
                row =>
                    row.trim() !== ""
            )
            .map(
                row =>
                    row
                        .trim()
                        .split(",")
                        .map(
                            value =>
                                Number(
                                    value.trim()
                                )
                        )
            );


    if (!rows.length) {
        throw new Error(
            "ماتریس خالی است."
        );
    }


    const columns =
        rows[0].length;


    if (columns === 0) {
        throw new Error(
            "ماتریس نامعتبر است."
        );
    }


    if (
        rows.some(
            row =>
                row.length !== columns ||
                row.some(
                    value =>
                        !Number.isFinite(value)
                )
        )
    ) {

        throw new Error(
            "فرمت ماتریس نامعتبر است."
        );
    }


    return rows;
}


/* =========================================================
   MATRIX ADD / SUB
========================================================= */

function matrixAdd(
    A,
    B,
    sign = 1
) {

    if (
        A.length !== B.length ||
        A[0].length !== B[0].length
    ) {

        throw new Error(
            "ابعاد ماتریس‌ها برابر نیست."
        );
    }


    return A.map(
        (row, i) =>
            row.map(
                (value, j) =>
                    value +
                    sign * B[i][j]
            )
    );
}


/* =========================================================
   MATRIX MULTIPLY
========================================================= */

function matrixMultiply(
    A,
    B
) {

    if (
        A[0].length !== B.length
    ) {

        throw new Error(
            "ابعاد برای ضرب ماتریسی مناسب نیست."
        );
    }


    return A.map(
        row =>
            B[0].map(
                (_, column) =>
                    row.reduce(
                        (
                            sum,
                            value,
                            index
                        ) =>
                            sum +
                            value *
                            B[index][column],
                        0
                    )
            )
    );
}


/* =========================================================
   DETERMINANT
========================================================= */

function determinant(matrix) {

    if (
        matrix.length !==
        matrix[0].length
    ) {

        throw new Error(
            "دترمینان فقط برای ماتریس مربعی است."
        );
    }


    const A =
        matrix.map(
            row => [...row]
        );

    let det = 1;


    for (
        let i = 0;
        i < A.length;
        i++
    ) {

        let pivot = i;


        for (
            let row = i + 1;
            row < A.length;
            row++
        ) {

            if (
                Math.abs(A[row][i]) >
                Math.abs(A[pivot][i])
            ) {
                pivot = row;
            }
        }


        if (
            Math.abs(A[pivot][i]) <
            EPSILON
        ) {
            return 0;
        }


        if (pivot !== i) {

            [
                A[pivot],
                A[i]
            ] =
            [
                A[i],
                A[pivot]
            ];

            det *= -1;
        }


        const pivotValue =
            A[i][i];

        det *= pivotValue;


        for (
            let row = i + 1;
            row < A.length;
            row++
        ) {

            const factor =
                A[row][i] /
                pivotValue;


            for (
                let column = i;
                column < A.length;
                column++
            ) {

                A[row][column] -=
                    factor *
                    A[i][column];
            }
        }
    }


    return det;
}


/* =========================================================
   TRANSPOSE
========================================================= */

function transpose(matrix) {

    return matrix[0].map(
        (_, column) =>
            matrix.map(
                row =>
                    row[column]
            )
    );
}


/* =========================================================
   TRACE
========================================================= */

function matrixTrace(matrix) {

    if (
        matrix.length !==
        matrix[0].length
    ) {

        throw new Error(
            "Trace فقط برای ماتریس مربعی است."
        );
    }


    return matrix.reduce(
        (sum, row, index) =>
            sum + row[index],
        0
    );
}


/* =========================================================
   MATRIX RANK
========================================================= */

function matrixRank(matrix) {

    const A =
        matrix.map(
            row => [...row]
        );

    let rank = 0;
    let row = 0;


    for (
        let column = 0;
        column < A[0].length &&
        row < A.length;
        column++
    ) {

        let pivot = row;


        for (
            let i = row + 1;
            i < A.length;
            i++
        ) {

            if (
                Math.abs(
                    A[i][column]
                ) >
                Math.abs(
                    A[pivot][column]
                )
            ) {

                pivot = i;
            }
        }


        if (
            Math.abs(
                A[pivot][column]
            ) < EPSILON
        ) {
            continue;
        }


        [
            A[row],
            A[pivot]
        ] =
        [
            A[pivot],
            A[row]
        ];


        for (
            let i = row + 1;
            i < A.length;
            i++
        ) {

            const factor =
                A[i][column] /
                A[row][column];


            for (
                let j = column;
                j < A[0].length;
                j++
            ) {

                A[i][j] -=
                    factor *
                    A[row][j];
            }
        }


        row++;
        rank++;
    }


    return rank;
}


/* =========================================================
   MATRIX INVERSE
========================================================= */

function inverseMatrix(matrix) {

    if (
        matrix.length !==
        matrix[0].length
    ) {

        throw new Error(
            "معکوس فقط برای ماتریس مربعی است."
        );
    }


    const n =
        matrix.length;


    const A =
        matrix.map(
            (row, index) => [
                ...row,

                ...Array.from(
                    { length: n },
                    (_, j) =>
                        index === j
                            ? 1
                            : 0
                )
            ]
        );


    for (
        let i = 0;
        i < n;
        i++
    ) {

        let pivot = i;


        for (
            let row = i + 1;
            row < n;
            row++
        ) {

            if (
                Math.abs(A[row][i]) >
                Math.abs(A[pivot][i])
            ) {

                pivot = row;
            }
        }


        if (
            Math.abs(A[pivot][i]) <
            EPSILON
        ) {

            throw new Error(
                "ماتریس معکوس‌پذیر نیست."
            );
        }


        [
            A[i],
            A[pivot]
        ] =
        [
            A[pivot],
            A[i]
        ];


        const divisor =
            A[i][i];


        for (
            let j = 0;
            j < 2 * n;
            j++
        ) {

            A[i][j] /=
                divisor;
        }


        for (
            let row = 0;
            row < n;
            row++
        ) {

            if (row === i) {
                continue;
            }


            const factor =
                A[row][i];


            for (
                let j = 0;
                j < 2 * n;
                j++
            ) {

                A[row][j] -=
                    factor *
                    A[i][j];
            }
        }
    }


    return A.map(
        row =>
            row.slice(n)
    );
}


/* =========================================================
   MATRIX TO TEXT
========================================================= */

function matrixToText(matrix) {

    return matrix
        .map(
            row =>
                row
                    .map(
                        value =>
                            formatNumber(value)
                    )
                    .join("\t")
        )
        .join("\n");
}


/* =========================================================
   MATRIX BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-matrix]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                try {

                    const matrixA =
                        getElement("matrixA");

                    const matrixB =
                        getElement("matrixB");

                    const output =
                        getElement("matrixOutput");


                    if (!matrixA || !output) {
                        return;
                    }


                    const A =
                        parseMatrix(
                            matrixA.value
                        );


                    let result;


                    const operation =
                        button.dataset.matrix;


                    /*
                     * Operations that need B
                     */

                    if (
                        operation === "add" ||
                        operation === "sub" ||
                        operation === "mul"
                    ) {

                        if (!matrixB) {
                            throw new Error(
                                "ماتریس B پیدا نشد."
                            );
                        }

                        const B =
                            parseMatrix(
                                matrixB.value
                            );


                        if (
                            operation === "add"
                        ) {

                            result =
                                matrixAdd(
                                    A,
                                    B
                                );
                        }


                        else if (
                            operation === "sub"
                        ) {

                            result =
                                matrixAdd(
                                    A,
                                    B,
                                    -1
                                );
                        }


                        else {

                            result =
                                matrixMultiply(
                                    A,
                                    B
                                );
                        }
                    }


                    else {

                        switch (operation) {

                            case "det":
                                result =
                                    determinant(A);
                                break;

                            case "inv":
                                result =
                                    inverseMatrix(A);
                                break;

                            case "transpose":
                                result =
                                    transpose(A);
                                break;

                            case "trace":
                                result =
                                    matrixTrace(A);
                                break;

                            case "rank":
                                result =
                                    matrixRank(A);
                                break;

                            default:
                                throw new Error(
                                    "عملیات ماتریسی ناشناخته است."
                                );
                        }
                    }


                    output.textContent =
                        Array.isArray(result)
                            ? matrixToText(result)
                            : formatNumber(result);

                }

                catch (error) {

                    const output =
                        getElement(
                            "matrixOutput"
                        );

                    if (output) {

                        output.textContent =
                            "Error: " +
                            error.message;
                    }
                }
            }
        );
    });


/* =========================================================
   PROGRAMMER CALCULATOR
========================================================= */

function updateProgrammer(value) {

    if (!Number.isFinite(value)) {
        return;
    }


    const number =
        Math.trunc(value) >>> 0;


    const bin =
        getElement("binOut");

    const oct =
        getElement("octOut");

    const dec =
        getElement("decOut");

    const hex =
        getElement("hexOut");


    if (bin) {
        bin.textContent =
            number.toString(2);
    }


    if (oct) {
        oct.textContent =
            number.toString(8);
    }


    if (dec) {
        dec.textContent =
            number.toString(10);
    }


    if (hex) {
        hex.textContent =
            number
                .toString(16)
                .toUpperCase();
    }
}


/* =========================================================
   TABS
========================================================= */

document
    .querySelectorAll(".tab")
    .forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".tab")
                    .forEach(item =>
                        item.classList.remove(
                            "active"
                        )
                    );


                document
                    .querySelectorAll(".panel")
                    .forEach(panel =>
                        panel.classList.remove(
                            "active"
                        )
                    );


                tab.classList.add(
                    "active"
                );


                const panel =
                    getElement(
                        tab.dataset.tab +
                        "Panel"
                    );


                if (panel) {

                    panel.classList.add(
                        "active"
                    );
                }
            }
        );
    });


/* =========================================================
   INSERT BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-insert]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                insert(
                    button.dataset.insert
                );
            }
        );
    });


/* =========================================================
   ACTION BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-action]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const action =
                    button.dataset.action;


                switch (action) {

                    case "calculate":
                        calculate();
                        break;

                    case "clear":
                        clearCalculator();
                        break;

                    case "delete":
                        deleteLast();
                        break;

                    case "sign":
                        toggleSign();
                        break;

                    case "history":

                        if (historyPanel) {

                            historyPanel
                                .classList
                                .toggle("open");
                        }

                        break;
                }
            }
        );
    });


/* =========================================================
   MEMORY BUTTONS
========================================================= */

document
    .querySelectorAll(
        "[data-memory]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                memoryAction(
                    button.dataset.memory
                );
            }
        );
    });


/* =========================================================
   HISTORY BUTTON
========================================================= */

const historyBtn =
    getElement("historyBtn");

if (historyBtn) {

    historyBtn.addEventListener(
        "click",
        () => {

            if (historyPanel) {

                historyPanel
                    .classList
                    .toggle("open");
            }
        }
    );
}


/* =========================================================
   CLEAR HISTORY
========================================================= */

const clearHistory =
    getElement("clearHistory");

if (clearHistory) {

    clearHistory.addEventListener(
        "click",
        () => {

            state.history = [];

            saveHistory();

            renderHistory();
        }
    );
}


/* =========================================================
   ANGLE MODE
========================================================= */

if (angleMode) {

    angleMode.addEventListener(
        "click",
        () => {

            if (
                state.angle === "DEG"
            ) {

                state.angle = "RAD";
            }

            else if (
                state.angle === "RAD"
            ) {

                state.angle = "GRAD";
            }

            else {

                state.angle = "DEG";
            }


            angleMode.textContent =
                state.angle;
        }
    );
}


/* =========================================================
   FORMAT MODE
========================================================= */

if (formatMode) {

    formatMode.addEventListener(
        "click",
        () => {

            state.format =
                state.format === "NORM"
                    ? "SCI"
                    : "NORM";


            formatMode.textContent =
                state.format;


            if (resultDisplay) {

                resultDisplay.textContent =
                    formatNumber(
                        state.answer
                    );
            }
        }
    );
}


/* =========================================================
   PROGRAMMER BASE
========================================================= */

document
    .querySelectorAll(
        "[data-base]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        "[data-base]"
                    )
                    .forEach(item =>
                        item.classList.remove(
                            "selected"
                        )
                    );


                button.classList.add(
                    "selected"
                );


                const base =
                    Number(
                        button.dataset.base
                    );


                const number =
                    Math.trunc(
                        state.answer
                    ) >>> 0;


                if (resultDisplay) {

                    resultDisplay.textContent =
                        number
                            .toString(base)
                            .toUpperCase();
                }
            }
        );
    });


/* =========================================================
   BITWISE
========================================================= */

document
    .querySelectorAll(
        "[data-bit]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const a =
                    Math.trunc(
                        state.answer
                    ) | 0;


                let result;


                switch (
                    button.dataset.bit
                ) {

                    /*
                     * AND with the current
                     * value itself.
                     */

                    case "and":

                        result =
                            a & a;

                        break;


                    case "or":

                        result =
                            a | a;

                        break;


                    case "xor":

                        result =
                            a ^ a;

                        break;


                    case "not":

                        result =
                            ~a;

                        break;


                    case "shl":

                        result =
                            a << 1;

                        break;


                    case "shr":

                        result =
                            a >> 1;

                        break;


                    default:

                        return;
                }


                state.answer =
                    result >>> 0;


                if (resultDisplay) {

                    resultDisplay.textContent =
                        formatNumber(
                            state.answer
                        );
                }


                updateProgrammer(
                    state.answer
                );
            }
        );
    });


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const key =
            event.key;


        /* NUMBERS */

        if (
            /^[0-9.]$/.test(key)
        ) {

            insert(key);

            return;
        }


        /* OPERATORS */

        if (
            [
                "+",
                "-",
                "*",
                "/",
                "^",
                "%",
                "(",
                ")",
                ","
            ].includes(key)
        ) {

            insert(key);

            return;
        }


        /* ENTER */

        if (
            key === "Enter" ||
            key === "="
        ) {

            event.preventDefault();

            calculate();

            return;
        }


        /* BACKSPACE */

        if (
            key === "Backspace"
        ) {

            event.preventDefault();

            deleteLast();

            return;
        }


        /* ESCAPE */

        if (
            key === "Escape"
        ) {

            clearCalculator();

            return;
        }
    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

loadHistory();

updateDisplay();

updateProgrammer(0);

if (memoryStatus) {
    memoryStatus.textContent = "M";
}

if (angleMode) {
    angleMode.textContent = state.angle;
}

if (formatMode) {
    formatMode.textContent = state.format;
}

