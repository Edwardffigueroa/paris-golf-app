import React, { useState } from 'react';
import { Upload } from 'antd'
import { getBase64, beforeUpload } from '../../../utils/Utils'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import classes from './Avatar.module.css'

const Avatar = (props) => {
	const [loading, setLoading] = useState(false)
	const [avatar, setAvatar] = useState(null)

	const handleChange = info => {
		setLoading(true)
		if (info.file.originFileObj) {
			getBase64(info.file.originFileObj, imgUrl => {
				setAvatar(imgUrl)
				setLoading(false)
			})
		}
	}

	return (
		<Upload
			name="avatar"
			listType="picture-card"
			className={classes.AvatarUploader}
			showUploadList={false}
			action={props.sendAvatar}
			beforeUpload={beforeUpload}
			onChange={handleChange}>
			{
				avatar
					? <img src={avatar} alt="avatar" style={{ width: '100%' }} />
					: (
						<div>
							{loading ? <LoadingOutlined /> : <PlusOutlined />}
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					)
			}
		</Upload>
	)
}

export default Avatar
