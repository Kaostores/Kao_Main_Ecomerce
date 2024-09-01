export function FormatDate(dateString: string) {
	const date = new Date(dateString);

	// Get date components
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
	const year = date.getFullYear();

	// Get time components
	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12 || 12; // Convert to 12-hour format

	const formattedTime = `${String(hours).padStart(2, "0")}:${minutes}${ampm}`;
	const formattedDate = `${month}/${day}/${year}`;

	return (
		<div className='flex whitespace-nowrap'>
			{formattedDate} <p className='font-[600] ml-[4px]'>{formattedTime}</p>
		</div>
	);
}
