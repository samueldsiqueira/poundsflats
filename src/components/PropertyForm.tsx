import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaArrowLeft } from 'react-icons/fa';

interface PropertyFormData {
	name: string;
	description?: string;
	cep: string;
	address: string;
	number: string;
	complement?: string;
	city: string;
	state: string;
}

const validationSchema = yup.object().shape({
	name: yup.string().required('Nome do imóvel é obrigatório'),
	description: yup.string().max(250, 'Descrição deve ter no máximo 250 caracteres'),
	cep: yup
		.string()
		.required('CEP é obrigatório')
		.matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
	address: yup.string().required('Endereço é obrigatório'),
	number: yup.string().required('Número é obrigatório'),
	complement: yup.string(),
	city: yup.string().required('Cidade é obrigatória'),
	state: yup.string().required('UF é obrigatório'),
});

const PropertyForm: React.FC = () => {
	const navigate = useNavigate();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<PropertyFormData>({
		resolver: yupResolver(validationSchema),
	});

	const onSubmit: SubmitHandler<PropertyFormData> = (data) => {
		console.log(data);
	};

	return (
		<div className='min-h-screen flex flex-col bg-white p-4'>
			<header className='flex items-center mb-4'>
				<button onClick={() => navigate(-1)} className='text-purple-600'>
					<FaArrowLeft size={24} />
				</button>
				<h1 className='text-xl font-semibold ml-4'>Para começarmos, precisamos de alguns dados</h1>
			</header>
			<form className='flex-grow' onSubmit={handleSubmit(onSubmit)}>
				<div className='mb-4'>
					<label htmlFor='name' className='block text-sm font-medium text-gray-700'>
						Nome do imóvel
					</label>
					<Controller
						name='name'
						control={control}
						render={({ field }) => (
							<input
								{...field}
								id='name'
								className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
								placeholder='Nome do imóvel'
							/>
						)}
					/>
					<p className='text-red-600 text-sm'>{errors.name?.message}</p>
				</div>
				<div className='mb-4'>
					<label htmlFor='description' className='block text-sm font-medium text-gray-700'>
						Descrição
					</label>
					<Controller
						name='description'
						control={control}
						render={({ field }) => (
							<textarea
								{...field}
								id='description'
								className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
								placeholder='Descrição'
								maxLength={250}
							/>
						)}
					/>
					<p className='text-red-600 text-sm'>{errors.description?.message}</p>
				</div>
				<div className='mb-4'>
					<label htmlFor='cep' className='block text-sm font-medium text-gray-700'>
						CEP
					</label>
					<Controller
						name='cep'
						control={control}
						render={({ field }) => (
							<input {...field} id='cep' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' placeholder='CEP' />
						)}
					/>
					<p className='text-red-600 text-sm'>{errors.cep?.message}</p>
				</div>
				<div className='mb-4'>
					<label htmlFor='address' className='block text-sm font-medium text-gray-700'>
						Endereço
					</label>
					<Controller
						name='address'
						control={control}
						render={({ field }) => (
							<input
								{...field}
								id='address'
								className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
								placeholder='Endereço'
							/>
						)}
					/>
					<p className='text-red-600 text-sm'>{errors.address?.message}</p>
				</div>
				<div className='mb-4 flex space-x-4'>
					<div className='w-1/2'>
						<label htmlFor='number' className='block text-sm font-medium text-gray-700'>
							Número
						</label>
						<Controller
							name='number'
							control={control}
							render={({ field }) => (
								<input
									{...field}
									id='number'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
									placeholder='Número'
								/>
							)}
						/>
						<p className='text-red-600 text-sm'>{errors.number?.message}</p>
					</div>
					<div className='w-1/2'>
						<label htmlFor='complement' className='block text-sm font-medium text-gray-700'>
							Complemento
						</label>
						<Controller
							name='complement'
							control={control}
							render={({ field }) => (
								<input
									{...field}
									id='complement'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
									placeholder='Complemento'
								/>
							)}
						/>
					</div>
				</div>
				<div className='mb-4 flex space-x-4'>
					<div className='w-1/2'>
						<label htmlFor='city' className='block text-sm font-medium text-gray-700'>
							Cidade
						</label>
						<Controller
							name='city'
							control={control}
							render={({ field }) => (
								<input
									{...field}
									id='city'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
									placeholder='Cidade'
								/>
							)}
						/>
						<p className='text-red-600 text-sm'>{errors.city?.message}</p>
					</div>
					<div className='w-1/2'>
						<label htmlFor='state' className='block text-sm font-medium text-gray-700'>
							UF
						</label>
						<Controller
							name='state'
							control={control}
							render={({ field }) => (
								<select {...field} id='state' className='mt-1 block w-full p-2 border border-gray-300 rounded-md'>
									<option value=''>Selecione</option>
									<option value='SP'>SP</option>
									<option value='RJ'>RJ</option>
								</select>
							)}
						/>
						<p className='text-red-600 text-sm'>{errors.state?.message}</p>
					</div>
				</div>
				<div className='mt-6'>
					<button type='submit' className='w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700'>
						Continuar
					</button>
				</div>
			</form>
			<div className='mt-auto py-4'>
				<div className=' bg-gray-300 w-36 h-2 rounded-full hover:bg-purple-950 mx-auto'></div>
			</div>
		</div>
	);
};

export default PropertyForm;
