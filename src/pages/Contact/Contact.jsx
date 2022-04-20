import Button from '../../components/Button/Button';
import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX1,
	movementY,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';

const Contact = () => {
	const [t] = useTranslation('language');
	const styles = useStyles();

	return (
		<motion.div
			name='contact'
			className={styles.containerContact}
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<div className={styles.contactDiv}>
				<motion.div variants={movementX1} className={styles.divP}>
					<p className={styles.p1}> {t('contactPage.titleContact')}</p>
				</motion.div>
				<motion.form
					method='POST'
					action='https://getform.io/f/ddc40c19-8810-4c98-bc15-e8c50b0dc622'
					className={styles.contactForm}
					variants={movementY}
				>
					<p className={styles.p2}>{t('contactPage.subtitleContact')}</p>

					<input
						className={styles.inputName}
						type='text'
						placeholder={t('contactPage.inputName')}
						name='name'
						required
					/>
					<input
						className={styles.inputMail}
						type='email'
						placeholder={t('contactPage.inputEmail')}
						name='email'
						required
					/>
					<p className={styles.pValid}>{t('contactPage.validP')}</p>

					<textarea
						className={styles.textarea}
						name='message'
						rows='10'
						placeholder={t('contactPage.inputTextarea')}
						required
						
					></textarea>
					<div className={styles.btnContact}>
						<Button title={t('contactPage.buttonContact')} />
					</div>
				</motion.form>
			</div>
		</motion.div>
	);
};

export default Contact;
