import React, { useEffect, useState } from 'react'
import { useHistory, Route } from 'react-router-dom'


import { Database } from '../../firebaseConfig'

import tournoi from '../../assets/LOGO TOURNOI DE GOLF.svg'
import map from '../../assets/map.svg'
import row from '../../assets/row.svg'

// import Hole from '../../components/Hole/Hole'
import Table from '../../components/Table/Table'
import Footer from '../../components/Footer/Footer'
import Pointer from '../../components/Pointer/Pointer'
import NavigationRows from '../../components/NavigationRows/NavigationRows'

import TeamDetail from '../TeamDetail/TeamDetail'
import Contest from '../Contest/Contest';

import classes from './Map.module.css'



const Map = ({ match }) => {

	const history = useHistory()
	const [holes, setHoles] = useState([])
	const [teams, setTeams] = useState([])
	const [teamSelected, setTeamSelected] = useState(null)
	const [holeSelected, setHoleSelected] = useState(null)
	const [inView, setInView] = useState(true)

	const goToContestHandler = e => history.push('/contest')
	const teamHanlder = team => {
		const found = teams.find(t => t.name === team)
		setTeamSelected(found)
		history.push(`/team/${team}`)
	}

	const holeHandler = hole => {
		const _isSame = hole == holeSelected

		if (_isSame) {
			setHoleSelected(null)
		}

		if (!_isSame || (_isSame && !holeSelected)) {
			setHoleSelected(hole)
		}


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
				<span className={classes.RowButton} onClick={goToContestHandler}><p>Go to draw</p> <img src={row} alt="Goto draw" /></span>
				<div className={inView ? [classes.Table, classes.Group].join(' ') : [classes.Table, classes.Group].join(' ')}>
					{
						<Table
							second={inView}
							holes={holes}
							teams={teams}
							holeSelected={holeSelected}
							holeHandler={holeHandler}
							teamHanlder={teamHanlder} />
					}
				</div>
				<NavigationRows onChange={() => setInView(prev => !prev)} />
			</section>
			<section className={classes.MapWrapper}>
				<img src={map} alt="map" />
			</section>
			<Pointer hole={holeSelected} teams={_pointerTeams} numberHandler={() => setHoleSelected(prev => !prev)} teamHanlder={teamHanlder} />
			<Footer transparent notPresented />
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
							pictures={teamSelected.images}
							isWinner={teamSelected.isWinner} />
						: null
				)} />
		</div>
	)
}

export default Map
