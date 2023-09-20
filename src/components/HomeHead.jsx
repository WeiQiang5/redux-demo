import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const NavBox = styled.nav`
  a {
    margin-right: 10px;
    color: #000;
  }
`;

/**
 * 只要在HashRouter/BrowserRoute中渲染的组件
 *  我们在组件内部，基于useHistory/useLocation/useRouteMatch这些hook函数，就可以获取<history />
 <location />match这些对象信息
 即便这个组件并不是基于route匹配渲染的

 只有基于Route匹配渲染的组件，才可以基于props属性，获取这三个属性信息

 问题：如果当前组件是一个类组件，在HashRouter内，但是并没有经过Route匹配渲染，我们如何获取信息：
   + 使用函数高阶组件，自己包裹一层进行处理
 * */
// const HomeHead = () => {
//   console.log(useHistory());
//   return (
//     <NavBox>
//       <Link to="/a">A</Link>
//       <Link to="/b">B</Link>
//       <Link to="/c">C</Link>
//     </NavBox>
//   );
// };

class HomeHead extends React.Component {
  render() {
    console.log("类组件", this.props);
    return (
      <NavBox>
        <Link to="/a">A</Link>
        <Link to="/b">B</Link>
        <Link to="/c">C</Link>
      </NavBox>
    );
  }
}

const Handle = function Handle(Component) {
  // 返回一个代理高阶组件
  return function HOC(props) {
    let history = useHistory();
    return <Component {...props} history={history} />;
  };
};

export default Handle(HomeHead);
