import React from 'react'
import classes from './SuccessPage.scss'

const propTypes = {

}

let SuccessPage = (props) => (
	<div className={classes.SuccessPage}>
		Vielen Dank für Ihre Anfrage!<br/>
		Unser Service-Team wird sich so schnell wie möglich um Ihr Anliegen kümmern!<br/>
		<br/>
		Sollten Sie dennoch Fragen haben, können Sie uns unter unserer kostenlosen<br/>
		Service-Hotline erreichen: 0800/628 84 50*<br/>
		<div className={classes.hintText}>(*Kostenfrei aus dem dt. Fest- und Mobilfunknetz)</div>
	</div>
)

SuccessPage.propTypes = propTypes

export default SuccessPage
