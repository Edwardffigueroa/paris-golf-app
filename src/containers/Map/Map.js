import React, { useEffect, useState } from 'react'
import { Database } from '../../firebaseConfig'
import { useHistory, Route } from 'react-router-dom'

import Hole from '../../components/Hole/Hole'
import Team from '../../components/Team/Team'

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
			.then(data =>
				setHoles(data)
			)

		Database.ref('teams')
			.on('value',
				snapshot => {
					if (snapshot.val()) {
						const _teams = Object.values(snapshot.val())
						setTeams(_teams)
					}
				})
	}, [])


	return (
		<div className={classes.Map}>
			<div className={classes.MapWrapper}>
				{
					holes.map(hole => {
						const _myteams = teams.filter(t => t.currentHole.value === hole)
						return <Hole
							teams={_myteams}
							number={hole} />
					})
				}
			</div>
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
