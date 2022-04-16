import useStyles from './useStyles';

const Button = ({ title, icon, onClick }) => {
	const styles = useStyles();
	return (
		<div>
			<button onClick={onClick} className={styles.btn}>
				{title}
				{icon}
			</button>
		</div>
	);
};

export default Button;
