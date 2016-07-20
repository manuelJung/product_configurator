import React from 'react'
import classes from './TextInput.scss'

const propTypes = {

}

class TextInput extends React.Component {
	
	constructor(props){
		super(props);

		this.cp = this._getCProps();
		this.cs = this._getCStyles();
	}

	_getCStyles(){
		return {}
	}

	_getCProps(){
		return{
			TextInput: () => ({
				className: TextInput
			})
		}
	}

	render(){
		let {} = this.props;

		let TextInput = this.cp.TextInput();

		return <div {...TextInput}>
			TextInput
		</div>
	}
}

TextInput.propTypes = propTypes;

export default TextInput;
