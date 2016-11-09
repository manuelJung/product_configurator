import React from 'react'
import classes from './InputCheckbox.scss'

const propTypes = {
	// value: React.PropTypes.bool.isRequired,
	onChange: React.PropTypes.func.isRequired,
	label: React.PropTypes.string.isRequired
}

let InputCheckbox = (props) => (
	<div className={classes.InputCheckbox}>
		<label className={classes.label}>
			<input type="checkbox" checked={props.value} onChange={() => props.onChange(!props.value)} />
			{props.label}
		</label>
	</div>
)

InputCheckbox.propTypes = propTypes

export default InputCheckbox
