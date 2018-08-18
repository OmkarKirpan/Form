import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getSubmissionReq } from "../../actions/submissionReqActions";

class SubmissionReq extends React.Component {
  constructor(props) {
    super(props);
  }
  state: {
    submissionReqTxt: ""
  };

  componentDidMount() {
    this.props.getSubmissionReq();
  }

  handleEdit = () => {
    console.log("okokokokokokok");
    this.props.handleEdit();
  };

  render() {
    const { submission } = this.props;
    console.log(submission);
    return (
      <div>
        <div style={{ borderBottomStyle: "solid" }}>
          SUBMISSION REQUIREMENTS
          <button onClick={this.handleEdit} style={{ float: "right" }}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </button>
        </div>

        <div className="container-fluid">
          <div
            className="row justify-content-md-center"
            style={{ margin: "20px" }}
          >
            <div className="col-sm">
              <div style={{ border: "1px solid gray", height: "150px" }}>
                {submission[0].submission}
              </div>
              <div>Editor toolbox</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SubmissionReq.propTypes = {
  submission: PropTypes.object.isRequired,
  getSubmissionReq: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  submission: state.submissionReq.submissionReq
});

export default connect(
  mapStateToProps,
  { getSubmissionReq }
)(SubmissionReq);
