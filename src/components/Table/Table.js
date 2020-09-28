import React, { useEffect } from 'react';

import { useSpring, animated } from 'react-spring'
import Hole from '../Hole/Hole'
import classes from './Table.module.css'

const Table = ({ holes, teams, holeSelected, teamHanlder, holeHandler, second }) => {


	const props = useSpring({
		to: second ? { opacity: 1, color: '#ffaaee' } : { opacity: 0, color: '#ffaaee' },
		from: { opacity: 0, color: '#ffaaee' }
	})

	// const propertas
	// ...


	let _myHoles = holes.map((hole) => {
		const _myteams = teams.filter(t => t.currentHole.value === hole)
		return <Hole
			selected={holeSelected}
			key={hole}
			holeClicked={holeHandler}
			clicked={teamHanlder}
			teams={_myteams}
			number={hole} />
	})

	useEffect(() => { }, [second]);

	return (
		<animated.div style={props} >

			<div className={classes.Table}>
				{
					_myHoles ?
						_myHoles.filter((_, i) => {
							if (second) {
								return i !== 0 && i >= 10
							}
							return i !== 0 && i < 10
						}).map((s, i) => (
							<div key={`char${i}`} className={classes.Group}>
								{s}
							</div>
						))
						: null
				}
			</div>
		</animated.div >
	)
}

export default Table
