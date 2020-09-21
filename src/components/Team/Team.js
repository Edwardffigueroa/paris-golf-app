import React from 'react';

import classes from './Team.module.css'

const Team = ({ avatar, name }) => {
	return (
		<div className={classes.Team}>
			<h3>{name}</h3>
			<span className={classes.Avatar} style={{ backgroundImage: `url(${avatar})` }} alt={name} />
		</div>
	)
}

export default Team
