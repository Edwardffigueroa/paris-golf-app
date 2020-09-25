import React, { useEffect, useState } from 'react'
import { Database } from '../../firebaseConfig'
import { useHistory, Route } from 'react-router-dom'
import tournoi from '../../assets/LOGO\ TOURNOI\ DE\ GOLF.svg'
import map from '../../assets/map.svg'

import { useSprings, animated as a } from 'react-spring'
import Hole from '../../components/Hole/Hole'
import TeamDetail from '../TeamDetail/TeamDetail'

import Contest from '../Contest/Contest';
import classes from './Map.module.css'
import Footer from '../../components/Footer/Footer'
import Pointer from '../../components/Pointer/Pointer'


const Table = ({ group }) => {

	const from = { transform: 'translate3d(300px,0,0)', opacity: 0 }
	const to = { transform: 'translate3d(0px,0,0)', opacity: 1 }
	const base = {
		config: { mass: 5, tension: 2000, friction: 200 },
		from: from,
		to: to,
		reset: true
	}

	const springs = useSprings(group.length, group.map((t, i) => ({ ...base, delay: 100 * i })))

	return springs.map((s, i) => (
		<a.span key={`char${i}`} style={s}>
			{ group[i]}
		</a.span>
	))
}


const Map = ({ match }) => {

	const history = useHistory()
	const [holes, setHoles] = useState([])
	const [teams, setTeams] = useState([])
	const [teamSelected, setTeamSelected] = useState(null)
	const [holeSelected, setHoleSelected] = useState(null)
	const [inView, setInView] = useState(true)

	// const goToContestHandler = e => history.push('/contest')
	const teamHanlder = team => {
		const found = teams.find(t => t.name === team)
		setTeamSelected(found)
		history.push(`/team/${team}`)
	}

	const holeHandler = hole => {
		setHoleSelected(hole)
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


	const firstGroup = holes.map((hole) => {
		const _myteams = teams.filter(t => t.currentHole.value === hole)
		return <Hole
			key={hole}
			holeClicked={holeHandler}
			clicked={teamHanlder}
			teams={_myteams}
			number={hole} />
	}).filter((_, i) => i !== 0 && i < 10)


	const secondGroup = holes.map((hole) => {
		const _myteams = teams.filter(t => t.currentHole.value === hole)
		return <Hole
			key={hole}
			holeClicked={holeHandler}
			clicked={teamHanlder}
			teams={_myteams}
			number={hole} />
	}).filter((_, i) => i !== 0 && i >= 10)

	useEffect(() => {
		const setList = () => setInView(prev => !prev)
		setInterval(() => setList(), 5000)
		return () => clearInterval(setList)
	}, [])


	const _pointerTeams = teams.filter(t => {
		if (!holeSelected) return null
		return t.currentHole.value === holeSelected
	})


	return (
		<div className={classes.Map}>
			<section className={classes.TableWrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="" />
				</div>
				<div className={classes.Table}>
					<Table group={inView ? firstGroup : secondGroup} />
				</div>
			</section>
			<section className={classes.MapWrapper}>
				<img src={map} alt="map" />
			</section>
			<Pointer hole={holeSelected} teams={_pointerTeams} />
			<Footer transparent />
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
