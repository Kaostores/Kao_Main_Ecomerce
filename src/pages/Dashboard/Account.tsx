import { MdModeEditOutline } from "react-icons/md";

const Account = () => {
  return (
    <div className="w-[100%] flex-col p-[15px]">
      <h3 className="font-[500]">Account Overview</h3>

      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[15px]"></div>

      <div className="w-[100%] flex flex-col mt-[15px]">
        <div className="w-[100%] flex flex-col">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Name</p>
            <div className="flex items-center"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Edit Account</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">Temiloluwa Morafa</h3>
        </div>
        <div className="w-[100%] flex flex-col mt-[20px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Email</p>
          </div>
          <h3 className="mt-[10px] font-[500]">temiloluwamorafa@gmail.com</h3>
        </div>
        <div className="w-[100%] flex flex-col mt-[20px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Phone number</p>
          </div>
          <h3 className="mt-[10px] font-[500]">+234 812 8738 389</h3>
        </div>
      </div>

      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[18px]"></div>

      <div className="w-[100%] flex flex-col mt-[25px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Default Address</p>
            <div className="flex items-center"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Change Address</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">Temiloluwa Morafa</h3>
          <h3 className="mt-[8px] font-[500]">No 6, Alafia street, Olota, Surulere, Lagos State.</h3>
      </div>
      
      <div className="bg-[#E6E6E6] w-[100%] h-[2px] mt-[22px]"></div>

      <div className="w-[100%] flex flex-col mt-[25px]">
          <div className="w-[100%] flex items-center justify-between">
            <p className="text-[#606060] text-[13px]">Password</p>
            <div className="flex items-center"><div className="text-primary"><MdModeEditOutline /></div><h3 className="text-primary text-[13px] font-[500] ml-[5px]">Change Password</h3></div>
          </div>
          <h3 className="mt-[10px] font-[500]">****************</h3>
      </div>
    </div>
  )
}

export default Account