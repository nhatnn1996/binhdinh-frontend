import Title from "@/components/title";
import Link from "next/link";
const Menu = () => {
  return (
    <div>
      <div className="box">
        <Title>Hình ảnh trung tâm </Title>
        <div className="mt-2">
          <img src="https://vtv1.mediacdn.vn/zoom/550_339/2018/11/13/photo-11-15421149127921523173283.jpg" alt="" />
        </div>
      </div>
      <div className="mt-2">
        <div className="box mt-2">
          <img src="/images/image_2.jpg" alt="" />
        </div>
        <div className="box mt-2 ">
          <img src="/images/image_3.png" alt="" />
        </div>
      </div>
      <div className="box my-3">
        <Title>Bộ chỉ số</Title>
        <img src="/images/image_4.jpg" className="mt-2" alt="" />
      </div>
      <div className="box my-3">
        <Title>Thông báo</Title>
        <Notification value={{ href: "/about", name: "Nội dung thông báo" }} />
      </div>
    </div>
  );
};
export default Menu;

const Notification = (props) => {
  return (
    <Link href={props.value.href} >
      <a className="flex mt-3"   >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <div className="text-base ml-3">{props.value.name}</div>
      </a>
    </Link>
  );
};
