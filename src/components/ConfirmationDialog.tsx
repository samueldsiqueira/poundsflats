import React, { useState, useEffect } from 'react';

interface ConfirmationDialogProps {
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const handleCancel = () => {
		setIsVisible(false);
		setTimeout(onCancel, 300); // Ajuste o tempo para coincidir com a duração da animação
	};

	return (
		<div
			className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-end justify-center z-50 transition-opacity duration-300 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			}`}
		>
			<div
				className={`bg-white rounded-t-lg p-4 w-full max-w-md text-center transition-transform transform duration-300 ${
					isVisible ? 'translate-y-0' : 'translate-y-full'
				}`}
			>
				<p className='mb-4'>{message}</p>
				<div className='flex justify-around'>
					<button onClick={onConfirm} className='bg-purple-600 text-white py-2 px-4 rounded-md'>
						Sim, sair agora
					</button>
					<button onClick={handleCancel} className='bg-gray-400 text-white py-2 px-4 rounded-md'>
						Não, quero continuar
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationDialog;
