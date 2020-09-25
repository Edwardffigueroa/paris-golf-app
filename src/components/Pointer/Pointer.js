import React from 'react';

import classes from './Pointer.module.css'
import { useSpring, animated as a } from 'react-spring'
import Hole from '../Hole/Hole';

/** THIS IS NOT RESPONSIVE!! 
 *  4K DISPLAYS ONLY */

const position = (number) => {
	switch (number) {
		case 1: return ({ x: 2807, y: 1147 })
		case 2: return ({ x: 3060, y: 1433 })
		case 3: return ({ x: 3300, y: 913 })
		case 4: return ({ x: 3143, y: 900 })
		case 5: return ({ x: 2913, y: 890 })
		case 6: return ({ x: 2980, y: 793 })
		case 7: return ({ x: 3417, y: 590 })
		case 8: return ({ x: 3413, y: 990 })
		case 9: return ({ x: 2793, y: 987 })
		case 10: return ({ x: 2340, y: 487 })
		case 11: return ({ x: 1808, y: 595 })
		case 12: return ({ x: 1778, y: 1175 })
		case 13: return ({ x: 1923, y: 1460 })
		case 14: return ({ x: 2203, y: 1243 })
		case 15: return ({ x: 2313, y: 843 })
		case 16: return ({ x: 2058, y: 983 })
		case 17: return ({ x: 1868, y: 820 })
		case 18: return ({ x: 2418, y: 670 })
		default: return ({ x: -100, y: -100 })
	}
}


const Pointer = ({ hole, teams, numberHandler, teamHanlder }) => {

	const { x, y } = position(hole)
	const _height = y - 200

	const props = useSpring({
		from: { opacity: 0, height: `-100px`, position: 'absolute', top: '0px', left: `${x}px` },
		to: { opacity: 1, height: `${_height}px`, position: 'absolute', top: '200px', left: `${x}px` },
		reset: true
	})

	return (
		<a.div style={props}>
			<div className={classes.Pointer}>

				<div className={classes.PointerHole}>
					<Hole
						invert
						key={hole}
						holeClicked={numberHandler}
						clicked={teamHanlder}
						teams={teams}
						number={hole} />
				</div>
			</div>
		</a.div>)
}

export default Pointer
