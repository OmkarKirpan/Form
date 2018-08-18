import React from "react";
class MediaParterners extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>MEDIA PARTNERS</div>
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
                Upload the logo (100 x 40px) of your partner organizations with<br />
                the corresponding link of the website
              </div>
              <div>Enter link for the partner website</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MediaParterners;
