import React, { Component } from 'react'

import './Styles/Tasks.css'

export default class Tasks extends Component {
    render() {
        if(this.props.data.length>0){
            return(
                <div className="tasks">
                  <h1>YOUR TASKS !!!</h1>
                  {this.props.data.map(task => (
                      <div className="task">
                          <span>Date: {task.date}</span>
                          <span>Category: {task.isJob}</span>
                          <span>Identify: {task.identify}</span>
                          <span>Task: {task.text}</span>
                      </div>
                  ))}
                </div>
            )
        }
        return(
            <div className="tasks">
                <h1>Por favor, agrega una tarea, sin miedo</h1>
            </div>
        )
    }
}