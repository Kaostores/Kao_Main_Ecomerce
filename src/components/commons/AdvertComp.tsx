const AdvertComp = ({ data }: any) => {
	return (
		<div
			className='flex-1 h-[100px] rounded-sm border bg-cover bg-center'
			style={{ backgroundImage: `url(${data})` }}>
			Advert
		</div>
	);
};

export default AdvertComp;
