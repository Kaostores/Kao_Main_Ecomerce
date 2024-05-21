import img from "../../../assets/nopending.png"

const NoOngoingOrders = () => {
  return (
    <div className='w-[100%] h-[100%] flex justify-center items-center flex-col pt-[70px]'>
        <img src={img} alt="" className='h-[210px] md:h-[170px] sm:h-[130px]' />
        <p className='mt-[40px] font-[600] text-[20px] md:text-[18px] sm:text-[14px]'>You have no Ongoing Orders</p>
    </div>
  )
}

export default NoOngoingOrders