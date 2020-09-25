import React from 'react';

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
				<div className={classes.CarouselWrapper}>
					{
						isWinner ? <h1>Champions<br />COCEF/ PLADUR<br />2020</h1> : null
					}
					<Carousel className={classes.Carousel} pauseOnHover={false} autoplay>
						{
							images.map(pic => (
								<div >
									<img src={pic} alt={name} style={{ width: '100%' }} />
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
