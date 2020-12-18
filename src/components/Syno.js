import React, { Component } from "react";
import synonyms from "synonyms";

export default class Syno extends Component {
  constructor() {
    super();
    this.state = {
      word: "",
    };
  }
  onClick = () => {
    this.setState({
      word: this.state.inpdata,
    });
  };

  render() {
    console.log(synonyms(this.state.word));

    return (
      <>
        <h1>Enter the word</h1>
        <input value={this.state.word} name="sampleInput" />
        <button onClick={this.onClick}>Update</button>
      </>
    );
  }
}
