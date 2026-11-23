const courses = [

/* =====================================================
   1. موازنه مواد و انرژی
===================================================== */

{
    id: "balance",
    icon: "⚖",
    title: "موازنه مواد و انرژی",

    description:
        "موازنه کلی و جزئی، ترکیب مواد، استوکیومتری، تبدیل، بازده، recycle، purge و موازنه انرژی.",

    formulas: [

        {
            title: "موازنه کلی جرم",
            chapter: "موازنه جرم",
            formula:
                "ورودی − خروجی + تولید − مصرف = تجمع",
            application:
                "پایه تمام مسائل موازنه جرم در سیستم‌های مهندسی شیمی.",
            problem:
                "سیستم‌های پایا، ناپایا، واحدهای فرآیندی و مخازن.",
            exam:
                "★★★★★",
            variables:
                ["Input", "Output", "Generation", "Consumption", "Accumulation"]
        },

        {
            title: "موازنه جزء",
            chapter: "موازنه جرم",
            formula:
                "ΣFᵢ,in − ΣFᵢ,out + Gᵢ − Cᵢ = Accᵢ",
            application:
                "برای موازنه یک جزء مشخص از مخلوط.",
            problem:
                "مخلوط‌ها، جداکننده‌ها، راکتورها و فرآیندهای چندجزئی.",
            exam:
                "★★★★★",
            variables:
                ["Fᵢ", "Gᵢ", "Cᵢ", "Accᵢ"]
        },

        {
            title: "کسر جرمی",
            chapter: "ترکیب مواد",
            formula:
                "wᵢ = mᵢ / m_total",
            application:
                "محاسبه سهم جرمی یک جزء.",
            problem:
                "محاسبه ترکیب محلول‌ها و مخلوط‌ها.",
            exam:
                "★★★★★",
            variables:
                ["wᵢ", "mᵢ", "m_total"]
        },

        {
            title: "کسر مولی",
            chapter: "ترکیب مواد",
            formula:
                "xᵢ = nᵢ / n_total",
            application:
                "محاسبه سهم مولی اجزای مخلوط.",
            problem:
                "ترمودینامیک، VLE و موازنه مواد.",
            exam:
                "★★★★★",
            variables:
                ["xᵢ", "nᵢ", "n_total"]
        },

        {
            title: "تبدیل جرم به مول",
            chapter: "استوکیومتری",
            formula:
                "n = m / MW",
            application:
                "تبدیل جرم ماده به تعداد مول.",
            problem:
                "تمام مسائل استوکیومتری و موازنه.",
            exam:
                "★★★★★",
            variables:
                ["n", "m", "MW"]
        },

        {
            title: "مولاریته",
            chapter: "محلول‌ها",
            formula:
                "M = n / V",
            application:
                "محاسبه غلظت مولار محلول.",
            problem:
                "محاسبات محلول‌ها و آزمایشگاهی.",
            exam:
                "★★★★☆",
            variables:
                ["M", "n", "V"]
        },

        {
            title: "درصد جرمی",
            chapter: "ترکیب مواد",
            formula:
                "wt% = (mᵢ / m_total) × 100",
            application:
                "بیان ترکیب مخلوط بر اساس جرم.",
            problem:
                "موازنه مواد و آماده‌سازی محلول.",
            exam:
                "★★★★☆",
            variables:
                ["wt%", "mᵢ", "m_total"]
        },

        {
            title: "درصد مولی",
            chapter: "ترکیب مواد",
            formula:
                "mol% = (nᵢ / n_total) × 100",
            application:
                "بیان ترکیب بر اساس مول.",
            problem:
                "گازها، مخلوط‌ها و ترمودینامیک.",
            exam:
                "★★★★☆",
            variables:
                ["mol%", "nᵢ", "n_total"]
        },

        {
            title: "تبدیل واکنش",
            chapter: "استوکیومتری واکنش",
            formula:
                "X = (F_A0 − F_A) / F_A0",
            application:
                "محاسبه درصد ماده اولیه مصرف‌شده.",
            problem:
                "راکتورها و واکنش‌های شیمیایی.",
            exam:
                "★★★★★",
            variables:
                ["X", "F_A0", "F_A"]
        },

        {
            title: "بازده",
            chapter: "استوکیومتری واکنش",
            formula:
                "Yield = محصول مطلوب / ماده اولیه مصرف‌شده",
            application:
                "اندازه‌گیری میزان تولید محصول مطلوب.",
            problem:
                "واکنش‌های موازی و فرآیندهای تولید.",
            exam:
                "★★★★☆",
            variables:
                ["Yield"]
        },

        {
            title: "انتخاب‌پذیری",
            chapter: "استوکیومتری واکنش",
            formula:
                "S = محصول مطلوب / محصول نامطلوب",
            application:
                "مقایسه تشکیل محصولات مختلف.",
            problem:
                "واکنش‌های موازی.",
            exam:
                "★★★★☆",
            variables:
                ["S"]
        },

        {
            title: "موازنه انرژی",
            chapter: "موازنه انرژی",
            formula:
                "Q − W + Σṁ(h + V²/2 + gz)in − Σṁ(h + V²/2 + gz)out = dE/dt",
            application:
                "تحلیل انرژی سیستم‌های مهندسی.",
            problem:
                "مبدل‌ها، پمپ‌ها، توربین‌ها و سیستم‌های جریان.",
            exam:
                "★★★★★",
            variables:
                ["Q", "W", "ṁ", "h", "V", "g", "z"]
        },

        {
            title: "انرژی جنبشی",
            chapter: "موازنه انرژی",
            formula:
                "Eₖ = mV² / 2",
            application:
                "محاسبه انرژی ناشی از حرکت.",
            problem:
                "موازنه انرژی و مکانیک سیالات.",
            exam:
                "★★★☆☆",
            variables:
                ["m", "V"]
        },

        {
            title: "انرژی پتانسیل",
            chapter: "موازنه انرژی",
            formula:
                "Eₚ = mgz",
            application:
                "محاسبه انرژی ناشی از ارتفاع.",
            problem:
                "موازنه انرژی سیستم‌ها.",
            exam:
                "★★★☆☆",
            variables:
                ["m", "g", "z"]
        }

    ]
},


/* =====================================================
   2. ترمودینامیک
===================================================== */

{
    id: "thermo",
    icon: "◈",
    title: "ترمودینامیک مهندسی شیمی",

    description:
        "خواص مواد، گازهای ایده‌آل و واقعی، قانون اول و دوم، آنتالپی، آنتروپی، گیبس و تعادل فازی.",

    formulas: [

        {
            title: "معادله گاز ایده‌آل",
            chapter: "گاز ایده‌آل",
            formula: "PV = nRT",
            application: "ارتباط فشار، حجم، دما و تعداد مول.",
            problem: "مسائل گازهای ایده‌آل.",
            exam: "★★★★★",
            variables: ["P","V","n","R","T"]
        },

        {
            title: "آنتالپی",
            chapter: "خواص ترمودینامیکی",
            formula: "H = U + PV",
            application: "تعریف آنتالپی سیستم.",
            problem: "موازنه انرژی و فرآیندهای جریان.",
            exam: "★★★★★",
            variables: ["H","U","P","V"]
        },

        {
            title: "قانون اول ترمودینامیک",
            chapter: "قانون اول",
            formula: "ΔU = Q − W",
            application: "موازنه انرژی سیستم بسته.",
            problem: "مخازن، پیستون‌ها و فرآیندهای بسته.",
            exam: "★★★★★",
            variables: ["ΔU","Q","W"]
        },

        {
            title: "ظرفیت گرمایی در فشار ثابت",
            chapter: "ظرفیت گرمایی",
            formula: "Cₚ = (∂H/∂T)ₚ",
            application: "محاسبه تغییر آنتالپی.",
            problem: "فرآیندهای حرارتی.",
            exam: "★★★★★",
            variables: ["Cp","H","T"]
        },

        {
            title: "ظرفیت گرمایی در حجم ثابت",
            chapter: "ظرفیت گرمایی",
            formula: "Cᵥ = (∂U/∂T)ᵥ",
            application: "محاسبه تغییر انرژی داخلی.",
            problem: "سیستم‌های بسته.",
            exam: "★★★★☆",
            variables: ["Cv","U","T"]
        },

        {
            title: "رابطه Cp و Cv",
            chapter: "گاز ایده‌آل",
            formula: "Cₚ − Cᵥ = R",
            application: "ارتباط ظرفیت‌های گرمایی.",
            problem: "گازهای ایده‌آل.",
            exam: "★★★★★",
            variables: ["Cp","Cv","R"]
        },

        {
            title: "نسبت ظرفیت گرمایی",
            chapter: "گاز ایده‌آل",
            formula: "γ = Cₚ / Cᵥ",
            application: "فرآیندهای تراکم و انبساط.",
            problem: "فرآیندهای آدیاباتیک.",
            exam: "★★★★☆",
            variables: ["γ","Cp","Cv"]
        },

        {
            title: "کار فشار-حجم",
            chapter: "کار",
            formula: "W = ∫Pₑₓₜ dV",
            application: "محاسبه کار فرآیند.",
            problem: "تراکم و انبساط.",
            exam: "★★★★★",
            variables: ["W","Pext","V"]
        },

        {
            title: "کار فرآیند هم‌دما",
            chapter: "فرآیندها",
            formula: "W = nRT ln(V₂/V₁)",
            application: "محاسبه کار گاز ایده‌آل در دمای ثابت.",
            problem: "فرآیندهای هم‌دما.",
            exam: "★★★★★",
            variables: ["W","n","R","T","V"]
        },

        {
            title: "فرآیند آدیاباتیک برگشت‌پذیر",
            chapter: "فرآیندها",
            formula: "PV^γ = constant",
            application: "رابطه فشار و حجم در فرآیند آدیاباتیک.",
            problem: "کمپرسورها و انبساط گازها.",
            exam: "★★★★★",
            variables: ["P","V","γ"]
        },

        {
            title: "رابطه دما در فرآیند آدیاباتیک",
            chapter: "فرآیندها",
            formula: "TV^(γ−1) = constant",
            application: "محاسبه دمای گاز در فرآیند آدیاباتیک.",
            problem: "کمپرسورها و توربین‌ها.",
            exam: "★★★★☆",
            variables: ["T","V","γ"]
        },

        {
            title: "تغییر آنتروپی گاز ایده‌آل",
            chapter: "آنتروپی",
            formula: "Δs = Cₚ ln(T₂/T₁) − R ln(P₂/P₁)",
            application: "محاسبه تغییر آنتروپی.",
            problem: "فرآیندهای گازی.",
            exam: "★★★★★",
            variables: ["Δs","Cp","R","T","P"]
        },

        {
            title: "قانون دوم",
            chapter: "قانون دوم",
            formula: "ΔS_universe ≥ 0",
            application: "تشخیص جهت طبیعی فرآیند.",
            problem: "بررسی برگشت‌پذیری.",
            exam: "★★★★★",
            variables: ["ΔS"]
        },

        {
            title: "انرژی آزاد گیبس",
            chapter: "توابع ترمودینامیکی",
            formula: "G = H − TS",
            application: "بررسی تعادل و خودبه‌خودی بودن.",
            problem: "تعادل فازی و شیمیایی.",
            exam: "★★★★★",
            variables: ["G","H","T","S"]
        },

        {
            title: "انرژی آزاد هلمهولتز",
            chapter: "توابع ترمودینامیکی",
            formula: "A = U − TS",
            application: "تحلیل سیستم‌های حجم ثابت.",
            problem: "ترمودینامیک پیشرفته.",
            exam: "★★★☆☆",
            variables: ["A","U","T","S"]
        },

        {
            title: "ضریب تراکم‌پذیری",
            chapter: "گاز واقعی",
            formula: "Z = PV/(nRT)",
            application: "بررسی انحراف از گاز ایده‌آل.",
            problem: "گازهای واقعی.",
            exam: "★★★★★",
            variables: ["Z","P","V","n","R","T"]
        },

        {
            title: "معادله واندروالس",
            chapter: "معادلات حالت",
            formula: "(P + an²/V²)(V − nb) = nRT",
            application: "مدل‌سازی گاز واقعی.",
            problem: "محاسبات خواص گازها.",
            exam: "★★★★☆",
            variables: ["P","V","T","a","b"]
        },

        {
            title: "کلازیوس-کلاپیرون",
            chapter: "تعادل فازی",
            formula: "ln(P₂/P₁) = −ΔHᵥₐₚ/R (1/T₂ − 1/T₁)",
            application: "ارتباط فشار بخار و دما.",
            problem: "تعادل بخار-مایع.",
            exam: "★★★★★",
            variables: ["P","ΔHvap","R","T"]
        },

        {
            title: "قانون رائولت",
            chapter: "تعادل بخار-مایع",
            formula: "yᵢP = xᵢPᵢˢᵃᵗ",
            application: "محاسبه تعادل بخار و مایع.",
            problem: "مخلوط‌های ایده‌آل.",
            exam: "★★★★★",
            variables: ["xᵢ","yᵢ","P","Psat"]
        },

        {
            title: "قانون دالتون",
            chapter: "مخلوط گازها",
            formula: "Pᵢ = yᵢP",
            application: "محاسبه فشار جزئی.",
            problem: "مخلوط‌های گازی.",
            exam: "★★★★★",
            variables: ["Pi","yi","P"]
        }

    ]
},


/* =====================================================
   3. مکانیک سیالات
===================================================== */

{
    id: "fluid",
    icon: "≋",
    title: "مکانیک سیالات",

    description:
        "فشار، هیدروستاتیک، پیوستگی، برنولی، رینولدز، افت فشار، جریان در لوله و پمپ.",

    formulas: [

        {
            title: "فشار",
            chapter: "مبانی سیالات",
            formula: "P = F/A",
            application: "تعریف فشار.",
            problem: "محاسبات پایه سیالات.",
            exam: "★★★★★",
            variables: ["P","F","A"]
        },

        {
            title: "فشار هیدروستاتیک",
            chapter: "سیال ساکن",
            formula: "P = P₀ + ρgh",
            application: "محاسبه فشار در عمق.",
            problem: "مخازن و سیالات ساکن.",
            exam: "★★★★★",
            variables: ["P","ρ","g","h"]
        },

        {
            title: "دبی حجمی",
            chapter: "پیوستگی",
            formula: "Q = AV",
            application: "محاسبه دبی حجمی.",
            problem: "جریان داخل لوله.",
            exam: "★★★★★",
            variables: ["Q","A","V"]
        },

        {
            title: "دبی جرمی",
            chapter: "پیوستگی",
            formula: "ṁ = ρAV",
            application: "محاسبه دبی جرمی.",
            problem: "سیستم‌های جریان.",
            exam: "★★★★★",
            variables: ["ṁ","ρ","A","V"]
        },

        {
            title: "معادله پیوستگی",
            chapter: "پیوستگی",
            formula: "ρ₁A₁V₁ = ρ₂A₂V₂",
            application: "پایستگی جرم در جریان.",
            problem: "نازل، لوله و انقباض.",
            exam: "★★★★★",
            variables: ["ρ","A","V"]
        },

        {
            title: "معادله برنولی",
            chapter: "معادلات جریان",
            formula: "P/ρg + V²/2g + z = constant",
            application: "موازنه انرژی مکانیکی.",
            problem: "لوله‌ها، مخازن، نازل و پمپ.",
            exam: "★★★★★",
            variables: ["P","ρ","V","g","z"]
        },

        {
            title: "برنولی با افت",
            chapter: "افت فشار",
            formula: "P₁/ρg + V₁²/2g + z₁ + Hₚ = P₂/ρg + V₂²/2g + z₂ + hL",
            application: "سیستم‌های واقعی.",
            problem: "پمپ، لوله و شبکه جریان.",
            exam: "★★★★★",
            variables: ["Hp","hL","P","V","z"]
        },

        {
            title: "عدد رینولدز",
            chapter: "جریان",
            formula: "Re = ρVD/μ",
            application: "تشخیص رژیم جریان.",
            problem: "لامینار و آشفته.",
            exam: "★★★★★",
            variables: ["Re","ρ","V","D","μ"]
        },

        {
            title: "تنش برشی نیوتنی",
            chapter: "ویسکوزیته",
            formula: "τ = μ du/dy",
            application: "رابطه تنش و گرادیان سرعت.",
            problem: "سیالات نیوتنی.",
            exam: "★★★★★",
            variables: ["τ","μ","du/dy"]
        },

        {
            title: "افت هد دارسی",
            chapter: "افت فشار",
            formula: "h_f = f(L/D)(V²/2g)",
            application: "محاسبه افت اصطکاکی.",
            problem: "جریان داخل لوله.",
            exam: "★★★★★",
            variables: ["hf","f","L","D","V"]
        },

        {
            title: "افت موضعی",
            chapter: "افت فشار",
            formula: "h_m = K(V²/2g)",
            application: "افت ناشی از شیر و اتصالات.",
            problem: "شبکه‌های لوله‌کشی.",
            exam: "★★★★★",
            variables: ["hm","K","V"]
        },

        {
            title: "افت فشار دارسی",
            chapter: "افت فشار",
            formula: "ΔP = f(L/D)(ρV²/2)",
            application: "افت فشار در لوله.",
            problem: "طراحی خطوط انتقال.",
            exam: "★★★★★",
            variables: ["ΔP","f","L","D","ρ","V"]
        },

        {
            title: "توان پمپ",
            chapter: "پمپ‌ها",
            formula: "P = ρgQH/η",
            application: "محاسبه توان موردنیاز پمپ.",
            problem: "انتقال سیال بین دو نقطه.",
            exam: "★★★★★",
            variables: ["P","ρ","g","Q","H","η"]
        }

    ]
},


/* =====================================================
   4. انتقال حرارت
===================================================== */

{
    id: "heat",
    icon: "♨",
    title: "انتقال حرارت",

    description:
        "هدایت، جابه‌جایی، تشعشع، مقاومت حرارتی، پره‌ها و مبدل‌های حرارتی.",

    formulas: [

        {
            title: "قانون فوریه",
            chapter: "هدایت",
            formula: "q = −kA dT/dx",
            application: "محاسبه شار حرارتی در هدایت.",
            problem: "دیوارها و جامدات.",
            exam: "★★★★★",
            variables: ["q","k","A","dT/dx"]
        },

        {
            title: "هدایت در دیواره تخت",
            chapter: "هدایت",
            formula: "Q = kA(T₁−T₂)/L",
            application: "انتقال حرارت از دیواره تخت.",
            problem: "عایق و دیواره‌ها.",
            exam: "★★★★★",
            variables: ["Q","k","A","L","T"]
        },

        {
            title: "مقاومت هدایت تخت",
            chapter: "مقاومت حرارتی",
            formula: "Rcond = L/(kA)",
            application: "مدل مقاومت حرارتی.",
            problem: "دیوارهای چندلایه.",
            exam: "★★★★★",
            variables: ["R","L","k","A"]
        },

        {
            title: "مقاومت هدایت استوانه‌ای",
            chapter: "مقاومت حرارتی",
            formula: "Rcond = ln(r₂/r₁)/(2πkL)",
            application: "هدایت در لوله و استوانه.",
            problem: "عایق‌کاری لوله‌ها.",
            exam: "★★★★★",
            variables: ["r1","r2","k","L"]
        },

        {
            title: "قانون نیوتن سرمایش",
            chapter: "جابه‌جایی",
            formula: "Q = hA(Ts−T∞)",
            application: "انتقال حرارت جابه‌جایی.",
            problem: "سطوح جامد و سیال.",
            exam: "★★★★★",
            variables: ["Q","h","A","Ts","T∞"]
        },

        {
            title: "مقاومت جابه‌جایی",
            chapter: "مقاومت حرارتی",
            formula: "Rconv = 1/(hA)",
            application: "مدل‌سازی مقاومت جابه‌جایی.",
            problem: "شبکه‌های حرارتی.",
            exam: "★★★★★",
            variables: ["R","h","A"]
        },

        {
            title: "قانون استفان-بولتزمن",
            chapter: "تشعشع",
            formula: "E = εσT⁴",
            application: "محاسبه توان تابشی سطح.",
            problem: "انتقال حرارت تشعشعی.",
            exam: "★★★★★",
            variables: ["E","ε","σ","T"]
        },

        {
            title: "تشعشع خالص",
            chapter: "تشعشع",
            formula: "Q = εσA(Ts⁴−Tsur⁴)",
            application: "انتقال حرارت بین سطح و محیط.",
            problem: "محفظه‌ها و سطوح تشعشعی.",
            exam: "★★★★★",
            variables: ["Q","ε","σ","A","T"]
        },

        {
            title: "عدد نوسلت",
            chapter: "اعداد بی‌بعد",
            formula: "Nu = hL/k",
            application: "ارتباط ضریب جابه‌جایی با خواص.",
            problem: "جریان داخلی و خارجی.",
            exam: "★★★★★",
            variables: ["Nu","h","L","k"]
        },

        {
            title: "عدد پرانتل",
            chapter: "اعداد بی‌بعد",
            formula: "Pr = μCp/k",
            application: "مقایسه نفوذ مومنتوم و حرارت.",
            problem: "جابه‌جایی.",
            exam: "★★★★☆",
            variables: ["Pr","μ","Cp","k"]
        },

        {
            title: "عدد فوریه",
            chapter: "انتقال حرارت ناپایا",
            formula: "Fo = αt/L²",
            application: "تحلیل هدایت گذرا.",
            problem: "گرم و سرد شدن جامدات.",
            exam: "★★★★☆",
            variables: ["Fo","α","t","L"]
        },

        {
            title: "مبدل حرارتی",
            chapter: "مبدل‌ها",
            formula: "Q = UAΔTlm",
            application: "طراحی و تحلیل مبدل حرارتی.",
            problem: "مبدل‌های پوسته-لوله و دو سیاله.",
            exam: "★★★★★",
            variables: ["Q","U","A","ΔTlm"]
        },

        {
            title: "اختلاف دمای لگاریتمی",
            chapter: "مبدل‌ها",
            formula: "ΔTlm = (ΔT₁−ΔT₂)/ln(ΔT₁/ΔT₂)",
            application: "محاسبه نیروی محرکه حرارتی متوسط.",
            problem: "مبدل‌های حرارتی.",
            exam: "★★★★★",
            variables: ["ΔTlm","ΔT1","ΔT2"]
        },

        {
            title: "NTU",
            chapter: "مبدل‌ها",
            formula: "NTU = UA/Cmin",
            application: "روش NTU برای مبدل حرارتی.",
            problem: "وقتی دماهای خروجی نامعلوم باشند.",
            exam: "★★★★★",
            variables: ["NTU","U","A","Cmin"]
        },

        {
            title: "ظرفیت حرارتی جریان",
            chapter: "مبدل‌ها",
            formula: "C = ṁCp",
            application: "محاسبه ظرفیت حرارتی سیال.",
            problem: "مبدل‌های حرارتی.",
            exam: "★★★★★",
            variables: ["C","ṁ","Cp"]
        }

    ]
},


/* =====================================================
   5. انتقال جرم
===================================================== */

{
    id: "mass",
    icon: "⇄",
    title: "انتقال جرم",

    description:
        "نفوذ، قانون فیک، شار، ضرایب انتقال جرم و انتقال جرم بین فازها.",

    formulas: [

        {
            title: "قانون اول فیک",
            chapter: "نفوذ",
            formula: "J_A = −D_AB dc_A/dz",
            application: "محاسبه شار نفوذی.",
            problem: "نفوذ مولکولی.",
            exam: "★★★★★",
            variables: ["JA","DAB","dcA/dz"]
        },

        {
            title: "نفوذ پایا",
            chapter: "نفوذ",
            formula: "N_A = D_AB(C_A1−C_A2)/L",
            application: "انتقال جرم از طریق فیلم.",
            problem: "نفوذ در جامد و سیال.",
            exam: "★★★★★",
            variables: ["NA","DAB","CA","L"]
        },

        {
            title: "قانون دوم فیک",
            chapter: "نفوذ ناپایا",
            formula: "∂C_A/∂t = D_AB ∂²C_A/∂z²",
            application: "مدل‌سازی نفوذ گذرا.",
            problem: "فرآیندهای ناپایا.",
            exam: "★★★★☆",
            variables: ["CA","DAB","t"]
        },

        {
            title: "ضریب انتقال جرم",
            chapter: "انتقال جابه‌جایی",
            formula: "N_A = k_c(C_Ai−C_Ab)",
            application: "محاسبه نرخ انتقال جرم.",
            problem: "انتقال جرم بین سطح و سیال.",
            exam: "★★★★★",
            variables: ["NA","kc","CA"]
        },

        {
            title: "مقاومت‌های انتقال جرم",
            chapter: "ضرایب کلی",
            formula: "1/K = 1/k₁ + 1/k₂",
            application: "ترکیب مقاومت‌های انتقال جرم.",
            problem: "سیستم‌های چندفازی.",
            exam: "★★★★★",
            variables: ["K","k1","k2"]
        },

        {
            title: "عدد اشمیت",
            chapter: "اعداد بی‌بعد",
            formula: "Sc = μ/(ρD_AB)",
            application: "مقایسه نفوذ مومنتوم و جرم.",
            problem: "انتقال جرم جابه‌جایی.",
            exam: "★★★★★",
            variables: ["Sc","μ","ρ","DAB"]
        },

        {
            title: "عدد شروود",
            chapter: "اعداد بی‌بعد",
            formula: "Sh = k_cL/D_AB",
            application: "ارتباط ضریب انتقال جرم با نفوذ.",
            problem: "انتقال جرم جابه‌جایی.",
            exam: "★★★★★",
            variables: ["Sh","kc","L","DAB"]
        },

        {
            title: "شار کل",
            chapter: "شار انتقال جرم",
            formula: "N_A = y_A N + J_A",
            application: "تفکیک انتقال ناشی از حرکت کل و نفوذ.",
            problem: "مخلوط‌های متحرک.",
            exam: "★★★★☆",
            variables: ["NA","yA","N","JA"]
        },

        {
            title: "انتقال جرم بر اساس فشار جزئی",
            chapter: "سیستم‌های گازی",
            formula: "N_A = k_G(p_Ai−p_Ab)",
            application: "انتقال جرم در فاز گاز.",
            problem: "جذب و تبخیر.",
            exam: "★★★★★",
            variables: ["NA","kG","pA"]
        },

        {
            title: "ضریب کلی گاز-مایع",
            chapter: "گاز-مایع",
            formula: "1/K_G = 1/k_G + m/k_L",
            application: "ترکیب مقاومت‌های فاز گاز و مایع.",
            problem: "جذب گازها.",
            exam: "★★★★★",
            variables: ["KG","kG","kL","m"]
        }

    ]
},


/* =====================================================
   6. عملیات واحد
===================================================== */

{
    id: "separation",
    icon: "▥",
    title: "عملیات واحد و جداسازی",

    description:
        "تقطیر، جذب، استخراج، تبخیر، خشک‌کردن و روابط پایه طراحی تجهیزات جداسازی.",

    formulas: [

        {
            title: "موازنه کلی برج",
            chapter: "تقطیر",
            formula: "F = D + B",
            application: "موازنه کلی برج تقطیر.",
            problem: "تمام مسائل تقطیر دو محصولی.",
            exam: "★★★★★",
            variables: ["F","D","B"]
        },

        {
            title: "موازنه جزء برج",
            chapter: "تقطیر",
            formula: "FzF = DxD + BxB",
            application: "موازنه جزء سبک یا سنگین.",
            problem: "طراحی و تحلیل تقطیر.",
            exam: "★★★★★",
            variables: ["F","zF","D","xD","B","xB"]
        },

        {
            title: "خط عملیاتی غنی‌سازی",
            chapter: "تقطیر",
            formula: "y = [R/(R+1)]x + xD/(R+1)",
            application: "ساخت خط عملیاتی بخش بالایی برج.",
            problem: "روش مک‌کیب-تیل.",
            exam: "★★★★★",
            variables: ["R","xD"]
        },

        {
            title: "فراریت نسبی",
            chapter: "تعادل",
            formula: "α = (y_A/x_A)/(y_B/x_B)",
            application: "اندازه‌گیری قابلیت جداسازی دو جزء.",
            problem: "تقطیر و تعادل فازی.",
            exam: "★★★★★",
            variables: ["α","xA","xB","yA","yB"]
        },

        {
            title: "رابطه تعادل خطی",
            chapter: "تعادل",
            formula: "y = mx",
            application: "مدل ساده تعادل گاز-مایع.",
            problem: "جذب و تقطیر.",
            exam: "★★★★★",
            variables: ["y","m","x"]
        },

        {
            title: "معادله فنسکه",
            chapter: "تقطیر",
            formula: "Nmin = ln[(xD/(1−xD))(xB/(1−xB))] / ln(α)",
            application: "محاسبه حداقل تعداد سینی.",
            problem: "طراحی تقطیر.",
            exam: "★★★★★",
            variables: ["Nmin","xD","xB","α"]
        },

        {
            title: "موازنه تبخیرکننده",
            chapter: "تبخیر",
            formula: "F = V + L",
            application: "موازنه ماده در تبخیرکننده.",
            problem: "تبخیر یک یا چند اثر.",
            exam: "★★★★★",
            variables: ["F","V","L"]
        },

        {
            title: "بار حرارتی تبخیر",
            chapter: "تبخیر",
            formula: "Q ≈ ṁλ",
            application: "محاسبه گرمای موردنیاز تبخیر.",
            problem: "تبخیرکننده‌ها.",
            exam: "★★★★☆",
            variables: ["Q","ṁ","λ"]
        },

        {
            title: "نسبت حلال به خوراک",
            chapter: "استخراج",
            formula: "S/F = دبی حلال / دبی خوراک",
            application: "بررسی نسبت حلال به خوراک.",
            problem: "استخراج مایع-مایع.",
            exam: "★★★★☆",
            variables: ["S","F"]
        },

        {
            title: "رطوبت مطلق",
            chapter: "خشک‌کردن",
            formula: "Y = m_vapor / m_dry gas",
            application: "بیان مقدار بخار در گاز خشک.",
            problem: "خشک‌کن‌ها.",
            exam: "★★★★☆",
            variables: ["Y"]
        }

    ]
},


/* =====================================================
   7. راکتور
===================================================== */

{
    id: "reaction",
    icon: "⚗",
    title: "سینتیک و طراحی راکتور",

    description:
        "قانون سرعت، آرنیوس، تبدیل، راکتورهای Batch، CSTR، PFR و کاتالیست.",

    formulas: [

        {
            title: "قانون سرعت واکنش",
            chapter: "سینتیک",
            formula: "−r_A = kC_A^n",
            application: "بیان سرعت مصرف واکنش‌دهنده.",
            problem: "تمام مسائل سینتیک.",
            exam: "★★★★★",
            variables: ["rA","k","CA","n"]
        },

        {
            title: "معادله آرنیوس",
            chapter: "اثر دما",
            formula: "k = A exp(−E/RT)",
            application: "ارتباط ثابت سرعت با دما.",
            problem: "محاسبه ثابت سرعت.",
            exam: "★★★★★",
            variables: ["k","A","E","R","T"]
        },

        {
            title: "فرم لگاریتمی آرنیوس",
            chapter: "اثر دما",
            formula: "ln(k₂/k₁) = −E/R(1/T₂−1/T₁)",
            application: "محاسبه انرژی فعال‌سازی.",
            problem: "داده‌های سینتیکی در دو دما.",
            exam: "★★★★★",
            variables: ["k1","k2","E","T1","T2"]
        },

        {
            title: "واکنش مرتبه صفر",
            chapter: "واکنش‌های مرتبه ساده",
            formula: "C_A = C_A0 − kt",
            application: "محاسبه غلظت در زمان مشخص.",
            problem: "Batch مرتبه صفر.",
            exam: "★★★★★",
            variables: ["CA","CA0","k","t"]
        },

        {
            title: "واکنش مرتبه اول",
            chapter: "واکنش‌های مرتبه ساده",
            formula: "ln(C_A0/C_A) = kt",
            application: "محاسبه زمان یا غلظت.",
            problem: "واکنش‌های مرتبه اول.",
            exam: "★★★★★",
            variables: ["CA","CA0","k","t"]
        },

        {
            title: "واکنش مرتبه دوم",
            chapter: "واکنش‌های مرتبه ساده",
            formula: "1/C_A − 1/C_A0 = kt",
            application: "تحلیل واکنش مرتبه دوم.",
            problem: "Batch و داده‌های سینتیکی.",
            exam: "★★★★★",
            variables: ["CA","CA0","k","t"]
        },

        {
            title: "تبدیل",
            chapter: "طراحی راکتور",
            formula: "X = (C_A0−C_A)/C_A0",
            application: "محاسبه conversion.",
            problem: "طراحی تمام انواع راکتور.",
            exam: "★★★★★",
            variables: ["X","CA0","CA"]
        },

        {
            title: "طراحی راکتور Batch",
            chapter: "Batch",
            formula: "t = C_A0 ∫₀ˣ dX/(-r_A)",
            application: "محاسبه زمان لازم برای رسیدن به تبدیل.",
            problem: "Batch.",
            exam: "★★★★★",
            variables: ["t","CA0","X","rA"]
        },

        {
            title: "طراحی CSTR",
            chapter: "CSTR",
            formula: "V = F_A0 X / (-r_A)_exit",
            application: "محاسبه حجم راکتور CSTR.",
            problem: "طراحی راکتور مخلوط کامل.",
            exam: "★★★★★",
            variables: ["V","FA0","X","rA"]
        },

        {
            title: "طراحی PFR",
            chapter: "PFR",
            formula: "V = F_A0 ∫₀ˣ dX/(-r_A)",
            application: "محاسبه حجم راکتور جریان پیستونی.",
            problem: "PFR.",
            exam: "★★★★★",
            variables: ["V","FA0","X","rA"]
        },

        {
            title: "زمان فضایی",
            chapter: "راکتورهای پیوسته",
            formula: "τ = V/v₀",
            application: "تعریف زمان ماند اسمی.",
            problem: "راکتورهای پیوسته.",
            exam: "★★★★☆",
            variables: ["τ","V","v0"]
        },

        {
            title: "سرعت فضایی",
            chapter: "راکتورهای پیوسته",
            formula: "SV = v₀/V = 1/τ",
            application: "مقایسه نرخ عبور خوراک.",
            problem: "راکتورهای پیوسته.",
            exam: "★★★★☆",
            variables: ["SV","v0","V","τ"]
        },

        {
            title: "سرعت واکنش کاتالیستی",
            chapter: "راکتور کاتالیستی",
            formula: "r′A = ηkC_A^n",
            application: "درنظرگرفتن اثر نفوذ در کاتالیست.",
            problem: "راکتورهای کاتالیستی.",
            exam: "★★★★☆",
            variables: ["rA","η","k","CA","n"]
        }

    ]
},


/* =====================================================
   8. کنترل فرآیند
===================================================== */

{
    id: "control",
    icon: "◉",
    title: "کنترل فرآیند",

    description:
        "مدل‌سازی دینامیکی، تابع تبدیل، لاپلاس، کنترل P، PI، PID و پایداری.",

    formulas: [

        {
            title: "تابع تبدیل",
            chapter: "مدل‌سازی",
            formula: "G(s) = Y(s)/U(s)",
            application: "نمایش رفتار دینامیکی سیستم.",
            problem: "تحلیل فرآیند.",
            exam: "★★★★★",
            variables: ["G(s)","Y(s)","U(s)"]
        },

        {
            title: "سیستم مرتبه اول",
            chapter: "مدل‌سازی",
            formula: "G(s) = K/(τs+1)",
            application: "مدل ساده فرآیند.",
            problem: "سیستم‌های مرتبه اول.",
            exam: "★★★★★",
            variables: ["K","τ","s"]
        },

        {
            title: "پاسخ پله مرتبه اول",
            chapter: "پاسخ دینامیکی",
            formula: "y(t)=KM(1−e^(−t/τ))",
            application: "بررسی پاسخ فرآیند به تغییر ناگهانی.",
            problem: "تحلیل دینامیکی.",
            exam: "★★★★★",
            variables: ["y","K","M","τ"]
        },

        {
            title: "کنترل تناسبی P",
            chapter: "کنترل‌کننده‌ها",
            formula: "u = Kc e",
            application: "کنترل بر اساس خطا.",
            problem: "سیستم‌های کنترل ساده.",
            exam: "★★★★★",
            variables: ["u","Kc","e"]
        },

        {
            title: "کنترل PI",
            chapter: "کنترل‌کننده‌ها",
            formula: "u = Kc[e + (1/τI)∫e dt]",
            application: "کاهش یا حذف خطای ماندگار.",
            problem: "کنترل فرآیند.",
            exam: "★★★★★",
            variables: ["u","Kc","τI","e"]
        },

        {
            title: "کنترل PID",
            chapter: "کنترل‌کننده‌ها",
            formula: "u = Kc[e + (1/τI)∫e dt + τD de/dt]",
            application: "کنترل ترکیبی تناسبی، انتگرالی و مشتقی.",
            problem: "سیستم‌های صنعتی.",
            exam: "★★★★★",
            variables: ["Kc","τI","τD","e"]
        },

        {
            title: "لاپلاس مشتق",
            chapter: "تبدیل لاپلاس",
            formula: "L{df/dt}=sF(s)−f(0)",
            application: "تبدیل معادلات دیفرانسیل به جبری.",
            problem: "کنترل فرآیند.",
            exam: "★★★★★",
            variables: ["s","F(s)"]
        },

        {
            title: "لاپلاس انتگرال",
            chapter: "تبدیل لاپلاس",
            formula: "L{∫f(t)dt}=F(s)/s",
            application: "حل سیستم‌های دینامیکی.",
            problem: "مدل‌سازی کنترل.",
            exam: "★★★★☆",
            variables: ["F(s)","s"]
        },

        {
            title: "تابع حلقه بسته",
            chapter: "فیدبک",
            formula: "Gcl = G/(1+GH)",
            application: "تحلیل سیستم کنترل با فیدبک منفی.",
            problem: "کنترل حلقه بسته.",
            exam: "★★★★★",
            variables: ["G","H","Gcl"]
        },

        {
            title: "شرط کلی پایداری",
            chapter: "پایداری",
            formula: "ریشه‌های معادله مشخصه باید در نیمه چپ صفحه s باشند.",
            application: "تشخیص پایداری سیستم.",
            problem: "تحلیل سیستم کنترل.",
            exam: "★★★★★",
            variables: ["s"]
        }

    ]
},


/* =====================================================
   9. ریاضیات مهندسی
===================================================== */

{
    id: "math",
    icon: "∫",
    title: "ریاضیات مهندسی",

    description:
        "مشتق، انتگرال، معادلات دیفرانسیل، لاپلاس، سری‌ها و روش‌های عددی.",

    formulas: [

        {
            title: "مشتق توان",
            chapter: "مشتق",
            formula: "d(xⁿ)/dx = nxⁿ⁻¹",
            application: "مشتق‌گیری از توابع توانی.",
            problem: "محاسبات مهندسی.",
            exam: "★★★★★",
            variables: ["n"]
        },

        {
            title: "انتگرال توان",
            chapter: "انتگرال",
            formula: "∫xⁿdx = xⁿ⁺¹/(n+1)+C",
            application: "انتگرال‌گیری پایه.",
            problem: "مسائل مهندسی.",
            exam: "★★★★★",
            variables: ["n","C"]
        },

        {
            title: "قاعده زنجیره‌ای",
            chapter: "مشتق",
            formula: "d[f(g(x))]/dx = f′(g(x))g′(x)",
            application: "مشتق توابع مرکب.",
            problem: "معادلات مهندسی.",
            exam: "★★★★★",
            variables: ["f","g"]
        },

        {
            title: "انتگرال‌گیری جزءبه‌جزء",
            chapter: "انتگرال",
            formula: "∫u dv = uv − ∫v du",
            application: "انتگرال توابع ترکیبی.",
            problem: "ریاضیات مهندسی.",
            exam: "★★★★★",
            variables: ["u","v"]
        },

        {
            title: "لاپلاس تابع نمایی",
            chapter: "تبدیل لاپلاس",
            formula: "L{e^(at)} = 1/(s−a)",
            application: "حل معادلات دیفرانسیل.",
            problem: "کنترل و دینامیک.",
            exam: "★★★★★",
            variables: ["a","s"]
        },

        {
            title: "لاپلاس سینوس",
            chapter: "تبدیل لاپلاس",
            formula: "L{sin(at)} = a/(s²+a²)",
            application: "حل معادلات دینامیکی.",
            problem: "ارتعاشات و کنترل.",
            exam: "★★★★☆",
            variables: ["a","s"]
        },

        {
            title: "لاپلاس کسینوس",
            chapter: "تبدیل لاپلاس",
            formula: "L{cos(at)} = s/(s²+a²)",
            application: "تبدیل توابع تناوبی.",
            problem: "معادلات دیفرانسیل.",
            exam: "★★★★☆",
            variables: ["a","s"]
        },

        {
            title: "معادله دیفرانسیل مرتبه اول",
            chapter: "معادلات دیفرانسیل",
            formula: "dy/dx + P(x)y = Q(x)",
            application: "فرم استاندارد ODE مرتبه اول.",
            problem: "مدل‌سازی مهندسی.",
            exam: "★★★★★",
            variables: ["P","Q","y"]
        },

        {
            title: "عامل انتگرال‌ساز",
            chapter: "معادلات دیفرانسیل",
            formula: "μ(x)=e^(∫P(x)dx)",
            application: "حل معادله خطی مرتبه اول.",
            problem: "ODE.",
            exam: "★★★★★",
            variables: ["μ","P"]
        },

        {
            title: "روش نیوتن",
            chapter: "روش‌های عددی",
            formula: "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)",
            application: "یافتن ریشه معادلات.",
            problem: "حل عددی مسائل مهندسی.",
            exam: "★★★★★",
            variables: ["xn","f","f′"]
        },

        {
            title: "خطای نسبی",
            chapter: "روش‌های عددی",
            formula: "εr = |xtrue−xapprox|/|xtrue|",
            application: "اندازه‌گیری خطای محاسباتی.",
            problem: "تحلیل روش‌های عددی.",
            exam: "★★★★☆",
            variables: ["εr","xtrue","xapprox"]
        },

        {
            title: "قاعده ذوزنقه‌ای",
            chapter: "انتگرال عددی",
            formula: "∫f(x)dx ≈ h[(f₀+fₙ)/2 + Σfᵢ]",
            application: "محاسبه عددی انتگرال.",
            problem: "داده‌های جدولی و مهندسی.",
            exam: "★★★★★",
            variables: ["h","fi"]
        }

    ]
}

];


