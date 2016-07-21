import React from 'react'
import classes from './ImageBox.scss'

const propTypes = {
	headline: 	React.PropTypes.string.isRequired,
	src:		React.PropTypes.string.isRequired
}

let ImageBox = (props) => (
	<div className={classes.ImageBox}>
		<div className={classes.headlineWrapper}>
			<h3>{props.headline}</h3>
		</div>
		<div className={classes.imageWrapper}>
			<img src={props.src} />
		</div>
	</div>
)

ImageBox.propTypes = propTypes

export default ImageBox
