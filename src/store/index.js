import { createStore } from "redux";

// 公共状态
let initial = {
  supNum: 10,
  oppNum: 5,
};
/**
 * store公共容器
 * + state = undefined
 * + 事件池
 * 第一次派发，state没有值，会把initial的值赋值给state，第一次派发是在redux内部派发的
 * dispatch({type:*****}),传递的action.type不会和任何的逻辑匹配
 * 每一次dispatch派发，都会把reducer执行
 * 第二次派发 state = initial,action = 我们自己基于业务逻辑，实现的手动派发
 * 上面这里我们应该最开始把获取的state克隆一份,只有到return的时候才修改
 * */
const reducer = function reducer(state = initial, action) {
  // state:存放store容器中的状态「最开始没有的时候，赋值初始状态值」
  // action:每一次基于dispatch派发的时候，传递进来的行为对象，「要求必须具备type属性，存派发的行为标识」
  // 接下来我们需要基于派发的行为标识，修改store容器中的公共状态信息
  // 克隆state，不直接修改initial
  state = { ...state };
  switch (action.type) {
    case "VOTE_SUP":
      state.supNum++;
      break;
    case "VOTE_OPP":
      state.oppNum++;
      break;
    default:
  }

  // return的内容，会整体替换store容器中的内容
  return state;
};
// 公共容器
const store = createStore(reducer);

export default store;
