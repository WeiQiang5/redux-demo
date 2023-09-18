import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  useMemo,
} from "react";
import { bindActionCreators } from "redux";
const ThemeContext = createContext();

/**
 * Provider的作用就是
 * 将传递进来的store放在根组件的上下文中
 * */
export function Provider(props) {
  let { store, children } = props;
  return <ThemeContext value={{ store }}>{children}</ThemeContext>;
}

/**
 * 获取上下文的store，然后把公共状态，要派发的方法，都基于属性传递给需要渲染的组件；把让组件更新的
 * 方法放在redux事件池中
 * */
export function connect(mapStateToProps, mapDispatchToProps) {
  // 处理默认值
  if (!mapStateToProps) {
    mapStateToProps = () => {
      // 不写则什么都不给组件传递
      return {};
    };
  }
  if (!mapDispatchToProps) {
    mapDispatchToProps = (dispatch) => {
      // 不写则把dispatch方法传递给组件
      return { dispatch };
    };
  }

  return function currying(Component) {
    // Component最终要渲染的组件
    // HOC:我们最后基于export default导出的组件
    return function HOC(props) {
      // 我们需要获取上下文中的store
      let { store } = useContext(ThemeContext),
        { getState, dispatch, subscribe } = store;

      // 向事件池中加入让组件更新的方法
      let [, forceUpdate] = useState(0);
      useEffect(() => {
        let unsubscribe = subscribe(() => {
          forceUpdate([]);
        });
        return () => {
          // 组件释放的时候执行：把放在事件池中的函数移除掉
          unsubscribe();
        };
      }, []);

      // mapStateToProps/mapStateToProps执行，吧执行的返回值，作为属性传递给组件
      let state = getState(),
        nextState = useMemo(() => {
          return mapStateToProps(state);
        }, [state]);
      let dispatchProps = {};
      if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch);
      } else {
        // 是actionCreator对象，需要经过bindActionCreators处理
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      }

      return <Component {...props} {...nextState} {...dispatchProps} />;
    };
  };
}
