module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/components/Etapa0.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/Etapa0.tsx
__turbopack_context__.s({
    "Etapa0": (()=>Etapa0)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Etapa0({ form, handleChange, onNext }) {
    const isValid = form.tipoVoluntario !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-regular mb-8 text-gray-800",
                children: "Você já faz parte do time de voluntários da Comunidade da Fé?"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa0.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-4 mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `p-4 w-full text-lg border rounded-md cursor-pointer transition text-center ${form.tipoVoluntario === 'existente' // <-- Checa o estado específico
                         ? "bg-purple-700 border-purple-700 text-white" // Estilo quando selecionado
                         : "border-gray-300 text-gray-700 hover:border-purple-500" // Estilo quando não selecionado
                        }`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "tipoVoluntario" // <-- O nome agora é 'tipoVoluntario'
                                ,
                                value: "existente" // <-- O valor é 'existente'
                                ,
                                className: "sr-only",
                                checked: form.tipoVoluntario === 'existente',
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa0.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            "Sim, já sou voluntário"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa0.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: `p-4 w-full text-lg border rounded-md cursor-pointer transition text-center ${form.tipoVoluntario === 'interessado' // <-- Checa o outro estado específico
                         ? "bg-purple-700 border-purple-700 text-white" // Estilo quando selecionado
                         : "border-gray-300 text-gray-700 hover:border-purple-500" // Estilo quando não selecionado
                        }`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: "tipoVoluntario" // <-- O nome agora é 'tipoVoluntario'
                                ,
                                value: "interessado" // <-- O valor é 'interessado'
                                ,
                                className: "sr-only",
                                checked: form.tipoVoluntario === 'interessado',
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa0.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            "Não sou, mas tenho interesse"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa0.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa0.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onNext,
                disabled: !isValid,
                className: `flex items-center gap-2 font-bold rounded-md px-6 py-2 transition focus:outline-none cursor-pointer ${isValid ? "bg-gray-800 hover:bg-gray-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                children: [
                    "Próximo ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-light",
                        children: " ↵"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa0.tsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa0.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Etapa0.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/components/Etapa1.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/Etapa1.tsx
__turbopack_context__.s({
    "Etapa1": (()=>Etapa1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/estados-cidades.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
"use client";
;
;
;
;
function Etapa1({ form, handleChange, onNext, onBack }) {
    const [cidades, setCidades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const validateName = (name)=>/^[A-Za-zÀ-ÿ\s]{3,}$/.test(name);
    const validatePhone = (phone)=>/^\(\d{2}\)\s?9\d{4}-\d{4}$/.test(phone);
    const validateEmail = (email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isDateValid = (date)=>date !== "";
    const isValid = validateName(form.nome) && isDateValid(form.dataNascimento) && form.sexo !== "" && validatePhone(form.whatsapp) && form.estado !== "" && form.cidade !== "" && (form.email === "" || validateEmail(form.email));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (form.estado) {
            const estadoSelecionado = estadosCidades.find((e)=>e.sigla === form.estado);
            if (estadoSelecionado) {
                setCidades(estadoSelecionado.cidades);
            }
        } else {
            setCidades([]);
        }
    }, [
        form.estado
    ]);
    const handleEstadoChange = (e)=>{
        const siglaEstado = e.target.value;
        handleChange({
            target: {
                name: "estado",
                value: siglaEstado
            }
        });
        handleChange({
            target: {
                name: "cidade",
                value: ""
            }
        });
    };
    const formatPhone = (value)=>{
        const digits = value.replace(/\D/g, "").substring(0, 11);
        const match = digits.match(/^(\d{2})(\d{5})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]}-${match[3]}`;
        }
        return value;
    };
    const selectStyle = (isValid)=>`mb-10 w-full text-2xl font-light border-b bg-transparent placeholder-gray-300 focus:outline-none focus:border-b-2 py-2 cursor-pointer ${isValid ? 'text-gray-700 border-gray-300 focus:border-purple-700' : 'text-gray-400 border-red-500'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-2sm text-gray-400 mb-2",
                children: "1 → "
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-regular mb-6 text-gray-800",
                children: "Primeiro de tudo, precisamos das suas informações de contato."
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xl font-light text-gray-700",
                children: "Estado *"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "estado",
                value: form.estado,
                onChange: handleEstadoChange,
                className: selectStyle(form.estado !== ''),
                required: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Selecione um estado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    estadosCidades.map((estado)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: estado.sigla,
                            children: estado.nome
                        }, estado.sigla, false, {
                            fileName: "[project]/src/app/components/Etapa1.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xl font-light text-gray-700",
                children: "Cidade *"
            }, void 0, false, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "cidade",
                value: form.cidade,
                onChange: handleChange,
                className: selectStyle(form.cidade !== ''),
                disabled: !form.estado,
                required: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: form.estado ? "Selecione uma cidade" : "Escolha um estado primeiro"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    cidades.map((cidade)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: cidade,
                            children: cidade
                        }, cidade, false, {
                            fileName: "[project]/src/app/components/Etapa1.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNext,
                        disabled: !isValid,
                        className: `flex items-center gap-2 font-bold rounded-md px-6 py-2 transition focus:outline-none cursor-pointer ${isValid ? 'bg-gray-800 hover:bg-gray-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`,
                        children: [
                            "Próximo ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-light",
                                children: " ↵"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Etapa1.tsx",
                                lineNumber: 143,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Etapa1.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa1.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Etapa1.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/components/Etapa2.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// components/Etapa2.tsx
/* eslint-disable react/jsx-key */ __turbopack_context__.s({
    "Etapa2": (()=>Etapa2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Suas constantes de MESES e ANOS continuam aqui...
const MESES = [
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
const validateName = (name)=>/^[A-Za-zÀ-ÿ\s]{3,}$/.test(name);
function Etapa2({ form, handleChange, onBack, onSubmit }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ---> LÓGICA DE VALIDAÇÃO CONDICIONAL <---
    const isValid = (()=>{
        if (form.tipoVoluntario === 'existente') {
            return validateName(form.nome) && form.ministerio.length > 0;
        }
        if (form.tipoVoluntario === 'interessado') {
            // Validação completa para novos interessados
            const isMembroDesdeValid = !!form.membroDesde && form.membroDesde.length === 7;
            const isBatizadoValid = !form.batizado || form.batizado && !!form.batizadoDesde && form.batizadoDesde.length === 7;
            const isVoluntarioFieldsValid = !!form.voluntarioDesde && form.voluntarioDesde.length === 7 && form.ministerio.length > 0 && !!form.camiseta;
            return isMembroDesdeValid && isBatizadoValid && isVoluntarioFieldsValid;
        }
        return false;
    })();
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
    // Suas outras funções (handleRadioChange, renderSelectYM) continuam aqui...
    const handleRadioChange = (e)=>{
        handleChange({
            target: {
                name: "batizado",
                value: e.target.value === "true"
            }
        });
    };
    const buildYM = (ano, mes)=>ano && mes ? `${ano}-${mes}` : "";
    const handleMonthYear = (campo, tipo, valor)=>{
        const [anoAtual, mesAtual] = (form[campo] || "").split("-");
        const novoAno = tipo === "ano" ? valor : anoAtual || "";
        const novoMes = tipo === "mes" ? valor : mesAtual || "";
        handleChange({
            target: {
                name: campo,
                value: buildYM(novoAno, novoMes)
            }
        });
    };
    const renderSelectYM = (campo, required = false)=>{
        const [ano, mes] = (form[campo] || " ").split("-");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 mb-1",
                            children: "Mês"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: mes || "",
                            onChange: (e)=>handleMonthYear(campo, "mes", e.target.value),
                            required: required,
                            className: "w-full text-lg border-b bg-transparent py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "–"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Etapa2.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                MESES.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: m.value,
                                        children: m.label
                                    }, m.value, false, {
                                        fileName: "[project]/src/app/components/Etapa2.tsx",
                                        lineNumber: 95,
                                        columnNumber: 32
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Etapa2.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-500 mb-1",
                            children: "Ano"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: ano || "",
                            onChange: (e)=>handleMonthYear(campo, "ano", e.target.value),
                            required: required,
                            className: "w-full text-lg border-b bg-transparent py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "–"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Etapa2.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                ANOS.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: a,
                                        children: a
                                    }, a, false, {
                                        fileName: "[project]/src/app/components/Etapa2.tsx",
                                        lineNumber: 102,
                                        columnNumber: 31
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Etapa2.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Etapa2.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Etapa2.tsx",
            lineNumber: 90,
            columnNumber: 7
        }, this);
    };
    const ministeriosCheckboxGrid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8",
        children: ministeriosDisponiveis.map((min)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2 text-gray-700 cursor-pointer text-base",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        className: "h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500",
                        checked: form.ministerio.includes(min),
                        onChange: ()=>toggleMinisterio(min)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this),
                    min
                ]
            }, min, true, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 112,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Etapa2.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            form.tipoVoluntario === 'existente' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2sm text-gray-400 mb-2",
                        children: "2 →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-regular mb-6 text-gray-800",
                        children: "Que legal ter você aqui! Por favor, confirme seu nome e em qual ministério você serve."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl text-gray-800 font-light mt-4",
                        children: "Nome Completo *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "nome",
                        placeholder: "Seu nome completo",
                        value: form.nome,
                        onChange: handleChange,
                        className: `mb-10 font-light text-2xl w-full border-b bg-transparent text-gray-700 placeholder-gray-300 focus:outline-none py-2 ${validateName(form.nome) || form.nome === '' ? 'border-gray-300 focus:border-purple-700 focus:border-b-2' : 'border-red-500'}`,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700 mt-4",
                        children: "Ministérios que serve *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    ministeriosCheckboxGrid
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2sm text-gray-400 mb-2",
                        children: "2 →"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-regular mb-6 text-gray-800",
                        children: "Agora queremos saber um pouco da sua caminhada com Deus."
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Membro desde *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    renderSelectYM("membroDesde", true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700 mb-2",
                        children: "É batizado? *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6 mb-6 text-gray-700 text-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    form.batizado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Voluntário desde *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 169,
                        columnNumber: 11
                    }, this),
                    renderSelectYM("voluntarioDesde", true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Tamanho da camiseta *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "camiseta",
                        value: form.camiseta,
                        onChange: handleChange,
                        required: true,
                        className: "mb-8 w-full text-lg border-b bg-transparent py-2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xl font-light text-gray-700",
                        children: "Ministérios de interesse *"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    ministeriosCheckboxGrid
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: async ()=>{
                            if (loading || !isValid) return;
                            setLoading(true);
                            await onSubmit();
                            setLoading(false);
                        },
                        disabled: !isValid || loading,
                        className: `font-semibold rounded-md py-3 px-5 transition ${!isValid || loading ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-800 hover:bg-blue-700 text-white"}`,
                        children: loading ? "Enviando..." : "Enviar Inscrição"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Etapa2.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Etapa2.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Etapa2.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/formulario/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FormularioPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa0$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Etapa0.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Etapa1.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Etapa2.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function FormularioPage() {
    const [etapa, setEtapa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // 2. ESTADO INICIAL ATUALIZADO com todos os campos
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nome: "",
        dataNascimento: "",
        sexo: "",
        whatsapp: "",
        email: "",
        estado: "",
        cidade: "",
        voluntario: undefined,
        tipoVoluntario: null,
        camiseta: "",
        membroDesde: "",
        voluntarioDesde: "",
        ministerio: [],
        batizado: false,
        batizadoDesde: ""
    });
    // 3. 'handleChange' ATUALIZADO com lógica especial para a Etapa 0
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        // Lógica especial para a seleção da Etapa 0
        if (name === "tipoVoluntario") {
            setForm((prev)=>({
                    ...prev,
                    voluntario: true,
                    tipoVoluntario: value
                }));
            return; // Encerra a função aqui para este caso
        }
        // Lógica genérica para os outros campos
        let finalValue = value;
        if (name === "batizado") {
            finalValue = value === "true" || value === true;
        } else if (type === "checkbox") {
            finalValue = name === "ministerio" ? value : checked;
        }
        setForm((prev)=>({
                ...prev,
                [name]: finalValue
            }));
    };
    // Suas funções de navegação estão corretas e foram mantidas
    const handleNext = ()=>{
        setEtapa((currentEtapa)=>{
            if (currentEtapa === 0) {
                if (form.tipoVoluntario === 'existente') return 2;
                if (form.tipoVoluntario === 'interessado') return 1;
            }
            if (currentEtapa === 1) {
                return 2;
            }
            return currentEtapa;
        });
    };
    const handleBack = ()=>{
        setEtapa((currentEtapa)=>{
            if (currentEtapa === 1) {
                return 0;
            }
            if (currentEtapa === 2) {
                if (form.tipoVoluntario === 'existente') return 0;
                if (form.tipoVoluntario === 'interessado') return 1;
            }
            return currentEtapa;
        });
    };
    const handleSubmit = async ()=>{
        console.log("Formulário enviado:", form);
        alert("Inscrição enviada com sucesso!");
    // Aqui você pode adicionar a lógica de envio para sua API
    };
    // A renderização dos componentes continua a mesma
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 sm:p-8 max-w-2xl",
        children: [
            etapa === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa0$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Etapa0"], {
                form: form,
                handleChange: handleChange,
                onNext: handleNext
            }, void 0, false, {
                fileName: "[project]/src/app/formulario/page.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            etapa === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa1$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Etapa1"], {
                form: form,
                handleChange: handleChange,
                onNext: handleNext,
                onBack: handleBack
            }, void 0, false, {
                fileName: "[project]/src/app/formulario/page.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this),
            etapa === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Etapa2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Etapa2"], {
                form: form,
                handleChange: handleChange,
                onBack: handleBack,
                onSubmit: handleSubmit
            }, void 0, false, {
                fileName: "[project]/src/app/formulario/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/formulario/page.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__aa3bb16b._.js.map