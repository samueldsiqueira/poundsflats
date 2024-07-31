import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import PropertyPage from './pages/PropertyPage';

const App: React.FC = () => {
	return (
		<Router>
			<div className='app-container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/details' element={<Details />} />
					<Route path='/property' element={<PropertyPage />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
