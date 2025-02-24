// app/components/Input.tsx
'use client';

import React from 'react';

interface InputProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
}

const Input: React.FC<InputProps> = ({
	label,
	name,
	type = 'text',
	placeholder,
}) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={name} className='text-gray-700 font-semibold mb-1'>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				className='border border-gray-300 rounded px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-[#FFD700]'
			/>
		</div>
	);
};

export default Input;
