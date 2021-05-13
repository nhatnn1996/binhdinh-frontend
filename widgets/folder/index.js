import { url_base, url_api } from "@/shared/container/index";
import Link from "next/link";
import useSwr from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Folder = ({ folder }) => {
  const { data: temps, error } = useSwr(url_api + `/temps?folder=` + folder._id, fetcher);
  if (!temps) return <div>Loadding</div>;
  else
    return (
      <div className="mr-6">
        <div className="title font-bold text-lg ">{folder.Name}</div>
        <div className="text-xs font-base mt-2"> 10.10.2020 </div>
        <div className="title font-bold text-lg py-2">File</div>
        <div className="flex flex-wrap">
          {temps.map((element) => (
            <Item key={element.id} value={element} />
          ))}
        </div>
      </div>
    );
};

export default Folder;
const Item = ({ value }) => (
  <Link href={url_base + value?.file?.url}>
    <a target="_blank" rel="noreferrer" className="lg:w-1/2 x mt-2 flex flex-initial">
      <div className="mr-2 w-full shadow-xl rounded-md p-4 hover:bg-blue-400 hover:scale-95 pointer hover:text-white flex items-align transform duration-500 transition">
        <div className="box icon p-2 flex items-center">
          <div className="bg-gray-100 rounded-md text-white h-10 w-10 flex items-center justify-center">
            <img src="/icons/folder.svg" alt="" width={30} height={30} />
          </div>
        </div>
        <div className="font-bold mx-3">
          <div className="text-sm ">{value.name}</div>
          <div className="text-xs font-light">10.20.2020</div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="box icon bg-blue-300 rounded-full shadow-xl text-white p-2 h-10 w-10">
            <img src="/icons/cloud-computing.svg" alt="" width={50} height={50} />
          </div>
        </div>
      </div>
    </a>
  </Link>
);
