import React from "react";

import { HashRouter } from "react-router-dom";
// 引入组件
import RouterView from "./router";
import routes from "./router/routes";
import HomeHead from "./components/HomeHead";

const App = () => {
  return (
    <HashRouter>
      <HomeHead />
      {/* 路由容器 */}
      <div className="content">
        <RouterView routes={routes} />
      </div>
    </HashRouter>
  );
};

/**
 * 基于HashRouter把所有要渲染的内容包起来，开启HASH路由
 *   + 后续用到的<Route><Link>都需要在HashRouter中使用
 *   + 开启HashRouter后，会默认出现/#/
 * Link实现路由切换/跳转的组件
 *   + 最后渲染完毕的结果依然是A标签
 *   + 它可以根据路由模式，自动设定点击A切换的方式
 * */
// const App = () => {
//   return (
//     <HashRouter>
//       {/* 导航部分 */}
//       <NavBox>
//         <Link to="/">A</Link>
//         <Link to="/b">B</Link>
//         <Link to="/c">C</Link>
//       </NavBox>

//       {/* 路由容器:每一次页面加载或者路由切换完毕，都会根据当前的哈希值，到这里和每一个Route进行批评
//         把匹配到的组件，放在容器中渲染
//         路由地址匹配的规则:
//           + 默认非精准的规则
//             路由地址：Route中path字指定的地址
//             页面地址：浏览器url后面的哈希值
//             页面地址  路由地址 是否匹配成功 精准匹配
//             /        /      true       true
//             /        /login  false     false
//             /login   /       true      false
//           /和/xxx算是地址的一个整体
//           非精准匹配：
//           + 页面地址和路由地址一样，返回true
//           + 页面地址中，包含一套完整的路由地址
//           精准匹配
//           + 两个地址必须一摸一样
//       */}
//       <div className="content">
//         {/* switch确保路由中只匹配一项
//           exact设置为精准匹配
//         */}
//         <Switch>
//           <Route exact path="/" component={A} />
//           <Route path="/b" component={B} />
//           <Route
//             path="/c"
//             render={() => {
//               // 当路由地址匹配后，先把render函数执行，返回到返回值就是我们需要渲染的内容
//               // 在此函数中，可以处理一些事情，比如：登录态校验
//               let isLogin = false;
//               if (isLogin) {
//                 return <C />;
//               }
//               return <Redirect to="/login" />;
//             }}
//           />

//           {/* 放在最后一项，path设置*或者不写，意思是：以上都不匹配，则执行这个规则 */}
//           {/* <Route path="*" component={NotFound} /> */}
//           {/* 也可以不设置404，而是重定向到首页
//             to定向到哪个地址
//             from从哪个地址来
//             exact是对from地址到修饰，开启精准匹配
//           */}
//           <Route path="/login" component={Login} />
//           <Redirect to="/" />
//         </Switch>
//       </div>
//     </HashRouter>
//   );
// };

export default App;
