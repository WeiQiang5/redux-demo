const combineReducers = function combineReducers(reducers) {
  // reducers是一个对象，以键值对存了：模块名&每个模块的reducer
  // 取得由键组成的数组
  let reducerskeys = Reflect.ownKeys(reducers);

  /**
   * 返回一个合并后的redux
   * + 每一次dispatch派发，都是把这个reducer执行
   * + state就是redux容器中的公共状态
   * + action就是派发时候传递进来的行为对象
   * */
  return function reducer(state = {}, action) {
    // 把reducers中的每一个小的reducer（每个模块的reducer）都要执行
    // 把对应模块的状态/action行为对象传递进来;返回的结果替换当前模块下的状态
    let nextState = {};
    reducerskeys.forEach((key) => {
      // reducer每个模块的reducer
      let reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
    });
    return nextState;
  };
};
export default combineReducers;
