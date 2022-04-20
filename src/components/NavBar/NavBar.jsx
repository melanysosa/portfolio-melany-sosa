import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/MSLogoTipo1.png';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';


const NavBar = () => {
	const styles = useStyles();

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const [t] = useTranslation('language');

	return (
		<div className={styles.containerNav}>
			<img src={Logo} alt='Logo img' className='w-[50px]' />

			<div className='flex items-center'>
				<ul className={styles.nav}>
					<li className={styles.navLi}>
						<Link to='/'>{t('navBarPage.itemHome')}</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/about'>{t('navBarPage.itemAbout')}</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/skills'>{t('navBarPage.itemSkills')}</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/work'>{t('navBarPage.itemProjects')}</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/contact'>{t('navBarPage.itemContact')}</Link>
					</li>
				</ul>
			</div>
			{/** Hamburguer */}

			{!nav ? (
				<div onClick={handleClick} className={styles.faBars}>
					<FaBars />
				</div>
			) : (
				<div onClick={handleClick}>
					<ul className={styles.navMobile}>
						<div className={styles.faTimes}>
							<FaTimes />
						</div>

						<li className={styles.liMobile}>
							<Link to='/'>{t('navBarPage.itemHome')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/about'>{t('navBarPage.itemAbout')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/skills'>{t('navBarPage.itemSkills')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/work'>{t('navBarPage.itemProjects')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/contact'>{t('navBarPage.itemContact')}</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
