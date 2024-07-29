import React, { useState } from 'react';

const FilterButtons: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState<string>('Todos os flats');

	const handleButtonClick = (filter: string) => {
		setActiveFilter(filter);
	};

	return (
		<div className=' flex-col '>
			<div className='flex justify-center w-3/4 '>
				<h1 className='text-xl font-semibold'>Bem-vindo, Samuel!</h1>
			</div>
			<div className='filter-buttons'>
				<button
					className={`filter-button ${
						activeFilter === 'Todos os flats' ? 'active bg-main text-white' : 'bg-gray-300 text-black'
					}`}
					onClick={() => handleButtonClick('Todos os flats')}
				>
					Todos os flats
				</button>
				<button
					className={`filter-button ${activeFilter === 'Indisponíveis' ? 'active bg-main text-white' : 'bg-gray-300 text-black'}`}
					onClick={() => handleButtonClick('Indisponíveis')}
				>
					Indisponíveis
				</button>
			</div>
		</div>
	);
};

export default FilterButtons;
