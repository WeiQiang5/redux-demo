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

/**
 * 当前是把所有组件全部都导入进来，再基于route做路由匹配，这样：最后项目打包的时候，私有组件全部打包到一个js文件中
 * 这样会导致js文件过大：
 *  + 第一次加载页面大时候，从服务器获取这个js文件就会用很久的时间，导致此阶段，页面一直处于白屏的状态，这样很不好
 *  + 虽然说优化方案中，有建议合并为一个js文件，这样减少http请求，但是这个文件不宜过大
 * 最好的处理方案是：
 *  1.我们只把最开始要展示的内容打包到主js中bundle.js,其余的组件，单独打包成独立的js「或者几个组件合并在一起打包」
 *  2.当页面加载的时候，首先只把主js「bundle.js」请求回渲染，其余的js先不加载
 *    + 因为bundle.js中只有最开始要渲染组件的代码，所以体积小，获取和渲染速度快，可以减少白屏等待的时间
 *    + 其余的js此时并没有加载，也不影响页面第一次渲染
 *  3.当我路由切换的时候，和哪个规则匹配，想要渲染哪个组件，在把这个组件所在的js文件，动态导入进来进行渲染
 *  分隔打包js，按需异步加载---路由懒加载
 *
 * lazy需要在index.js中使用Suspense配合使用，不然报错
 * */
import { lazy } from "react";
import A from "../views/A";
// import B from "../views/B";
// import C from "../views/C";
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
    component: lazy(() => import("../views/B")),
    name: "b",
    meta: {},
  },
  {
    path: "/c",
    component: lazy(() => import("../views/C")),
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
