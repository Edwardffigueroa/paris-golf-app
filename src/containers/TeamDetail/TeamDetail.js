import React from 'react';

import { Carousel } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import classes from './TeamDetail.module.css'

const TeamDetail = ({ name, avatar, pictures, back }) => {

	return (
		<div className={classes.TeamDetail}>
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<ArrowLeftOutlined
						onClick={back}
						style={{ fontSize: '25px' }}
						size="large" />
					<h1>{name}</h1>
				</div>
				<div className={classes.Avatar}>
					<img src={avatar} alt={name} style={{ width: '50%', borderRadius: '50%', margin: 'auto' }} />
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
				</div>
			</div>
		</div>
	)
}

export default TeamDetail
