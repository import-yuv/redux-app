import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => props.increaseCounter()}
          style={{ fontSize: 70 }}
        >
          {props.counter}
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
