import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Filters() {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };
  const [query, setQuery] = useState("");

  return (
    <>
       <form onSubmit={handleSubmit} className="flex">
                 <div className="relative w-full">
                   <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       strokeWidth="1.5"
                       stroke="currentColor"
                       className="w-5 h-5"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                       />
                     </svg>
                   </span>
                   <input
                     type="text"
                     placeholder="Search by Name, ID, Phone…"
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                     className="w-full pl-10 pr-4 py-2 border border-gray-300"
                   />
                 </div>
               </form>
               <div className="flex flex-col md:flex-row gap-3 py-5">
                 <Label htmlFor="username-1">File</Label>
                 <Select>
                   <SelectTrigger className="w-full md:max-w-md border rounded-none border-gray-300">
                     <SelectValue placeholder="All" />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectGroup>
                       <SelectItem value="apple">All</SelectItem>
                       <SelectItem value="banana">Active</SelectItem>
                       <SelectItem value="blueberry">Non Active</SelectItem>
                     </SelectGroup>
                   </SelectContent>
                 </Select>
               </div>
      
    </>
  );
}

export default Filters;
