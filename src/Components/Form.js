import React, { Component } from 'react'

import './Styles/Form.css'

export default class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit} className="form">
                <h1>
                    Task´s Register<br />
                    {this.props.date || "choose a date"}
                </h1>
                <input onChange={this.props.handleChange} type="button" value="Estado varianza" />
                <input onChange={this.props.handleChange} name="identify" type="text" placeholder="Número de cédula" />
                <input onChange={this.props.handleChange} name="text" type="text" placeholder="Write your task" />
                <button>Crear !</button>
            </form>
        )
    }
}