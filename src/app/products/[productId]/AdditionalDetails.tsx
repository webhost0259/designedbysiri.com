import { Product } from "@/app/services/apis/models";

interface Props {
    product: Product | null;
  }
const AdditionalDetails = ({product} : Props) => {
    return (
        <div className="mt-6 laptop:mx-16">
            <h2 className="text-xl">Product Details</h2>
            <div className="flex flex-row space-x-8 min-h-64 rounded-lg">
                {
                    product?.imagePaths.map((image, index) => (
                        <div
                            key={index}
                        >
                            <img 
                                src={image} 
                                alt={`Sireesha Reddy Designer Studio Logo, eligance with beauty ${index + 1}`}
                                className="object-cover w-48 h-64 shadow-md p-2 bg-slate-500 rounded-lg"
                            />
                        </div>
                    ))
                }
            </div>
            <div>
                
            </div>
        </div>
    );
}

export default AdditionalDetails;