import { FaReact, FaRegHeart } from 'react-icons/fa';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';
import { GoMarkGithub } from 'react-icons/go';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Footer = () => {
	const style = useStyles();
	const [t] = useTranslation('language');

	return (
		<div className={style.containerFooter} name='footer'>
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
					<span className={style.spanFooter}>
						<HiArrowNarrowRight />
					</span>
					<span className={style.spanFooter}>
						<GoMarkGithub />
					</span>
				</a>
			</p>
		</div>
	);
};

export default Footer;
