import React, { Fragment } from "react";

import "./Styles/Category.css";

const Category = (props) => {
  if (!props.isJob) {
    return (
        <Fragment>
            <button onClick={props.handleClick} className="notJob">
            <span>&lt;</span>
            <p>Holidays !</p>
            <span>&gt;</span>
            </button>
        </Fragment>
    )
  }
  return (
    <Fragment>
        <button onClick={props.handleClick} className="isJob">
        <span>&lt;</span>
        <p>Employ:(</p>
        <span>&gt;</span>
        </button>
    </Fragment>
)
};
export default Category;
