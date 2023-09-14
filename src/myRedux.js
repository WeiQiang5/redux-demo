// 实现redux部分源码

export const createStore = function createStore(reducer) {
  if (typeof reducer !== "function") {
    throw new Error("reducer must be a function");
  }
  let state, //公共状态
    listeners = []; //事件池
  // 获取状态
  const getState = function getState() {
    return state;
  };
  // 向事件池中添加让组件更新的方法
  const subscribe = function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error("listener must be a function");
    }
    // 放入事件池
    if (!listeners.includes(listener)) {
      listeners.push(listener);
    }
    return function unsubscribe() {
      let i = listeners.indexOf(listener);
      listeners.splice(i, 1);
    };
  };
  // 派发任务通知reducer执行
  const dispatch = function dispatch(action) {
    if (action === null || typeof action !== "object") {
      throw new Error("action must be a object");
    }
    if (typeof action.type === "undefined") {
      throw new Error("Actions may not have an undefined 'type' property");
    }
    // 把reducer执行 ,公共状态，行为对象,接收执行的返回结果，替换公共状态
    state = reducer(state, action);
    // 当状态更改，我们还需要把事件池中方法执行
    listeners.forEach((listener) => listener());
    return action;
  };

  // redux默认执行一次派发，将公共状态初始化
  let randomString = function randomString() {
    return Math.random().toString(36).substring(7).split("").join(".");
  };

  dispatch({
    type: "@@redux/INIT" + randomString(),
  });

  return {
    getState,
    dispatch,
    subscribe,
  };
};
