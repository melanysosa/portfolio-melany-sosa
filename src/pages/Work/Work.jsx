import Project1 from '../../assets/project1.png';
import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX2,
	movementX1,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';

const Work = () => {
	const [t] = useTranslation('language');
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
					<p className={styles.title}>
						{t('projectsPages.titleProjects')}
					</p>
					<p className={styles.pWork}>
						{' '}
						{t('projectsPages.subtitleProjects')}
					</p>
				</motion.div>
				{/**Container */}

				<motion.div className={styles.divContainer2} variants={movementX2}>
					{/**Grid Item */}
					<div className={styles.gridItem1}>
						<div
							style={{ backgroundImage: `url(${Project1})` }}
							className={styles.gridItem2}
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
								{t('projectsPages.containerProject1')}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Work;
