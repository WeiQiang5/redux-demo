// 这里把各个板块的action合并为一个

import voteAction from "./voteAction";
import personalAction from "./personalAction";

const action = {
  vote: voteAction,
  personal: personalAction,
};

export default action;
