import { message } from 'antd'
export const getBase64 = (img, cb) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => cb(reader.result))
    reader.readAsDataURL(img)
}

export const beforeUpload = file => {
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

export const beforeUploadList = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || 'image/png'
    if (!isJpgOrPng) {
        message.error('you can only upload JPG/PNG file')
    }

    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        message.error('Image must be smaller than 2Mb')
    }

    return false
}
