import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App: React.FC = () => {
	return (
		<Router>
			<div className='app-container'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/details' element={<Details />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
