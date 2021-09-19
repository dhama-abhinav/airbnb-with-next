import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] xl:h-[565px] 2xl:h-[700px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-red-700 font-serif text-sm sm:text-lg">Not sure where to go ?</p>
        <button className=" text-purple-500 bg-white border-2 px-10 py-4 rounded-full shadow-md font-bold my-4 hover:shadow-xl active:scale-90 transition duration-150 hover:text-black">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
