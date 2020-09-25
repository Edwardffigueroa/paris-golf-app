import React, { useState } from 'react'


import { ReloadOutlined } from '@ant-design/icons'
import Slot from 'react-slot-machine'
import classes from './SlotDuo.module.css'


const times = 2
const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min)
}

const SlotGroup = () => {

	const [target, setTarget] = useState(0)
	const [secondTarget, setSecondTarget] = useState(0)

	const startHandler = id => {
		const _newTarget = randomNumber(1, 3)
		id == "1"
			? setTarget(_newTarget)
			: setSecondTarget(_newTarget)
	}

	return (
		<div className={classes.SlotGroup}>
			<div className={classes.Machine}>
				<Slot
					times={times}
					target={target}
					duration={2000}
					className={classes.Slot}>
					{
						[0, 1, 2, 3].map((item, index) => {
							return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{item}
							</div>)
						})
					}
				</Slot>
				<Slot
					times={times}
					target={secondTarget}
					duration={3000}
					className={classes.Slot}>
					{
						[0, 1, 2, 3].map((item, index) => {
							return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{item}
							</div>)
						}
						)
					}
				</Slot>
			</div>
			<div className={classes.Controls}>
				<div className={classes.Start} onClick={e => startHandler("1")} >
					<ReloadOutlined />
					<span className={classes.Dot}></span>
				</div>
				<div className={classes.Start} onClick={e => startHandler("2")} >
					<ReloadOutlined />
					<span className={classes.Dot}></span>
				</div>

			</div>
		</div >
	)
}

export default SlotGroup
