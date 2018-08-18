import React from "react";
class Brief extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>BRIEF</div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                Please give a brief description of your brief here in not more
                than 5000 characters...<br /> Use the Download section to
                provide the detailed brief and additional downloadble material
                here
              </div>
              <div>Editor toolbox</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brief;
