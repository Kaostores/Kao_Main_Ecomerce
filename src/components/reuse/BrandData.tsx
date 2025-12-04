import BrandsCompSkeleton from "../skeleton/BrandCompSkeleton";
import { useViewAllSpotlightQuery } from "@/services/apiSlice";
import BrandsComp from "../commons/BrandsComp";

const BrandData = () => {
	const { data: brandData, isLoading: isLoadingBrand } =
		useViewAllSpotlightQuery({});

		

	return (
		<div>
			{isLoadingBrand && !brandData ? (
				<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
					{[...Array(6)].map((_, index) => (
						<BrandsCompSkeleton key={index} />
					))}
				</div>
			) : (
				<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
					{brandData?.data?.map((props: any) => (
						<BrandsComp key={props.id} {...props} />
					))}
				</div>
			)}
		</div>
	);
};

export default BrandData;
