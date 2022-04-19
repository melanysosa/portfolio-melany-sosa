import Project1 from '../../assets/project1.png';
import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX2,
	movementX1,
} from '../../components/Animations/animations';

const Work = () => {
	const styles = useStyles();
	return (
		<motion.div
			name='work'
			className={styles.containerWork}
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<div className={styles.divContainer}>
				<motion.div variants={movementX1} className={styles.divP}>
					<p className={styles.title}>Work</p>
					<p className={styles.pWork}>
						{' '}
						/ Check out some of my recent work
					</p>
				</motion.div>
				{/**Container */}

				<motion.div className={styles.divContainer2} variants={movementX2}>
					{/**Grid Item */}
					<div className='bg-black/70 p-3 rounded-lg ring-cyan-900 ring-2 '>
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
										<button className={styles.btnWorkGrid}>
											Demo
										</button>
									</a>
									<a
										href='https://github.com/melanysosa/popular-movies-app'
										target='_blank'
										rel='noopener noreferrer'
									>
										<button className={styles.btnWorkGrid}>
											Code
										</button>
									</a>
								</div>
							</div>
						</div>{' '}
						<div>
							<p className='p-3 '>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Fugit saepe aspernatur, magnam sunt reiciendis
								laudantium recusandae a iure similique! Amet nulla et
								dignissimos impedit sint quaerat officia expedita quis
								deleniti.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Work;
