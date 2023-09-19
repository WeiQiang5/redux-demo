import { Link, Route, Switch } from "react-router-dom";
import A1 from "./a/A1";
import styled from "styled-components";
import A2 from "./a/A2";
import A3 from "./a/A3";
import RouterView from "../router";
import aRoutes from "../router/aRoutes";

const DemoBox = styled.div`
  display: flex;
  font-size: 12px;
  .menu {
    a {
      font-size: 12px;
      color: #000;
      display: block;
    }
  }
`;

const A = () => {
  return (
    <DemoBox>
      <div className="menu">
        <Link to="/a/a1">A1</Link>
        <Link to="/a/a2">A2</Link>
        <Link to="/a/a3">A3</Link>
      </div>
      <div className="view">
        {/* 配置二级路由的匹配规则：需要把一级路由地址带上，不能省略 */}
        <RouterView routes={aRoutes} />
      </div>
    </DemoBox>
  );
};

export default A;
