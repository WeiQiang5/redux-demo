import React from "react";
import "./Vote.scss";
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";

const Vote = () => {
  return (
    <div className="vote-box">
      <div className="header">
        <h2 className="title">react vote</h2>
        <span className="num"></span>
      </div>
      <VoteMain />
      <VoteFooter />
    </div>
  );
};

export default Vote;
