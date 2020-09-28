import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd'
import { beforeUploadList, getBase64 } from '../../../utils/Utils'
import { message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import classes from './Images.module.css'

const Images = (props) => {

	const [previewVisible, setPreviewVisible] = useState(false)
	const [previewImage, setPreviewImage] = useState('')
	const [previewTitle, setPreviewTitle] = useState('')
	const [loading, setLoading] = useState(false)
	const [fileList, setFileList] = useState([])

	useEffect(() => {
		setFileList([])
		setLoading(false)
		setPreviewImage('')
		setPreviewTitle('')
	}, [props.saved])

	const handleChange = ({ file, fileList }) => {
		setLoading(true)
		props.sendImage(file, fileList, percentage => {
			if (percentage === 100) {
				message.success({
					content: 'Images uploaded!',
					className: classes.Success,
					style: {
						marginTop: '50vh',
					}
				})
				setLoading(false)
				setFileList(fileList)
			}
		})
	}

	const handleCancel = () => setPreviewVisible(false)

	const handlePreview = file => {
		setLoading(true)
		if (!file.url && !file.preview) {
			getBase64(file.originFileObj, preview => {
				const title = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
				setPreviewVisible(true)
				setPreviewTitle(title)
				setPreviewImage(file.url || preview)
				setLoading(false)
			})
		}
	}

	return (
		<>
			<p style={{ fontWeight: '700' }}>Images:</p>
			<Upload
				multiple
				listType="picture-card"
				className={classes.ImagesUploader}
				fileList={fileList}
				beforeUpload={beforeUploadList}
				onPreview={handlePreview}
				onChange={handleChange}>
				{
					fileList.length >= 8
						? null
						: (
							<div>
								{loading ? <LoadingOutlined /> : <PlusOutlined />}
								<div style={{ marginTop: 8 }}>Upload</div>
							</div>
						)
				}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="equipe" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</>
	)
}

export default Images
