import React, { Component, Fragment } from "react";

import "./App.css";

import Schedule from "./Components/Schedule";
import Form from "./Components/Form";
import Tasks from "./Components/Tasks";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        date: '',
        isJob: false,
        identify: ' ',
        text: ' '
      },
      tasks: []
    };
  }
  render() {
    return (
      <Fragment>
        <div className="app-container">
          <Schedule handleClick={this.handleClickCell} />
          <Form
            cc={this.state.form.cc}
            text={this.state.form.text}
            date={this.state.form.date}
            handleSubmit={this.handleSubmitForm}
            handleChange={this.handleChangeForm}
          />
        </div>
        <Tasks data={this.state.tasks}/>
      </Fragment>
    );
  }
  handleClickCell = (data) => {
    this.setState({
      form: {
        ...this.state.form, 
        date: data
      }
    })
  };
  handleChangeForm = (ev) => {
    this.setState({
      form: {
        ...this.state.form, 
        [ev.target.name]: ev.target.value
      }
    })
  };
  handleSubmitForm = async (ev) => {
    ev.preventDefault();
    let cloneForm = this.state.form
    let cloneTasks = this.state.tasks
    let agree = cloneTasks.concat(cloneForm)
    await this.setState({tasks: agree})
  };
}
