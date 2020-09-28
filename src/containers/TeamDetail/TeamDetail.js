import React, { useState, useRef } from 'react';
import { useSpring, animated as a, config } from 'react-spring'
import pause from '../../assets/pause.svg'
import play from '../../assets/play.svg'
import rowBack from '../../assets/row_back.svg'
import { Carousel } from 'antd'
import tournoi from '../../assets/LOGO TOURNOI DE GOLF.svg'
import classes from './TeamDetail.module.css'
import Footer from '../../components/Footer/Footer';

const TeamDetail = ({ name, avatar, pictures, isWinner, back }) => {

	const images = [avatar, ...pictures]
	const [isPlaying, setIsPlaying] = useState(false)
	const carouselRef = useRef();
	const props = useSpring({
		config: config.gentle,
		to: { opacity: 1, color: '#ffaaee' },
		from: { opacity: 0, color: 'red' }
	})

	const playingHandler = e => {
		isPlaying
			? carouselRef.current.slick.slickPause()
			: carouselRef.current.slick.slickPlay()
		setIsPlaying(prev => !prev)
	}

	return (
		<div className={classes.TeamDetail}>
			<div className={classes.Wrapper}>
				<div className={classes.Header}>
					<img style={{ width: '90%' }} src={tournoi} alt="tournoi" />
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
					<Carousel ref={slider => (carouselRef.current = slider)} className={classes.Carousel} pauseOnHover={false} effect="fade"  >
						{
							images.map(pic => (
								<div>
									<img src={pic} alt={name} style={{ width: '100%', minHeight: '100vh' }} />
								</div>
							))
						}
					</Carousel>
				</div>
				<div className={classes.Button}>
					{
						isPlaying
							? <a.div style={props}> <img onClick={playingHandler} className={classes.Entrance} src={pause} alt="pause" /></a.div>
							: <a.div style={props}><img onClick={playingHandler} className={classes.Entrance} src={play} alt="play" /></a.div>
					}
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default TeamDetail
