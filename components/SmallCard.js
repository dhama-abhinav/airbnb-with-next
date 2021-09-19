import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 m-2 space-x-4 cursor-pointer  rounded-xl hover:bg-gray-200 hover:scale-105 transition transform duration-500 ease-out">
      <div className="relative h-20 w-20 ">
        <Image src={img} layout="fill" className=" rounded-lg " />
      </div>
      <div>
          <h2>{location}</h2>
          <h3 className="text-gray-600">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
