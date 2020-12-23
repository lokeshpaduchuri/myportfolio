import React, { Component } from 'react';

export default class ChildMessageRenderer extends Component {
  constructor(props) {
    super(props);

    this.invokeParentMethod = this.invokeParentMethod.bind(this);
  }

  invokeParentMethod() {
    window.open(this.props.data.URL, '_blank');  
  }

  render() {
    return (
      <span>
        <button
          onClick={this.invokeParentMethod}
          className="btn btn-info project-button"
        >
          Open Link
        </button>
      </span>
    );
  }
}