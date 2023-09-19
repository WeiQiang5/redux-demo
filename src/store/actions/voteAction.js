// vote板块要派发行为对象管理
import * as TYPES from "../action-types";

// 延迟函数
// const delay = (interval = 1000) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, interval);
//   });
// };

const voteAction = {
  support() {
    return async (dispatch) => {
      return {
        type: TYPES.VOTE_SUP,
      };
    };
  },
  oppose() {
    return async (dispatch) => {
      return {
        type: TYPES.VOTE_OPP,
      };
    };
  },
};
export default voteAction;
