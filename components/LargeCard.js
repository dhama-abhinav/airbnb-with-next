import Image from "next/image";

function LargeCard({img,title,description,buttonText}) {
    return (
        <section className=" relative cursor-pointer py-16">
            <div className="relative h-96 min-w-[300px] ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl w-64 mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <button className="mt-3 border-2 text-white bg-black p-2 rounded-lg hover:bg-red-700 hover:text-black active:scale-90 transition duration-150">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
