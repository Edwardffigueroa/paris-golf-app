import React from 'react';

import { Carousel } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import tournoi from '../../assets/LOGO\ TOURNOI\ DE\ GOLF.svg'
import classes from './TeamDetail.module.css'
import Footer from '../../components/Footer/Footer';

const TeamDetail = ({ name, avatar, pictures, back }) => {

	return (
		<div className={classes.TeamDetail}>
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="" />
				</div>
				<div className={classes.CarouselWrapper}>
					<Carousel className={classes.Carousel} autoplay>
						{
							pictures.map(pic => (
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
