import React from "react";
class Cover extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{ borderStyle: "solid", borderWidth: "1px", height: "150px" }}
        >
          Upload Cover
        </div>
        <div>
          <p>Enter competition title</p>
          <p>
            Enter your competition tagline not more than 70 characters with
            spaces.
          </p>
        </div>
      </div>
    );
  }
}

export default Cover;
