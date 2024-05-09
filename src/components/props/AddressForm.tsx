import { HiShieldCheck } from "react-icons/hi";
import { createAddress } from "@/utils/ApiCalls";
import { AddressType, addAddress } from "@/services/reducers";
import { UseAppDispach } from "@/services/store";
import { useState } from "react";

type Iprops = {
	togleBtn: any;
};


const UserForm: React.FC<Iprops> = ({ togleBtn }) => {

	const [formData, setFormData] = useState<AddressType>({
        fullname: '',
        phone: '',
        address: '',
        state: '',
        city: ''
	});
	
	const dispatch = UseAppDispach();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Form Data Submitted:", formData);
        try {
            const data = await createAddress(formData);

			console.log('data address', data);
            dispatch(addAddress(formData));  // Save to Redux store
            togleBtn(); // Close form or show success message
        } catch (error) {
            return error
        }
    };

	return (
		<form onSubmit={handleSubmit} className='xl:w-[400px] md:w-[350px] sm:w-[290px] mx-auto'>
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
					htmlFor='fullname'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
                  dark:text-white'>
					Full Name
				</label>
				<input
					value={formData.fullname}
					onChange={handleChange}
					required
					type='text'
					id='fullname'
					name="fullname"
					className='bg-gray-50 border border-gray-300 text-gray-900
					text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
					dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
					dark:focus:ring-blue-500 dark:focus:border-blue-500'
					placeholder='name@flowbite.com'
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='number'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					Phone Number
				</label>
				<input
					onChange={handleChange}
					value={formData.phone}
					name="phone"
					type='text'
					id='number'
					className='bg-gray-50 border border-gray-300
					text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
					dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
					dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='text'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					Delivery Address
				</label>
				<input
					value={formData.address}
					onChange={handleChange}
					name="address"
					type='text'
					id='address'
					className='bg-gray-50 border border-gray-300
        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500'
					required
				/>
			</div>
			<div className='mb-5'>
				<label
					htmlFor='text'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					State
				</label>
				<input
					name="state"
					value={formData.state}
					onChange={handleChange}
					type='text'
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
					htmlFor='text'
					className='block mb-[5px] text-[12px] font-medium text-gray-900
        dark:text-white'>
					City
				</label>
				<input
					name="city"
					value={formData.city}
					onChange={handleChange}
					type='text'
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
        dark:focus:ring-blue-800'>
				Save Address
			</button>
		</form>
	);
};
export default UserForm;
