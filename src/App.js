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
            isJob={this.state.form.isJob}
            handleSubmit={this.handleSubmitForm}
            handleChange={this.handleChangeForm}
            handleClick={this.handleClickIsJob}
            handleClickSend={this.handleClickSendForm}
          />
        </div>
        <Tasks data={this.state.tasks} handleClick={this.handleClickDelete}/>
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
  handleSubmitForm = (ev) => {
    ev.preventDefault();
  };
  handleClickSendForm = async (ev) => {
    let cloneForm = this.state.form
    let cloneTasks = this.state.tasks
    let agree = cloneTasks.concat(cloneForm)
    await this.setState({tasks: agree})
  }
  handleClickDelete = async(ev) => {
    let tasks = this.state.tasks.slice(0)
    tasks.splice(ev.target.getAttribute('quit'), 1)
    this.setState({tasks: tasks})
  }
  handleClickIsJob = ev => {
    this.setState({
      form: {
        ...this.state.form, 
        isJob: this.state.form.isJob ? false : true
      }
    })
  }
}
