import React from "react";

import LifeCycles from "./Components/LifeCycles.Component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      showChild: true,
      text: ""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button
            onClick={() =>
              this.setState((state) => ({
                showChild: !state.showChild
              }))
            }
          >
            Toggle Lifecycles
          </button>
          <button
            onClick={() =>
              this.setState((state) => ({
                text: state.text + "_hello"
              }))
            }
          >
            Update Text
          </button>
          {this.state.showChild ? <LifeCycles text={this.state.text} /> : null}
        </header>
      </div>
    );
  }
}

export default App;
