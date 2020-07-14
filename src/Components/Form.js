import React, { Component } from 'react'

import './Styles/Form.css'

import Category from './Category'

export default class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.handleSubmit} className="form">
                <h1>
                    Task´s Register<br />
                    {this.props.date || "choose a date"}
                </h1>
                <Category handleClick={this.props.handleClick} isJob={this.props.isJob} />
                <input className="form-input" onChange={this.props.handleChange} name="identify" type="text" placeholder="identification" />
                <input className="form-input" onChange={this.props.handleChange} name="text" type="text" placeholder="Write your task" />
                <button onClick={this.props.handleClickSend}>Create !</button>
            </form>
        )
    }
}