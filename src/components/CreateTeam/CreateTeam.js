import React, { useEffect, useState } from 'react';
import { Database, Storage } from '../../firebaseConfig'
import 'antd/dist/antd.css';

import classes from './CreateTeam.module.css'

import { Input, Button } from 'antd'
import { UsergroupDeleteOutlined, FlagOutlined } from '@ant-design/icons';


import Images from './Images/Images'
import Select from 'react-select'
import Avatar from './Avatar/Avatar'
import TeamList from '../TeamList/TeamList';

const CreateTeam = (props) => {

	const storageRef = Storage.ref()

	const [name, setName] = useState('')
	const [hole, setHole] = useState(props.holes[0])
	const [avatarUrl, setAvatarUrl] = useState('')
	const [images, setImages] = useState([])
	const [saved, setSaved] = useState(false)
	const [teamList, setTeamList] = useState([])

	const nameHandler = e => setName(e.target.value)
	const createTeamHandler = e => {
		const _team = {
			name: name,
			currentHole: hole,
			avatar: avatarUrl,
			images: images,
			isWinner: false
		}

		Database.ref('teams')
			.push(_team)
			.then(snapshot => {

				const _teamAdded = snapshot.toJSON()
				setSaved(true)

				setName('')
				setImages([])
				setAvatarUrl('')
				setHole(props.holes[0])

			}).catch(err => console.log(err))
	}

	const saveAvatarToFirebase = async imageFile => {
		const snapshot = await storageRef.child(`avatar_${name}_team`).put(imageFile)
		const _url = await snapshot.ref.getDownloadURL()
		setAvatarUrl(_url)
		return false || _url
	}


	const saveImageToFirebase = async image => {
		const snapshot = await storageRef.child(`images_${name}_team_${image.uid}`).put(image)
		const _url = await snapshot.ref.getDownloadURL()
		setImages(prev => [...prev, _url])
	}

	const saveWinnerToFirebase = team => {
		const { uid } = team
		delete team.uid

		Database.ref('teams/' + uid)
			.set({ ...team, isWinner: !team.isWinner })
	}

	const removeTeamFromFirabse = team => {
		const { uid } = team
		Database.ref('teams/' + uid).remove()
	}

	useEffect(() => {
		Database.ref('teams')
			.on('value',
				snapshot => {
					if (snapshot.val()) {
						const _teams = Object.keys(snapshot.val())
							.map(_team => ({ ...snapshot.val()[_team], uid: _team }))
						setTeamList(_teams)
					}
				})
	}, [])

	return (
		<div className={classes.CreateTeam}>
			<section className={classes.Form}>
				<h1>Créer equipe</h1>
				<Input
					size="large"
					value={name}
					prefix={<UsergroupDeleteOutlined />}
					onChange={nameHandler}
					placeholder="Équipe nom" />
				<div className={classes.Holes}>
					<p>Hole number</p>
					<FlagOutlined />
					<Select
						value={hole}
						className={classes.Selected}
						classNamePrefix={classes.SelectedInners}
						onChange={setHole}
						defaultValue={hole}
						options={props.holes} />
				</div>
				<Avatar
					saved={saved}
					sendAvatar={saveAvatarToFirebase} />
				<Images
					saved={saved}
					sendImage={saveImageToFirebase} />
				<Button
					onClick={createTeamHandler}
					color="#6BAE20"
					type="primary"
					size="large">
					Enregistre
        		</Button>
			</section>
			<section className={classes.List}>
				<TeamList
					winner={saveWinnerToFirebase}
					deleted={removeTeamFromFirabse}
					teams={teamList} />
			</section>
		</div>
	)
}

export default CreateTeam
