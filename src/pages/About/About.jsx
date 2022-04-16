import useStyles from './useStyles';

const About = () => {
	const styles = useStyles();
	return (
		<div name='about' className={styles.containerAbout}>
			<div className={styles.divP1}>
				<div>
					<p className={styles.title}>About</p>
				</div>
			</div>
			<div className={styles.divP2}>
				<div className={styles.divP3}>
					<p>
						Hi, i'm Melany ,nice to meet you. Please take a look around.
					</p>
				</div>
				<div>
					<p>
						i'm passionate about this career, because there is always
						something new to learn, I'm attracted to the idea of doing it
						and taking advantage of it, to work on innovative and
						interesting projects.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
