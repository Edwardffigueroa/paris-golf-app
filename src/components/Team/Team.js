import React from 'react';
import classes from './Team.module.css'

const Team = ({ avatar, name, clicked, winner }) => {
	return (
		<div onClick={e => clicked(name)} className={classes.Team}>
			<span className={classes.Avatar} style={{ backgroundImage: `url(${avatar})` }} alt={name} />
			<h3 className={classes.Name}>{name}</h3>
			{winner ? <div className={classes.Trophy}></div> : null}
		</div>
	)
}

export default Team
