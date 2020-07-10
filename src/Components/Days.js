import React from "react";
// ESTILOS CSS
import "./Styles/Days.css";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Friday", "Sat", "Sun"];

const Days = () => {
  return (
    <div className="grid__header">
      {daysOfWeek.map((day, index) => (
        <span key={index} className="grid__cell">{day}</span>
      ))}
    </div>
  );
};
export default Days;
