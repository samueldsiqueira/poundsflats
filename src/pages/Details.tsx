import React from 'react';
import { useNavigate } from 'react-router-dom';

import ImageComponent from '../components/ImageComponent';
import testeResultImage from '../assets/teste_result.png'; // Importando a imagem

const Details: React.FC = () => {
	const navigate = useNavigate();
	const handleNavigation = () => {
		navigate('/');
	};

	return (
		<div>
			<h1>Samuel D' Siqueira</h1>
			<div>
				<button onClick={handleNavigation} className='filter-button'>
					App
				</button>
			</div>
			<ImageComponent src={testeResultImage} alt='Descrição da imagem' />
		</div>
	);
};

export default Details;
