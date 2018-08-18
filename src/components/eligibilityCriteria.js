import React from "react";
class EligibilityCriteria extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>ELIGIBILITY CRITERIA</div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                Details in not less than 5000 characters..
              </div>
              <div>Editor toolbox</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EligibilityCriteria;
