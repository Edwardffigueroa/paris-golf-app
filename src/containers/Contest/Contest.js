import React from 'react'
import row from '../../assets/row.svg'
import classes from './Contest.module.css'
import Footer from '../../components/Footer/Footer'
import tournoi from '../../assets/LOGO TOURNOI DE GOLF.svg'
import SlotGroup from '../../components/SlotGroup/SlotGroup'
import SlotDuo from '../../components/SlotDuo/SlotDuo'

const Contest = ({ back }) => {

	return (
		<div className={classes.Contest}>
			<div className={classes.ContestWrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="" />
				</div>
				<span
					className={classes.RowButton}
					onClick={back}>
					<img src={row} alt="Goto draw" /><p>back top map</p>
				</span>
				<div className={classes.Machines}>
					<SlotGroup />
					<SlotDuo />
				</div>
				<Footer transparent />
			</div>
		</div >
	)
}

export default Contest
