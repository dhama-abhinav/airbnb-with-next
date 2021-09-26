import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UsersIcon,
  GlobeAltIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header() {
  const [serachInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
 
  const router = useRouter()
  //console.log(serachInput)

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleCancel = ()=>{
    setSearchInput("")
  }
  const handleSearch = ()=>{
    router.push({
      pathname : '/search',
      query : {
        location : serachInput,
        startDate : startDate.toISOString(),
        endDate :endDate.toISOString(),
        noOfGuests : noOfGuests
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 py-5 px-5 bg-white shadow-md grid grid-cols-3 md:px-10">
      <div onClick={ ()=> router.push("/")} className=" relative flex items-center h-10 cursor-pointer my-auto">
        <h1 className="font-serif text-black font-semibold text-4xl ">
          a<span className="text-red-700">B</span>
        </h1>
      </div>
      <div className="flex items-center py-2  rounded-full md:border-2 md:shadow-sm">
        <input
          value={serachInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" text-sm text-gray-600 placeholder-gray-600 pl-5 bg-transparent outline-none flex-grow"
          type="text"
          placeholder="Search here ..."
        />
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

      {serachInput && (
        <div className="flex flex-col mx-auto col-span-3 mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex mb-5 items-center border-b ">
            <h2 className="text-2xl pl-2 flex-grow font-semibold mb-2">
              Number of guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-700"
            />
          </div>
          <div  className="flex">
            <button onClick={handleCancel} className="flex-grow font-semibold text-gray-700">Cancel</button>
            <button onClick={handleSearch}  className="flex-grow font-semibold text-red-700 ">Search</button>
            </div>
        </div>
      )}
    </header>
  );
}

export default Header;
