import Image from "next/image";
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid"

function InforCard({img, location, title, description, star, price, total}) {
    return (
        <div className="flex my-2 border-b border-t p-2 pr-5 rounded-lg hover:opacity-80 hover:shadow-lg
        transition duration-100 ease-out">
            <div className=" relative h-24 w-40 md:h-40 md:w-64 flex-shrink-0">
            <Image 
                src={img}
                layout="fill"
                objectFit="cover" 
                className="rounded-md"
            />
            </div>
            <div className="flex flex-col flex-grow pl-7">
                <div className="flex justify-between">
                    <p className="text-xs md:text-sm">{location}</p>    
                    <HeartIcon className="h-4 md:h-7 cursor-pointer" />
                </div>
                
                <h3 className="text-md md:text-xl font-semibold">{title}</h3>
                <p className="text-xs md:text-sm mt-3 text-gray-700 flex-grow">{description}</p>
                
                <div className="flex justify-between items-end">
                    <div className="flex items-center">
                        <StarIcon className="h-4 md:h7 text-red-400" />
                        <p className="text-xs md:text-base">{star}</p>
                    </div>
                    <div className="right">
                        <p className="text-xs md:text-2xl font-semibold">{price}</p>
                        <p className="text-xs md:text-base text-gray-500 text-right">{total}</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default InforCard
