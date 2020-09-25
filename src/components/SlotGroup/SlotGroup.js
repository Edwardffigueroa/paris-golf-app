import React, { useState } from 'react'


import { ReloadOutlined } from '@ant-design/icons'
import Slot from 'react-slot-machine'
import classes from './SlotGroup.module.css'


const times = 2
const duration = 2000
const ranges = [
	new Array(10).fill(),
	new Array(10).fill(),
	new Array(3).fill()
]

const randomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min)) || min
}

const SlotGroup = (props) => {

	const [target, setTarget] = useState([0, 1, 0])

	const startHandler = e => {
		const _targets = [
			randomNumber(0, 10),
			randomNumber(1, 10),
			randomNumber(0, 2)]
		console.log(_targets)
		setTarget(_targets)
	}

	return (
		<div className={classes.SlotGroup}>
			<div className={classes.Machine}>
				{ranges.map((r, i) => (
					<Slot
						key={i}
						times={times}
						target={target[i]}
						duration={duration}
						className={classes.Slot}>
						{
							ranges[i].map((item, index) => {
								return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									{index}
								</div>)
							}
							)
						}
					</Slot>
				))}
			</div>
			<div className={classes.Controls}>
				<div className={classes.FirstButtons}>
					<div className={classes.Start} onClick={startHandler} >
						<ReloadOutlined />
						<span className={classes.Dot}></span>
					</div>
				</div>
			</div>
		</div >
	)
}

export default SlotGroup
