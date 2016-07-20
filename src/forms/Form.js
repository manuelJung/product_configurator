import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = ["textfirst", "textsecound", "textthird", "position", "font", "color", "fontsize", "name", "telefon", "email"];

const validate = (values) => {
  const errors = {};
  return errors;
};

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired
};

export class Form extends Component {
  render() {
    const {
      fields: { textfirst, textsecound, textthird, position, font, color, fontsize, name, telefon, email },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" {...textfirst}/>
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form = reduxForm({
  form: 'Form',
  fields,
  validate
})(Form);

export default Form;
