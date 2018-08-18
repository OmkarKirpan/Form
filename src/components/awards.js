import React from "react";
class Awards extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>AWARDS</div>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="container">
              <div className="row justify-content-md-center">
                <p>Please mention the type of awards.</p>
              </div>
              <div className="row justify-content-md-center">
                <form className="form-inline">
                  <div className="form-group mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Monetary &nbsp;
                    </label>
                  </div>
                  <div className="form-group mb-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Non-monetary
                    </label>
                  </div>
                  <div className="form-group mb-2 col-md-4">
                    <select id="inputState" class="form-control">
                      <option selected>USD</option>
                      <option>INR</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid gray",
              width: "100px",
              marginLeft: "44%"
            }}
          >
            Upload trophy image of size 100 x 100 px
          </div>
          <div>
            <p>Award Title</p>
            <p>Prize Description</p>
          </div>
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                Additional details and terms about the awards in less than 5000
                characters.
              </div>
              <div>Editor toolbox</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Awards;
