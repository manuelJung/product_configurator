import React from 'react'
import classes from './InfoText.scss'

const propTypes = {

}

let InfoText = (props) => (
	<div className={classes.InfoText}>
        { props.text }
	</div>
)

InfoText.propTypes = propTypes

export default InfoText
