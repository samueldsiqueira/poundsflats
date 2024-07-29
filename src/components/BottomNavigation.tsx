import React from 'react';
import { FaBuilding, FaCalendarAlt, FaList, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
	const navigate = useNavigate();

	return (
		<nav className='bottom-navigation bg-purple-600 flex justify-around py-2'>
			<button onClick={() => navigate('/')} className='text-white'>
				<FaBuilding size={24} />
			</button>
			<button className='text-white'>
				<FaCalendarAlt size={24} />
			</button>
			<button className='text-white'>
				<FaList size={24} />
			</button>
			<button className='text-white'>
				<FaUser size={24} />
			</button>
		</nav>
	);
};

export default BottomNavigation;
