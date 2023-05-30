"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const server = require("react-dom/server");
const Layout = () => {
  const [count, setCount] = react.useState(0);
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx("h1", { children: "Hi" }),
    /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      "count: ",
      count,
      /* @__PURE__ */ jsxRuntime.jsx("button", { onClick: () => setCount(count + 1), children: "count + 1" })
    ] })
  ] });
};
const App = () => /* @__PURE__ */ jsxRuntime.jsx(Layout, {});
const render = () => {
  return server.renderToString(/* @__PURE__ */ jsxRuntime.jsx(App, {}));
};
exports.render = render;
