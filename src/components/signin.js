import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class Signin extends Component {
  submitForm = values => {
    this.props.signinUser(values)
  }

  renderError = () => {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <span>{this.props.errorMessage}</span>
        </div>
      )
    }
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props

    const renderTextField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <label>{label}</label>
        <div>
          <input {...input} className="form-control" placeholder={label} type={type}/>
          {touched && ((error && <small><em>{error}</em></small>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )

    return(
      <div className="container m-t-3">
        <div className="col-md-6 offset-md-3">
          <h1 className="signup-header">Најавете се</h1>
          <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
            <div className="form-group">
              <Field name="email" type="email" component={renderTextField} label="Е-маил"/>
            </div>

            <div className="form-group">
              <Field name="password" type="password" component={renderTextField} label="Лозинка"/>
            </div>
            
            {this.renderError()}    
            
            <div className="col-md-2 offset-md-5">
              <button type="submit" disabled={!valid} className="btn btn-info m-t-2 m-b-2">Најави се</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  const required_fields = ['email', 'password']

  required_fields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Задолжително поле!'
    }    
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Невалидна е-маил адреса!'
  }

  return errors
}

const mapStateToProps = state => {
  return {errorMessage: state.auth.error}
}

Signin = reduxForm({
  form: "Signin",
  validate
})(Signin)

Signin = connect(
  mapStateToProps,
  actions
)(Signin)

export default Signin