import React from 'react'
import classes from './TextInput.scss'

const propTypes = {
	value: 			React.PropTypes.string.isRequired,
	onChange: 		React.PropTypes.func.isRequired,
	label: 			React.PropTypes.string.isRequired,
	placeholder: 	React.PropTypes.string,
	isRequired: 	React.PropTypes.bool,
	onFocus: 		React.PropTypes.func,
	onBlur: 		React.PropTypes.func
}

class TextInput extends React.Component {
	
	constructor(props){
		super(props);

		this.cp = this._getCProps()
		this.cs = this._getCStyles()

		this.onInputFocus 	= this.onInputFocus.bind(this)
		this.onInputBlur 	= this.onInputBlur.bind(this)

		this.state = {
			isFocused: false
		}
	}

	onInputFocus(){
		this.setState({
			isFocused: true
		})

		if(this.props.onFocus){
			this.props.onFocus()
		}
	}

	onInputBlur(){
		this.setState({
			isFocused: false
		})

		if(this.props.onBlur){
			this.props.onBlur()
		}
	}

	_getCStyles(){
		return {
			hr: (inputFocused) => ({
				willChange: "transform, visibility",
				transition: "all 200ms ease-out",
				transform: 	inputFocused
								? "scaleX(1)"
								: "scaleX(0)",
				visibility: inputFocused
								? "visible"
								: "hidden"
			}),
			description: (inputFocused, inputHasValue) => ({
				transition: 		"transform 300ms ease",
				transformOrigin: 	"0 -150%",
				transform: 			inputFocused || inputHasValue
										? "scale(0.6)"
										: ""
			})
		}
	}

	_getCProps(){
		return{
			TextInput: () => ({
				className: 		classes.TextInput
			}),
			inputField: () => ({
				type: 			"text",
				value: 			this.props.value,
				onChange: 		this.props.onChange,
				placeholder: 	this.props.placeholder,
				required: 		this.props.isRequired,
				onFocus: 		this.onInputFocus,
				onBlur: 		this.onInputBlur
			}),
			hr: () => ({
				style: this.cs.hr(this.state.isFocused)
			}),
			description: () => ({
				style: this.cs.description(this.state.isFocused, this.props.value !== "")
			})
		}
	}

	render(){
		let { label } = this.props

		let TextInput 	= this.cp.TextInput()
		let inputField 	= this.cp.inputField()
		let hr			= this.cp.hr()
		let description	= this.cp.description()

		return <fieldset {...TextInput}>
			<input {...inputField}/>
			<hr {...hr}/>
			<label {...description}>{label}</label>
		</fieldset>
	}
}

TextInput.propTypes = propTypes;

export default TextInput;
