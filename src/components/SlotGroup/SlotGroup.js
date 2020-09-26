import React, { useState } from 'react'


import { ReloadOutlined } from '@ant-design/icons'
import Slot from 'react-slot-machine'
import classes from './SlotGroup.module.css'
import { addZero, randomNumber } from '../../utils/Utils'


const times = 5
const duration = 2000
const ranges = [
	new Array(18).fill(),
	new Array(3).fill()
]

const SlotGroup = (props) => {

	const [target, setTarget] = useState([1, 0])

	const startHandler = e => {
		let _targets = [
			randomNumber(1, 18),
			randomNumber(0, 2)]

		if (_targets[0] === target[0] || _targets[1] === target[1]) {
			_targets = [
				randomNumber(1, 18),
				randomNumber(0, 2)]
		}

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
							ranges[i].map((_, index) => {
								const _index = i === 0 ? addZero(index) : index
								return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
									{_index}
								</div>)
							})
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
