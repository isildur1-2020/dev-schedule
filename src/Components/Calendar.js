import React, { Component } from "react";

import "./Styles/Calendar.css";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seleccionada: true,
    };
  }
  render() {
    return (
      <div className="root">
        <div className="calendar__container">
          <div className="calendar__header">
            <button className="calendar__control">&lt;</button>
            <span className="month-name">Month</span>
            <button className="calendar__control">&gt;</button>
          </div>
          <div className="calendar__body">
            <div className="grid">
              <div className="grid__header">
                <span className="grid__cell grid__cell--gh">Mon</span>
                <span className="grid__cell grid__cell--gh">Tue</span>
                <span className="grid__cell grid__cell--gh">Wed</span>
                <span className="grid__cell grid__cell--gh">Thu</span>
                <span className="grid__cell grid__cell--gh">Fri</span>
                <span className="grid__cell grid__cell--gh">Sat</span>
                <span className="grid__cell grid__cell--gh">Sun</span>
              </div>
              <div className="grid__body">
                <span className="grid__cell grid__cell--days grid__cell_selected">1</span>
                <span className="grid__cell grid__cell--days">2</span>
                <span className="grid__cell grid__cell--days">3</span>
                <span className="grid__cell grid__cell--days">4</span>
                <span className="grid__cell grid__cell--days">5</span>
                <span className="grid__cell grid__cell--days">6</span>
                <span className="grid__cell grid__cell--days">7</span>
                <span className="grid__cell grid__cell--days">8</span>
                <span className="grid__cell grid__cell--days">9</span>
                <span className="grid__cell grid__cell--days">10</span>
                <span className="grid__cell grid__cell--days">11</span>
                <span className="grid__cell grid__cell--days">12</span>
                <span className="grid__cell grid__cell--days">13</span>
                <span className="grid__cell grid__cell--days">14</span>
                <span className="grid__cell grid__cell--days">15</span>
                <span className="grid__cell grid__cell--days">16</span>
                <span className="grid__cell grid__cell--days">17</span>
                <span className="grid__cell grid__cell--days">18</span>
                <span className="grid__cell grid__cell--days">19</span>
                <span className="grid__cell grid__cell--days">20</span>
                <span className="grid__cell grid__cell--days">21</span>
                <span className="grid__cell grid__cell--days">22</span>
                <span className="grid__cell grid__cell--days">23</span>
                <span className="grid__cell grid__cell--days">24</span>
                <span className="grid__cell grid__cell--days">25</span>
                <span className="grid__cell grid__cell--days">26</span>
                <span className="grid__cell grid__cell--days">27</span>
                <span className="grid__cell grid__cell--days">28</span>
                <span className="grid__cell grid__cell--days">29</span>
                <span className="grid__cell grid__cell--days">31</span>
                <span className="grid__cell grid__cell--days">32</span>
                <span className="grid__cell grid__cell--days">33</span>
                <span className="grid__cell grid__cell--days grid__cell--disabled">34</span>
                <span className="grid__cell grid__cell--days grid__cell--disabled">35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
