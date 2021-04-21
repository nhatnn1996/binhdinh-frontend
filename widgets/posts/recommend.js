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
        <img
          className="post-main-image mt-2"
          src="https://anhdepfree.com/wp-content/uploads/2018/08/hinh-nen-dep-nhat-2018.jpg"
          layout="fill"
        />
        <div className="text-base font-bold text-gray-700	mt-2 hover:text-blue-700">
          Phương án đấu nối cấp nước vào hộ gia đình của Công trình cấp nước sinh hoạt huyện Phù Cát
        </div>
      </div>
    </Link>
  );
};
