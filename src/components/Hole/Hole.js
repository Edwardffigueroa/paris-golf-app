import React from 'react';
import hole from '../../assets/hole.png'
import classes from './Hole.module.css'

const Hole = (props) => {
	return (
		<div className={classes.Hole}>
			<p>{props.number}</p>
			<img src={hole} alt={props.number} />
		</div>
	)
}

export default Hole
