import Link from "next/link";
import { useState } from "react";
import { url_api, url_base } from "@/shared/container/index";
import { localeTime } from "@/shared/helper/function";

const PostRecommend = () => {
  const [state, setState] = useState(null);

  if (!state) {
    fetch(url_api + "/posts?_sort=createdAt&_limit=3&image_null=false")
      .then((response) => response.json())
      .then((data) => setState(data));

    return <div className="post-main py-5 mt-5 flex h-100 w-full bg-gray-300"></div>;
  }
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-blue-600 text-md">TIN NỔI BẬT</div>
        <div className="mt-1 flex">
          {state.map((element) => (
            <Post item={element} key={element._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostRecommend;

const Post = ({ item }) => {
  return (
    <Link href={"/bai-viet/" + item.slug}>
      <div className="w-1/3 mr-2">
        <div className="box mt-2 ">
          <div className="box-16-9">
            <img className="box-image" src={url_base + item.image?.formats.thumbnail.url} layout="fill" />
          </div>
        </div>
        <div className="text-base font-bold text-gray-700	mt-2 hoer:text-blue-700 pointer line-clamp-3">{item.title}</div>
        <style global jsx>{`
          .box {
            overflow: hidden;
          }
          .box-image:hover {
            transform: scale(1.1) rotate(1deg);
          }
          .box-image {
            transition: transform 0.3s ease-in-out;
          }
        `}</style>
      </div>
    </Link>
  );
};
