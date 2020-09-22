import React, { useEffect, useState } from 'react'
import { Database } from '../../firebaseConfig'
import { useHistory, Route } from 'react-router-dom'

import Hole from '../../components/Hole/Hole'
import TeamDetail from '../TeamDetail/TeamDetail'

import Contest from '../Contest/Contest';
import classes from './Map.module.css'

const Map = ({ match }) => {

	const history = useHistory()
	const [holes, setHoles] = useState([])
	const [teams, setTeams] = useState([])
	const [teamSelected, setTeamSelected] = useState(null)

	const goToContestHandler = e => history.push('/contest')
	const teamHanlder = team => {
		const found = teams.find(t => t.name === team)
		setTeamSelected(found)
		console.log(found)
		history.push(`/team/${team}`)
	}

	const backToMap = e => history.push('/')

	useEffect(() => {
		fetch('https://paris-golf.firebaseio.com/holes.json')
			.then(res => res.json())
			.then(data => setHoles(data))

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
							clicked={teamHanlder}
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
						back={backToMap}
						teams={teams}
						holes={holes} />
				)} />
			<Route
				path='/team/:id'
				render={() => (
					teamSelected ?
						<TeamDetail
							back={backToMap}
							name={teamSelected.name}
							avatar={teamSelected.avatar}
							pictures={teamSelected.images} />
						: null
				)} />
		</div>
	)
}

export default Map
