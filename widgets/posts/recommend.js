import Link from "next/link";
import Image from "next/image";

const PostRecommend = () => {
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="">
        <div className="font-bold text-blue-600 text-md">TIN NỔI BẬT</div>
        <div className="mt-4 flex">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PostRecommend;

const Post = () => {
  return (
    <Link href="">
      <div className="w-1/3 mr-2">
        <div className="box mt-2">
          <img
            className="box-image"
            src="https://anhdepfree.com/wp-content/uploads/2018/08/hinh-nen-dep-nhat-2018.jpg"
            layout="fill"
          />
        </div>
        <div className="text-base font-bold text-gray-700	mt-2 hoer:text-blue-700 pointer">
          Phương án đấu nối cấp nước vào hộ gia đình của Công trình cấp nước sinh hoạt huyện Phù Cát
        </div>
        <style global jsx>{`
          .box {
            overflow: hidden;
          }
          .box-image:hover {
            transform: scale(1.1) rotate(1deg)
          }
          .box-image {
            transition: transform .3s ease-in-out;
          }
        `}</style>
      </div>
    </Link>
  );
};
