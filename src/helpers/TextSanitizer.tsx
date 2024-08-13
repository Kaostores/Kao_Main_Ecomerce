import { decode } from "html-entities";

const removeImages = (html: any) => {
	// Remove <img> tags and <figure> tags
	return html
		.replace(/<figure[^>]*>.*?<\/figure>/g, "")
		.replace(/<img[^>]*>/g, "");
};

const TextSanitizer = ({ description, showImages = true }: any) => {
	// Decode the HTML content
	const decodedDescription = decode(description);

	// Conditionally remove images if showImages is false
	const contentToRender = showImages
		? decodedDescription
		: removeImages(decodedDescription);

	return (
		<div
			dangerouslySetInnerHTML={{
				__html: contentToRender,
			}}
			className='text-[13px] my-[10px]'
		/>
	);
};

export default TextSanitizer;
