import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import classes from './NavigationRows.module.css'

const NavigationRows = ({ onChange }) => {
	return (
		<div className={classes.NavigationRows}>
			<LeftOutlined onClick={onChange} />
			<RightOutlined onClick={onChange} />
		</div>
	)
}

export default NavigationRows
