const ContentSection = ({ item }: any) => {
	return (
		<div className='flex flex-col '>
			<h1 className='text-[18px] font-[600]'>{item.subTitle}</h1>
			<p className='mt-[5px] text-[14px]'>{item.content}</p>
		</div>
	);
};

export default ContentSection;
