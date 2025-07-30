(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/Etapa1.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/Etapa1.tsx
__turbopack_context__.s({
    "Etapa1": (()=>Etapa1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function Etapa1({ form, handleChange, onNext, onBack }) {
    const validateName = (name)=>/^[A-Za-zÀ-ÿ\s]+$/.test(name);
    const validatePhone = (phone)=>/^\(\d{2}\)\s?9?\d{4}-\d{4}$/.test(phone);
    const validateEmail = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    // REMOVIDO o `typeof form.voluntario === "boolean"` da validação
    const isValid = validateName(form.nome) && validatePhone(form.celular) && form.sexo && validateEmail(form.email);
    const formatPhone = (value)=>{
        // ... (sua função formatPhone continua a mesma)
        const digits = value.replace(/\D/g, "").substring(0, 11);
        const match = digits.match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        if (!match) return value;
        const [, d1, d2, d3] = match;
        let formatted = "";
        if (d1) formatted += `(${d1}`;
        if (d1.length === 2) formatted += ") ";
        if (d2) formatted += d2;
        if (d3) formatted += `-${d3}`;
        return formatted;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2sm text-gray-400 mb-2",
                children: "1 → "
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-regular mb-6 text-gray-800",
                children: "Primeiro de tudo, precisamos das suas informações de contato."
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xl text-gray-800 font-light ",
                children: "Nome Completo *"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "nome",
                placeholder: "João da Silva",
                value: form.nome,
                onChange: handleChange,
                className: `mb-10 font-light text-2xl w-full border-b bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none py-2 ${validateName(form.nome) ? 'border-gray-300 focus:border-purple-700 focus:border-b-2' : 'border-red-500'}`,
                required: true
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNext,
                        disabled: !isValid,
                        className: `flex items-center gap-2 font-bold rounded-md px-6 py-2 transition focus:outline-none cursor-pointer ${isValid ? 'bg-gray-800 hover:bg-gray-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        children: [
                            "Próximo ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-light",
                                children: " ↵"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa1.tsx",
                                lineNumber: 98,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Etapa1.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c = Etapa1;
var _c;
__turbopack_context__.k.register(_c, "Etapa1");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Etapa2.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* eslint-disable react/jsx-key */ __turbopack_context__.s({
    "Etapa2": (()=>Etapa2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
/* ---------- constantes de mês e ano ---------- */ const MESES = [
    {
        value: "01",
        label: "Janeiro"
    },
    {
        value: "02",
        label: "Fevereiro"
    },
    {
        value: "03",
        label: "Março"
    },
    {
        value: "04",
        label: "Abril"
    },
    {
        value: "05",
        label: "Maio"
    },
    {
        value: "06",
        label: "Junho"
    },
    {
        value: "07",
        label: "Julho"
    },
    {
        value: "08",
        label: "Agosto"
    },
    {
        value: "09",
        label: "Setembro"
    },
    {
        value: "10",
        label: "Outubro"
    },
    {
        value: "11",
        label: "Novembro"
    },
    {
        value: "12",
        label: "Dezembro"
    }
];
// gera anos de 2010 até o ano corrente
const currentYear = new Date().getFullYear();
const ANOS = Array.from({
    length: currentYear - 2010 + 1
}, (_, i)=>String(2010 + i));
const ministeriosDisponiveis = [
    "Worship",
    "Integração",
    "V.I.P",
    "Kids",
    "Creative",
    "Parking",
    "Teens",
    "RdkBrave",
    "Lounge",
    "Connect",
    "Produção",
    "Cerimonial",
    "Campus Online",
    "Casais",
    "Clínica Da Alma",
    "Baby",
    "Coral",
    "Eventos",
    "Store"
];
/* ---------- helpers ---------- */ const buildYM = (ano, mes)=>`${ano}-${mes}`;
function Etapa2({ form, handleChange, onBack, onSubmit }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isValid = !!form.membroDesde && (form.voluntario ? form.voluntarioDesde && form.ministerio.length > 0 && (!form.batizado || form.batizado && form.batizadoDesde) : !form.batizado || form.batizado && form.batizadoDesde);
    const handleRadioChange = (e)=>{
        handleChange({
            target: {
                name: "batizado",
                value: e.target.value === "true"
            }
        });
    };
    const toggleMinisterio = (value)=>{
        const updated = form.ministerio.includes(value) ? form.ministerio.filter((m)=>m !== value) : [
            ...form.ministerio,
            value
        ];
        handleChange({
            target: {
                name: "ministerio",
                value: updated
            }
        });
    };
    /* ---- seletor com “tabela” Mês / Ano ---- */ const handleMonthYear = (campo, tipo, valor)=>{
        const [anoAtual, mesAtual] = (form[campo] || "").split("-");
        const novoAno = tipo === "ano" ? valor : anoAtual;
        const novoMes = tipo === "mes" ? valor : mesAtual;
        handleChange({
            target: {
                name: campo,
                value: buildYM(novoAno, novoMes)
            }
        });
    };
    const renderSelectYM = (campo, required = false)=>{
        const [ano, mes] = (form[campo] || "").split("-");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 mb-1",
                            children: "Mês"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: mes || "",
                            onChange: (e)=>handleMonthYear(campo, "mes", e.target.value),
                            required: required,
                            className: "w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "–"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Etapa2.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                MESES.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m.value,
                                        children: m.label
                                    }, m.value, false, {
                                        fileName: "[project]/src/app/components/Etapa2.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Etapa2.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 mb-1",
                            children: "Ano"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ano || "",
                            onChange: (e)=>handleMonthYear(campo, "ano", e.target.value),
                            required: required,
                            className: "w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "–"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Etapa2.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                ANOS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/src/app/components/Etapa2.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Etapa2.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Etapa2.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2sm text-gray-400 mb-2",
                children: "2 →"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-regular mb-6 text-gray-800",
                children: "Agora queremos saber um pouco da sua caminhada com Deus."
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xl font-light text-gray-700",
                children: "Membro desde *"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            renderSelectYM("membroDesde", true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xl font-light text-gray-700 mb-2",
                children: "É batizado? *"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-6 mb-6 text-gray-700 text-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "batizado",
                                value: "true",
                                checked: form.batizado === true,
                                onChange: handleRadioChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            "Sim"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "batizado",
                                value: "false",
                                checked: form.batizado === false,
                                onChange: handleRadioChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            "Não"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            form.batizado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Batizado desde *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this),
                    renderSelectYM("batizadoDesde", true)
                ]
            }, void 0, true),
            form.voluntario && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Voluntário desde *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 190,
                        columnNumber: 11
                    }, this),
                    renderSelectYM("voluntarioDesde", true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Tamanho da camiseta *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "camiseta",
                        value: form.camiseta,
                        onChange: handleChange,
                        className: "mb-8 w-full appearance-none border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 py-2 px-3 text-xl font-light text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-600",
                        required: true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Selecione"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "PP",
                                children: "PP"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "P",
                                children: "P"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "M",
                                children: "M"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "G",
                                children: "G"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "GG",
                                children: "GG"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Ministérios que serve *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mb-8",
                        children: ministeriosDisponiveis.map((min)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 text-gray-700 cursor-pointer text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: form.ministerio.includes(min),
                                        onChange: ()=>toggleMinisterio(min)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Etapa2.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this),
                                    min
                                ]
                            }, min, true, {
                                fileName: "[project]/src/app/components/Etapa2.tsx",
                                lineNumber: 214,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: async ()=>{
                            if (loading || !isValid) return;
                            setLoading(true);
                            await onSubmit();
                            setLoading(false);
                        },
                        disabled: !isValid || loading,
                        className: `w-1/2 font-semibold rounded-2xl py-3 px-5 transition ${!isValid || loading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-800 hover:bg-blue-700 text-white"}`,
                        children: loading ? "Enviando..." : "Enviar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Etapa2.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
_s(Etapa2, "/Rjh5rPqCCqf0XYnTUk9ZNavw3Q=");
_c = Etapa2;
var _c;
__turbopack_context__.k.register(_c, "Etapa2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/formulario/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Formulario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Etapa1.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Etapa2.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Formulario() {
    _s();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        celular: "",
        email: "",
        sexo: "",
        voluntario: false,
        camiseta: "",
        tipoAula: "",
        membroDesde: "",
        voluntarioDesde: "",
        ministerio: [],
        batizado: false,
        batizadoDesde: ""
    });
    const handleChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async ()=>{
        const res = await fetch("/api/leads", {
            method: "POST",
            body: JSON.stringify(form)
        });
        if (res.ok) {
            const linkcelular = `https://chat.celular.com/J1zdIPYmfYK6HlMWKKY0Q8`;
            window.location.href = linkcelular;
        } else {
            alert("Erro ao enviar. Tente novamente.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center p-4 bg-[url('https://i.imgur.com/THcbOd3.png')] bg-cover bg-no-repeat",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "w-full max-w-2xl bg-white text-white shadow-xl border border-neutral-700 rounded-3xl p-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa1$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Etapa1"], {
                        form: form,
                        handleChange: handleChange,
                        onNext: ()=>setStep(1)
                    }, "etapa1", false, {
                        fileName: "[project]/src/app/formulario/page.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa2$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Etapa2"], {
                        form: form,
                        handleChange: handleChange,
                        onBack: ()=>setStep(0),
                        onSubmit: handleSubmit
                    }, "etapa2", false, {
                        fileName: "[project]/src/app/formulario/page.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/formulario/page.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/formulario/page.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/formulario/page.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(Formulario, "lC6Q2v0hSl35LsW1Cbt3SMv8h2c=");
_c = Formulario;
var _c;
__turbopack_context__.k.register(_c, "Formulario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_5fed4b7e._.js.map