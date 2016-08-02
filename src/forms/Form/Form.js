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

export const fields = ["textfirst", "textsecound", "textthird", "position", "font", "color", "fontsize", "firm", "name", "telefon", "email"]

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
  {label: "Weiß",       value: "white"},
  {label: "Schwarz",    value: "black"},
  {label: "Sekt",       value: "#e2d9c2"}, 
  {label: "Gelb",       value: "#f6be00"}, 
  {label: "Mango",      value: "#ff9e1b"},
  {label: "Rot",        value: "#a6192e"}, 
  {label: "Bordeaux",   value: "#9b2242"},
  {label: "Brombeer",   value: "#a20067"},
  {label: "Pflaume",    value: "#612c51"},
  {label: "Apfelgrün",  value: "#a4d65e"},
  {label: "Moosgrün",   value: "#59621d"}, 
  {label: "Türkis",     value: "#0082ba"},
  {label: "Blau",       value: "#002f6c"},
  {label: "Sand",       value: "#94795d"},
  {label: "Taupe",      value: "#a69f88"}, 
  {label: "Coca",       value: "#4e3629"}, 
  {label: "Hellgrau",   value: "#898d8d"},
  {label: "Dunkelgrau", value: "#63666a"}
]


export const fonts = [
  { label: "Blockschrift",    value: ""}, // value: "Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif"},
  { label: "Schreibschrift",  value: ""}, // value: "English Bold"},
  { label: "Altdeutsch",      value: ""}, // value: "Old Cologne Regular"},
  { label: "Modern",          value: ""}, // value: "Sprint / Speedy"},
  { label: "Handschrift",     value: ""}, // value: "Lucida Handwriting"},
  { label: "Kursivschrift",   value: ""}, // value: "Arial Kursiv"},
  { label: "Designschrift",   value: ""} // value: "Comic MS Sans / Enviro"}
]


const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  fields: PropTypes.object.isRequired,
  onFinish: React.PropTypes.func.isRequired
};

export class Form extends Component {
  handleSubmit(e){
    e.preventDefault()
    this.props.onFinish()
    this.props.handleSubmit(e)
  }

  render() {
    const {
      fields: { textfirst, textsecound, textthird, position, font, color, fontsize, firm, name, telefon, email },
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

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
            label="Firma"
            {...firm}/>

          <TextInput isRequired
            label="Vor- und Nachname"
            placeholder="Max Mustermann"
            {...name}/>

            <TextInput isRequired
            label="Telefonnummer"
            placeholder="0821 241245"
            {...telefon}/>

            <TextInput isRequired
            label="E-Mail"
            type="email"
            placeholder="www.example@provider.com"
            {...email}/>
        </div>

        <button className={classes.submitButton}>
          Anfrage absenden
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
  onSubmit: (payload) => sendMail(payload)
})(Form);

export default Form;
