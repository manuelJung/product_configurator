import React from 'react'
import classes from './<%= pascalEntityName %>.scss'

const propTypes = {

}

let <%= pascalEntityName %> = (props) => (
	<div className={classes.<%= pascalEntityName %>}>
		<%= pascalEntityName %>
	</div>
)

<%= pascalEntityName %>.propTypes = propTypes

export default <%= pascalEntityName %>
