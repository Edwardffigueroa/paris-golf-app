import React, { useState } from 'react'

import { ReloadOutlined } from '@ant-design/icons'
import classes from './Contest.module.css'
import Footer from '../../components/Footer/Footer'
import tournoi from '../../assets/LOGO\ TOURNOI\ DE\ GOLF.svg'
import SlotGroup from '../../components/SlotGroup/SlotGroup'
import SlotDuo from '../../components/SlotDuo/SlotDuo'

const Contest = ({ teams, holes, back }) => {

	const [secondTarget, setSecondTarget] = useState(0)


	return (
		<div className={classes.Contest}>
			<div className={classes.ContestWrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="" />
				</div>
				<div className={classes.Machines}>
					<SlotGroup />
					<SlotDuo />
				</div>

				{/* <div className={classes.Controls}>
					<div className={classes.FirstButtons}>
						<div className={classes.Start} onClick={startHandler} >
							<ReloadOutlined />
							<span className={classes.Dot}></span>
						</div>
					</div>
					<div className={classes.LastButtons}>
						<div className={classes.Start} onClick={startHandler} >
							<ReloadOutlined />
							<span className={classes.Dot}></span>
						</div>
						<div className={classes.Start} onClick={startHandler} >
							<ReloadOutlined />
							<span className={classes.Dot}></span>
						</div>
					</div>
				</div> */}
				<Footer transparent />
			</div>
		</div >
	)
}

export default Contest
