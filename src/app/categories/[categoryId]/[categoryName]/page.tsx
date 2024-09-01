import SortOptions from "@/app/components/SortOptions";
import CategoryProductCard from "./CategoryProductCard";


const CategoryPage = async ({ params: { categoryId, categoryName } }: 
            { params: { categoryId: string, categoryName: string } }) => {
    
    const list = [1,2,3,4,5,6,7,8]            

    return (
        <div className="flex flex-col min-h-screen p-2 tablet:px-16">
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-xl font-bold">{categoryName}</h2>
                <SortOptions className="w-48"/>
            </div>
            <div className="flex flex-wrap justify-stretch mt-8">
                {
                    list.map((item, index) => {
                        return <CategoryProductCard key={index}/>
                    })  
                }
                {/* <CategoryProductCard /> */}
            </div>
        </div>
    )
}

export default CategoryPage;