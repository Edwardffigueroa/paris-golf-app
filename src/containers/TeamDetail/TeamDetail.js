import React from 'react';

import rowBack from '../../assets/row_back.svg'
import { Carousel } from 'antd'
import tournoi from '../../assets/LOGO\ TOURNOI\ DE\ GOLF.svg'
import classes from './TeamDetail.module.css'
import Footer from '../../components/Footer/Footer';

const TeamDetail = ({ name, avatar, pictures, isWinner, back }) => {
	const images = [avatar, ...pictures]
	return (
		<div className={classes.TeamDetail}>
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="" />
				</div>
				<span
					className={classes.RowButton}
					onClick={back}>
					<img src={rowBack} alt="Goto draw" /><p>back top map</p>
				</span>
				{
					isWinner ? (
						<div className={classes.WinnerMessage}>
							<h2>Champions<br />COCEF/PLADUR<br />2020</h2>
						</div>
					) : null
				}
				<div className={classes.CarouselWrapper}>
					<Carousel className={classes.Carousel} pauseOnHover={false} autoplay>
						{
							images.map(pic => (
								<div >
									<img src={pic} alt={name} style={{ width: '100%', minHeight: '100vh' }} />
								</div>
							))
						}
					</Carousel>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default TeamDetail
