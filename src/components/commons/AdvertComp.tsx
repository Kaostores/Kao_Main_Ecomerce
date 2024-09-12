const AdvertComp = ({ data }: any) => {
	return (
		<div
			className='flex-1 h-[100px] rounded-sm border bg-cover bg-center bg-slate-300'
			style={{ backgroundImage: `url(${data})` }}></div>
	);
};

export default AdvertComp;
