import React from "react";
class ScheduleAndFees extends React.Component {
  render() {
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>SCHEDULE & FEES</div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div>
                <form>
                  <div className="row">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Select an Event"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Deadline"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div style={{ marginTop: "20px" }}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="AddFees"
                />
                <label className="form-check-label" for="AddFees">
                  Add fees &nbsp;
                </label>
              </div>
              <div style={{ marginTop: "5px" }}>
                <form>
                  <div className="row">
                    <div className="col">
                      <label for="category">Category</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Student, professional,"
                        id="category"
                      />
                    </div>
                    <div className="col">
                      <label for="fees">Fees</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="00 USD"
                        id="fees"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm">
              <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Category</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="e.g. Early, Standard, Late, leave blank if N/A"
                  />
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Registration Link</label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter link for the registration page"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="row" />
        </div>
      </div>
    );
  }
}

export default ScheduleAndFees;