/* =====================================================
   ELEMENTS
===================================================== */

const courseList =
    document.getElementById("courses");

const formulaList =
    document.getElementById("formulas");

const courseSection =
    document.getElementById("coursesSection");

const formulaSection =
    document.getElementById("formulaSection");

const courseSearch =
    document.getElementById("courseSearch");

const formulaSearch =
    document.getElementById("formulaSearch");

const chapterFilter =
    document.getElementById("chapterFilter");

let selectedCourse = null;


/* =====================================================
   STATISTICS
===================================================== */

const totalFormulas =
    courses.reduce(
        (total, course) =>
            total + course.formulas.length,
        0
    );

document.getElementById("courseCount")
    .textContent = courses.length;

document.getElementById("formulaCount")
    .textContent = totalFormulas;


/* =====================================================
   NORMALIZE
===================================================== */

function normalize(text) {

    return String(text)
        .toLowerCase()
        .replaceAll("ي", "ی")
        .replaceAll("ك", "ک");

}


/* =====================================================
   SHOW COURSES
===================================================== */

function renderCourses(list = courses) {

    if (!list.length) {

        courseList.innerHTML = `
            <div class="empty">
                درسی با این عبارت پیدا نشد.
            </div>
        `;

        return;
    }


    courseList.innerHTML =
        list.map((course, index) => {

            return `

                <article
                    class="course-card"
                    data-id="${course.id}"
                >

                    <div class="course-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="course-symbol">
                        ${course.icon}
                    </div>

                    <h3>
                        ${course.title}
                    </h3>

                    <p>
                        ${course.description}
                    </p>

                    <div class="course-footer">

                        <span class="badge">
                            ${course.formulas.length} فرمول
                        </span>

                        <span class="open-course">
                            مشاهده ←
                        </span>

                    </div>

                </article>

            `;

        }).join("");


    document
        .querySelectorAll(".course-card")
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const course =
                        courses.find(
                            item =>
                                item.id ===
                                card.dataset.id
                        );

                    openCourse(course);

                }
            );

        });

}


