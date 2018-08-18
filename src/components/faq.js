import React from "react";
class FAQ extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>FAQ</div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                <p>Enter a question here.</p>
                <hr />
                Enter the answer here...
              </div>
              <div>Editor toolbox</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FAQ;
