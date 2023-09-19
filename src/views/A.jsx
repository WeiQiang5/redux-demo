import { Link, Route, Switch } from "react-router-dom";
import A1 from "./a/A1";
import styled from "styled-components";
import A2 from "./a/A2";
import A3 from "./a/A3";

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
        <Switch>
          <Route path="/a/a1" component={A1} />
          <Route path="/a/a2" component={A2} />
          <Route path="/a/a3" component={A3} />
        </Switch>
      </div>
    </DemoBox>
  );
};

export default A;
