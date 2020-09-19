import React, { useEffect, useState } from 'react';
import { useHistory, Route } from 'react-router-dom'
import Hole from '../../components/Hole/Hole'
import Contest from '../Contest/Contest';
import classes from './Map.module.css'

const Map = ({ match }) => {

	const history = useHistory()
	const [holes, setHoles] = useState([])
	const [teams, setTeams] = useState([])

	const goToContestHandler = e => history.push('/contest')

	useEffect(() => {
		fetch('https://paris-golf.firebaseio.com/holes.json')
			.then(res => res.json())
			.then(data => {
				const _holes = data.map(h => (
					<Hole key={h} number={h} />
				))
				setHoles(_holes)
			})
	}, [])
	return (
		<div className={classes.Map}>
			<div className={classes.MapWrapper}>{holes}</div>
			<div
				className={classes.FloatingButton}
				onClick={goToContestHandler}></div>
			<Route
				path='/contest'
				render={() => (
					<Contest
						teams={teams}
						holes={holes} />
				)} />
		</div>
	)
}

export default Map
