import Image from "next/image";

function SmallCard({img, location, distance}) {
    return (
        <div className="flex items-center m-3 mt-5 p-1 cursor-pointer rounded-lg
        hover:bg-gray-100 hover:scale-105 transition tranform duration-200 ease-out gird md:grid-cols-3">
            {/* Left */}
            <div className="relative h-16 w-16">
                <Image 
                    className="rounded-lg"
                    src={img}
                    layout="fill"
                />
            </div>
            <div className="m-3">
                <h2>{location}</h2>
                <h2>{distance}</h2>
            </div>
        </div>
    )
}

export default SmallCard
