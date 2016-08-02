import React from 'react'
import classes from './InfoText.scss'

const propTypes = {

}

let InfoText = (props) => (
	<div className={classes.InfoText}>
		<div>Gerne besprechen wir Ihren Einstickungs-Wunsch persönlich mit Ihnen!</div>
        <div>Bitte teilen Sie uns Ihre Kontaktdaten sowie Ihre Telefonnummer und E-Mail-Adresse mit. 
        Unser Serviceteam wird sich zeitnah bei Ihnen melden!</div>
        <div>Es handelt sich hierbei <u>nicht</u> um eine rechtskräftige Bestellung. 
        Mit der Angabe Ihrer Daten und dem Absenden des Formulars stellen Sie eine unverbindliche Anfrage an uns!</div>
	</div>
)

InfoText.propTypes = propTypes

export default InfoText
