import React from 'react'

import cocef from '../../assets/logo_cocef.svg'
import csubtil from '../../assets/logo_csubtil.svg'
import fairways from '../../assets/logo_fairways.svg'
import pladur from '../../assets/logo_pladur.svg'
import myb from '../../assets/logo_m&b.svg'
import rtw from '../../assets/logo_rtw.svg'

import classes from './Footer.module.css'

const Footer = ({ transparent, notPresented }) => {
	return (
		<div style={transparent ? { backgroundColor: 'transparent' } : null} className={classes.Footer}>
			{
				transparent && !notPresented ?
					<div className={classes.Presente}>
						<p>Presenté par</p>
					</div> : null
			}
			<ul className={classes.ListWrapper}>
				<li>
					<img src={cocef} alt="sponsor" />
				</li>
				<li>
					<img src={csubtil} alt="sponsor" />
				</li>
				<li>
					<img src={fairways} alt="sponsor" />
				</li>
				<li>
					<img src={pladur} alt="sponsor" />
				</li>
				<li>
					<img src={myb} alt="sponsor" />
				</li>
				<li>
					<img src={rtw} alt="sponsor" />
				</li>
			</ul>
		</div>
	)
}

export default Footer
