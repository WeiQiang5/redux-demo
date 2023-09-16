import { Button } from "antd";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import action from "../store/actions";

const VoteFooter = () => {
  const { store } = useContext(ThemeContext);
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          store.dispatch(action.vote.support());
        }}
      >
        支持
      </Button>
      <Button
        danger
        onClick={() => {
          store.dispatch(action.vote.oppose());
        }}
      >
        反对
      </Button>
    </div>
  );
};

export default VoteFooter;
