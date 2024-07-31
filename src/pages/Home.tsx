import React from 'react';
import Header from '../components/HeaderComponent';
import FilterButtons from '../components/FilterButtons';
import WelcomeMessage from '../components/WelcomeMessage';
import BottomNavigation from '../components/BottomNavigation';

const Home: React.FC = () => {
	return (
		<div>
			<Header />
			<FilterButtons />
			<WelcomeMessage />
			<BottomNavigation />
		</div>
	);
};

export default Home;
