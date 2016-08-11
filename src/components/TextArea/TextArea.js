import React from 'react';
import classes from './TextArea.scss'

const propTypes = {
	value: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string	
}

class TextArea extends React.Component {

	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()
	}

	_getCStyles(){
		return {}
	}

	_getCProps(){
		return {
			TextArea: () => ({
				className: classes.TextArea
			}),
		}
	}

	render(){
		let c_TextArea = this.cp.TextArea()

		let { placeholder } = this.props;

		return <div {...c_TextArea}>
			<textarea placeholder={placeholder}/>
		</div>
	}
}

TextArea.propTypes = propTypes

export default TextArea;