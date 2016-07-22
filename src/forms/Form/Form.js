import classes from './Form.scss'
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import validate from './validate'
import {sendMail} from 'utils/mailer'

import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import InfoText from 'components/InfoText'
import SelectFontInput from 'components/SelectFontInput'
import SelectColorInput from 'components/SelectColorInput'

export const fields = ["textfirst", "textsecound", "textthird", "position", "font", "color", "fontsize", "name", "telefon", "email"]

export const positions = ["auf Brusttasche", "linker Oberarm", "Rücken"]

export const fontSizes = ["1,5 cm", "2,5 cm", "3,5 cm"]

export const colors = [
  {label: "red", value: "red"},
  {label: "green", value: "green"},
  {label: "blue", value: "blue"},
  {label: "yellow", value: "yellow"}
]

export const fonts = [
  { value: '"Courier New", Courier, monospace', label: "Courier New"},
	{ value: 'Georgia, serif', label: 'Georgia, serif'},
	{ value: '"Lucida Console", Monaco, monospace', label: "Lucida Console"},
	{ value: 'Verdana, Geneva, sans-serif', label: 'Verdana'},
	{ value: 'Impact, Charcoal, sans-serif', label: 'Impact, Charcoal'}
]

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

        <div className={classes.textDetails}>
          <TextInput isRequired
            label="Geben Sie Ihren Text ein (Zeile 1)"
            {...textfirst}/>

          <TextInput
            label="Geben Sie Ihren Text ein (Zeile 2)"
            {...textsecound}/>
          
          <TextInput
            label="Geben Sie Ihren Text ein (Zeile 3)"
            {...textthird}/>
        </div>

        <div className={classes.customizing}>
          <SelectInput isRequired
            label="Position"
            items={positions}
            {...position}/>

          <SelectFontInput isRequired
            label="Schriftart"
            items={fonts}
            {...font}/>

          <SelectColorInput isRequired
            label="Schriftfarbe"
            items={colors}
            {...color}/>

          <SelectInput isRequired
            label="Schrifthöhe"
            items={fontSizes}
            {...fontsize}/>
        </div>

        <InfoText/>

        <div className={classes.userDetails}>
          <TextInput isRequired
            label="Vor- und Nachname"
            placeholder="Max Mustermann"
            {...name}/>

            <TextInput isRequired
            label="Telefonnummer"
            placeholder="0821 241245"
            {...telefon}/>

            <TextInput isRequired
            label="eMail"
            placeholder="www.example@provider.com"
            {...email}/>
        </div>

        <button className={classes.submitButton}>
          Anfrage Absenden
        </button>

      </form>
    );
  }
}

Form.propTypes = propTypes;
Form = reduxForm({
  form: 'Form',
  fields,
  validate,
  onSubmit: (payload) => sendMail("manuel.jung.wwi12@gmail.com", null, "Produktkonfiguration Anfrage", "payload")
})(Form);

export default Form;
