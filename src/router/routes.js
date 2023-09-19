/**
 * 配置路由表:数组中每一项就是每一个需要配置的路由规则
 *   + redirect:true 此配置为重定向
 *   + from 来源的地址
 *   + to 重定向的地址
 *   + exact 是否精准匹配
 *   + path匹配的路径
 *   + component 渲染的组件
 *   + meta:{}路由元信息
 *   + children 子路由
 * */

import A from "../views/A";
import B from "../views/B";
import C from "../views/C";
import NotFound from "../views/NotFound";
import aRoutes from "./aRoutes";

const routes = [
  {
    redirect: true,
    from: "/",
    to: "/a",
    exact: true,
  },
  {
    path: "/a",
    component: A,
    name: "a",
    meta: {},
    children: aRoutes,
  },
  {
    path: "/b",
    component: B,
    name: "b",
    meta: {},
  },
  {
    path: "/c",
    component: C,
    name: "c",
    meta: {},
  },
  {
    path: "/notFound",
    component: NotFound,
    name: "notFound",
    meta: {},
  },
  {
    redirect: true,
    to: "/notFound",
  },
];

export default routes;
