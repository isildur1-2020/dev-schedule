import React from "react";

import "./Styles/Header.css";

const Header = (props) => {
  return (
    <div className="calendar__header">
      <button
        className="calendar__control"
        name="previous"
        onClick={props.handleClick}
      >
        &lt;
      </button>
      <span>{props.month}</span>
      <button
        className="calendar__control"
        name="next"
        onClick={props.handleClick}
      >
        &gt;
      </button>
    </div>
  );
};
export default Header;
