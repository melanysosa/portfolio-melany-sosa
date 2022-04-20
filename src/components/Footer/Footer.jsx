import { FaReact, FaRegHeart } from 'react-icons/fa';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const style = useStyles();
	const [t] = useTranslation('language');

	return (
		<div className={style.containerFooter}>
			<p>
				<a
					className={style.pFooter}
					href='https://github.com/melanysosa/portfolio-melany-sosa'
					target='_blank'
					rel='noopener noreferrer'
				>
					{t('footer.part1')}
					<span className={style.spanFooter}>
						<FaRegHeart />
					</span>
					{t('footer.part2')}
					<span className={style.spanFooter}>
						<FaReact />
					</span>
					{t('footer.part3')}
				</a>
			</p>
		</div>
	);
};

export default Footer;

