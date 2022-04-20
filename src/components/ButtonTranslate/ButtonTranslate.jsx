import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useStyles from './useStyles';

const ButtonTranslate = () => {
	const [t, i18n] = useTranslation('language');
	const styles = useStyles();
	const [lang, setLang] = useState(false);
	const handleChange = () => setLang(!lang);
	const changeLanguage = () => {
		lang ? i18n.changeLanguage('es') : i18n.changeLanguage('en');
	};
	return (
		<div
			className={styles.containerBtnTranslate}
			onChange={handleChange}
			onClick={changeLanguage}
		>
			<div className='flex flex-col text-gray-300 ring-2 p-3 rounded-lg'>
				{t('homePage.language')}
			<label className='switch'>
				<input type='checkbox' />
				<span className='slider'></span>
			</label>
			</div>
		</div>
	);
};

export default ButtonTranslate;
