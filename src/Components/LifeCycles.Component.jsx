import React from "react";

class LifeCycles extends React.Component {
  constructor() {
    super();
    console.log("Constructor!");
  }

  componentDidMount() {
    console.log("ComponentDidMount!");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate!");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate!", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("Render!");
    return (
      <div className="lifecycle-component">
        <h3>LifeCycles Components</h3>
        {this.props.text}
      </div>
    );
  }
}

export default LifeCycles;
