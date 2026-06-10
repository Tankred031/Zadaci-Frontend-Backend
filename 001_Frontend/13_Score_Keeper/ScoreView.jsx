import React from "react";
import "./ScoreView.css";

const ScoreView = ({ teamName, score, leading }) => {
  return (
    <div className={`score-view-wrapper-leading-${leading}`}>
      <h2>{teamName}</h2>
      <p>Score: {score}</p>
    </div>
  );
};

export default ScoreView;