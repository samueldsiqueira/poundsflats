import React from 'react';
import { FaFrown } from 'react-icons/fa';

const WelcomeMessage: React.FC = () => {
	return (
		<div className='flex flex-col items-center text-center p-4'>
			<div className='sad-face-icon text-purple-600 mb-4'>
				<FaFrown size={48} />
			</div>
			<p className='mb-4'>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
			<button className='add-first-property-button border border-purple-600 text-purple-600 py-2 px-4 rounded-full'>
				Cadastrar meu primeiro imóvel
			</button>
		</div>
	);
};

export default WelcomeMessage;
