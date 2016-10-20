import classes from './Form.scss'
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'

import validate from './validate'
import { sendMail } from 'utils/mailer'
import config from 'utils/config'

import TextInput from 'components/TextInput'
import SelectInput from 'components/SelectInput'
import InfoText from 'components/InfoText'
import SelectFontInput from 'components/SelectFontInput'
import SelectColorInput from 'components/SelectColorInput'
import TextArea from 'components/TextArea'
import InputCheckbox from 'components/InputCheckbox'

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
    } = this.props

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <div className={classes.textDetails}>
          <TextInput isRequired
            label="Textzeile 1 - max. 15 Buchstaben"
            {...textfirst}/>

          <TextInput
            label="Textzeile 2 - max. 15 Buchstaben"
            {...textsecound}/>
        </div>

        <div className={classes.customizing}>
          <SelectInput isRequired
            label="Position"
            items={config.form.positions}
            {...position}/>

          <SelectFontInput isRequired
            label="Schriftart"
            items={config.form.fonts}
            {...font}/>

          <SelectColorInput isRequired
            label="Schriftfarbe"
            items={config.form.colors}
            {...color}/>

          <SelectInput isRequired
            label="Schrifthöhe"
            items={config.form.fontSizes}
            {...fontsize}/>

          <InputCheckbox
            label="Logo-Einstickung gewünscht"
            {...logocheck}/>
        </div>

        <InfoText text={config.form.infoTextFirst}/>

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
            label="E-Mail-Adresse"
            type="email"
            placeholder="example@provider.com"
            {...email}/>
        </div>

        <InfoText text={config.form.infoTextSecond}/>

        <TextArea
          placeholder={config.form.userTextPlaceholder}
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
  fields: config.form.fields,
  validate,
  onSubmit: (payload) => sendMail(payload)
})(Form);

export default Form;
