import useStyles from './useStyles';
import { motion } from 'framer-motion';
import MelanyAbout from '../../assets/melanyAbout.jpeg';
import {
	movementX2,
	opacityPages,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';

const About = () => {
	const styles = useStyles();
	const [t] = useTranslation('language');
	return (
		<motion.div
			name='about'
			className={styles.containerAbout}
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<motion.div variants={movementX2} className={styles.boxOpacity}>
				<div className={styles.divP1}>
					<div>
						<p className={styles.title}>
							{t('aboutMePage.titleAboutMe')}
						</p>
					</div>{' '}
					<img
						src={MelanyAbout}
						alt={'Melany'}
						className={styles.imgAbout}
					/>
				</div>
				<div className={styles.divP2}>
					<div className={styles.divP3}>
						<p>{t('aboutMePage.part1AboutMe')}</p>
					</div>
					<div>
						<p>{t('aboutMePage.part2AboutMe')}</p>
					</div>
				</div>
				
			</motion.div>
			<Footer />
		</motion.div>
	);
};

export default About;
