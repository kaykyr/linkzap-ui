// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = ({ children }) => /* @__PURE__ */ jsx("button", { className: "flex justify-center w-[150px] h-[40px] bg-blue-500 rounded hover:opacity-75 transition-opacity duration-300 p-5", children: /* @__PURE__ */ jsxs("span", { className: "text-white", children: [
  "Teste: ",
  children
] }) });
export {
  Button
};
