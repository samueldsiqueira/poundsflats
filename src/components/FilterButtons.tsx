const FilterButtons: React.FC = () => {
	return (
		<div className='filter-buttons'>
			<button className='filter-button active'>Todos os flats</button>
			<button className='filter-button'>Indisponíveis</button>
		</div>
	);
};
export default FilterButtons;
