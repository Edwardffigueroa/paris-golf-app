import React from 'react';
import hole from '../../assets/hole.png'
import Team from '../Team/Team';
import classes from './Hole.module.css'

const Hole = (props) => {
	return (
		<div className={classes.Hole}>
			<p>{props.number}</p>
			<img src={hole} alt={props.number} />
			{
				props.teams.map(team => (
					<Team
						name={team.name}
						avatar={team.avatar}
						clicked={props.cliked} />
				))
			}
		</div>
	)
}

export default Hole
