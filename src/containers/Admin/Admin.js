import React, { useState, useEffect } from 'react';

import CreateTeam from '../../components/CreateTeam/CreateTeam'
import classes from './Admin.module.css'

const Admin = (props) => {

	const [holes, setHoles] = useState([])

	useEffect(() => {
		fetch('https://paris-golf.firebaseio.com/holes.json')
			.then(res => res.json())
			.then(data => {
				const _holes = data.map(h => ({ value: h, label: h }))
				setHoles(_holes)
			})
	}, [])

	return (
		<div className={classes.Admin}>
			<CreateTeam
				holes={holes} />
		</div>
	)
}

export default Admin
