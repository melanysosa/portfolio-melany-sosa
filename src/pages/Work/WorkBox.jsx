import React from 'react';
import useStyles from './useStyles';

const WorkBox = ({ pic, title, demo, code, text }) => {
	const styles = useStyles();

	return (
		<div className={styles.workBox}>
			<div style={{ backgroundImage: `url(${pic})` }} className={styles.bg}>
				{/* hover effects */}
				<div className={styles.hover}>
					<span className={styles.titleWorkBox}>{title}</span>
					<div className={styles.Btns}>
						<a href={demo} target='_blank' rel='noopener noreferrer'>
							<button className={styles.workbtn}>Demo</button>
						</a>
						<a href={code} target='_blank' rel='noopener noreferrer'>
							<button className={styles.workbtn}>Code</button>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.foot}>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default WorkBox;
