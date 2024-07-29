import React from 'react';
import { FaBuilding, FaCalendarAlt, FaList, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
	const navigate = useNavigate();

	return (
		<nav className='bottom-navigation bg-purple-600 flex justify-around py-2'>
			<button onClick={() => navigate('/')} className='text-white hover:text-purple-950'>
				<FaBuilding size={24} />
			</button>
			<button className='text-white hover:text-purple-950'>
				<FaCalendarAlt size={24} />
			</button>
			<button className='text-white hover:text-purple-950'>
				<FaList size={24} />
			</button>
			<button className='text-white hover:text-purple-950'>
				<FaUser size={24} />
			</button>
		</nav>
	);
};

export default BottomNavigation;
