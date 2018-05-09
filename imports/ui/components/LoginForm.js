import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
  }
  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 0;
  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    Meteor.call("login", this.state, (error, data) => {
      if(error){
        console.log(error)
      } else{
        this.props.history.push("/reportingPanelPage");
      }
    });
  }
  render() {
    return (
      <SuperForm onSubmit={this.handleSubmit}>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
        >
            Entrar
        </Button>
      </SuperForm>
    );
  }
}

LoginForm.propTypes = {
  userHasAuthenticated: PropTypes.bool.isRequired,
};

export default withRouter(LoginForm);

const SuperForm = styled.form`
  margin: 0 auto;
  max-width: 320px;
`;
