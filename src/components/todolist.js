import React from "react"
import { Link, graphql } from "gatsby"
import styles from "../components/main.module.css"


class Todolist extends React.Component {
  state = {
    TodoInput: "",
    TodoList: [],
  }
  handleInputChange = e => {
    this.setState(
      {
        TodoInput: e.target.value,
      },
      () => {
        console.log(this.state.TodoInput)
      }
    )
  }

  handleSubmit = () => {
    console.log("Submitttt")
    this.setState({
      TodoList: TodoList.unshift(TodoInput),
        TodoInput:""

    },()=>{
        console.log(this.state.TodoList)
    })
  }

  render() {
    return (
      <div>
        <div class="text-center">
          <input
            id="userInput"
            class="inputStyle"
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <button id="submitBtn" class="btnStyle" onClick={this.handleSubmit}>
            Add
          </button>
          <input id="filterDone" type="checkbox" />
        </div>
      </div>
    )
  }
}
export default Todolist;


