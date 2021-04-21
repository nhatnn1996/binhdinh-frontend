import Link from "next/link";

const PostMain = () => {
  return (
    <div className="post-main py-5 mt-5">
      <div className="font-bold text-md text-blue-600 text-sm">TIN TỨC CHÍNH</div>
      <Link href="/about">
        <div className="post-content w-12/12">
          <img
            className="post-main-image mt-2"
            src="https://anhdepfree.com/wp-content/uploads/2018/08/hinh-nen-dep-nhat-2018.jpg"
            layout="fill"
          />
          <div className="text-base font-bold text-gray-700	mt-2 hover:text-blue-700">
            Phương án đấu nối cấp nước vào hộ gia đình của Công trình cấp nước sinh hoạt huyện Phù Cát
          </div>
          <div className="text-base text-gray-700 hover:text-blue-700">
            Dự án: Mở rộng phạm vi cấp nước khu Đông Nam huyện Hoài Nhơn: Xây dựng trạm bơm tăng áp, đường ống dẫn nước, phân phối nước
            sạch...
          </div>
        </div>
      </Link>
      <style jsx>{`
        .post-content{
            cursor: pointer;
        }
        .post-main{
            border-bottom: 1px solid hsla(0, 0%, 0%, 0.3);
        }
        .post-main-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default PostMain;
