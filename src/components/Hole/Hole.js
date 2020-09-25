import React from 'react';
import Team from '../Team/Team';
import classes from './Hole.module.css'

const Hole = (props) => {
	return (
		<div className={classes.Hole}>
			<span onClick={e => props.holeClicked(props.number)} className={classes.Number}>{props.number}</span>
			<div className={classes.Teams}>
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
		</div>
	)
}

export default Hole
