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
import TextArea from 'components/TextArea'
import InputCheckbox from 'components/InputCheckbox'

export const fields = ["textfirst", "textsecound", "position", "font", "color", "fontsize", "firm", "name", "telefon", "email", "usertext", "logocheck"]

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

export const infoTextFirst = [
  <div key="1">Gerne besprechen wir Ihren Einstickungs-Wunsch persönlich mit Ihnen!</div>,
  <div key="2">Bitte teilen Sie uns Ihre Kontaktdaten sowie Ihre Telefonnummer und E-Mail-Adresse mit. 
Unser Serviceteam wird sich zeitnah bei Ihnen melden!</div>
]

export const infoTextTwo = [
  <div key="1">Hier können Sie uns ihre Wünsche, Fragen und nähere Angaben zu Größe, Farbe und Anzahl Ihres Wunschprodukts mitteilen (optional)</div>
]

export const usertextPlaceholder = "Beispiel:\nHallo, ich würde gerne diese Kochjacke in Größe 50 langarm in den Farben schwarz, weiß und grau jeweils 4 mal mit dem angegebenen Text besticken lassen"


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
      fields: { textfirst, textsecound, position, font, color, fontsize, firm, name, telefon, email, usertext, logocheck },
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

          <InputCheckbox
            label="Logo-Einstickung gewünscht"
            {...logocheck}/>
        </div>

        <InfoText text={infoTextFirst}/>

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
            label="E-Mail Adresse"
            type="email"
            placeholder="example@provider.com"
            {...email}/>
        </div>

        <InfoText text={infoTextTwo}/>

        <TextArea
          placeholder={usertextPlaceholder}
          {...usertext}/>
        <button className={classes.submitButton}>
          Unverbindliche Anfrage absenden
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
