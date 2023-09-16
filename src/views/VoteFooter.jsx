import { Button } from "antd";
import { useContext } from "react";
import ThemeContext from "../ThemeContext";
import * as TYPES from "../store/action-types";

const VoteFooter = () => {
  const { store } = useContext(ThemeContext);
  return (
    <div className="footer">
      <Button
        type="primary"
        onClick={() => {
          store.dispatch({
            type: TYPES.VOTE_SUP,
          });
        }}
      >
        支持
      </Button>
      <Button
        danger
        onClick={() => {
          store.dispatch({
            type: TYPES.VOTE_OPP,
          });
        }}
      >
        反对
      </Button>
    </div>
  );
};

export default VoteFooter;
