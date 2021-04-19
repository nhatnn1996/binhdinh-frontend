import Link from "next/link";
import Search from "@/components/icons/search";

const Header = () => {
  return (
    <header className="header flex justify-center">
      <div className="container header-top flex flex-row p-1 ">
        <div className="w-6 mr-6 ">
          <Link href="/about">
            <img src="/images/logo.png" alt="" className="rounded-full shadow-xl" />
          </Link>
        </div>
        <div className="tracking-normal	text-white flex flex-col justify-center">
          <div className="font-bold text-xl">Môi trường nông thôn tỉnh Bình Định</div>
          {/* <div className="text-opacity-20 leading-5">Trung tâm Nước sạch & Vệ sinh môi trường nông thôn Bình Định</div>
          <div className="text-opacity-20 leading-5">118 Nguyễn Huệ - Qui Nhơn - Bình Định</div> */}
        </div>
        <div className="form flex ml-6 justify-center flex-col w-80">
          {/* <div className="font-bold text-md text-white mb-2"> TÌM KIẾM CÔNG VĂN </div> */}
          <Search w="1rem" height="1rem" />
        </div>
      </div>
      <style jsx>{`
        .header {
          background: linear-gradient(to right, #00b4db, #0083b0);
        }
      `}</style>
    </header>
  );
};

export default Header;
