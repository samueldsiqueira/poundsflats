// src/components/BottomNavigation.tsx

import React from 'react';
import { FaBuilding, FaCalendarAlt, FaList, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className=''>
			<nav className='flex flex-wrap justify-around py-2 fixed bottom-0 w-full h-36 bg-main text-white rounded-t-xl'>
				<button onClick={() => navigate('/')} className='text-white'>
					<FaBuilding size={34} />
				</button>
				<button className='text-white'>
					<FaCalendarAlt size={34} />
				</button>
				<button className='text-white'>
					<FaList size={34} />
				</button>
				<button className='text-white'>
					<FaUser size={34} />
				</button>
				<div className='flex justify-center w-full'>
					<button>
						<div className='  bg-gray-300 w-36 h-2 rounded-full'></div>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default BottomNavigation;
