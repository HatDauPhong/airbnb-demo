import Image from "next/image";

function InforCard({img, location, title, description, star, price, total}) {
    return (
        <div>
            <div className=" relative h-24 w-40 flex-shrink-0 my-5">
            <Image 
                src={img}
                layout="fill"
                objectFit="cover" 
            />
            </div>
            <div>

            </div>
        </div>
    )
}

export default InforCard
