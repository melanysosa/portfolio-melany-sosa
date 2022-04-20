import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import language_en from './language/en/language.json';
import language_es from './language/es/language.json';

i18next.init({
	interpolation: { scapeValue: false },
	lng: 'es',
	resources: {
		en: {
			language: language_en,
		},
		es: {
			language: language_es,
		},
	},
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<I18nextProvider i18n={i18next}>
			<App />
		</I18nextProvider>
	</BrowserRouter>
);
