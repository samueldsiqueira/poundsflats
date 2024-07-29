import React, { useState } from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from './ConfirmationDialog';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleBack = () => {
		setShowConfirmation(true);
	};

	const handleConfirm = () => {
		setShowConfirmation(false);
		navigate('/details');
	};

	const handleCancel = () => {
		setShowConfirmation(false);
	};

	return (
		<header className='flex justify-between items-center p-4'>
			<button onClick={handleBack} className='back-button text-purple-600'>
				<FaArrowLeft size={24} />
			</button>
			<h1 className='text-xl font-semibold'>Bem-vindo, Raphael!</h1>
			<button className='add-property-button text-purple-600 flex items-center'>
				<FaPlus size={24} className='mr-2' />
				Cadastrar imóvel
			</button>
			{showConfirmation && (
				<ConfirmationDialog
					message='Você, realmente, deseja sair do Poundsflats?'
					onConfirm={handleConfirm}
					onCancel={handleCancel}
				/>
			)}
		</header>
	);
};

export default Header;