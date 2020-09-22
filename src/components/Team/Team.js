import React from 'react';
import { TrophyFilled } from '@ant-design/icons'
import classes from './Team.module.css'

const Team = ({ avatar, name, clicked, winner }) => {
	return (
		<div onClick={e => clicked(name)} className={classes.Team}>
			{winner ? <TrophyFilled className={classes.Trophy} /> : null}
			<h3>{name}</h3>
			<span className={classes.Avatar} style={{ backgroundImage: `url(${avatar})` }} alt={name} />
		</div>
	)
}

export default Team
