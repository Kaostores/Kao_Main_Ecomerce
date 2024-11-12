import EmptyData from "@/components/reuse/EmptyData";
import { useGetNotificationsQuery } from "@/services/apiSlice";
import { IoIosArrowBack } from "react-icons/io";

const Inbox = () => {
	const { data, isLoading } = useGetNotificationsQuery({});

	return (
		<div className='w-[100%] flex flex-col p-[15px]'>
			{/* Header */}
			<div className='w-[100%] flex items-center'>
				<div className='text-primary text-[20px] cursor-pointer'>
					<IoIosArrowBack />
				</div>
				<h3 className='text-primary ml-[12px] text-[15px] font-[500]'>Inbox</h3>
			</div>
			<div className='w-[100%] h-[2px] bg-[#E6E6E6] mt-[10px]'></div>

			{/* Notifications */}
			{isLoading ? (
				// Loading skeletons
				<div className='w-full '>
					<SkeletonNotification />
					<SkeletonNotification />
					<SkeletonNotification />
					<SkeletonNotification />
					<SkeletonNotification />
				</div>
			) : data?.data?.length > 0 ? (
				// Map through notifications data
				data?.data?.map((notification: any) => (
					<div
						key={notification.id}
						className='flex mt-[20px] w-[100%] mb-[20px]'>
						<div className='w-[10px] mt-[5px]'>
							<div className='h-[7px] w-[7px] bg-secondary rounded-full'></div>
						</div>
						<div className='flex flex-col ml-[20px]'>
							<h3 className='text-primary text-[15px] font-[600] capitalize'>
								{notification.title}
							</h3>
							{/* <p className='text-primary text-[12px]'>{notification.title}</p> */}
							<p className='text-[11px] w-[97%] mt-[7px]'>
								{notification.message}
							</p>
						</div>
					</div>
				))
			) : (
				// No notifications found
				<div className='flex justify-center items-center h-[200px]'>
					<p className='text-primary text-[14px] font-[500]'>
						<EmptyData title={"No Notification found"} />
					</p>
				</div>
			)}
		</div>
	);
};

// Skeleton component for loading state
const SkeletonNotification = () => {
	return (
		<div className='flex mt-5 w-full mb-5 animate-pulse'>
			<div className='w-2.5 mt-1.5'>
				<div className='h-1.5 w-[100%] bg-gray-300 rounded-full'></div>
			</div>
			<div className='flex w-[100%] flex-col ml-5 space-y-2'>
				<div className='h-4 bg-gray-300 rounded-md w-3/4'></div>
				<div className='h-3 bg-gray-200 rounded-md w-1/4'></div>
				<div className='h-3 bg-gray-200 rounded-md w-full'></div>
			</div>
		</div>
	);
};

export default Inbox;
