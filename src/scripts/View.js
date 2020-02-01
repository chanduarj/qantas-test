import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './styles.css'
const validate = values => {
  const errors = {}
  if (!values.notes) {
    errors.notes = 'Required'
  } else if (values.notes.length > 15) {
    errors.notes = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const handleSubmit = () => {
console.log('handling submit')
}
const View = props => {
  const { pristine, reset, submitting } = props
  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <span className="greeting">How are we doing?</span>
      </div>
      <div className="form-div">
        <Field name="email" component="input" type="text" placeholder="Email"/>
      </div>
      <div className="form-div">
        <Field name="notes" component="textarea" placeholder="Message"/>
      </div>
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  // warn // <--- warning function given to redux-form
})(View)
