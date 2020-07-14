import React, { Component } from 'react'

import './Styles/Tasks.css'

export default class Tasks extends Component {
    render() {
        if(this.props.data.length>0){
            return(
                <div className="tasks">
                  <h1>YOUR TASKS !!!</h1>
                  {this.props.data.map((task, index) => (
                      <div key={index} className="task">
                          <span>Task n° {index+1}</span>
                          <span>Date: {task.date}</span>
                          <span>Category: {task.isJob ? 'Job :((': 'Holidays !!!'}</span>
                          <span>Identication: {task.identify}</span>
                          <span>Task: {task.text}</span>
                          <button onClick={this.props.handleClick} className="quit" quit={index}>delete</button>
                      </div>
                  ))}
                </div>
            )
        }
        return(
            <div className="tasks">
                <h1>Please add a task...</h1>
            </div>
        )
    }
}