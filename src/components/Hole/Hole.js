import React, { useState } from 'react';
import Team from '../Team/Team';
import classes from './Hole.module.css'

const Hole = (props) => {
	const [isChecked, setIsChecked] = useState(false)
	const clicked = e => {
		if (!isChecked) {
			props.holeClicked(props.number)
		}
		setIsChecked(prev => !prev)
	}
	return (
		<div className={classes.Hole}>
			<span
				className={isChecked ? [classes.Number, classes.Checked].join(' ') : classes.Number}
				onClick={clicked} >
				{props.number}
			</span>
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
