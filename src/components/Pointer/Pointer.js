import React from 'react';

import classes from './Pointer.module.css'
import { useSpring, animated as a } from 'react-spring'
import Hole from '../Hole/Hole';

/** THIS IS NOT RESPONSIVE!! 
 *  4K DISPLAYS ONLY */

const position = (number) => {
	switch (number) {
		case 1: return ({ x: 2940, y: 1273 })
		case 2: return ({ x: 3202, y: 1553 })
		case 3: return ({ x: 3440, y: 1035 })
		case 4: return ({ x: 3280, y: 1028 })
		case 5: return ({ x: 3040, y: 1013 })
		case 6: return ({ x: 3120, y: 908 })
		case 7: return ({ x: 3558, y: 703 })
		case 8: return ({ x: 3553, y: 1100 })
		case 9: return ({ x: 2943, y: 1098 })
		case 10: return ({ x: 2470, y: 608 })
		case 11: return ({ x: 1940, y: 713 })
		case 12: return ({ x: 1905, y: 1290 })
		case 13: return ({ x: 2050, y: 1580 })
		case 14: return ({ x: 2335, y: 1363 })
		case 15: return ({ x: 2453, y: 960 })
		case 16: return ({ x: 2188, y: 1100 })
		case 17: return ({ x: 2000, y: 935 })
		case 18: return ({ x: 2550, y: 793 })
		default: return ({ x: 0, y: 0 })
	}
}


const Pointer = ({ hole, teams }) => {

	const { x, y } = position(hole)
	const _height = y - 200

	const props = useSpring({
		from: { opacity: 0, height: `0px`, position: 'absolute', top: '-100px', left: `${x}px` },
		to: { opacity: 1, height: `${_height}px`, position: 'absolute', top: '200px', left: `${x}px` },
		reset: true
	})
	const clickHanlder = e => console.log('clicked')
	return (
		<a.div style={props}>
			<div className={classes.Pointer}>

				<div className={classes.PointerHole}>
					<Hole
						key={hole}
						holeClicked={clickHanlder}
						clicked={clickHanlder}
						teams={teams}
						number={hole} />
				</div>
			</div>
		</a.div>)
}

export default Pointer
