import SortOptions from "@/app/components/SortOptions";
import CategoryProductCard from "./CategoryProductCard";
import ColorFilter from "@/app/filters/ColorFilter";
import PriceFilter from "@/app/filters/PriceFilter";
import Filter from "@/app/filters/Filter";


const CategoryPage = async ({ params: { categoryId, categoryName } }: 
            { params: { categoryId: string, categoryName: string } }) => {

    const list = [1,2,3,4,5,6,7,8]            
    
    
    return (
        <div className="flex flex-col tablet:flex-row min-h-screen p-2 divide-x-2 text-black">
            <div className="hidden tablet:block justify-start min-w-48 px-4 space-y-4">
                <h1 className="text-md font-medium">Filter</h1>
                <ColorFilter />
                <PriceFilter minPrice={0} maxPrice={100000}/>
            </div>
            <div>
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-xl font-thin px-2">{categoryName}</h2>
                    <SortOptions className="w-48"/>
                </div>
                <div className="tablet:hidden justify-start min-w-48 px-4 space-y-4">
                    <Filter />
                    {/* <ColorFilter />
                    <PriceFilter minPrice={0} maxPrice={100000}/> */}
                </div>
                <div className="flex flex-wrap justify-stretch mt-8">
                    {
                        list.map((item, index) => {
                            return <CategoryProductCard key={index} />
                        })  
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;