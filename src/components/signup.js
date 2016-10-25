import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux'

import * as actions from '../actions/index'

class Signup extends Component {
  submitForm = values => {
    this.props.signupUser(values)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props

    console.log(this.props.errorMessage)

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
          <h1 className="signup-header">Креирај профил</h1>
          <form onSubmit={handleSubmit(this.submitForm.bind(this))}>
            <div className="form-group m-t-2">
              <Field name="fullName" type="text" component={renderTextField} label="Име"/>
            </div>

            <div className="form-group">
              <Field name="email" type="email" component={renderTextField} label="Е-маил"/>
              <small className="form-text text-muted">Ние нема да ја споделуваме вашата е-маил адреса.</small>
            </div>

            <div className="form-group">
              <Field name="phone" type="text" component={renderTextField} label="Телефон"/>
            </div>

            <div className="form-group">
              <Field name="password" type="password" component={renderTextField} label="Лозинка"/>
            </div>

            <div className="form-group">
              <Field name="confirm_password" type="password" component={renderTextField} label="Потврди лозинка"/>
            </div>

            <div className="col-md-2 offset-md-5">
              <button type="submit" disabled={!valid} className="btn btn-info m-t-2 m-b-2">Креирај</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  const required_fields = ['fullName', 'email', 'phone', 'password', 'confirm_password']

  required_fields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Задолжително поле!'
    }    
  })

  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Невалидна е-маил адреса!'
  }

  if (!/^\+?[0-9]{8,14}$/.test(values.phone)) {
    errors.phone = 'Невалиден телефонски број!'
  }

  if(values.confirm_password && values.password !== values.confirm_password){
    errors.confirm_password = 'Лозинките мора да се совпаѓаат!'
  }

  return errors
}

// const mapStateToProps = state => {
//   return {errorMessage: state.auth.error}
// }

Signup = reduxForm({
  form: "Signup",
  validate
})(Signup)

Signup = connect(
  null,
  actions
)(Signup)

export default Signup
