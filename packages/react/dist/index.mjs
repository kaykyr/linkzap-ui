var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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

// src/Banner/index.tsx
import { jsx } from "react/jsx-runtime";
var Banner = () => /* @__PURE__ */ jsx("div", {});

// src/Button/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx2(
    "button",
    __spreadProps(__spreadValues({
      className: `flex justify-center rounded bg-${color || "primary"} p-2 transition-opacity duration-300 hover:opacity-75 ${className}`,
      disabled
    }, rest), {
      children: /* @__PURE__ */ jsx2("span", { className: "text-white", children })
    })
  );
};

// src/Card/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Card = () => /* @__PURE__ */ jsx3("div", {});

// src/Chart/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Chart = () => /* @__PURE__ */ jsx4("div", {});

// src/Input/InputSearch.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var InputSearch = () => /* @__PURE__ */ jsx5("input", { type: "search" });

// src/List/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var List = () => /* @__PURE__ */ jsx6("div", {});

// src/Navigation/TopNav.tsx
import { jsx as jsx7, jsxs } from "react/jsx-runtime";
var TopNav = () => /* @__PURE__ */ jsx7("div", { className: "w-full", children: /* @__PURE__ */ jsxs("div", { className: "mt-12 flex h-12 flex-row items-center justify-between", children: [
  /* @__PURE__ */ jsx7(InputSearch, {}),
  /* @__PURE__ */ jsx7("div", { className: "flex flex-row items-center justify-between" })
] }) });
export {
  Banner,
  Button,
  Card,
  Chart,
  InputSearch,
  List,
  TopNav
};
