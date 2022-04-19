import { FaReact, FaRegHeart } from 'react-icons/fa';
import useStyles from './useStyles';

const Footer = () => {
    const style= useStyles();
	return (
		<div className={style.containerFooter}>
			<p className={style.pFooter}>
				made with{' '}
				<span className={style.spanFooter}>
					<FaRegHeart />
				</span>{' '}
				using{' '}
				<span className={style.spanFooter}>
					<FaReact />
				</span>
				<a
					href='https://github.com/melanysosa'
					target='_blank'
					rel='noopener noreferrer'
				>
					by Melany Sosa
				</a>{' '}
			</p>
		</div>
	);
};

export default Footer;
