import React, { useState } from 'react'

import { ArrowLeftOutlined, PlayCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import classes from './Contest.module.css'

import Slot from 'react-slot-machine'

const Contest = ({ teams, holes, back }) => {

	const times = 2
	const duration = 2000

	const [target, setTarget] = useState([0, 0, 0, 0, 0])
	const [turn, setTurn] = useState(false)


	const startHandler = e => {
		const _targets = target.map(t => Math.floor(Math.random() * (holes.length - 2)) + 1)
		setTarget(_targets)
	}

	const clearHandler = e => {
		const _targets = [0, 0, 0, 0, 0]
		setTarget(_targets)
		setTurn(false)
	}

	const contestFinish = slot => {
		if (slot === 4) {
			setTurn(true)
		}
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
				<div className={classes.Controls}>
					<PlayCircleOutlined style={{ fontSize: '2rem' }} onClick={startHandler} />
					<ReloadOutlined style={{ fontSize: '2rem' }} onClick={clearHandler} />
				</div>
				<div className={!turn ? classes.Machine : [classes.Machine, classes.Animated].join(' ')}>
					{
						target.map((t, i) => (
							<Slot
								times={times}
								target={target[i]}
								duration={duration * (i + 1)}
								onEnd={e => contestFinish(i)}
								className={classes.Slot}>
								{
									holes.map(hole =>
										<div key={hole} style={{ width: '100%', height: '100%' }}>
											{hole}
										</div>
									)
								}
							</Slot>
						))
					}
				</div>
			</div>
		</div >
	)
}

export default Contest
