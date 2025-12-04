import React, { useState } from "react";

type ImagePreviewModalProps = {
	images: any[];
	onClose: () => void;
};

const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
	images,
	onClose,
}) => {
	const [selectedImage, setSelectedImage] = useState<any>(images[0]);

	return (
		<div style={{
			zIndex : 99999999
		}} className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center'>
			<div className='bg-white p-4 rounded-lg relative w-[500px] h-[90vh] sm:h-[80vh] sm:w-[90%]'>
				<h1 className='font-bold'>Image Preview</h1>
				<button
					className='absolute  top-2 right-2 text-gray-600 '
					onClick={onClose}>
					&times;
				</button>
				<img
					src={selectedImage?.url}
					alt='Selected'
					className='w-full h-[80%] sm:h-[77%]  sm:h-[65vh] object-contain mb-4'
				/>
				<div className='flex space-x-2'>
					{images.map((image, index) => (
						<img
							key={index}
							src={image?.url}
							alt={`Thumbnail ${index + 1}`}
							className={`w-16 h-16 object-cover cursor-pointer ${
								selectedImage === image ? "border-2 border-blue-500" : "border"
							}`}
							onClick={() => setSelectedImage(image)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ImagePreviewModal;
