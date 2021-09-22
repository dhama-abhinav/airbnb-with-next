import Image from "next/image";
import { SearchIcon ,MenuIcon , UsersIcon ,GlobeAltIcon,UserCircleIcon} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 py-5 px-5 bg-white shadow-md grid grid-cols-3 md:px-10">
      <div className=" relative flex items-center h-10 cursor-pointer my-auto">
        <h1 className="font-serif text-black font-semibold text-4xl ">
          a
          <span className="text-red-700">B</span>
        </h1>
        {/* <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
      </div>
      <div className="flex items-center py-2  rounded-full md:border-2 md:shadow-sm">
          <input className=" text-sm text-gray-600 placeholder-gray-600 pl-5 bg-transparent outline-none flex-grow" type="text" placeholder="Search here ..." />
          <SearchIcon className=" hidden md:inline-flex h-8 p-2 text-white rounded-full bg-red-600  cursor-pointer md:mx-2 " />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-2 cursor-pointer">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
