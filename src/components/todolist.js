import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../components/main.module.css"

class Todolist extends React.Component {
  state = {
    TodoInput: "",
    TodoList: [],
  }
  handleInputChange = e => {
    this.setState({
      TodoInput: e.target.value,
    })
  }

  handleSubmit = () => {
    this.state.TodoList.unshift(this.state.TodoInput)
    this.setState(
      {
        TodoList: this.state.TodoList,
        TodoInput: "",
      }
    )
  }

  removeItem = index => {
    this.state.TodoList.splice(index, 1)
    this.setState({
      TodoList: this.state.TodoList,
    })
  }

  render() {
   
    return (
      <div>
        <div className="text-center">
          <input
            id="userInput"
            className="inputStyle"
            type="text"
            value={this.state.TodoInput}
            onChange={this.handleInputChange}
          />
          <button
            id="submitBtn"
            className="btnStyle"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {this.state.TodoList.map((item, index) => {
              return (
                <li key={index.toString()}>
                  {item} <button onClick={() => this.removeItem(index)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Todolist
