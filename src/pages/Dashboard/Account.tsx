import { MdModeEditOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import Recomended from "./Subpages/Recomended";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
	useCreateNewAddressMutation,
	useGetUserDataQuery,
	useViewAllAddressQuery,
  useUpdateAddressMutation,
} from "@/services/apiSlice";
import { AddressType } from "@/services/reducers";
import LoadingButton from "@/components/reuse/LoadingButton";
import ShowToast from "@/components/reuse/ShowToast";

const Account = () => {
	const [show, setShow] = useState(true);
	const [editAccount, setEditAccount] = useState(false);
	const [changePassword, setChangePassword] = useState(false);
  const [addAddress, setAddAddress] = useState(false);
	const [editAddress, setEditAddress] = useState(false)
	const [currentAddress, setCurrentAddress] = useState<AddressType | null>(null);
	
  const Navigate = useNavigate();
	const [formData, setFormData] = useState<AddressType>({
		fullname: "",
		phone: "",
		address: "",
		state: "",
		city: "",
	});

	const [editForm, setEditForm] = useState<AddressType>({
        fullname: "",
        phone: "",
        address: "",
        state: "",
        city: "",
    });

	useEffect(() => {
        setEditForm({
            fullname: "",
            phone: "",
            address: "",
            state: "",
            city: "",
        });
    }, []);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

	const { data } = useViewAllAddressQuery({});

	console.log("hre is the address", data);

	const { data: userData, isLoading } = useGetUserDataQuery({});
	console.log("userData", userData);
  const [newAddress, { isLoading: newLoading }] = useCreateNewAddressMutation();
  
  const [updateAddress, {isLoading: updateLoading}] = useUpdateAddressMutation()

	const Toggle = () => {
		setShow(true);
		setEditAccount(false);
    setChangePassword(false);
    setEditAddress(false);
	};

	const ToggleNewAddress = () => {
		setAddAddress(true);
		setShow(false);
    setChangePassword(false);
    setEditAddress(false);
	};

	const ToggleChangeNewAddress = () => {
		setAddAddress(false);
		setShow(true);
    setChangePassword(false);
    setEditAddress(false);
	};
	const Toggle2 = () => {
		setEditAccount(true);
		setShow(false);
    setChangePassword(false);
    setEditAddress(false);
	};
	const Toggle3 = () => {
		setEditAccount(false);
		setShow(false);
    setChangePassword(true);
    setEditAddress(false);
  };
  
  const ToggleEdit = (address: AddressType) => {
    setEditAddress(true);
    setEditAccount(false);
    setShow(false);
	  setChangePassword(false);
	  setFormData(address);
  }


	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response: any = await newAddress(formData);
      if (response?.data?.success === true) {
        ShowToast(true, "Address Added Successfully");
        ToggleChangeNewAddress();
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };
	
	const handleSubmitEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (currentAddress) {
        const response: any = await updateAddress({
          addressId: currentAddress.id,
          ...formData,
        });
        if (response?.data?.success === true) {
          ShowToast(true, "Address Updated Successfully");
			ToggleChangeNewAddress();
			console.error("updated:", response);
        }
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };
	return (
		<>
			{show ? (
				<div className=' ml-[15px] md:ml-0 w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] flex-col sm:items-center p-[15px] sm:p-0 md:p-0 bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white md:bg-white'>
						<h3 className='font-[500] md:hidden sm:hidden'>Account Overview</h3>

						<div
							onClick={() => Navigate(-1)}
							className='w-[100%] justify-center items-center hidden md:flex sm:flex'>
							<div className='w-[90%] md:w-[85%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary ml-[12px] text-[17px] font-[600]'>
									Account
								</h3>
							</div>
						</div>

						<div className='bg-[#E6E6E6] md:w-[100%] w-[100%] h-[2px] mt-[15px] sm:hidden'></div>

						<div className='w-[100%] md:items-center sm:items-center flex flex-col mt-[15px] sm:mt-[30px]'>
							<div className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col'>
								<div className='items-center sm:flex hidden sm:mb-[20px]'>
									<div className='text-primary'>
										<MdModeEditOutline />
									</div>
									<h3
										onClick={Toggle2}
										className='text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]'>
										Edit Account
									</h3>
								</div>

								<div className='w-[100%] flex items-center justify-between'>
									<p className='text-[#606060] text-[13px]'>Name</p>
									<div className='flex items-center sm:hidden'>
										<div className='text-primary'>
											<MdModeEditOutline />
										</div>
										<h3
											onClick={Toggle2}
											className='text-primary text-[13px] font-[500] ml-[5px] cursor-pointer'>
											Edit Account
										</h3>
									</div>
								</div>
								{isLoading ? (
									<h3 className='mt-[10px] font-[500]'>Loading...</h3>
								) : (
									<h3 className='mt-[10px] font-[500]'>
										{userData?.data?.firstname} {userData?.data?.lastname}
									</h3>
								)}
							</div>
							<div className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col mt-[20px]'>
								<div className='w-[100%] flex items-center justify-between'>
									<p className='text-[#606060] text-[13px]'>Email</p>
								</div>
								{isLoading ? (
									<h3 className='mt-[10px] font-[500]'>Loading...</h3>
								) : (
									<h3 className='mt-[10px] font-[500]'>
										<h3 className='mt-[10px] font-[500]'>
											{userData?.data?.email}
										</h3>
									</h3>
								)}
							</div>
							<div className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col mt-[20px]'>
								<div className='w-[100%] flex items-center justify-between'>
									<p className='text-[#606060] text-[13px]'>Phone number</p>
								</div>
								{isLoading ? (
									<h3 className='mt-[10px] font-[500]'>Loading...</h3>
								) : (
									<h3 className='mt-[10px] font-[500]'>
										<h3 className='mt-[10px] font-[500]'>
											{userData?.data?.phone}
										</h3>
									</h3>
								)}
							</div>
						</div>

						<div className='bg-[#E6E6E6] w-[100%] h-[2px] mt-[18px]'></div>

						{data?.data?.length >= 1 ? (
							<div className='w-[100%] flex flex-col mt-[25px] sm:items-center md:items-center'>
                <div className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col'>
                  <div className='w-[100%] flex justify-between'>
                    <h3 className='font-[600]'>Address Book</h3>
                    <h3 onClick={ToggleNewAddress} className='text-primary text-[13px] font-[500] cursor-pointer'>
                      Add New Address
                    </h3>
                  </div>
                </div>

                {data?.data?.slice(0, 1).map((address: AddressType) => (
                  <div key={address.id} className='w-[100%] md:w-[85%] sm:w-[90%] flex flex-col mt-[15px]'>
                    <div className='w-[100%] flex flex-col bg-[#F9F9F9] rounded-[5px] p-[15px]'>
                      <div className='flex items-center justify-between'>
                        <h3 className='font-[600]'>{address.fullname}</h3>
                        <h3 onClick={() => ToggleEdit(address)} className='text-primary text-[13px] font-[500] cursor-pointer'>
                          Change Address
                        </h3>
                      </div>
                      <div className='flex flex-col mt-[15px]'>
                        <h3 className='text-[15px]'>{address.address}</h3>
                        <h3 className='text-[15px] mt-[10px]'>
                          {address.city}, {address.state}
                        </h3>
                        <h3 className='text-[15px] mt-[10px]'>{address.phone}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
						) : (
							<div className='w-[100%] flex flex-col mt-[25px] sm:items-center md:items-center'>
								<div
									onClick={ToggleNewAddress}
									className='items-center sm:flex hidden sm:mb-[20px] sm:w-[90%]'>
									<div className='text-primary'>
										<MdModeEditOutline />
									</div>
									<h3 className='text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]'>
										Add Address
									</h3>
								</div>
								<div className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center justify-between'>
									<p className='text-[#606060] text-[13px]'>Default Address</p>
									<div
										onClick={ToggleNewAddress}
										className='flex items-center cursor-pointer sm:hidden'>
										<div className='text-primary'>
											<MdModeEditOutline />
										</div>
										<h3 className='text-primary text-[13px] font-[500] ml-[5px]'>
											Add Address
										</h3>
									</div>
								</div>
								<h3 className='mt-[10px] md:w-[85%] sm:w-[90%] font-[200]'>
									No address Found
								</h3>
							</div>
						)}

						<div className='bg-[#E6E6E6] w-[100%] h-[2px] mt-[22px]'></div>

						<div className='w-[100%] flex flex-col mt-[25px] md:items-center sm:items-center'>
							<div
								onClick={Toggle3}
								className='items-center sm:flex hidden sm:mb-[20px] sm:w-[90%] cursor-pointer'>
								<div className='text-primary'>
									<MdModeEditOutline />
								</div>
								<h3 className='text-primary text-[13px] sm:font-[600] font-[500] ml-[5px]'>
									Change Password
								</h3>
							</div>

							<div className='w-[100%] md:w-[85%] sm:w-[90%] flex items-center justify-between'>
								<p className='text-[#606060] text-[13px]'>Password</p>
								<div
									onClick={Toggle3}
									className='flex items-center sm:hidden cursor-pointer'>
									<div className='text-primary'>
										<MdModeEditOutline />
									</div>
									<h3 className='text-primary text-[13px] font-[500] ml-[5px]'>
										Change Password
									</h3>
								</div>
							</div>
							<h3 className='mt-[10px] font-[500] md:w-[85%] sm:w-[90%]'>
								****************
							</h3>
						</div>
					</div>
					<div className='w-[85%]'>
						<Recomended />
					</div>
				</div>
			) : null}

			{editAccount ? (
				<div className='ml-[15px] w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] h-[100%] flex flex-col p-[15px] bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white sm:p-0 sm:items-center'>
						<div
							onClick={Toggle}
							className='w-[100%] justify-center items-center flex sm:mb-[20px]'>
							<div className='w-[100%] sm:w-[90%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary text-[15px] font-[500] ml-[7px]'>
									Edit Account
								</h3>
							</div>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-0'></div>

						<div className='flex flex-col items-center w-[43%] sm:w-[90%] mt-[30px] mb-[50px]'>
							<div className='flex flex-col w-[100%]'>
								<h3 className='text-[14px] font-[400]'>Full Name</h3>
								<input
									placeholder='****************'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>Email</h3>
								<input
									placeholder='Temioluwa@gmail.com'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>Phone Number</h3>
								<input
									placeholder='+23481358578'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<button className='w-[100%] h-[43px] flex justify-center items-center text-[white] bg-secondary mt-[45px] text-[14px] rounded-sm'>
								Save Number
							</button>
						</div>
					</div>
				</div>
			) : null}

			{addAddress ? (
				<form
					onSubmit={handleSubmit}
					className='ml-[15px] w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] h-[100%] flex flex-col p-[15px] bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white sm:p-0 sm:items-center'>
						<div
							onClick={ToggleChangeNewAddress}
							className='w-[100%] justify-center items-center flex sm:mb-[20px]'>
							<div className='w-[100%] sm:w-[90%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary text-[15px] font-[500] ml-[7px]'>
									Create New Address
								</h3>
							</div>
						</div>
						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-0'></div>
						<div className='flex flex-col items-center w-[43%] sm:w-[90%] mt-[30px] mb-[50px]'>
							<div className='flex flex-col w-[100%]'>
								<h3 className='text-[14px] font-[400]'>Full Name</h3>
								<input
									value={formData.fullname}
									onChange={handleChange}
									required
									placeholder='enter fullname'
									name='fullname'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>Phone Number</h3>
								<input
									value={formData.phone}
									onChange={handleChange}
									required
									placeholder='enter phone number'
									type='text'
									name='phone'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> Address</h3>
								<input
									value={formData.address}
									onChange={handleChange}
									required
									name='address'
									placeholder='enter address'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>

							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> State</h3>
								<input
									value={formData.state}
									onChange={handleChange}
									name='state'
									placeholder='enter state'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> City</h3>
								<input
									value={formData.city}
									onChange={handleChange}
									name='city'
									placeholder='enter City'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							{newLoading ? (
								<div className="mt-[45px]">
									<LoadingButton w={"100%"} />
								</div>
							) : (
								<button className='w-[100%] h-[43px] flex justify-center items-center text-[white] bg-secondary mt-[45px] text-[14px] rounded-sm'>
									Save Address
								</button>
							)}
						</div>
					</div>
				</form>
			) : null}

			{changePassword ? (
				<div className='ml-[15px] w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] h-[100%] flex flex-col p-[15px] bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white sm:p-0 sm:items-center'>
						<div
							onClick={Toggle}
							className='w-[100%] justify-center items-center flex sm:mb-[20px]'>
							<div className='w-[100%] sm:w-[90%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary text-[15px] font-[500] ml-[7px]'>
									Change password
								</h3>
							</div>
						</div>

						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-0'></div>

						<div className='flex flex-col items-center w-[43%] sm:w-[90%] mt-[30px] mb-[50px]'>
							<div className='flex flex-col w-[100%]'>
								<h3 className='text-[14px] font-[400]'>Old Password</h3>
								<input
									placeholder='****************'
									type='password'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>New Password</h3>
								<input
									placeholder='****************'
									type='password'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>Confirm Password</h3>
								<input
									placeholder='****************'
									type='password'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<button className='w-[100%] h-[43px] flex justify-center items-center text-[white] bg-secondary mt-[45px] text-[14px] rounded-sm'>
								Save Password
							</button>
						</div>
					</div>
				</div>
      ) : null}
      
			{editAddress ? (
				<form
					onSubmit={handleSubmitEdit}
					className='ml-[15px] w-[100%] flex sm:justify-center flex-col items-center sm:ml-0'>
					<div className='w-[100%] h-[100%] flex flex-col p-[15px] bg-[#F4F4F4] rounded-[8px] sm:ml-0 sm:bg-white sm:p-0 sm:items-center'>
						<div
							onClick={ToggleChangeNewAddress}
							className='w-[100%] justify-center items-center flex sm:mb-[20px]'>
							<div className='w-[100%] sm:w-[90%] flex items-center'>
								<div className='text-primary text-[20px] cursor-pointer'>
									<IoIosArrowBack />
								</div>
								<h3 className='text-primary text-[15px] font-[500] ml-[7px]'>
									Edit Address
								</h3>
							</div>
						</div>
						<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[4px] sm:mt-0'></div>
						<div className='flex flex-col items-center w-[43%] sm:w-[90%] mt-[30px] mb-[50px]'>
							<div className='flex flex-col w-[100%]'>
								<h3 className='text-[14px] font-[400]'>Full Name</h3>
								<input
									value={formData.fullname}
									onChange={handleChange}
									required
									placeholder='enter fullname'
									name='fullname'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'>Phone Number</h3>
								<input
									value={formData.phone}
									onChange={handleChange}
									required
									placeholder='enter phone number'
									type='text'
									name='phone'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> Address</h3>
								<input
									value={formData.address}
									onChange={handleChange}
									required
									name='address'
									placeholder='enter address'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>

							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> State</h3>
								<input
									value={formData.state}
									onChange={handleChange}
									name='state'
									placeholder='enter state'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							<div className='flex flex-col w-[100%] mt-[20px]'>
								<h3 className='text-[14px] font-[400]'> City</h3>
								<input
									value={formData.city}
									onChange={handleChange}
									name='city'
									placeholder='enter City'
									type='text'
									className='w-[100%] h-[40px] rounded-sm border border-[#AEAEAE] bg-transparent mt-[5px] outline-none pl-[7px] text-[14px]'
								/>
							</div>
							{updateLoading ? (
								<div className="mt-[45px]">
									<LoadingButton w={"100%"} />
								</div>
							) : (
								<button type="submit" className='w-[100%] h-[43px] flex justify-center items-center text-[white] bg-secondary mt-[45px] text-[14px] rounded-sm'>
									Save Address and Update
								</button>
							)}
						</div>
					</div>
				</form>
			) : null}
		</>
	);
};

export default Account;
