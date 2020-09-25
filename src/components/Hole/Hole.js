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
						key={team.name}
						name={team.name}
						avatar={team.avatar}
						winner={team.isWinner}
						clicked={props.clicked} />
				))
			}
		</div>
	)
}

export default Hole
