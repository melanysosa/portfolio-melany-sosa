import Project1 from '../../assets/project1.png';
import useStyles from './useStyles';

const Work = () => {
	const styles = useStyles();
	return (
		<div name='work' className={styles.containerWork}>
			<div className={styles.divContainer}>
				<div className={styles.divP}>
					<p className={styles.title}>Work</p>
					<p className={styles.pWork}>
						{' '}
						/ Check out some of my recent work
					</p>
				</div>
				{/**Container */}
				<div className={styles.divContainer2}>
					{/**Grid Item */}
					<div
						style={{ backgroundImage: `url(${Project1})` }}
						className={styles.gridItem}
					>
						{/**Hover effects */}
						<div className={styles.divEffects}>
							<span className={styles.span}>Popular Movies</span>
							<div>
								<a
									href='https://popular-movies-m.netlify.app/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className={styles.btnWorkGrid}>Demo</button>
								</a>
								<a
									href='https://github.com/melanysosa/popular-movies-app'
									target='_blank'
									rel='noopener noreferrer'
								>
									<button className={styles.btnWorkGrid}>Code</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
