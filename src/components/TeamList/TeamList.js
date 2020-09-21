import React from 'react'
import { List, Card } from 'antd'
import classes from './TeamList.module.css'
import { FlagOutlined, StarOutlined } from '@ant-design/icons';

const TeamList = (props) => {
	return (
		<div className={classes.TeamList}>
			<List
				grid={{ gutter: 16, column: 1 }}
				dataSource={props.teams}
				renderItem={item => (
					<List.Item>
						<Card
							className={classes.Card}
							extra={<StarOutlined />}
							style={{ width: '80%', margin: 'auto' }}>
							<Card.Meta
								avatar={
									<img className={classes.Avatar} src={item.avatar} alt={item.name} />
								}
								title={item.name}
								description={(
									<>
										<div className={classes.HoleDescription}>
											<p>
												<FlagOutlined size="large" />
										 Hole</p>
											<p>{item.currentHole.value}</p>
										</div>
										<div className={classes.ImgList}>
											{
												item.images.map(img => <img className={classes.ImgMini} src={img} alt={item.name} />)
											}
										</div>
									</>
								)} />
						</Card>
					</List.Item>
				)}
			/>
		</div>
	)
}

export default TeamList
