import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addSubmissionReq } from "../../actions/submissionReqActions";

class SubmissionReqEdit extends React.Component {
  state = {
    submission: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const { submission } = this.state;
    //console.log(e.target.submission.value);
    if (submission === "") {
      alert("Submission empty...");
    } else {
      const newSubmission = {
        submission
      };
      //consol log
      console.log("submitting ..." + submission);
      this.props.addSubmissionReq(newSubmission);
    }
    // Clear State
    this.setState({
      submission: ""
    });
    this.props.handleEdit();
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { submission } = this.state;
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>
          SUBMISSION REQUIREMENTS
        </div>
        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <form onSubmit={this.onSubmit}>
                <div style={{ height: "150px" }}>
                  <textarea
                    name="submission"
                    value={submission}
                    style={{ height: "150px", width: "100%" }}
                    onChange={this.onChange}
                  />
                </div>
                <div>Editor toolbox</div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-light btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubmissionReqEdit.propTypes = {
  // submission: PropTypes.object.isRequired,
  addSubmissionReq: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   submission: state.submissionReq.submissionReq
// });

export default connect(
  null,
  { addSubmissionReq }
)(SubmissionReqEdit);
