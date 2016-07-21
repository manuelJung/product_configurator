import React from 'react'
import classes from './<%= pascalEntityName %>.scss'

const propTypes = {

}

class <%= pascalEntityName %> extends React.Component {
	
	constructor(props){
		super(props)

		this.cp = this._getCProps()
		this.cs = this._getCStyles()
	}

	_getCStyles(){
		return {}
	}

	_getCProps(){
		return{
			<%= pascalEntityName %>: () => ({
				className: classes.<%= pascalEntityName %>
			})
		}
	}

	render(){
		let {} = this.props

		let <%= pascalEntityName %> = this.cp.<%= pascalEntityName %>()

		return <div {...<%= pascalEntityName %>}>
			<%= pascalEntityName %>
		</div>
	}
}

<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
