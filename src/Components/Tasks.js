import React, { Component } from 'react'

import './Styles/Tasks.css'

export default class Tasks extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return(
            <div className="tasks">
                {this.props.tasks.map(task => (
                    <span className="task">Tarea: {task}</span>
                ))}
            </div>
        )
    }
}