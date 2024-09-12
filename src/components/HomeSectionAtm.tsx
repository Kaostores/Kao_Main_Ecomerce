import pic from "@/assets/Frame 181.svg";

const HomeSectionAtm = () => {
	return (
		<div className='flex gap-7 justify-between  flex-1'>
			<div className='text-[27px] sm:text-[12px] font-bold'>
				KAO Stores International
				<br /> Shopping -<span className='text-primary'>All digital</span>{" "}
				<br />
				<span className='flex text-primary'>payments accepted</span>
			</div>
			<div className='flex-1 '>
				<img className='sm:h-[50px] object-cover w-full' src={pic} />
			</div>
		</div>
	);
};

export default HomeSectionAtm;
