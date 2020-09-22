import React, { useState } from 'react'

import { ArrowLeftOutlined } from '@ant-design/icons'
import classes from './Contest.module.css'

import Slot from 'react-slot-machine'

const Contest = ({ teams, holes, back }) => {

	const times = 2
	const duration = 3000

	const [target, setTarget] = useState(0)
	const [turn, setTurn] = useState(false)


	const startHandler = e => {
		const _newTarget = Math.floor(Math.random() * (holes.length - 2)) + 1
		setTarget(_newTarget)
		setTurn(true)
	}

	return (

		<div className={classes.Contest}>
			<div className={classes.ContestWrapper}>
				<div className={classes.Header}>
					<ArrowLeftOutlined
						onClick={back}
						style={{ fontSize: '25px' }}
						size="large" />
					<h1> Ruffle</h1>
				</div>
				<button onClick={startHandler}>
					Start
				</button>
				<Slot
					times={times}
					target={target}
					duration={duration}
					className={classes.Slot}>
					{
						holes.map(hole =>
							<div key={hole} style={{ width: '100%', height: '100%' }}>
								{hole}
							</div>
						)
					}
				</Slot>
			</div>
		</div >
	)
}

export default Contest
