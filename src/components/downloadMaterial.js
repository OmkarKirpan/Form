import React from "react";
class DownloadMaterial extends React.Component {
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
                DOWNLOAD BUTTON
              </button>
              <p>
                Click on the button to add additional downloadable materials of
                the competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadMaterial;
