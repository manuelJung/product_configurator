import React from 'react'
import classes from './PriceField.scss'

const propTypes = {
	price: React.PropTypes.string.isRequired
}

let PriceField = (props) => (
	<div className={classes.PriceField}>
		<div className={classes.headlineWrapper}><h3>Preis pro Einstickung</h3></div>
		<div className={classes.text}>Vorraussichtliche Kosten pro Einstickung:
			<span className={classes.price}>{Math.round(props.price * 100) / 100} €</span>
		</div>
	</div>
)

PriceField.propTypes = propTypes

export default PriceField
