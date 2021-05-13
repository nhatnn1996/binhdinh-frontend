import { url_base } from "@/shared/container/index";
import Link from "next/link";
import { useState } from "react";
import Folder from "../folder";
import { url_api } from "@/shared/container/index";
import useSwr from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Folders = ({ folders }) => {
  const [active, setActive] = useState(folders[0]);
  const { data: temps, error } = useSwr(url_api + `/temps?folder=` + active._id, fetcher);
  if (temps)
    return (
      <div className="flex w-full">
        <div className="w-1/3 border-r">
          {folders.map((element) => (
            <ItemFolder key={element.id} value={element} active={active._id} />
          ))}
        </div>
        <div className="w-2/3 pl-2">
          {temps.map((element) => (
            <Item value={element} key={element._id} />
          ))}
        </div>
      </div>
    );
  else return null;
};

const ItemFolder = ({ value, active }) => {
  const activeClass = active === value._id ? "bg-blue-500 text-white" : "";
  return (
    <Link href={"/folders/" + value.Slug}>
      <div className={"flex items-center hover:shadow-2xl transition duration-300  p-3 rounded-xs transition pointer " + activeClass}>
        <img src="/icons/folder.svg" alt="" width={30} height={30} />
        <div className="text-sm font-bold ml-3">{value.Name}</div>
      </div>
    </Link>
  );
};

const Item = ({ value }) => (
  <div target="_blank" rel="noreferrer" className="w-full x mt-2 flex flex-initial">
    <div className="mr-2 w-full hover:shadow-2xl rounded-md p-4 bg-gray-100 hover:bg-blue-400 hover:scale-95 pointer hover:text-white flex items-align transform duration-500 transition">
      <div className="box icon p-2 flex items-center">
        <div className="bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center">
          <img src="/icons/folder.svg" alt="" width={30} height={30} />
        </div>
      </div>
      <div className="font-bold mx-3">
        <div className="text-sm ">{value.name}</div>
        <div className="text-xs font-light">{value.published_at}</div>
      </div>
      <div className="ml-auto flex items-center">
        <div className="box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10">
          <img src="/icons/cloud-computing.svg" alt="" width={50} height={50} />
        </div>
      </div>
    </div>
  </div>
);

export default Folders;
