import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { NewUser } from "../redux/actions";

class BadgeForm extends React.Component {
  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log("PROPS", this.props);
    const { formValues, history } = this.props;
    this.props.NewUser(formValues);
    history.push("/badges");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.firstName}
            />
          </div>

          <div className='form-group'>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.lastName}
            />
          </div>

          <div className='form-group'>
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={this.props.email}
            />
          </div>

          <div className='form-group'>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.jobTitle}
            />
          </div>

          <div className='form-group'>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.twitter}
            />
          </div>

          <button onClick={this.handleClick} className='btn btn-primary'>
            Save
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  NewUser
};

export default withRouter(connect(null, mapDispatchToProps)(BadgeForm));
