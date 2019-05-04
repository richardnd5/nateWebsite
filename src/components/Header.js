import React from "react";

export default class Header extends React.Component {
  static defaultProps = {
    className: ""
  };
  render() {
    const { style} = this.props;
    return (
      <div style={style}>
        <h2>
          <span>
            Hey!
          </span>
        </h2>
      </div>
    );
  }
}