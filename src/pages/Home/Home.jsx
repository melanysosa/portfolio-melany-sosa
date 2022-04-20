import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../../assets/Sosa Melany Noelia CV (1).pdf';
import useStyles from './useStyles';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX1,
	movementX2,
	movementY,
	movement,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';
import ButtonTranslate from '../../components/ButtonTranslate/ButtonTranslate';

const Home = () => {	
	const [t]= useTranslation("language");

	const styles = useStyles();
	const navigate = useNavigate();
	const toWork = () => navigate('/work');
	const toContact = () => navigate('/contact');

	return (
		<motion.div
			name='home'
			className={styles.home}
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<ButtonTranslate/>
			{/**Container */}
			<div className={styles.containerHome}>
				<motion.p variants={movementX1} className={styles.p1}>
					{t('homePage.title1')}
				</motion.p>
				<motion.h1 variants={movementX2} className={styles.name}>
					Melany Sosa
				</motion.h1>
				<motion.h2 variants={movementX1} className={styles.job}>
					{t('homePage.title2')}
				</motion.h2>

				<motion.div
					variants={movementX2}
					className={styles.containerSocialIcons}
				>
					<motion.div variants={movement}>
						<div className={styles.linkedin}>
							<a
								className={styles.aLinkedin}
								href='https://www.linkedin.com/in/melanynoeliasosa/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaLinkedin size={30} />
							</a>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.gitHub}>
							<a
								className={styles.aGitHub}
								href='https://github.com/melanysosa'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaGithub size={30} />
							</a>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.mail}>
							<div
								variants={movement}
								className={styles.aMail}
								onClick={toContact}
							>
								<HiOutlineMail size={30} />
							</div>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.resume}>
							<a
								className={styles.aResume}
								href={Resume}
								target='_blank'
								rel='noopener noreferrer'
							>
								<BsFillPersonLinesFill size={30} />
							</a>
						</div>
					</motion.div>
				</motion.div>

				<motion.div variants={movementY}>
					<Button
						title={t('homePage.titleButtonHome')}
						icon={<HiArrowNarrowRight className={styles.iconButton} />}
						onClick={toWork}
						className={styles.btnHome}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Home;
