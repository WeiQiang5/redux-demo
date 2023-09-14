import React from "react";
import ReactDOM from "react-dom/client";
// 使用antd
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import ThemeContext from "./ThemeContext";
import Vote from "./views/Vote";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCn}>
    <ThemeContext.Provider>
      <Vote />
    </ThemeContext.Provider>
  </ConfigProvider>
);
