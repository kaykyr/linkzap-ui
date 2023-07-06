"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Banner: () => Banner,
  Button: () => Button,
  Card: () => Card,
  Chart: () => Chart,
  InputSearch: () => InputSearch,
  List: () => List,
  TopNav: () => TopNav
});
module.exports = __toCommonJS(src_exports);

// src/Banner/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Banner = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {});

// ../../node_modules/clsx/dist/clsx.m.js
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; )
    (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default = clsx;

// src/Button/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    children,
    color,
    size,
    className,
    disabled
  } = _b, rest = __objRest(_b, [
    "children",
    "color",
    "size",
    "className",
    "disabled"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "button",
    __spreadProps(__spreadValues({
      className: clsx_m_default(
        `font-secondary flex justify-center rounded p-2 text-sm font-semibold transition-opacity duration-300 hover:opacity-75 ${className}`,
        {
          "w-full": size === "w-full",
          "bg-lightGrey": disabled === true,
          "bg-primary": color === "primary" && !disabled,
          "bg-success": color === "success" && !disabled,
          "bg-danger": color === "danger" && !disabled,
          "bg-warning": color === "warning" && !disabled,
          "bg-dark": color === "dark" && !disabled,
          "bg-light": color === "lightGrey" && !disabled,
          "bg-white": color === "white" && !disabled,
          "cursor-not-allowed": disabled
        }
      ),
      disabled
    }, rest), {
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "span",
        {
          className: clsx_m_default("", {
            "text-white": !color,
            "text-light": color === "lightGrey" || disabled || color === "white"
          }),
          children
        }
      )
    })
  );
};

// src/Card/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Card = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "bg-[#373737] p-10 text-black", children: "Alguma coisa" });

// src/Chart/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Chart = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {});

// src/Icons/SearchIcon.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SearchIcon = ({
  color,
  className
}) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "path",
      {
        className,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.61154 0C4.30323 0 0 4.20819 0 9.39926C0 14.5903 4.30323 18.7985 9.61154 18.7985C11.8819 18.7985 13.9684 18.0287 15.613 16.7415L18.7371 19.7886L18.8202 19.8586C19.1102 20.0685 19.5214 20.0446 19.7839 19.7873C20.0726 19.5043 20.072 19.0459 19.7825 18.7636L16.6952 15.7523C18.2649 14.0794 19.2231 11.8487 19.2231 9.39926C19.2231 4.20819 14.9198 0 9.61154 0ZM9.61154 1.44774C14.1022 1.44774 17.7426 5.00776 17.7426 9.39926C17.7426 13.7908 14.1022 17.3508 9.61154 17.3508C5.12086 17.3508 1.48044 13.7908 1.48044 9.39926C1.48044 5.00776 5.12086 1.44774 9.61154 1.44774Z",
        fill: color || "#11142D"
      }
    )
  }
);

// src/Input/InputSearch.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var InputSearch = ({
  color,
  iconColor,
  className,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
  "div",
  {
    className: clsx_m_default(
      `
                flex
                flex-row
                items-center
                justify-center
                rounded-xl
                px-6
                py-4
                ${className}
            `,
      {
        "bg-transparent": color === "transparent" && !disabled,
        "bg-lightGrey": color === "lightGrey" || !color || disabled,
        "cursor-not-allowed": disabled
      }
    ),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "input",
        {
          className: "\n                bg-transparent\n                placeholder:text-sm\n                placeholder:font-bold\n            ",
          type: "search",
          placeholder: "Pesquisar"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SearchIcon, { color: iconColor })
    ]
  }
);

// src/List/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var List = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", {});

// src/Navigation/TopNav.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var TopNav = () => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "mt-12 flex h-12 flex-row items-center justify-between", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InputSearch, { color: "transparent" }),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "flex flex-row items-center justify-between" })
] }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Banner,
  Button,
  Card,
  Chart,
  InputSearch,
  List,
  TopNav
});
