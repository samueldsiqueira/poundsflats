import React from 'react';
import sadFigure from '../assets/sad.svg';
import ImageComponent from './ImageComponent';

const WelcomeMessage: React.FC = () => {
	return (
		<div className='flex flex-col items-center text-center p-4'>
			<div className='sad-face-icon mb-4'>
				<ImageComponent src={sadFigure} alt='Descrição da imagem' />
			</div>
			<p className='mb-4'>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
			<button className='add-first-property-button border border-main text-main py-2 px-4 rounded-full hover:bg-main hover:text-white'>
				Cadastrar meu primeiro imóvel
			</button>
		</div>
	);
};

export default WelcomeMessage;
