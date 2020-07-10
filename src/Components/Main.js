// REACT - MOMENT
import React, { Component } from "react";
import moment from "moment";
// ESTILOS
import "./Styles/Calendar.css";
// LÓGICA DEL CALENDARIO
import Calendar from "./js/Calendar";
// SUB - COMPONENTES
import Days from "./Days";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.moment = moment();
    this.schedule = new Calendar();
    this.state = {
      moment: this.moment,
      showDays: this.schedule.generateDates(),
    };
  }
  render() {
    return (
      <div className="root">
        <div className="calendar__container">
          <div className="calendar__header">
            <button
              className="calendar__control"
              name="previous"
              onClick={this.changeMonth}
            >
              &lt;
            </button>
            <span className="month-name">
              {this.state.moment.format("MMM YYYY")}
            </span>
            <button
              className="calendar__control"
              name="next"
              onClick={this.changeMonth}
            >
              &gt;
            </button>
          </div>
          <div className="calendar__body">
            <div className="grid">
              <Days />
              <div className="grid__body">
                {this.state.showDays.map((day, index) =>
                  day.isInCurrentMonth ? (
                    <span
                      key={index}
                      className="grid__cell grid__cell--days"
                      onClick={this.handleClickCell}
                    >
                      {day.date.date()}
                    </span>
                  ) : (
                    <span
                      key={index}
                      className="grid__cell grid__cell--days grid__cell--disabled"
                      onClick={this.handleClickCell}
                    >
                      {day.date.date()}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  changeMonth = (ev) => {
    if (ev.target.name === "previous") {
      this.setState({
        moment: this.state.moment.subtract(1, "month"),
        showDays: this.schedule.generateDates(this.state.moment),
      });
    } else {
      this.setState({
        moment: this.state.moment.add(1, "month"),
        showDays: this.schedule.generateDates(this.state.moment),
      });
    }
  };
  handleClickCell = ev => {
    ev.target.classList.add('grid__cell_selected')
  };
}
