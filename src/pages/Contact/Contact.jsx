import Button from '../../components/Button/Button';
import useStyles from './useStyles';

const Contact = () => {
	const styles = useStyles();

	return (
		<div name='contact' className={styles.containerContact}>
			<div className={styles.contactForm}>
				<div className={styles.divP}>
					<p className={styles.p1}>Contact</p>
					<p className={styles.p2}>
						Submit the form below or shoot me an email-
						sosamelanynoelia@gmail.com
					</p>
				</div>
				<form
					method='POST'
					action='https://getform.io/f/ddc40c19-8810-4c98-bc15-e8c50b0dc622'
					className={styles.contactForm}
				>
					<input
						className={styles.inputName}
						type='text'
						placeholder='Name'
						name='name'
						required
					/>
					<input
						className={styles.inputMail}
						type='email'
						placeholder='Email'
						name='email'
						required
					/>
					<p className={styles.pValid}>
						Please provide a valid email address.
					</p>

					<textarea
						className={styles.textarea}
						name='message'
						rows='10'
						placeholder='Message'
						required
					></textarea>
					<div className={styles.btnContact}>
						<Button title={"Let's Collaborate"} />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
