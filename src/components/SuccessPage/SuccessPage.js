import React from 'react'
import classes from './SuccessPage.scss'

const propTypes = {

}

let SuccessPage = (props) => (
	<div className={classes.SuccessPage}>
		<div>Vielen Dank für Ihre Anfrage!<br/>
		Unser Service-Team wird sich so schnell wie möglich um Ihr Anliegen kümmern!</div>
		<br/>
		<div className={classes.feedback}>Sollten Sie Fragen haben oder möchten Ihre Anfrage und eine Bestellung gleich mit uns besprechen,<br/> 
		können Sie unter 0800 / 628 84 50* jederzeit einen unserer Servicemitarbeiter erreichen.</div>
		<div className={classes.hintText}>(*Kostenfrei aus dem dt. Fest- und Mobilfunknetz)</div>
	</div>
)

SuccessPage.propTypes = propTypes

export default SuccessPage
