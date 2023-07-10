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
  Button: () => Button,
  Card: () => Card,
  InputSearch: () => InputSearch,
  Option: () => Option,
  Select: () => Select,
  TopNav: () => TopNav
});
module.exports = __toCommonJS(src_exports);

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
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bg-[#373737] p-10 text-black", children: "Alguma coisa" });

// src/Icons/SearchIcon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var SearchIcon = ({
  color,
  className
}) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_jsx_runtime4 = require("react/jsx-runtime");
var InputSearch = ({
  color,
  iconColor,
  className,
  disabled
}) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "input",
        {
          className: "\n                bg-transparent\n                placeholder:text-sm\n                placeholder:font-bold\n            ",
          type: "search",
          placeholder: "Pesquisar"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SearchIcon, { color: iconColor })
    ]
  }
);

// src/Input/InputSelect.tsx
var import_react = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Select = ({
  label,
  className,
  children,
  defaultValue,
  handler
}) => {
  const [isVisible, setIsVisible] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: clsx_m_default(`mb-4 w-full ${className}`),
      onClick: () => setIsVisible(!isVisible),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "text-darkBlue mb-4 text-xs font-semibold leading-5", children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "div",
          {
            "data-visible": isVisible,
            className: "\n                    data-[visible=true]:bg-bgContrast\n                    data-[visible=false]:bg-bg\n\n                    relative\n                    float-none\n                    h-[50px]\n                    w-full\n                    cursor-pointer\n                    rounded-lg\n                    border-none\n                    font-medium\n                    leading-10\n                    shadow-md\n                    transition-all\n                    duration-200\n\n                    before:absolute\n                    before:right-4\n                    before:mt-7\n                    before:h-4\n                    before:w-3\n                    before:content-none\n                ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "div",
                {
                  className: "\n                        overflow-hidden\n                        overflow-ellipsis\n                        whitespace-nowrap\n                        text-gray-300\n                    ",
                  style: {
                    maxWidth: "calc(100% - 46px)"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "overflow-hidden overflow-ellipsis whitespace-nowrap px-4 py-0 text-gray-300", children: label })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
                "ul",
                {
                  className: "\n                        relative\n                        left-0\n                        right-0\n                        z-10\n                        mt-1\n                        max-h-[300px]\n                        overflow-hidden\n                        overflow-y-auto\n                        border\n                        border-solid\n                        border-gray-600\n                        p-6\n                        px-5\n                        py-3\n                        shadow-md\n                        group-[data-[visible=true]]:block\n                        group-[data-[visible=false]]:hidden\n                    ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Option, { value: "1", children: "Teste 1" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Option, { value: "2", children: "Teste 2" }),
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Option, { value: "3", children: "Teste 3" })
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
var Option = ({ label, value }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
  "li",
  {
    className: "\n            hover:text-primary\n            relative\n            text-gray-200\n            opacity-70\n            transition-all\n\n            duration-200\n            before:absolute\n            before:-ml-4\n            before:mt-6\n            before:h-3\n\n            before:w-3\n            before:transition-opacity\n            before:duration-200\n            before:content-none\n            hover:cursor-pointer\n            hover:opacity-100\n\n            hover:transition-all\n            hover:duration-200\n        ",
    "data-value": value,
    children: label
  }
);

// src/Navigation/TopNav.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var TopNav = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mt-12 flex h-12 flex-row items-center justify-between", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(InputSearch, { color: "transparent" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex flex-row items-center justify-between" })
] }) });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  InputSearch,
  Option,
  Select,
  TopNav
});
