import React from "react";
import SubmissionReqEdit from "./submissionReqEdit";
import SubmissionReq from "./submissionReq";
class SubmissionRequirements extends React.Component {
  constructor() {
    super();
    this.state = {
      showEdit: false
    };
  }

  handleEditShow = () => {
    this.setState({
      showEdit: !this.state.showEdit
    });
  };

  render() {
    const { showEdit } = this.state;
    return (
      <div>
        {showEdit ? (
          <SubmissionReqEdit handleEdit={this.handleEditShow} />
        ) : (
          <SubmissionReq handleEdit={this.handleEditShow} />
        )}
      </div>
    );
  }
}

export default SubmissionRequirements;
