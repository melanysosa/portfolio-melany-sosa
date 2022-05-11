import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX2,
	movementX1,
} from '../../components/Animations/animations';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import WorkBox from './WorkBox';

const Work = () => {
	const [t] = useTranslation('language');
	const styles = useStyles();
	return (
		<motion.div
			name='work'
			className={styles.containerWork}
			key='work'
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
					<WorkBox
						pic={Project1}
						title='Popular Movies'
						demo='https://popular-movies-m.netlify.app/'
						code='https://github.com/melanysosa/popular-movies-app'
						text={t('projectsPages.containerProject1')}
					/>

					<WorkBox
						pic={Project2}
						title='Weather App'
						demo='https://weather-appms.netlify.app/'
						code='https://github.com/melanysosa/weather-app'
						text={t('projectsPages.containerProject2')}
					/>

					<WorkBox
						pic={Project3}
						title='CRUD'
						demo='https://crud-m.netlify.app/'
						code='https://github.com/melanysosa/crud-redux-app'
						text={t('projectsPages.containerProject3')}
					/>
					<WorkBox
						pic={Project4}
						title='Todo List'
						demo='https://todo-list-mns.netlify.app/'
						code='https://github.com/melanysosa/todo-list'
						text={t('projectsPages.containerProject4')}
					/>
				</motion.div>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Work;
