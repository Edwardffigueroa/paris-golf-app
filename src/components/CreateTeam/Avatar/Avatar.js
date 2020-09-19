import React, { useState } from 'react';
import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import classes from './Avatar.module.css'

const getBase64 = (img, cb) => {
	const reader = new FileReader()
	reader.addEventListener('load', () => cb(reader.result))
	reader.readAsDataURL(img)
}

const beforeUpload = file => {
	const isJpgOrPng = file.type === 'image/jpeg' || 'image/png'
	if (!isJpgOrPng) {
		message.error('you can only upload JPG/PNG file')
	}

	const isLt2M = file.size / 1024 / 1024 < 2
	if (!isLt2M) {
		message.error('Image must be smaller than 2Mb')
	}

	return isJpgOrPng && isLt2M
}


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

	const uploadImage = (a, b, c, d) => {
		// console.log(a, b, c, d)
		return new Error('nonas')
	}

	return (
		<Upload
			name="avatar"
			listType="picture-card"
			className={classes.AvatarUploader}
			showUploadList={false}
			action={uploadImage}
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
