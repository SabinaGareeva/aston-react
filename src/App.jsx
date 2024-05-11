import React, { Component, useRef } from "react";
import ChildComponent from "./components/ChildComponent";
import "./App.css";
import ListComponent from "./components/ListComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", submittedValue: "" };
    this.inputRef = React.createRef();
    console.log("Constructor called");
  }
  componentDidMount() {
    console.log("ComponentDidMount called");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate called");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount called");
  }
  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submittedValue: this.state.inputValue });
  };
  handleFocusInput = () => {
    this.inputRef.current.focus();
  };
  render() {
    console.log("Render called");
    return (
      <>
        <h1>Class Component Lifecycle Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.inputRef}
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter text"
          />
          <button disabled={this.state.inputValue === "react" ? true : false}>
            Submit
          </button>
        </form>
        <button onClick={this.handleFocusInput}>Focus</button>
        <p>Submitted value:{this.state.submittedValue}</p>
        <ChildComponent text={"Hello World"} number={42} />
        <ListComponent />
      </>
    );
  }
}

export default App;
