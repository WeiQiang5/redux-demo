import { Button } from "antd";

const VoteFooter = () => {
  return (
    <div className="footer">
      <Button type="primary">支持</Button>
      <Button danger>反对</Button>
    </div>
  );
};

export default VoteFooter;
