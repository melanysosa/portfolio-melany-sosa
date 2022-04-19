import useStyles from './useStyles';
import { motion } from 'framer-motion';
import MelanyAbout from '../../assets/melanyAbout.jpeg';
import {
	movementX2,
	opacityPages,
} from '../../components/Animations/animations';

const About = () => {
	const styles = useStyles();
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
						<p className={styles.title}>About me</p>
					</div>{' '}
					<img
						src={MelanyAbout}
						alt={'Melany'}
						className={styles.imgAbout}
					/>
				</div>
				<div className={styles.divP2}>
					<div className={styles.divP3}>
						<p>
							Hi, i'm Melany ,nice to meet you. Please take a look
							around.
						</p>
					</div>
					<div>
						<p>
							i'm passionate about this career, because there is always
							something new to learn, I'm attracted to the idea of doing
							it and taking advantage of it, to work on innovative and
							interesting projects.
						</p>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;
