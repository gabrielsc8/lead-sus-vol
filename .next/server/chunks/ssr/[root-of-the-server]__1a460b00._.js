module.exports = {

"[project]/.next-internal/server/app/admin/leads/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/app/lib/prisma.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}}),
"[project]/src/app/lib2/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "authOptions": (()=>authOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text"
                },
                password: {
                    label: "Senha",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });
                if (!user || user.role !== "admin") return null;
                const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compare"])(credentials.password, user.password);
                if (!isValid) return null;
                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email,
                    role: user.role
                };
            }
        })
    ],
    session: {
        strategy: "jwt",
        maxAge: 20 * 60
    },
    callbacks: {
        async jwt ({ token, user }) {
            if (user) token.role = user.role;
            return token;
        },
        async session ({ session, token }) {
            if (session.user) session.user.role = token.role;
            return session;
        }
    },
    secret: 'DU923NDU9NWUSAONSD39USI',
    pages: {
        signIn: "/admin/leads"
    }
};
}}),
"[project]/src/app/components/ChartG.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/ChartG.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/ChartG.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/ChartG.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/ChartG.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/ChartG.tsx", "default");
}}),
"[project]/src/app/components/ChartG.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChartG$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/ChartG.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChartG$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/ChartG.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChartG$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/components/DataTable.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/DataTable.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/DataTable.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/DataTable.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/DataTable.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/DataTable.tsx", "default");
}}),
"[project]/src/app/components/DataTable.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DataTable$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/DataTable.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DataTable$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/DataTable.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DataTable$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/components/NavBar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/NavBar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/NavBar.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/NavBar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/NavBar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/NavBar.tsx", "default");
}}),
"[project]/src/app/components/NavBar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/NavBar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/components/Footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/app/components/Footer.tsx
__turbopack_context__.s({
    "default": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
// Um ícone de logo simples em SVG para representar a marca
const LogoIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1749.66 542.19",
        className: "w-40 h-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M48.51,218.46h-.33c-3.08,0-6,.99-8.75,2.97-2.75,1.98-5.23,4.24-7.42,6.77-2.2,2.53-4.02,4.95-5.45,7.26-1.43,2.31-2.37,3.79-2.8,4.46-1.76,2.2-3.3,4.68-4.62,7.42-1.32,2.75-2.53,5.45-3.63,8.08l-3.96,10.89c-1.1,2.64-1.7,5.28-1.82,7.92-.11,2.64-.17,5.39-.17,8.25l.66,1.98c1.1,1.98,1.87,2.97,2.31,2.97h1.32l3.63-.66c1.54-.44,3.08-1.15,4.62-2.14,1.54-.99,3.19-2.03,4.95-3.13l4.29-3.96c1.76-1.54,3.35-2.97,4.79-4.29,1.43-1.32,2.8-2.75,4.12-4.29l3.96-4.29c2.42-3.08,4.95-6.16,7.59-9.24,2.64-3.08,5.17-6.27,7.59-9.57l10.56-14.85,2.64-3.63.66-1.32c.66-1.32,1.87-1.98,3.63-1.98,1.1,0,2.03.44,2.8,1.32.77.88,1.16,1.87,1.16,2.97,0,.44-.11.82-.33,1.15-.22.33-.33.72-.33,1.16l-3.96,4.95-10.89,14.52c-2.64,3.3-5.23,6.6-7.75,9.9-2.53,3.3-5.23,6.49-8.08,9.57l-8.25,9.24c-1.1,1.1-2.59,2.64-4.46,4.62-1.87,1.98-3.96,3.85-6.27,5.61-2.31,1.76-4.73,3.3-7.26,4.62-2.53,1.32-5,1.98-7.42,1.98h-3.3c-3.08,0-5.39-.82-6.93-2.48-1.54-1.65-2.75-3.46-3.63-5.45-.88-1.98-1.37-3.74-1.49-5.28-.11-1.54-.16-2.2-.16-1.98-.22-.66-.33-1.87-.33-3.63,0-2.2.17-4.4.49-6.6.33-2.2.72-4.29,1.16-6.27l3.63-12.54c1.98-4.62,4.02-9.29,6.11-14.03,2.09-4.73,4.57-9.24,7.42-13.53,2.86-4.29,6.05-8.19,9.57-11.71,3.52-3.52,7.7-6.49,12.54-8.91,1.1-.22,2.25-.5,3.46-.83,1.21-.33,2.36-.5,3.46-.5h2.31c2.42.22,4.4,1.1,5.94,2.64,1.54,1.54,2.31,3.52,2.31,5.94s-.82,4.4-2.47,5.94c-1.65,1.54-3.69,2.31-6.1,2.31-.66,0-1.1-.11-1.32-.33Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 9,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M101.64,256.41l1.32,1.32c1.1,1.1,2.09,1.65,2.97,1.65.22,0,.66-.05,1.32-.17.66-.11,1.21-.27,1.65-.5l2.31-.99c.44-.44,1.1-.88,1.98-1.32l1.98-1.65c4.18-3.74,7.92-8.08,11.22-13.04,3.3-4.95,6.16-10.06,8.58-15.34.66-1.76,1.98-2.64,3.96-2.64,1.32,0,2.36.5,3.13,1.48.77.99,1.16,2.04,1.16,3.14,0,2.42-.99,5.28-2.97,8.58-1.98,3.3-4.29,6.6-6.93,9.9-2.64,3.3-5.17,6.27-7.59,8.91-2.42,2.64-4.07,4.29-4.95,4.95l-2.64,2.31-2.64,1.98-3.3,1.65c-1.1.66-2.42,1.16-3.96,1.49-1.54.33-2.86.5-3.96.5-1.1-.44-2.37-.83-3.79-1.16-1.43-.33-2.59-.93-3.46-1.81-1.54,1.54-3.08,3.85-4.62,6.93-1.54,3.08-3.36,6.22-5.44,9.41-2.09,3.19-4.57,6-7.43,8.42-2.86,2.42-6.27,3.63-10.23,3.63h-1.98c-2.2,0-4.18-.55-5.94-1.65-1.76-1.1-3.08-2.53-3.96-4.29l-1.65-3.3-.99-6.27c.22-7.48,1.49-14.9,3.79-22.27,2.31-7.37,5.12-14.13,8.42-20.29l2.64-4.95c1.1-1.54,2.09-3.13,2.97-4.79.88-1.65,1.98-3.35,3.3-5.12l4.29-4.62,2.31-2.31c1.1-.88,2.58-1.7,4.46-2.47,1.87-.77,4.56-1.16,8.08-1.16l.99.33h.33c1.98.44,3.57,1.38,4.79,2.8,1.21,1.43,1.82,3.13,1.82,5.12v1.98l.99,1.65c1.1,2.64,1.7,4.73,1.82,6.27.11,1.54.17,3.19.17,4.95l-.66,6.27-1.32,5.61c-.44,1.54-.94,3.3-1.48,5.28-.55,1.98-1.05,3.52-1.49,4.62l.66.99ZM85.8,230.01c-.66.44-1.27.99-1.82,1.65-.55.66-1.05,1.21-1.48,1.65l-2.97,3.96-1.32,1.98-1.65,1.98c-1.76,3.08-3.41,6.05-4.95,8.91-1.54,2.86-2.86,5.94-3.96,9.24l-1.65,4.62c-.44,2.42-.93,4.79-1.49,7.09-.55,2.31-.83,4.68-.83,7.1,0,1.1.06,2.2.17,3.3.11,1.1.39,1.87.83,2.31l.66.99c.44.44.77.66.99.66l2.31.33c.66,0,1.54-.22,2.64-.66,1.1-.44,2.2-1.21,3.3-2.31l3.3-2.97c2.42-3.08,4.84-7.04,7.26-11.88,2.42-4.84,3.85-9.13,4.29-12.87-.66-3.96-1.32-7.75-1.98-11.38-.66-3.63-.99-6.44-.99-8.42v-6.27l-.66.99Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 10,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M153.11,221.43c.44-.66,1.32-1.76,2.64-3.3,1.32-1.54,2.53-2.75,3.63-3.63l2.97-2.97,1.32-.33c.44-.44,1.16-.83,2.14-1.16.99-.33,1.82-.5,2.48-.5l3.96.66c1.76.44,3.02,1.21,3.79,2.31.77,1.1,1.26,1.76,1.49,1.98l.99,1.98c.22.66.44,1.32.66,1.98.22.66.33,1.32.33,1.98v1.98c0,6.6-1.32,12.82-3.96,18.65-2.64,5.83-4.84,11.94-6.6,18.31l-4.62,12.21,6.6-10.56c1.54-3.3,3.52-6.6,5.94-9.9l1.32-1.98,1.98-2.31c.44-.88,1.04-1.7,1.82-2.47.77-.77,1.48-1.49,2.14-2.15l2.64-2.31,1.32-.99,3.63-1.98c.22-.22.99-.55,2.31-.99l4.62-.33c.22,0,1.04.22,2.47.66,1.43.44,2.36.99,2.8,1.65l1.98,1.98c.88.88,1.43,1.87,1.65,2.97.22,1.1.55,2.09.99,2.97v2.31c0,1.76-.11,2.97-.33,3.63l-.66,3.3c-.44,1.76-.99,3.58-1.65,5.45-.66,1.87-1.43,3.69-2.31,5.45l-2.64,6.6,7.59-9.9c2.2-2.86,4.29-5.77,6.27-8.75,1.98-2.97,3.85-5.99,5.61-9.07l5.94-9.24c.22-.44.38-.83.5-1.16.11-.33.38-.71.82-1.16l3.63-6.93c.88-1.54,2.2-2.31,3.96-2.31,2.86,0,4.29,1.43,4.29,4.29,0,1.1-.94,2.8-2.81,5.11-1.87,2.31-3.36,4.35-4.46,6.11l-18.48,27.06-6.27,8.91-5.28,6.27-3.63,3.63-1.32.66c-.22.22-.66.33-1.32.33h-1.32c-.44.22-.82.17-1.15-.17s-.61-.6-.83-.83l-.66-.66c-1.1-1.1-1.6-1.92-1.49-2.47.11-.55.17-.93.17-1.16v-4.29c.22-.66.33-1.65.33-2.97l.99-8.25.99-7.92v-3.3c-1.32.88-2.31,1.65-2.97,2.31l-3.96,2.97c-5.28,4.4-10.34,9.19-15.18,14.36-4.84,5.17-9.35,10.95-13.53,17.32-.44.66-1.1.99-1.98.99-1.54,0-2.31-.66-2.31-1.98.22-.22.33-.44.33-.66l1.65-5.28c.44-2.42.99-5,1.65-7.75.66-2.75,1.43-5.66,2.31-8.75l1.98-10.89c.44-3.74.93-7.59,1.48-11.55.55-3.96.83-7.81.83-11.55l-11.55,14.19c-4.62,6.16-9.19,12.1-13.7,17.82-4.51,5.72-8.63,11.77-12.38,18.15l-5.61,9.57c-1.1,1.76-2.36,4.18-3.8,7.26-1.43,3.08-3.02,4.62-4.78,4.62-.88,0-1.65-.39-2.31-1.16-.66-.77-.99-1.6-.99-2.47,0-.44.11-.77.33-.99l24.42-75.57c1.1-3.74,3.74-5.61,7.92-5.61,2.42,0,4.34.72,5.77,2.14,1.43,1.43,2.25,3.13,2.48,5.12l3.96-5.61ZM193.04,248.49h-.33c0,.22.11.33.33.33v-.33Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 11,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M244.19,231l-1.32,1.98c-.44,1.54-.94,2.8-1.49,3.79-.55.99-1.05,2.04-1.48,3.13l-3.63,9.24c-1.1,3.08-2.15,6.16-3.14,9.24-.99,3.08-1.92,6.16-2.8,9.24l-3.63,14.19-1.32,9.57v4.29c0,.44.06,1.05.17,1.82.11.77.28,1.26.5,1.49h.33l.33-.33,1.65-.66,3.3-2.31,2.97-3.3c2.86-3.52,5.5-7.48,7.92-11.88l4.62-8.58c2.42-5.06,4.79-10.28,7.09-15.67,2.31-5.39,4.01-10.73,5.12-16l.66-2.64.33-1.65c.22,0,.33-.22.33-.66.44-1.76,1.37-3.24,2.8-4.46,1.43-1.21,3.02-1.82,4.79-1.82,2.42,0,4.4.77,5.94,2.31,1.54,1.54,2.42,3.41,2.64,5.61v2.97l-.66,1.32v.66l-.33.99-1.65,7.26c-1.1,2.86-1.81,6.93-2.14,12.21-.33,5.28-.5,9.35-.5,12.21l.33,3.3c0,.44.05.88.17,1.32.11.44.17.88.17,1.32h.33l2.31-1.65,4.62-4.95c.88-1.32,1.65-2.31,2.31-2.97l1.98-2.64c1.1-1.54,2.09-3.02,2.97-4.46.88-1.43,1.87-3.02,2.97-4.79l3.3-5.94,6.93-12.87,2.97-6.93,1.65-2.97.33-1.98.99-1.32c.22-1.98,1.43-2.97,3.63-2.97,1.1,0,2.14.39,3.13,1.15.99.77,1.49,1.82,1.49,3.14,0,.66-.11,1.21-.33,1.65l-7.26,13.53-7.26,12.87-1.98,3.3-1.65,2.97c-.88,1.1-1.6,2.15-2.14,3.14-.55.99-1.16,2.04-1.82,3.13l-4.29,6.27c-.66,1.1-1.38,2.15-2.14,3.14-.77.99-1.6,2.04-2.48,3.13l-4.29,4.29c-.44.44-1.1.88-1.98,1.32l-2.31,1.32c-.44,0-.72.06-.82.17s-.39.17-.83.17h-2.31c-.44-.22-.82-.33-1.15-.33s-.72-.22-1.16-.66l-1.65-1.32c-.44-.66-.94-1.43-1.48-2.31-.55-.88-.83-1.76-.83-2.64l-.66-1.98c-.44-1.98-.77-3.96-.99-5.94-.22-1.98-.44-3.85-.66-5.61l-11.22,17.82c-1.1,1.76-2.53,3.91-4.29,6.43-1.76,2.53-3.74,4.95-5.94,7.26-2.2,2.31-4.46,4.23-6.77,5.78-2.31,1.54-4.56,2.31-6.76,2.31h-1.65c-3.08,0-5.06-1.1-5.94-3.3l-.99-1.98c-.44-.44-.66-.94-.66-1.49s-.11-1.05-.33-1.49l-.33-8.58,1.65-15.51,5.94-29.7,3.63-17.16.33-2.64c1.1-4.4,3.96-6.6,8.58-6.6,2.2,0,4.01.83,5.44,2.47,1.43,1.65,2.15,3.58,2.15,5.78v1.65l-.33,1.98Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 12,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M323.38,216.81c-1.54,3.08-2.97,6.11-4.29,9.08-1.32,2.97-2.64,6-3.96,9.08l-13.53,31.68c3.52-5.06,7.26-10.06,11.22-15.01s8.14-9.62,12.54-14.03c1.1-1.32,2.25-2.64,3.46-3.96,1.21-1.32,2.36-2.53,3.47-3.63l6.93-5.61,2.64-1.32h.66l.66-.33c.44,0,.71-.05.83-.17s.38-.17.83-.17c.22,0,.44.11.66.33.66,0,1.43.22,2.31.66.88.44,1.54.77,1.98.99l1.65,1.65,1.32,2.97.66,1.98c.44.66.66,1.93.66,3.79v3.46c0,3.52-.11,6.93-.33,10.23-.22,3.3-.55,6.71-.99,10.23l-.99,9.9v6.93l4.95-6.27c2.86-3.74,5.61-7.75,8.25-12.04,2.64-4.29,5.17-8.63,7.59-13.04l7.26-13.2.99-1.98.99-2.31c1.1-1.76,2.64-2.64,4.62-2.64,1.32,0,2.36.5,3.14,1.48.77.99,1.15,2.15,1.15,3.46v1.16c0,.55-.22.83-.66.83l-10.23,17.49c-1.76,2.64-3.46,5.5-5.12,8.58-1.65,3.08-3.36,5.94-5.11,8.58l-8.91,12.87c-.66,1.1-1.43,2.09-2.31,2.97l-3.3,3.3-1.65.99c-.44.44-.88.66-1.32.66l-1.65.33c-.66,0-1.6-.11-2.8-.33-1.21-.22-2.15-1.1-2.8-2.64l-1.65-2.97-.33-1.32-.99-21.12-.66-12.54v-5.94c-1.32,1.1-2.31,2.09-2.97,2.97l-3.63,3.63-13.53,14.19-13.53,14.85c-2.2,2.42-4.4,4.9-6.6,7.42-2.2,2.53-4.29,5.12-6.27,7.76l-2.97,3.96-2.97,3.63-3.96,5.94c-.22.22-.33.44-.33.66s-.22.44-.66.66l-.66,1.65c-.22,0-.33.11-.33.33l-.99.99c-.22,0-.33.11-.33.33l-1.65.66h-.99c-.66,0-1.65-.33-2.97-.99-1.32-.66-1.98-1.87-1.98-3.63,0-1.1.06-1.6.17-1.49.11.11.17-.06.17-.49l.33-.33v-.33c.22,0,.33-.11.33-.33l1.98-2.97v-.33c1.54-2.42,2.86-5.06,3.96-7.92,1.1-2.86,2.2-5.83,3.3-8.91l3.3-9.24,1.98-4.62c.44-1.54.94-3.08,1.49-4.62.55-1.54,1.15-3.08,1.81-4.62l2.97-9.57c1.98-6.38,4.07-12.71,6.27-18.98,2.2-6.27,4.07-12.71,5.61-19.3.44-1.76,1.48-3.24,3.13-4.46,1.65-1.21,3.35-1.82,5.12-1.82,2.42,0,4.45.88,6.1,2.64,1.65,1.76,2.47,3.85,2.47,6.27,0,1.54-.33,2.64-.99,3.3ZM275.53,301.29v.33c0-.22.11-.33.33-.33h-.33Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 13,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M395.98,230.67l-.99,2.31-2.64,6.93-3.3,9.57c-1.1,3.08-2.09,6.22-2.97,9.4-.88,3.19-1.76,6.44-2.64,9.74l-2.31,9.57c-.44,1.76-.77,3.41-.99,4.95-.22,1.54-.33,3.08-.33,4.62l-.66,3.96.66-.66c2.42-2.42,4.51-5,6.27-7.75,1.76-2.75,3.85-5.33,6.27-7.75l11.88-16.5,11.55-16.5c1.1-1.54,2.31-3.35,3.63-5.44,1.32-2.09,2.64-4.12,3.96-6.11s2.58-3.68,3.79-5.12c1.21-1.43,2.36-2.14,3.46-2.14,1.32,0,2.36.44,3.14,1.32.77.88,1.15,1.87,1.15,2.97s-.5,2.42-1.48,3.96c-.99,1.54-2.15,3.25-3.47,5.12-1.32,1.87-2.75,3.69-4.29,5.44-1.54,1.76-2.75,3.3-3.63,4.62l-23.76,32.67-12.21,16.5-1.65,1.98c-.22.22-.44.5-.66.82-.22.33-.55.71-.99,1.16-.44.66-.99,1.21-1.65,1.65l-.33.33-.66.33h-.33v.33h-.66c0,.22-.11.33-.33.33h-1.65c-1.54,0-2.69-.44-3.46-1.32-.77-.88-1.37-1.82-1.81-2.81-.44-.99-.71-1.87-.83-2.64-.11-.77-.17-1.04-.17-.83-.44-1.54-.66-2.97-.66-4.29v-4.29c0-3.3.33-6.82.99-10.56l1.32-9.9,7.26-40.59c.44-2.2,1.38-3.9,2.8-5.12,1.43-1.21,3.13-1.81,5.12-1.81,2.42,0,4.46.77,6.1,2.31,1.65,1.54,2.48,3.52,2.48,5.94,0,.66-.06,1.21-.17,1.65-.11.44-.17.99-.17,1.65ZM394,173.58l.99-10.89c.22-2.64,1.26-4.62,3.13-5.94,1.87-1.32,4.01-1.98,6.44-1.98s4.29,1.1,5.61,3.3c1.32,2.2,1.98,4.29,1.98,6.27l-.66,2.64-4.95,10.23c-1.32,2.64-3.41,3.96-6.27,3.96-1.98,0-3.52-.66-4.62-1.98-1.1-1.32-1.65-2.86-1.65-4.62v-.99Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 14,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M461.65,190.41c.88-2.64,1.82-5.28,2.81-7.92.99-2.64,2.03-5.28,3.13-7.92l2.64-7.92c1.1-4.4,2.36-8.52,3.79-12.38,1.43-3.85,2.69-7.86,3.8-12.04l3.63-11.88.99-3.63.33-.66c1.32-3.74,3.96-5.61,7.92-5.61,2.42,0,4.4.88,5.94,2.64,1.54,1.76,2.31,3.74,2.31,5.94,0,1.1-.11,1.87-.33,2.31l-3.3,11.55-3.63,11.22c-3.3,11.22-6.71,22.77-10.23,34.65-3.52,11.88-6.82,23.71-9.9,35.48-3.08,11.77-5.78,23.38-8.08,34.81-2.31,11.44-4.12,22.22-5.45,32.34-.66,4.4-.99,8.69-.99,12.87l1.65-1.65c3.3-4.84,6.6-10.01,9.9-15.51,3.3-5.5,6.6-10.89,9.9-16.17l24.75-43.89c.66-1.1,1.76-1.65,3.3-1.65,2.42,0,3.63,1.1,3.63,3.3,0,1.1-.5,2.7-1.49,4.78-.99,2.09-2.14,4.35-3.46,6.77-1.32,2.42-2.7,4.73-4.12,6.93-1.43,2.2-2.59,4.07-3.46,5.61-5.06,9.02-10.34,17.93-15.84,26.73-5.5,8.8-11.11,17.93-16.83,27.39-.66.66-1.43,1.65-2.31,2.97-.88,1.32-1.81,2.64-2.8,3.96s-1.98,2.47-2.97,3.46c-.99.99-1.93,1.49-2.81,1.49-1.32,0-2.37-.66-3.13-1.98-.77-1.32-1.27-2.86-1.49-4.62-.22-1.76-.33-3.52-.33-5.28v-3.96c0-13.86,1.15-27.89,3.46-42.08,2.31-14.19,4.89-27.99,7.75-41.42,0-.44.11-.77.33-.99-3.52,5.28-6.66,11.28-9.41,17.99-2.75,6.71-5.78,13.15-9.08,19.3l-8.25,14.85c-3.08,5.28-6.27,10.01-9.57,14.19l-2.97,3.63-3.63,2.97-4.29,2.97-2.31.66-1.65.33c-3.08,0-4.95-.77-5.61-2.31-.44-.66-.66-1.43-.66-2.31l-.66-1.32c0-4.4.39-8.19,1.16-11.38.77-3.19,1.71-6.87,2.8-11.06l2.97-7.92c2.64-6.16,5.28-12.26,7.92-18.31,2.64-6.05,5.94-11.72,9.9-17l2.97-3.96c1.1-1.1,2.25-2.09,3.46-2.97,1.21-.88,2.69-1.76,4.46-2.64l1.98-.66h2.64c4.18,0,6.82,1.87,7.92,5.61,3.96-9.46,7.59-19.03,10.89-28.71ZM441.85,228.36c.22,0,.33-.11.33-.33l-1.32.66-1.65.66-5.28,4.95c-.88,1.1-1.76,2.15-2.64,3.13-.88.99-1.65,2.04-2.31,3.14l-4.62,6.6c-3.08,4.62-5.78,9.52-8.09,14.69-2.31,5.17-4.23,10.29-5.77,15.34l-1.65,7.59v3.63l.33.66,1.98-.66,2.64-1.98c1.1-.66,2.09-1.54,2.97-2.64.88-1.1,1.65-2.09,2.31-2.97l4.95-6.6,3.96-7.26,4.29-7.26c2.42-5.5,4.89-10.83,7.42-16,2.53-5.17,5-10.4,7.42-15.67-.44.22-1.05.44-1.82.66-.77.22-1.48.33-2.14.33-.44,0-.88-.22-1.32-.66Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 15,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M531.28,215.49h-.66c.22.22-.11.44-.99.66-.88.22-1.54.55-1.98.99-1.54.66-3.25,1.82-5.12,3.47-1.87,1.65-3.58,3.36-5.12,5.11l-2.97,3.63c-6.16,7.7-10.83,15.57-14.03,23.6-3.19,8.03-6.32,17-9.4,26.89l-.66,4.95c-.22,1.1-.33,2.64-.33,4.62l.33,3.96.66.66v-.33h.33l2.97-2.31,3.3-3.96,1.32-1.98c1.1-1.54,2.31-3.41,3.63-5.61,1.32-2.2,2.59-4.56,3.79-7.09,1.21-2.53,2.31-5.12,3.3-7.75.99-2.64,1.7-5.06,2.15-7.26l.99-2.64c.22-.44.33-.83.33-1.16s.22-.71.66-1.15l.99-3.63.99-3.96v-.33l.33-.66v-.66c0-.22.11-.44.33-.66l.33-.99c1.32-2.64,3.41-3.96,6.27-3.96,2.42,0,4.29.77,5.61,2.31,1.32,1.54,1.98,3.19,1.98,4.95v.99l-.99,4.95c-.44,2.42-.88,4.9-1.32,7.42-.44,2.53-.66,5.01-.66,7.43l7.26-12.21c1.32-2.42,2.91-5.33,4.79-8.74,1.87-3.41,3.79-6.71,5.78-9.9,1.98-3.19,3.9-5.88,5.77-8.08,1.87-2.2,3.46-3.3,4.79-3.3s2.36.5,3.13,1.48c.77.99,1.16,2.04,1.16,3.14,0,.66-.22,1.43-.66,2.31l-16.83,27.72c-1.54,2.42-2.92,4.79-4.12,7.1-1.21,2.31-2.47,4.68-3.79,7.09l-3.96,6.93c-1.1,1.98-2.09,4.12-2.97,6.44-.88,2.31-2.42,3.46-4.62,3.46-1.76,0-3.08-.5-3.96-1.49-.88-.99-1.32-1.92-1.32-2.8l-1.32-4.62-.66-5.61c-.22-.22-.33-.66-.33-1.32l-1.65,2.64-5.61,9.24-4.62,6.93c-1.76,1.76-4.07,3.69-6.93,5.78-2.86,2.09-4.4,3.24-4.62,3.46h-1.65c-1.32,0-2.64-.39-3.96-1.16-1.32-.77-2.2-1.71-2.64-2.8l-.99-1.65c-.66-2.2-.99-4.29-.99-6.27,0-3.3.28-6.6.83-9.9.55-3.3,1.21-6.43,1.98-9.41.77-2.97,1.49-5.61,2.15-7.92.66-2.31,1.1-4.01,1.32-5.11l3.63-10.23c2.42-6.16,4.62-11.22,6.6-15.18,1.98-3.96,3.74-7.15,5.28-9.57l2.97-4.62c3.74-5.72,7.42-10.06,11.05-13.04,3.63-2.97,5.55-4.34,5.78-4.12l.33-.33c1.1-.88,2.53-1.32,4.29-1.32,2.42,0,4.46.83,6.1,2.47s2.48,3.69,2.48,6.11c0,3.3-1.32,5.72-3.96,7.26l-1.65.66Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M586.71,190.41c.88-2.64,1.82-5.28,2.81-7.92.99-2.64,2.03-5.28,3.13-7.92l2.64-7.92c1.1-4.4,2.36-8.52,3.79-12.38,1.43-3.85,2.69-7.86,3.8-12.04l3.63-11.88.99-3.63.33-.66c1.32-3.74,3.96-5.61,7.92-5.61,2.42,0,4.4.88,5.94,2.64,1.54,1.76,2.31,3.74,2.31,5.94,0,1.1-.11,1.87-.33,2.31l-3.3,11.55-3.63,11.22c-3.3,11.22-6.71,22.77-10.23,34.65-3.52,11.88-6.82,23.71-9.9,35.48-3.08,11.77-5.78,23.38-8.08,34.81-2.31,11.44-4.12,22.22-5.45,32.34-.66,4.4-.99,8.69-.99,12.87l1.65-1.65c3.3-4.84,6.6-10.01,9.9-15.51,3.3-5.5,6.6-10.89,9.9-16.17l24.75-43.89c.66-1.1,1.76-1.65,3.3-1.65,2.42,0,3.63,1.1,3.63,3.3,0,1.1-.5,2.7-1.49,4.78-.99,2.09-2.14,4.35-3.46,6.77-1.32,2.42-2.7,4.73-4.12,6.93-1.43,2.2-2.59,4.07-3.46,5.61-5.06,9.02-10.34,17.93-15.84,26.73-5.5,8.8-11.11,17.93-16.83,27.39-.66.66-1.43,1.65-2.31,2.97-.88,1.32-1.81,2.64-2.8,3.96s-1.98,2.47-2.97,3.46c-.99.99-1.93,1.49-2.81,1.49-1.32,0-2.37-.66-3.13-1.98-.77-1.32-1.27-2.86-1.49-4.62-.22-1.76-.33-3.52-.33-5.28v-3.96c0-13.86,1.15-27.89,3.46-42.08,2.31-14.19,4.89-27.99,7.75-41.42,0-.44.11-.77.33-.99-3.52,5.28-6.66,11.28-9.41,17.99-2.75,6.71-5.78,13.15-9.08,19.3l-8.25,14.85c-3.08,5.28-6.27,10.01-9.57,14.19l-2.97,3.63-3.63,2.97-4.29,2.97-2.31.66-1.65.33c-3.08,0-4.95-.77-5.61-2.31-.44-.66-.66-1.43-.66-2.31l-.66-1.32c0-4.4.39-8.19,1.16-11.38.77-3.19,1.71-6.87,2.8-11.06l2.97-7.92c2.64-6.16,5.28-12.26,7.92-18.31,2.64-6.05,5.94-11.72,9.9-17l2.97-3.96c1.1-1.1,2.25-2.09,3.46-2.97,1.21-.88,2.69-1.76,4.46-2.64l1.98-.66h2.64c4.18,0,6.82,1.87,7.92,5.61,3.96-9.46,7.59-19.03,10.89-28.71ZM566.91,228.36c.22,0,.33-.11.33-.33l-1.32.66-1.65.66-5.28,4.95c-.88,1.1-1.76,2.15-2.64,3.13-.88.99-1.65,2.04-2.31,3.14l-4.62,6.6c-3.08,4.62-5.78,9.52-8.09,14.69-2.31,5.17-4.23,10.29-5.77,15.34l-1.65,7.59v3.63l.33.66,1.98-.66,2.64-1.98c1.1-.66,2.09-1.54,2.97-2.64.88-1.1,1.65-2.09,2.31-2.97l4.95-6.6,3.96-7.26,4.29-7.26c2.42-5.5,4.89-10.83,7.42-16,2.53-5.17,5-10.4,7.42-15.67-.44.22-1.05.44-1.82.66-.77.22-1.48.33-2.14.33-.44,0-.88-.22-1.32-.66Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M624.99,272.91l-1.98,9.9c-.44,1.76-.66,3.41-.66,4.95v4.95c0,1.98.11,3.52.33,4.62l1.32,3.63c0,.44.22.88.66,1.32l.66.66c.44.22.77.33.99.33h1.65c2.86,0,5.94-1.15,9.24-3.46,3.3-2.31,6.32-4.95,9.07-7.92,2.75-2.97,5.12-5.72,7.1-8.25,1.98-2.53,3.19-4.12,3.63-4.79l5.94-8.25,5.94-8.58c1.98-3.08,3.9-6.05,5.78-8.91,1.87-2.86,3.68-5.83,5.44-8.91l5.28-8.91,3.63-6.93,1.32-2.31c.66-1.76,1.98-2.64,3.96-2.64,1.32,0,2.47.44,3.46,1.32.99.88,1.49,1.98,1.49,3.3,0,.66-.22,1.43-.66,2.31l-5.61,9.57-2.64,4.29c-2.42,3.74-4.79,7.48-7.1,11.22-2.31,3.74-4.78,7.48-7.42,11.22l-12.54,17.16c-3.3,4.4-6.76,8.58-10.39,12.54-3.63,3.96-7.75,7.7-12.38,11.22l-5.28,2.97c-1.1.44-2.14.83-3.13,1.15-.99.33-2.03.6-3.13.83h-3.3c-2.42,0-4.4-.66-5.94-1.98-1.54-1.32-2.75-2.75-3.63-4.29-.88-1.54-1.54-3.03-1.98-4.46-.44-1.43-.66-2.26-.66-2.48-.66-1.76-1.04-3.68-1.15-5.77-.11-2.09-.17-4.01-.17-5.78l.33-11.22.66-5.61c.44-4.4,1.1-8.85,1.98-13.36.88-4.51,2.2-8.96,3.96-13.37l1.32-5.28,1.98-4.95,1.98-5.28c1.54-3.74,3.36-7.2,5.44-10.4,2.09-3.19,4.46-6.54,7.1-10.06l5.94-4.62c.66-.44,1.59-.88,2.81-1.32,1.21-.44,2.36-.66,3.46-.66h3.3c1.76,0,3.35.5,4.79,1.49,1.43.99,2.58,1.93,3.46,2.8l1.98,2.64,1.65,6.6c.22.88.33,1.98.33,3.3s-.06,2.47-.17,3.46c-.11.99-.28,2.04-.5,3.13l-.99,5.61c-.44,2.86-1.21,5.78-2.31,8.75-1.1,2.97-2.09,5.34-2.97,7.09l-1.65,3.96-.33,1.32c-2.42,4.62-5.39,9.13-8.91,13.53-3.52,4.4-7.7,7.15-12.54,8.25h-2.31l-2.31-.99-2.31-.99-1.32-1.98-.33-.33-.66,3.63ZM630.93,257.07c0,2.2.11,3.74.33,4.62l.99,2.97c.22.22.44.33.66.33h.33c.22,0,.44-.05.66-.17.22-.11.44-.17.66-.17l1.32-.99,2.97-3.3,2.31-3.63c.88-1.54,1.7-3.19,2.47-4.95.77-1.76,1.16-3.41,1.16-4.95l.99-3.96.99-4.95c.22-1.76.44-3.41.66-4.95.22-1.54.33-3.19.33-4.95l.33-7.26c-1.98,1.98-3.96,4.57-5.94,7.76-1.98,3.19-3.79,6.49-5.44,9.9-1.65,3.41-3.03,6.82-4.12,10.23-1.1,3.41-1.65,6.22-1.65,8.42ZM647.76,216.48h-.33c0,.22.11.33.33.33v-.33Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M784.71,190.41c.88-2.64,1.82-5.28,2.81-7.92.99-2.64,2.03-5.28,3.13-7.92l2.64-7.92c1.1-4.4,2.36-8.52,3.79-12.38,1.43-3.85,2.69-7.86,3.8-12.04l3.63-11.88.99-3.63.33-.66c1.32-3.74,3.96-5.61,7.92-5.61,2.42,0,4.4.88,5.94,2.64,1.54,1.76,2.31,3.74,2.31,5.94,0,1.1-.11,1.87-.33,2.31l-3.3,11.55-3.63,11.22c-3.3,11.22-6.71,22.77-10.23,34.65-3.52,11.88-6.82,23.71-9.9,35.48-3.08,11.77-5.78,23.38-8.08,34.81-2.31,11.44-4.12,22.22-5.45,32.34-.66,4.4-.99,8.69-.99,12.87l1.65-1.65c3.3-4.84,6.6-10.01,9.9-15.51,3.3-5.5,6.6-10.89,9.9-16.17l24.75-43.89c.66-1.1,1.76-1.65,3.3-1.65,2.42,0,3.63,1.1,3.63,3.3,0,1.1-.5,2.7-1.49,4.78-.99,2.09-2.14,4.35-3.46,6.77-1.32,2.42-2.7,4.73-4.12,6.93-1.43,2.2-2.59,4.07-3.46,5.61-5.06,9.02-10.34,17.93-15.84,26.73-5.5,8.8-11.11,17.93-16.83,27.39-.66.66-1.43,1.65-2.31,2.97-.88,1.32-1.81,2.64-2.8,3.96s-1.98,2.47-2.97,3.46c-.99.99-1.93,1.49-2.81,1.49-1.32,0-2.37-.66-3.13-1.98-.77-1.32-1.27-2.86-1.49-4.62-.22-1.76-.33-3.52-.33-5.28v-3.96c0-13.86,1.15-27.89,3.46-42.08,2.31-14.19,4.89-27.99,7.75-41.42,0-.44.11-.77.33-.99-3.52,5.28-6.66,11.28-9.41,17.99-2.75,6.71-5.78,13.15-9.08,19.3l-8.25,14.85c-3.08,5.28-6.27,10.01-9.57,14.19l-2.97,3.63-3.63,2.97-4.29,2.97-2.31.66-1.65.33c-3.08,0-4.95-.77-5.61-2.31-.44-.66-.66-1.43-.66-2.31l-.66-1.32c0-4.4.39-8.19,1.16-11.38.77-3.19,1.71-6.87,2.8-11.06l2.97-7.92c2.64-6.16,5.28-12.26,7.92-18.31,2.64-6.05,5.94-11.72,9.9-17l2.97-3.96c1.1-1.1,2.25-2.09,3.46-2.97,1.21-.88,2.69-1.76,4.46-2.64l1.98-.66h2.64c4.18,0,6.82,1.87,7.92,5.61,3.96-9.46,7.59-19.03,10.89-28.71ZM764.91,228.36c.22,0,.33-.11.33-.33l-1.32.66-1.65.66-5.28,4.95c-.88,1.1-1.76,2.15-2.64,3.13-.88.99-1.65,2.04-2.31,3.14l-4.62,6.6c-3.08,4.62-5.78,9.52-8.09,14.69-2.31,5.17-4.23,10.29-5.77,15.34l-1.65,7.59v3.63l.33.66,1.98-.66,2.64-1.98c1.1-.66,2.09-1.54,2.97-2.64.88-1.1,1.65-2.09,2.31-2.97l4.95-6.6,3.96-7.26,4.29-7.26c2.42-5.5,4.89-10.83,7.42-16,2.53-5.17,5-10.4,7.42-15.67-.44.22-1.05.44-1.82.66-.77.22-1.48.33-2.14.33-.44,0-.88-.22-1.32-.66Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 19,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M854.33,215.49h-.66c.22.22-.11.44-.99.66-.88.22-1.54.55-1.98.99-1.54.66-3.25,1.82-5.12,3.47-1.87,1.65-3.58,3.36-5.12,5.11l-2.97,3.63c-6.16,7.7-10.83,15.57-14.03,23.6-3.19,8.03-6.32,17-9.4,26.89l-.66,4.95c-.22,1.1-.33,2.64-.33,4.62l.33,3.96.66.66v-.33h.33l2.97-2.31,3.3-3.96,1.32-1.98c1.1-1.54,2.31-3.41,3.63-5.61,1.32-2.2,2.59-4.56,3.79-7.09,1.21-2.53,2.31-5.12,3.3-7.75.99-2.64,1.7-5.06,2.15-7.26l.99-2.64c.22-.44.33-.83.33-1.16s.22-.71.66-1.15l.99-3.63.99-3.96v-.33l.33-.66v-.66c0-.22.11-.44.33-.66l.33-.99c1.32-2.64,3.41-3.96,6.27-3.96,2.42,0,4.29.77,5.61,2.31,1.32,1.54,1.98,3.19,1.98,4.95v.99l-.99,4.95c-.44,2.42-.88,4.9-1.32,7.42-.44,2.53-.66,5.01-.66,7.43l7.26-12.21c1.32-2.42,2.91-5.33,4.79-8.74,1.87-3.41,3.79-6.71,5.78-9.9,1.98-3.19,3.9-5.88,5.77-8.08,1.87-2.2,3.46-3.3,4.79-3.3s2.36.5,3.13,1.48c.77.99,1.16,2.04,1.16,3.14,0,.66-.22,1.43-.66,2.31l-16.83,27.72c-1.54,2.42-2.92,4.79-4.12,7.1-1.21,2.31-2.47,4.68-3.79,7.09l-3.96,6.93c-1.1,1.98-2.09,4.12-2.97,6.44-.88,2.31-2.42,3.46-4.62,3.46-1.76,0-3.08-.5-3.96-1.49-.88-.99-1.32-1.92-1.32-2.8l-1.32-4.62-.66-5.61c-.22-.22-.33-.66-.33-1.32l-1.65,2.64-5.61,9.24-4.62,6.93c-1.76,1.76-4.07,3.69-6.93,5.78-2.86,2.09-4.4,3.24-4.62,3.46h-1.65c-1.32,0-2.64-.39-3.96-1.16-1.32-.77-2.2-1.71-2.64-2.8l-.99-1.65c-.66-2.2-.99-4.29-.99-6.27,0-3.3.28-6.6.83-9.9.55-3.3,1.21-6.43,1.98-9.41.77-2.97,1.49-5.61,2.15-7.92.66-2.31,1.1-4.01,1.32-5.11l3.63-10.23c2.42-6.16,4.62-11.22,6.6-15.18,1.98-3.96,3.74-7.15,5.28-9.57l2.97-4.62c3.74-5.72,7.42-10.06,11.05-13.04,3.63-2.97,5.55-4.34,5.78-4.12l.33-.33c1.1-.88,2.53-1.32,4.29-1.32,2.42,0,4.46.83,6.1,2.47s2.48,3.69,2.48,6.11c0,3.3-1.32,5.72-3.96,7.26l-1.65.66Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M927.92,227.04l7.92-14.52,17.16-46.86,10.56-24.75,4.95-9.24,1.98-3.3,1.32-1.65,2.64-2.31.99-.33c.44-.44,1.21-.71,2.31-.83,1.1-.11,1.98-.17,2.64-.17h.33c.44.44.66.55.66.33h.33c1.76.67,3.08,1.55,3.96,2.65.88,1.1,1.54,2.2,1.98,3.3.44,1.1.66,2.1.66,2.98v1.66c0,2.42-.17,4.14-.5,5.13-.33,1-.72,2.04-1.15,3.14l-3.96,9.93-5.94,11.91c-2.2,3.97-4.35,7.95-6.43,11.92-2.09,3.97-4.35,7.83-6.77,11.58l-10.56,16.54c-1.32,1.33-2.48,3.31-3.46,5.96-.99,2.65-1.98,5.52-2.97,8.6-.99,3.09-1.93,6.23-2.8,9.43-.88,3.2-1.76,6.01-2.64,8.44l1.65,1.99,1.98,1.66,1.65,1,2.97,1.66c1.54.66,3.13,1.27,4.79,1.82,1.65.55,3.35.82,5.11.82,5.28,0,9.41-1.04,12.38-3.13,2.97-2.09,5.33-4.46,7.1-7.09,1.76-2.64,3.13-5,4.12-7.09.99-2.09,2.14-3.14,3.46-3.14,1.1,0,1.98.44,2.64,1.32.66.88.99,1.65.99,2.31,0,.44-.06.88-.17,1.32-.11.44-.28.66-.5.66v.33c-3.74,5.5-8.25,10.45-13.53,14.85-5.28,4.4-12.1,6.6-20.46,6.6-2.42,0-4.73-.11-6.93-.33-2.2-.22-4.29-.55-6.27-.99l-2.97-.66c-.66,1.1-1.1,2.31-1.32,3.63l-4.29,10.56c-4.18,11-8.19,21.89-12.05,32.67-3.85,10.78-7.64,21.67-11.38,32.67l-15.51,43.89-11.55,33-3.63,10.56c-.66,1.76-1.87,2.64-3.63,2.64-.88,0-1.65-.39-2.31-1.16-.66-.77-.99-1.48-.99-2.14,0-.22.06-.39.17-.5s.17-.28.17-.5v-.33c1.1-4.18,2.31-8.36,3.63-12.54,1.32-4.18,2.53-8.36,3.63-12.54l5.61-19.47,12.87-44.55c3.52-11.22,6.82-22.33,9.9-33.33,3.08-11,6.6-22.11,10.56-33.33l5.28-16.83.99-2.97,3.63-8.58c-.88-.66-1.32-1.54-1.32-2.64,0-.88.11-1.43.33-1.65Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M980.05,272.91l-1.98,9.9c-.44,1.76-.66,3.41-.66,4.95v4.95c0,1.98.11,3.52.33,4.62l1.32,3.63c0,.44.22.88.66,1.32l.66.66c.44.22.77.33.99.33h1.65c2.86,0,5.94-1.15,9.24-3.46,3.3-2.31,6.32-4.95,9.07-7.92,2.75-2.97,5.12-5.72,7.1-8.25,1.98-2.53,3.19-4.12,3.63-4.79l5.94-8.25,5.94-8.58c1.98-3.08,3.9-6.05,5.78-8.91,1.87-2.86,3.68-5.83,5.44-8.91l5.28-8.91,3.63-6.93,1.32-2.31c.66-1.76,1.98-2.64,3.96-2.64,1.32,0,2.47.44,3.46,1.32.99.88,1.49,1.98,1.49,3.3,0,.66-.22,1.43-.66,2.31l-5.61,9.57-2.64,4.29c-2.42,3.74-4.79,7.48-7.1,11.22-2.31,3.74-4.78,7.48-7.42,11.22l-12.54,17.16c-3.3,4.4-6.76,8.58-10.39,12.54-3.63,3.96-7.75,7.7-12.38,11.22l-5.28,2.97c-1.1.44-2.14.83-3.13,1.15-.99.33-2.03.6-3.13.83h-3.3c-2.42,0-4.4-.66-5.94-1.98-1.54-1.32-2.75-2.75-3.63-4.29-.88-1.54-1.54-3.03-1.98-4.46-.44-1.43-.66-2.26-.66-2.48-.66-1.76-1.04-3.68-1.15-5.77-.11-2.09-.17-4.01-.17-5.78l.33-11.22.66-5.61c.44-4.4,1.1-8.85,1.98-13.36.88-4.51,2.2-8.96,3.96-13.37l1.32-5.28,1.98-4.95,1.98-5.28c1.54-3.74,3.36-7.2,5.44-10.4,2.09-3.19,4.46-6.54,7.1-10.06l5.94-4.62c.66-.44,1.59-.88,2.81-1.32,1.21-.44,2.36-.66,3.46-.66h3.3c1.76,0,3.35.5,4.79,1.49,1.43.99,2.58,1.93,3.46,2.8l1.98,2.64,1.65,6.6c.22.88.33,1.98.33,3.3s-.06,2.47-.17,3.46c-.11.99-.28,2.04-.5,3.13l-.99,5.61c-.44,2.86-1.21,5.78-2.31,8.75-1.1,2.97-2.09,5.34-2.97,7.09l-1.65,3.96-.33,1.32c-2.42,4.62-5.39,9.13-8.91,13.53-3.52,4.4-7.7,7.15-12.54,8.25h-2.31l-2.31-.99-2.31-.99-1.32-1.98-.33-.33-.66,3.63ZM985.99,257.07c0,2.2.11,3.74.33,4.62l.99,2.97c.22.22.44.33.66.33h.33c.22,0,.44-.05.66-.17.22-.11.44-.17.66-.17l1.32-.99,2.97-3.3,2.31-3.63c.88-1.54,1.7-3.19,2.47-4.95.77-1.76,1.16-3.41,1.16-4.95l.99-3.96.99-4.95c.22-1.76.44-3.41.66-4.95.22-1.54.33-3.19.33-4.95l.33-7.26c-1.98,1.98-3.96,4.57-5.94,7.76-1.98,3.19-3.79,6.49-5.44,9.9-1.65,3.41-3.03,6.82-4.12,10.23-1.1,3.41-1.65,6.22-1.65,8.42ZM997.21,178.86l29.7-24.42c.66-.66,1.54-.99,2.64-.99,1.54,0,2.8.83,3.79,2.47.99,1.65,1.48,3.46,1.48,5.45,0,1.76-.33,3.19-.99,4.29-.66,1.1-1.54,2.2-2.64,3.3l-32.67,14.85h-.66c-.44,0-.88-.22-1.32-.66-.44-.44-.66-1.1-.66-1.98,0-.66.44-1.43,1.32-2.31ZM1002.82,216.48h-.33c0,.22.11.33.33.33v-.33Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Footer.tsx",
                lineNumber: 8,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M286.58,392.48c0-16.08,13.08-28.68,30.36-28.68,10.92,0,17.04,3.84,20.28,6.12l-6.36,11.88c-2.52-1.68-6.36-3.72-12.12-3.72-9.6,0-16.08,6-16.08,14.4s6.36,14.4,15.84,14.4c6.12,0,9.84-2.04,12.36-3.72l6.24,11.76c-3.36,2.16-9.24,6.24-20.16,6.24-17.64,0-30.36-12.48-30.36-28.68Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 25,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M427.33,389.6v30.48h-15.72v-28.32c0-8.28-5.04-13.8-12.24-13.8-7.92,0-12.72,6-12.72,13.32v28.8h-15.72v-85.68h15.72v35.4c3.36-3.48,8.64-6,15.84-6,14.64,0,24.84,10.32,24.84,25.8Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 26,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M519.25,364.89v55.2h-12.6l-.48-7.2c-3.24,4.8-9.24,8.28-16.92,8.28-14.88,0-25.44-10.32-25.44-25.8v-30.48h15.72v27.36c0,8.28,4.8,13.8,11.64,13.8,7.8,0,12.36-6,12.36-13.32v-27.84h15.72Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 27,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M593.89,364.28l-1.32,15.6c-1.56-.6-3-1.08-5.52-1.08-8.76,0-14.16,5.76-14.16,13.56v27.72h-15.72v-55.2h13.08l.6,10.8c1.92-6.72,8.76-11.88,18.24-11.88,1.68,0,3.36.12,4.8.48Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 28,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M620.17,392.48c0-16.08,13.08-28.68,30.36-28.68,10.92,0,17.04,3.84,20.28,6.12l-6.36,11.88c-2.52-1.68-6.36-3.72-12.12-3.72-9.6,0-16.08,6-16.08,14.4s6.36,14.4,15.84,14.4c6.12,0,9.84-2.04,12.36-3.72l6.24,11.76c-3.36,2.16-9.24,6.24-20.16,6.24-17.64,0-30.36-12.48-30.36-28.68Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 29,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M760.93,389.6v30.48h-15.72v-28.32c0-8.28-5.04-13.8-12.24-13.8-7.92,0-12.72,6-12.72,13.32v28.8h-15.72v-85.68h15.72v35.4c3.36-3.48,8.64-6,15.84-6,14.64,0,24.84,10.32,24.84,25.8Z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Footer.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "logo-gradient",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#f34906"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 34,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#fb349f"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 35,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Footer.tsx",
                lineNumber: 32,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 3
    }, this);
