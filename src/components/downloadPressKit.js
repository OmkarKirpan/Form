import React from "react";
class DownloadPressKit extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <button type="button" class="btn btn-primary btn-lg">
                DOWNLOAD PRESS KIT
              </button>
              <p>
                Click on the button to add downloadable press kit for the
                competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadPressKit;
