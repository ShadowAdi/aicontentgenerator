import Auth from "@/components/Auth";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";
import Categories from "./Categories";


const categories = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Youtube",
    value: "Youtube",
  },
  {
    name: "Instagram",
    value: "Instagram",
  },
  {
    name: "Tiktok",
    value: "Tiktok",
  },
  {
    name: "Linkedin",
    value: "Linkedin",
  },
  {
    name: "Tweet",
    value: "Tweet",
  },
];

const SearchDashboard = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="mx-5 py-2">
      <div className="flex  md:flew-row gap-2 mt-5 py-6 px-4 bg-white rounded">
        <div className="flex gap-2 items-center p-2 border rounded-full bg-white w-full md:w-[20%]">
          <MagnifyingGlassIcon />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-black"
            onChange={(e) => onSearchInput(e.target.value)}
          />
        </div>
          <Categories  items={categories}/>
        <div className="ml-auto">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default SearchDashboard;