/* =====================================================
   OPEN COURSE
===================================================== */

function openCourse(course) {

    selectedCourse = course;

    courseSection.classList.add("hidden");

    document
        .querySelector(".toolbar")
        .classList.add("hidden");

    formulaSection.classList.remove("hidden");


    document.getElementById("courseIcon")
        .textContent = course.icon;

    document.getElementById("courseTitle")
        .textContent = course.title;

    document.getElementById("courseDescription")
        .textContent = course.description;

    document.getElementById("courseFormulaCount")
        .textContent = course.formulas.length;


    formulaSearch.value = "";


    const chapters =
        [
            ...new Set(
                course.formulas.map(
                    formula =>
                        formula.chapter
                )
            )
        ];


    chapterFilter.innerHTML = `
        <option value="all">
            همه مباحث
        </option>
    `;


    chapters.forEach(chapter => {

        chapterFilter.innerHTML += `
            <option value="${chapter}">
                ${chapter}
            </option>
        `;

    });


    renderFormulas();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW FORMULAS
===================================================== */

function renderFormulas() {

    if (!selectedCourse)
        return;


    const search =
        normalize(
            formulaSearch.value
        );


    const selectedChapter =
        chapterFilter.value;


    const filtered =
        selectedCourse.formulas.filter(
            formula => {

                const text =
                    normalize(
                        formula.title +
                        " " +
                        formula.chapter +
                        " " +
                        formula.formula +
                        " " +
                        formula.application +
                        " " +
                        formula.problem +
                        " " +
                        formula.variables.join(" ")
                    );


                const chapterMatch =
                    selectedChapter === "all" ||
                    formula.chapter === selectedChapter;


                const searchMatch =
                    !search ||
                    text.includes(search);


                return (
                    chapterMatch &&
                    searchMatch
                );

            }
        );


    if (!filtered.length) {

        formulaList.innerHTML = `
            <div class="empty">
                فرمولی مطابق جستجوی شما پیدا نشد.
            </div>
        `;

        return;
    }


    formulaList.innerHTML =
        filtered.map(formula => {

            return `

                <article class="formula-card">

                    <div class="formula-heading">

                        <h3>
                            ${formula.title}
                        </h3>

                        <span class="chapter">
                            ${formula.chapter}
                        </span>

                    </div>


                    <div class="exam">
                        ★ اهمیت امتحانی:
                        ${formula.exam}
                    </div>


                    <div class="equation">
                        ${formula.formula}
                    </div>


                    <div class="info">

                        <div class="info-box">

                            <strong>
                                کاربرد
                            </strong>

                            <span>
                                ${formula.application}
                            </span>

                        </div>


                        <div class="info-box">

                            <strong>
                                مناسب برای چه مسائلی؟
                            </strong>

                            <span>
                                ${formula.problem}
                            </span>

                        </div>

                    </div>


                    <div class="variables">

                        ${
                            formula.variables
                                .map(variable => `
                                    <span class="variable">
                                        ${variable}
                                    </span>
                                `)
                                .join("")
                        }

                    </div>

                </article>

            `;

        }).join("");

}


/* =====================================================
   SEARCH COURSE
===================================================== */

courseSearch.addEventListener(
    "input",
    event => {

        const search =
            normalize(event.target.value);


        const filtered =
            courses.filter(course => {

                const text =
                    normalize(
                        course.title +
                        " " +
                        course.description
                    );

                return text.includes(search);

            });


        renderCourses(filtered);

    }
);


/* =====================================================
   SEARCH FORMULA
===================================================== */

formulaSearch.addEventListener(
    "input",
    renderFormulas
);


/* =====================================================
   CHAPTER FILTER
===================================================== */

chapterFilter.addEventListener(
    "change",
    renderFormulas
);


/* =====================================================
   BACK BUTTON
===================================================== */

document
    .getElementById("backButton")
    .addEventListener(
        "click",
        () => {

            selectedCourse = null;

            formulaSection
                .classList
                .add("hidden");

            courseSection
                .classList
                .remove("hidden");

            document
                .querySelector(".toolbar")
                .classList
                .remove("hidden");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =====================================================
   INITIAL
===================================================== */

renderCourses();