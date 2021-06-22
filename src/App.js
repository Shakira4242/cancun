import React, { Component } from "react";

const inputs = {
  "prompt": "Finish my sentence",
  "max_characters": 512,
};

class App extends Component {
  componentDidMount() {
    // Replace this Hosted Model URL with your own
    fetch("https://example-text-generator.hosted-models.stage.runwayml.cloud/v1/query", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer <token>", // Replace <token> with your Hosted Models's authorization token
      },
      body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(outputs => {
      const { generated_text, encountered_end } = outputs;
      // use the outputs in your project
      console.log(`The model responded to the prompt like so: ${generated_text}`)
      if (encountered_end) {
        console.log(`The model produced the end of text character, so it thinks its job is done`)
      }
    })
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  }
}


export default App;