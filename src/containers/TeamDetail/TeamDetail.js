import React from 'react';

import { Carousel } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'

import classes from './TeamDetail.module.css'

const TeamDetail = ({ name, avatar, pictures, back }) => {
	const contentStyle = {
		height: '160px',
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		background: '#364d79',
	};
	const items = pictures.map(pic => (
		<div style={{ width: '100%', height: '100%' }}>
			<img src={pic} alt={name} style={contentStyle} />
		</div>
	))

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
					<Carousel className={classes.Carousel} autoplay>
						{
							items
						}
					</Carousel>
				</div>
				<div className={classes.CarouselWrapper}>
					<Carousel className={classes.Carousel} autoplay>
						<div>
							<h3 style={contentStyle}>1</h3>
						</div>
						<div>
							<h3 style={contentStyle}>2</h3>
						</div>
						<div>
							<h3 style={contentStyle}>3</h3>
						</div>
						<div>
							<h3 style={contentStyle}>4</h3>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	)
}

export default TeamDetail
