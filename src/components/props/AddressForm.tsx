import { HiShieldCheck } from "react-icons/hi";
import { AddressType } from "@/services/reducers";
import { useEffect, useState } from "react";
import {
	useUpdateAddressMutation,
	useCreateNewAddressMutation,
} from "@/services/apiSlice";
import { IoMdArrowBack } from "react-icons/io";
import LoadingButton from "../reuse/LoadingButton";
import ShowToast from "../reuse/ShowToast";

type Iprops = {
	togleBtn: any;
	initialFormData?: any;
	onSave: (formData: any) => Promise<void>;
	addrData: any;
	actionType: any;
};

const UserForm: React.FC<Iprops> = ({ togleBtn, actionType, addrData }) => {
	const [formData, setFormData] = useState<AddressType>({
		fullname: "",
		phone: "",
		address: "",
		state: "",
		city: "",
	});

	const [editForm, setEditForm] = useState({
		fullname: addrData?.fullname || "",
		phone: addrData?.phone || "",
		address: addrData?.address || "",
		state: addrData?.state || "",
		city: addrData?.city || "",
	});
	useEffect(() => {
		setEditForm({
			fullname: addrData?.fullname || "",
			phone: addrData?.phone || "",
			address: addrData?.address || "",
			state: addrData?.state || "",
			city: addrData?.city || "",
		});
	}, [addrData]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (actionType === "new") {
			setFormData({ ...formData, [event.target.name]: event.target.value });
		} else {
			setEditForm({ ...editForm, [event.target.name]: event.target.value });
		}
	};

	const [updateAddressMutation, {isLoading: updateLoad}] = useUpdateAddressMutation();
	const [newAddress, { isLoading: newLoading }] = useCreateNewAddressMutation();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response: any = await newAddress(formData);
			console.log("new address", response);
			if (response?.data?.success == true) {
				ShowToast(true, "Address Added Successfully");
				togleBtn();
			} else {
				togleBtn();
			}
		} catch (error) {
			console.error("Error adding address:", error);
		}
	};

	const handleSubmitEdit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response: any = await updateAddressMutation({
				addressId: addrData?.id,
				...editForm,
			});
			// console.log("edited address", response);
			if (response?.data?.success == true) {
				ShowToast(true, "Address Updated Successfully");
				togleBtn();
			} else {
				togleBtn();
			}
		} catch (error) {
			console.error("Error adding address:", error);
		}
	};

	return (
		<>
			{actionType === "edit" && (
				<form
					onSubmit={handleSubmitEdit}
					className='xl:w-[400px] md:w-[350px] sm:w-[100%] mx-auto'>
					<div className='flex mb-[20px] items-center'>
						<div onClick={togleBtn} className='text-[20px] mr-5 cursor-pointer'>
							<IoMdArrowBack />
						</div>
						<div className='mr-[5px] text-primary text-[17px] sm:hidden'>
							<HiShieldCheck />
						</div>
						<div className='font-semibold sm:text-[13px] xl:text-[16px]'>
							Edit Delivery address
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
							value={editForm.fullname}
							onChange={handleChange}
							required
							type='text'
							id='fullname'
							name='fullname'
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
							value={editForm.phone}
							name='phone'
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
							value={editForm.address}
							onChange={handleChange}
							name='address'
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
							name='state'
							value={editForm.state}
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
							name='city'
							value={editForm.city}
							onChange={handleChange}
							type='text'
							id='password'
							className='bg-gray-50 border border-gray-300text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-whitedark:focus:ring-blue-500 dark:focus:border-blue-500'
							required
						/>
					</div>
					<div className='flex items-start mb-5'>
						<div className='flex items-center h-5'></div>
					</div>
					{updateLoad ? (
						<LoadingButton w = {'100%'} />
					) : (
						<button
							type='submit'
							className='text-white bg-[orange] hover:bg-blue-800 focus:ring-4focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[100%] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700dark:focus:ring-blue-800'>
							Save & Update Address
						</button>
					)}
				</form>
			)}

			{actionType === "new" && (
				<form
					onSubmit={handleSubmit}
					className='xl:w-[400px] md:w-[350px] sm:w-[100%] mx-auto'>
					<div className='flex mb-[20px] items-center'>
						<div onClick={togleBtn} className='text-[20px] mr-5 cursor-pointer'>
							<IoMdArrowBack />
						</div>
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
							name='fullname'
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
							name='phone'
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
							name='address'
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
							name='state'
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
							name='city'
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

					{newLoading ? (
						<LoadingButton w={"100%"} />
					) : (
						<button
							type='submit'
							className='text-white bg-[orange] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-[100%] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
							Save Address
						</button>
					)}
				</form>
			)}
		</>
	);
};
export default UserForm;
