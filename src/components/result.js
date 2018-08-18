import React from "react";
class Result extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>RESULTS</div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                Upload cover photo of winning<br /> entry. Size 1500 x 600 px
              </div>
              <div>provide a link of the project on or outside UNI</div>
              <div>Full size image</div>
            </div>
            <div className="col-sm">
              <div className="row">
                <p>Award Title</p>
              </div>
              <div className="row">
                <p>Project Title</p>
              </div>
              <div className="row">
                <div className="col-sm">Participants Name</div>
                <div className="col-sm">uni username/email id</div>
              </div>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default Result;
