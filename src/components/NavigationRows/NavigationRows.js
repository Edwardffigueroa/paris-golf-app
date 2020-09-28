import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classes from './NavigationRows.module.css'

const NavigationRows = ({ onChange }) => {
	return (
		<div onClick={onChange} className={classes.NavigationRows}>
			<LeftOutlined />
			<RightOutlined />
		</div>
	)
}

export default NavigationRows
