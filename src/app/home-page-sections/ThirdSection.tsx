import Image from "next/image";
import Link from "next/link";

const ThirdSection = () => {
  return (
    <div className="px-16 mt-16 pb-16">
      <h1 className="font-bold text-3xl">Shop our top categories</h1>
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-6">
          <LongImageBrief image="/images/saree-1.jpeg" name="Sarees" url="/categories"/>
          <LongImageBrief image="/images/anarkali-suits.jpeg" name="Anarkali" url="/categories"/>
          <LongImageBrief image="/images/shararas.jpeg" name="Shararas" url="/categories"/>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;

interface LongImageBriefProps {
  image: string,
  name: string,
  url: string
}
const LongImageBrief = ({ image, name, url } : LongImageBriefProps) => {
  return (
    <div className="flex flex-col rounded-md ">
      <Link href={url}>
        <div className="relative w-96 h-[614px] rounded-md">
          <Image 
            src={image} 
            alt={name} 
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 transform hover:scale-105"
          />
          <h2 className="absolute text-3xl top-4 left-4 font-bold mt-2 text-gray-300 z-10">{name}</h2>
        </div>
      </Link>
    </div>
  );
}