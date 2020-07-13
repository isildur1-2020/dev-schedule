// REACT - MOMENT
import React, { Component } from "react";
import moment from "moment";
// ESTILOS
import "./Styles/Schedule.css";
// LÓGICA DEL CALENDARIO
import Calendar from "./js/Calendar";
// SUB - COMPONENTES
import Header from "./Header";
import Days from "./Days";
import Squares from "./Squares";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.moment = moment();
    this.schedule = new Calendar();
    this.dates = React.createRef();
    this.state = {
      moment: this.moment,
      showDays: this.schedule.generateDates(),
    };
  }
  render() {
    return (
      <div className="root">
        <div className="calendar__container">
          <Header
            handleClick={this.changeMonth}
            month={this.state.moment.format("MMM YYYY")}
          />
          <div className="calendar__body">
            <div className="grid">
              <Days />
              <Squares
                dates={this.dates}
                data={this.state.showDays}
                handleClick={this.handleClickCell}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  changeMonth = (ev) => {
    let nodos = this.dates.current.childNodes;
    this.props.handleClick('')
    for (let i = 0; i < nodos.length; i++) {
      nodos[i].classList.remove("grid__cell_selected");
    }
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
  handleClickCell = (ev) => {
    if(ev.target.classList.contains('grid__cell--disabled')){
      return
    }
    //Seleccionando el cuadro del estado y elevando el estado
    let numberCell = ev.target.getAttribute("cell");
    let date = this.state.showDays[numberCell].date.format("LL");
    this.props.handleClick(date)
    //lógica para colorear días
    let nodos = this.dates.current.childNodes;
    for (let i = 0; i < nodos.length; i++) {
      if (
        nodos[i].classList.contains("grid__cell_selected") &&
        ev.target !== nodos[i]
      ) {
        nodos[i].classList.remove("grid__cell_selected");
      }
    }
    if (!ev.target.classList.contains("grid__cell_selected")) {
      if (!ev.target.classList.contains("grid__cell--disabled")) {
        ev.target.classList.add("grid__cell_selected");
        return;
      }
    }
    ev.target.classList.remove("grid__cell_selected");
  };
}
