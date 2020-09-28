import React, { useState } from 'react'


import { ReloadOutlined, ClearOutlined } from '@ant-design/icons'
import Slot from 'react-slot-machine'
import classes from './SlotGroup.module.css'
import { addZero, randomNumber } from '../../utils/Utils'


const times = 5
const duration = 2000
const ranges = [
	new Array(19).fill(),
	new Array(3).fill()
]

const SlotGroup = (props) => {

	const [target, setTarget] = useState([1, 0])

	const startHandler = e => {
		let _targets = [
			randomNumber(1, 19),
			randomNumber(1, 3)]

		if (_targets[0] === target[0]) {
			_targets[0] = randomNumber(1, 19)
		}

		if (_targets[1] === target[1]) {
			_targets[1] = randomNumber(0, 3)
		}
		setTarget(_targets)
	}


	const clearHandler = e => {
		let _targets = [0, 0]
		setTarget(_targets)
	}

	return (
		<div className={classes.SlotGroup}>
			<div className={classes.Machine}>

				<Slot
					times={times}
					target={target[0]}
					duration={duration}
					className={classes.Slot}>
					{
						ranges[0].map((_, index) => {
							const _index = addZero(index)
							return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{_index}
							</div>)
						})
					}
				</Slot>
				<Slot
					times={times}
					target={target[1]}
					duration={duration + 1000}
					className={classes.Slot}>
					{
						ranges[1].map((item, index) => {
							return (<div key={index} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
								{index}
							</div>)
						})
					}
				</Slot>
			</div>
			<div className={classes.Controls}>
				<div className={classes.FirstButtons}>
					<div className={classes.Start} onClick={startHandler} >
						<ReloadOutlined />
						<span className={classes.Dot}></span>
					</div>

					<div className={classes.Start} style={{ marginLeft: '100px' }} onClick={clearHandler} >
						<ClearOutlined />
					</div>
				</div>
			</div>
		</div >
	)
}

export default SlotGroup
