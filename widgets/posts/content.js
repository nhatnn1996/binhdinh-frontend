import Link from "next/link";
import { useState } from "react";
import { url_api } from "@/shared/container/index";
import { localeTime } from "@/shared/helper/function";

const PostContent = () => {
  const [state, setState] = useState(null);
  const blocks = [
    { name: "TIN TRONG NƯỚC", slug: "tin-trong-nuoc" },
    { name: "TIN TRONG TỈNH", slug: "tin-trong-tinh" },
  ];
  if (!state) {
    Promise.all(blocks.map((block) => fetch(url_api + "/posts?category.slug="+block.slug+"&_limit=4&_sort=updatedAt:desc"))).then((responses) => {
      Promise.all(responses.map((responses) => responses.json())).then((datas) => {
        const result = datas.map((element) => element);
        setState(result);
      });
    });
    return <div className="post-main py-5 mt-5 flex h-80 -w-full bg-gray-300"></div>;
  } else
    return (
      <div className="post-main py-5 mt-5 flex">
        {state.map((element, index) => {
          return (
            <div className="w-1/2 mr-5 " key={blocks[index].slug}>
              <div className="font-bold text-blue-600 text-md text-uppercase">{blocks[index].name}</div>
              <div className="mt-4">
                {element.map((item) => (
                  <Post item={item} key={item._id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
};

export default PostContent;

const Post = ({ item }) => {
  return (
    <div className="mb-4">
      <small className="text-sx">{localeTime(item.createdAt)}</small>
      <Link href={"/bai-viet/" + item.slug}>
        <a className="text-base font-bold text-gray-700 pointer block hover:text-blue-700">{item.title}</a>
      </Link>
      <div className="text-base text-gray-700 line-clamp-2">{item.description}</div>
      <Link href={"/bai-viet/" + item.slug}>
        <a className="text-base font-bold text-blue-700 pointer flex items-center hover-transform-x">
          <span>Đọc thêm</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </Link>
    </div>
  );
};
