import React from "react";
import ReactDOM from "react-dom/client";
// 使用antd
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import App from "./App";

/**
 * 为了在各个组件中，都可以把创建的store获取到，我们可以基于上下文的方案：
 * 1.在index.jsx中，基于ThemeContext.Provider把创建的store放在上下文中
 * 2.因为所有组件最后都是在index.jsx中渲染，私有组件都可以理解为index.jsx的后代组件，基于上下文案，获取在上下文中存储的store就可以了
 * */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCn}>
    <App />
  </ConfigProvider>
);
