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
} from '../../components/Animations/animations';

const Home = () => {
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
			{/**Container */}
			<div className={styles.containerHome}>
				<motion.p variants={movementX1} className={styles.p1}>
					Hi, my name is
				</motion.p>
				<motion.h1 variants={movementX2} className={styles.name}>
					Melany Sosa
				</motion.h1>
				<motion.h2 variants={movementX1} className={styles.job}>
					I'm a frontend developer
				</motion.h2>

				<motion.div
					variants={movementX2}
					className={styles.containerSocialIcons}
				>
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
					<div className={styles.mail}>
						<div className={styles.aMail} onClick={toContact}>
							<HiOutlineMail size={30} />
						</div>
					</div>
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

				<motion.div variants={movementY}>
					<Button
						title={'View work'}
						icon={<HiArrowNarrowRight className='ml-2' />}
						onClick={toWork}
						className={styles.btnHome}
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Home;
