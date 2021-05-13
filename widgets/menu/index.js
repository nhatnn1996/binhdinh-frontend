import Link from "next/link";

const menus = [
  { name: "Trang chủ" },
  { name: "Giới thiệu" },
  { name: "Tin tức - sư kiện" },
  { name: "Dự án đầu tư" },
  { name: "Bộ chỉ số", sub: [{ name: "Nhà máy nước sạch" }, { name: "Liên hệ" }, { name: "Góp ý" }] },
  { name: "Nhà máy nước sạch" },
  { name: "Liên hệ" },
  { name: "Góp ý" },
];
const Menu = () => {
  return (
    <nav className="py-4 shadow-xl bg-white">
      <div className="container mx-auto">
        <ul className="flex ">
          {menus.map((element, index) => (
            <Item key={index} element={element} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
const Item = (props) => {
  const { element } = props;

  return (
    <li className="mr-8 menu-item font-base flex related items-center">
      <Link href="/">
        <a className="text-gray-700 font-bold">{element.name}</a>
      </Link>
      {element.sub && element.sub.length > 0 && (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <SubMenu sub={element.sub} />
        </>
      )}
      <style global jsx>{`
        .menu-item {
          
          transition: color 0.3s ease;
        }
        .menu-item a:hover {
          color: black;
        }
        svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </li>
  );
};

const SubMenu = (props) => {
  return (
    <ul className="sub absolute">
      {props.sub.map((element, index) => (
        <li className="sub-item" key={index}>
          <Link href="/">
            <a>{element.name}</a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        .sub{
          display: none
        }
      `}</style>
    </ul>
  );
};
