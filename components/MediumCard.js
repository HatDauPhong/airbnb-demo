import Image from "next/image";

function MediumCard({img, title}) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-200 ease-out">
            <div className="relative h-80 w-80">
                <Image 
                    className="rounded-lg "
                    src={img}
                    layout="fill"
                />
            </div>
            <div>
                <h2 className="text-2xl mt-3">{title}</h2>
            </div>
        </div>
    )
}

export default MediumCard
