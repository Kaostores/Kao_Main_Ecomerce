import { HiShieldCheck } from "react-icons/hi";

type Iprops = {
	togleBtn: any;
};

const UserForm: React.FC<Iprops> = ({ togleBtn }) => {
	return (
		<form className='xl:w-[400px] md:w-[350px] sm:w-[290px] mx-auto'>
			<div className='flex mb-[20px] items-center'>
				<div className='mr-[5px] text-primary text-[17px] sm:hidden'>
					<HiShieldCheck />
				</div>
				<div className='font-semibold sm:text-[13px] xl:text-[16px]'>
					Delivery address
				</div>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='email'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					Full Name
				</label>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='name@flowbite.com'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='password'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					Phone Number
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='password'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					Delivery Address
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='password'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					State
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='password'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					City
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='flex items-start mb-5'>
				<div className='flex items-center h-5'></div>
			</div>
			<button
				type='submit'
				className='text-white bg-[orange] hover:bg-blue-800 focus:ring-4
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[290px] px-5
        py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700
        dark:focus:ring-blue-800'
				onClick={togleBtn}>
				Save Address
			</button>
		</form>
	);
};
export default UserForm;
