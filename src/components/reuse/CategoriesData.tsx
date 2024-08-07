import { useGetAllAdminCategoryQuery } from "@/services/apiSlice";
import CategoriesCard from "../commons/CategoriesCard";
import myData from "@/components/json/CategoriesData.json";
import ProductSkeleton from "../skeleton/ProductSkeleton";
import BrandsCompSkeleton from "../skeleton/BrandCompSkeleton";

const CategoriesData = () => {
	const {
		data: catData,
		isLoading: isCatLoading,
		isFetching,
	} = useGetAllAdminCategoryQuery({});
	return (
		<div>
			{isCatLoading || (isFetching && !catData) ? (
				<div className='grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
					{[...Array(9)].map((_, index) => (
						<BrandsCompSkeleton key={index} />
					))}
				</div>
			) : (
				<div className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10 md:grid-cols-3'>
					{catData?.data?.map((props: any) => (
						<CategoriesCard key={props.id} props={props} />
					))}
				</div>
			)}
		</div>
	);
};

export default CategoriesData;
//
// {
// isLoading && !categoryData ? (
// <div
// className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10
// md:grid-cols-3'>
{
	/* {[...Array(6)].map((_, index) => ( */
}
// <BrandsCompSkeleton key={index} />
// ))}
{
	/* </div> */
}
// ) : (
// <div
// className='grid  grid-cols-4 gap-4 sm:grid-cols-2 mb-10
// md:grid-cols-3'>
{
	/* {Object?.values(categoryData?.data)?.map((props: any) => ( */
}
// <CategoriesCard key={props.id} props={props} />
// ))}
{
	/* </div> */
}
// );
// }
