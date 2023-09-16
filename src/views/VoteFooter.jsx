import { Button } from "antd";
import action from "../store/actions";
import { connect } from "react-redux";

const VoteFooter = (props) => {
  let { support, oppose } = props;
  return (
    <div className="footer">
      <Button type="primary" onClick={support}>
        支持
      </Button>
      <Button danger onClick={oppose}>
        反对
      </Button>
    </div>
  );
};

// 简单写法
export default connect(null, action.vote)(VoteFooter);

// 标准写法
// export default connect(null, (dispatch) => {
//   return {
//     support() {
//       dispatch(action.vote.support());
//     },
//     oppose() {
//       dispatch(action.vote.oppose());
//     },
//   };
// })(VoteFooter);
