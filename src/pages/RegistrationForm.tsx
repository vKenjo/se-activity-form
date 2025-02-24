// src/pages/RegistrationForm.tsx (or wherever your form lives)
import React from 'react';
import Input from '../components/Input';
import FileUpload from '../components/FileUpload';
import ViewUpload from '../components/ViewUpload';

const RegistrationForm: React.FC = () => {
	return (
		<div>
			{/* Header */}
			<header className='bg-black text-[#FFD700] py-2 px-6 flex items-center justify-between shadow-md'>
				{/* Left Section: Titles */}
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold leading-tight'>
						University of Santo Tomas
					</h1>
					<h2 className='text-xl font-semibold'>MyUST Portal | VIRAY</h2>
				</div>
				<button
					className='bg-[#FFD700] text-black px-4 py-2 rounded 
                     hover:bg-yellow-400 transition-colors'
				>
					Logout
				</button>
			</header>

			<div className='w-full bg-white px-6'>
				{/* Main Content */}
				<main className='max-w-8xl mx-auto py-8 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
						{/* Left Column: Student Info Form */}
						<div className='lg:col-span-2 bg-white p-6 rounded-md shadow-md'>
							<h2 className='text-xl font-bold text-black mb-4'>
								Student Information
							</h2>

							{/* Row: Name Fields */}
							<div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
								<Input label='First Name' name='firstName' />
								<Input label='Middle Name' name='middleName' />
								<Input label='Surname' name='surname' />
							</div>

							{/* Row: Birthdate & Student ID */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<Input label='Birthdate' name='birthdate' type='date' />
								<Input label='Student ID' name='studentId' />
							</div>

							{/* Row: Address */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<Input label='Bldg/Lot' name='bldgLot' />
								<Input label='Street' name='street' />
							</div>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<Input label='City/Municipality' name='city' />
								<Input label='ZIP Code' name='zipCode' />
							</div>

							{/* Row: Parents */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<Input label="Mother's Name" name='motherName' />
								<Input label="Father's Name" name='fatherName' />
							</div>

							{/* Row: Emergency Contact */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
								<Input
									label='Emergency Contact Name'
									name='emergencyContactName'
								/>
								<Input
									label='Emergency Contact Number'
									name='emergencyContactNumber'
								/>
							</div>

							{/* Form Buttons */}
							<div className='flex justify-end space-x-4'>
								<button
									className='bg-gray-300 text-black px-4 py-2 rounded 
                           hover:bg-gray-400 transition-colors'
								>
									Reset
								</button>
								<button
									className='bg-[#FFD700] text-black px-4 py-2 rounded 
                           hover:bg-yellow-400 transition-colors'
								>
									Save
								</button>
							</div>
						</div>

						{/* Right Column: File Uploads & Print Buttons in 2 Columns */}
						<div
							className='
            bg-white p-6 rounded-md shadow-md 
            grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10
            place-items-center
          '
						>
							{/* Column 1 */}
							<div className='flex flex-col gap-4 items-center'>
								<FileUpload label='Picture' name='picture' />
								<FileUpload label='Signature' name='signature' />
								<FileUpload label='Thumbprint' name='thumbprint' />
							</div>

							{/* Column 2 */}
							<div className='flex flex-col gap-4 items-center'>
								{/* ID Upload + Print ID */}
								<ViewUpload label='ID' name='id' />
								<button
									className='bg-black text-[#FFD700] px-4 py-2 rounded 
                           hover:bg-gray-900 transition-colors'
								>
									Print ID
								</button>

								{/* Registration Form + Print Button */}
								<ViewUpload label='Registration Form' name='registrationForm' />
								<button
									className='bg-black text-[#FFD700] px-4 py-2 rounded 
                           hover:bg-gray-900 transition-colors'
								>
									Print Registration Form
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default RegistrationForm;
