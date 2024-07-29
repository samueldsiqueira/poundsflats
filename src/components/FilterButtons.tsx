import React, { useState } from 'react';

const FilterButtons: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string>('Todos os flats');

	const handleButtonClick = (filter: string) => {
		setActiveFilter(filter);
	};

	return (
		<div className='filter-buttons flex space-x-4'>
			<button
				className={`filter-button ${
					activeFilter === 'Todos os flats' ? 'active bg-purple-600 text-white' : 'bg-gray-300 text-black'
				}`}
				onClick={() => handleButtonClick('Todos os flats')}
			>
				Todos os flats
			</button>
			<button
				className={`filter-button ${
					activeFilter === 'Indisponíveis' ? 'active bg-purple-600 text-white' : 'bg-gray-300 text-black'
				}`}
				onClick={() => handleButtonClick('Indisponíveis')}
			>
				Indisponíveis
			</button>
		</div>
	);
};

export default FilterButtons;
