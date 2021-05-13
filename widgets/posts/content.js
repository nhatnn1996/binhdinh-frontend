import Link from "next/link";
const PostContent = () => {
  return (
    <div className="post-main py-5 mt-5 flex">
      <div className="w-1/2 mr-5 ">
        <div className="font-bold text-blue-600 text-md">TIN TRONG NƯỚC</div>
        <div className="mt-4">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="w-1/2 space-r-3 ">
        <div className="font-bold text-blue-600 text-md">TIN NGOÀI NƯỚC</div>
        <div className="mt-4">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default PostContent;

const Post = () => {
  return (
    <div className="mb-4">
      <small className="text-sx">10/20/2021</small>
      <Link href="/">
        <a className="text-base font-bold text-gray-700 pointer block hover:text-blue-700">
          Phương án đấu nối cấp nước vào hộ gia đình của Công trình cấp nước sinh hoạt huyện Phù Cát
        </a>
      </Link>
      <div className="text-base text-gray-700">
        Dự án: Mở rộng phạm vi cấp nước khu Đông Nam huyện Hoài Nhơn: Xây dựng trạm bơm tăng áp, đường ống dẫn nước, phân phối nước sạch...
      </div>
      <Link href="/">
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
