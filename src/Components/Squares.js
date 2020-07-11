import React from "react";

import "./Styles/Squares.css";

const Squares = (props) => {
  return (
    <div className="grid__body" ref={props.dates}>
      {props.data.map((day, index) =>
        day.isInCurrentMonth ? (
          <span
            key={index}
            cell={index}
            className="grid__cell grid__cell--days"
            onClick={props.handleClickCell}
          >
            {day.date.date()}
          </span>
        ) : (
          <span
            key={index}
            cell={index}
            className="grid__cell grid__cell--days grid__cell--disabled"
            onClick={props.handleClickCell}
          >
            {day.date.date()}
          </span>
        )
      )}
    </div>
  );
};
export default Squares;
