import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// 调用组件的时候，基于属性传递路由表进来，我们根据路由表，动态表示路由的匹配规则
const RouterView = function RouterView(props) {
  // 获取传递的路由表
  let { routes } = props;
  console.log("routes", routes);
  return (
    <Switch>
      {routes.map((route, index) => {
        let { redirect, from, to, exact, component: Component, path } = route,
          config = {};
        if (redirect) {
          config = { to };
          if (from) config.from = from;
          if (exact) config.exact = exact;
          return <Redirect key={index} {...config} />;
        }
        config = {
          path,
        };
        if (exact) config.exact = exact;
        return (
          <Route
            key={index}
            {...config}
            render={(props) => {
              console.log(props);
              // 统一基于render函数处理，当某个路由匹配，后期在这里可以做一些其他事情
              return (
                // fallback在异步加载组件没有完成之前，先展示的loading效果
                <Suspense fallback={<>正在处理中....</>}>
                  <Component {...props} />
                </Suspense>
              );
            }}
          />
        );
      })}
    </Switch>
  );
};

export default RouterView;
