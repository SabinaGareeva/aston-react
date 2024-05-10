import React, { Component } from "react";
import ChildComponent from "./components/ChildComponent";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "", submittedValue: "" };
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
  render() {
    console.log("Render called");
    return (
      <>
        <h1>Class Component Lifecycle Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter text"
          />
          <button>Submit</button>
        </form>
        <p>Submitted value:{this.state.submittedValue}</p>
        <ChildComponent text={"Hello World"} number={42}/>
      </>
    );
  }
}

export default App;
