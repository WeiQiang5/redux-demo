import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

// 这里想要获取到路由对象，可以通过hooks，也可以通过props，props的话想要Route中Render传递props
const B = (props) => {
  console.log("B", props);
  let history = useHistory(),
    location = useLocation(),
    match = useRouteMatch();
  console.log(history, location, match);
  return <div className="box">B组件的内容</div>;
};

export default B;
