import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';

const RouterApp = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/work' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</div>
	);
};

export default RouterApp;
