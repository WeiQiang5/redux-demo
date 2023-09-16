import React from "react";
import "./Vote.scss";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
import { connect } from "react-redux";
const Vote = (props) => {
  let { supNum, oppNum } = props;
  console.log(props);
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">react vote</h2>
        <span className="num">{supNum + oppNum}</span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
};

export default connect((state) => {
  console.log("state", state);
  return state.vote;
})(Vote);

/**
 * connect(mapStateToProps,mapDispatchToProps)(我们要渲染的组件)
 * + mapStateToProps可以回去到redux中的公共状态，把需要的信息作为属性，传递组件即可
 * connect(state => {
 *  存redux容器中，私有模块的公共状态信息
 *  返回对象中的信息，就是要作为属性，传递给组件的信息
 *   return{
 *      supNum:state.vote.supNum,
 *      info:state.personal.info
 *   }
 * })(Vote)
 *
 * + mapDispatchToProps把需要派发的任务，当作属性传递给组件
 * connect(null,dispatch => {
 *  return {
 *    d
 *  }
 * })(Vote)
 * */
