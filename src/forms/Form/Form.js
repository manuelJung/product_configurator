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

export const positions = [
  "links in Brusthöhe",
  "rechts in Brusthöhe",
  "auf der Brusttasche",
  "überhalb der Brusttasche",
  "auf dem linken Oberarm",
  "auf dem rechten Oberarm",
  "auf dem linken Kragen",
  "auf dem rechten Kragen",
  "mittig auf dem Rücken (Schulterblatthöhe)"
]

export const fontSizes = ["1,5 cm", "2,5 cm", "3,5 cm"]

export const colors = [
  {label: "Weiß", value: "white"},
  {label: "Schwarz", value: "black"},
  {label: "Sekt", value: ""}, 
  {label: "Gelb", value: "yellow"}, 
  {label: "Mango", value: ""},
  {label: "Rot", value: "red"}, 
  {label: "Bordeaux", value: ""},
  {label: "Brombeer", value: ""},
  {label: "Pflaume", value: ""},
  {label: "Apfelgrün", value: ""},
  {label: "Moosgrün", value: ""}, 
  {label: "Türkis", value: ""},
  {label: "Blau", value: ""},
  {label: "Sand", value: ""},
  {label: "Taupe", value: ""}, 
  {label: "Coca", value: ""}, 
  {label: "Hellgrau", value: "lightgrey"},
  {label: "Dunkelgrau", value: "grey"}
]


export const fonts = [
  { label: "Blockschrift", value: ""},
  { label: "Schreibschrift", value: ""},
  { label: "Altdeutsch", value: ""},
  { label: "Modern", value: ""},
  { label: "Handschrift", value: ""},
  { label: "Kursivschrift", value: ""},
  { label: "Designschrift", value: ""}
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