function Footer() {
    const gradientHoverStyle = "hover:bg-gradient-to-r from-[#f34906] to-[#fb349f] hover:bg-clip-text hover:text-transparent transition-all";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#0e142d] mt-10 rounded-2xl w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "https://comunidadedafe.org/",
                            className: "flex items-center gap-3 mb-4 sm:mb-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "self-center text-2xl font-semibold whitespace-nowrap bg-gradient-to-r from-[#f34906] to-[#fb349f] bg-clip-text text-transparent",
                                children: "Comunidade da Fé"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Footer.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: `me-4 md:me-6 ${gradientHoverStyle}`,
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "http://wa.me/5519999422779",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: gradientHoverStyle,
                                        children: "Contato"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Footer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "my-6 border-gray-700 sm:mx-auto lg:my-8"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-sm text-gray-500 sm:text-center",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://comunidadedafe.org/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: `hover:underline ${gradientHoverStyle}`,
                            children: "Comunidade da Fé Church™"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Footer.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        ". Todos os direitos reservados."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/Footer.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Footer.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Footer.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/admin/leads/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminLeadsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib2$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib2/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChartG$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ChartG.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DataTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/DataTable.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/NavBar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Footer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function AdminLeadsPage() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib2$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session || session.user?.role !== "admin") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/login");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$NavBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/admin/leads/page.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 max-w-7xl mx-auto text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ChartG$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/leads/page.tsx",
                        lineNumber: 21,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/leads/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$DataTable$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/leads/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/admin/leads/page.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/leads/page.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/leads/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/admin/leads/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/leads/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1a460b00._.js.map