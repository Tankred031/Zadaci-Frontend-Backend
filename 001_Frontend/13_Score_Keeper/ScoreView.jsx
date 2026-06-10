import React from "react";

const ScoreView = (props) => {
  return (
    <div>
      <h2>
        {props.teamName}: {props.score}
      </h2>
    </div>
  );
};

export default ScoreView;
