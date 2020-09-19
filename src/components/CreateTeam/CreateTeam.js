import React, { useState } from 'react';
import classes from './CreateTeam.module.css'

import Avatar from './Avatar/Avatar'

const CreateTeam = (props) => {



	return (
		<div className={classes.CreateTeam}>
			<section className={classes.Form}>
				<h1>Create Team</h1>
				<hr />
				<input type="text" name="name" placeholder="name" />
				<input type="text" name="name" placeholder="name" />
				<Avatar />
				<Avatar />
				<button> Create! </button>
			</section>
			<section className={classes.List}>

			</section>
		</div>
	)
}

export default CreateTeam
