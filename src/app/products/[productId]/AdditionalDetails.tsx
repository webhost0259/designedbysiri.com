import { Product } from "@/app/services/apis/models";

interface Props {
    product: Product | null;
  }
const AdditionalDetails = ({product} : Props) => {
    return (
        <div className="mt-6 laptop:mx-16">
            <h2 className="text-xl">Product Details</h2>
            <div className="flex flex-wrap justify-center laptop:flex-row laptop:space-x-8 min-h-64 rounded-lg">
                {
                    product?.imagePaths.map((image, index) => (
                        <div
                            key={index}
                        >
                            <img 
                                src={image} 
                                alt={`Sireesha Reddy Designer Studio Logo, eligance with beauty ${index + 1}`}
                                className="object-cover m-2 w-32 h-48 laptop:w-48 laptop:h-64 shadow-md laptop:p-2 bg-slate-500 rounded-lg"
                            />
                        </div>
                    ))
                }
            </div>
            <div className="space-y-4 border-2 p-2 rounded-lg shadow-md">
                {
                    product?.ageGroup && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Age Group :</h3>
                            <p>{product.ageGroup} years</p>
                        </div>
                    )
                }
                {
                    product?.style && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Style :</h3>
                            <p>{product.style}</p>
                        </div>
                    )
                }
                {
                    product?.pattern && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Pattern :</h3>
                            <p>{product.pattern}</p>
                        </div>
                    )
                }
                {
                    product?.occasion && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Occasion :</h3>
                            <p>{product.occasion}</p>
                        </div>
                    )
                }
                {
                    product?.season && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Season :</h3>
                            <p>{product.season}</p>
                        </div>
                    )
                }
                {
                    product?.fit && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Fit :</h3>
                            <p>{product.fit}</p>
                        </div>
                    )
                }
                {
                    product?.careInstructions && (
                        <div className="flex flex-row space-x-4 items-center">
                            <h3 className="text-xl min-w-32">Care Instructions :</h3>
                            <p>{product.careInstructions}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default AdditionalDetails;