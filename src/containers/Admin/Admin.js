import React from 'react';

import CreateTeam from '../../components/CreateTeam/CreateTeam'
import classes from './Admin.module.css'

const Admin = (props) => {
	return (
		<div className={classes.Admin}>
			<CreateTeam />
		</div>
	)
}

export default Admin
