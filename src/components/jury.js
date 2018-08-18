import React from "react";
class Jury extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>JURY</div>
        <div className="container-fluid">
          <div className="row align-items-center" style={{ margin: "20px" }}>
            <div className="col-sm">
              <div
                style={{
                  border: "1px solid gray",
                  height: "250px",
                  width: "200px",
                  marginLeft: "38%"
                }}
              >
                Upload juror's profile photo of<br /> size 200 x 250 px
              </div>
              <div>Juror's Name</div>
              <div>Credentials</div>

              <div>enter juror's email id for verification purpose only</div>
              <div>
                <b>Add Bio</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jury;
