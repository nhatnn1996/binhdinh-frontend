import Link from "next/link";
import { useEffect } from "react";
import { url_base } from "@/shared/container/index";
import { setCategories } from "../../store/global";
import qs from "qs";

const menus = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Giới thiệu",
    href: "/danh-muc/gioi-thieu",
    sub: [
      {
        name: "Sự hình thành",
        href: "/trang/su-hinh-thanh",
      },
      {
        name: "Sơ đồ tổ chức",
        href: "/trang/so-do-to-chuc",
      },
      {
        name: "Chức năng nhiệm vụ",
        href: "/trang/chuc-nang-nhiem-vu",
      },
    ],
  },
  {
    name: "Tin tức - sư kiện",
    href: "/",
    sub: [
      {
        name: "Tin trong nước ",
        href: "/danh-muc/tin-trong-nuoc",
      },
      {
        name: "Tin trong tỉnh ",
        href: "/danh-muc/tin-trong-tinh",
      },
      {
        name: "Sự kiện hoạt động",
        href: "/danh-muc/su-kien-hoat-dong",
      },
      {
        name: "Thông tin hữu ích",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Hướng dẫn kỹ thuật",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Tin tuyển dụng",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Hổ trợ khách hàng",
        href: "/danh-muc/thong-tin-huu-ich",
      },
      {
        name: "Kết quả xét nghiệm nước ",
        href: "/folders/ket-qua-xet-nghiem-nuoc",
      },
    ],
  },
  {
    name: "Dự án đầu tư",
    href: "/",
    sub: [
      {
        name: "Dự án đầu tư giai đoạn 2013 đến 2015",
        href: "/danh-muc/du-an-dau-tu-giai-doan-2012-den-2015",
      },
      {
        name: "Dự án đầu tư giai đoạn 2021 đến 2023",
        href: "/danh-muc/du-an-dau-tu-giai-doan-2021-den-2023",
      },
      {
        name: "Chức năng nhiệm vụ",
        href: "/trang/chuc-nang-nhiem-vu",
      },
    ],
  },
  { name: "Bộ chỉ số", href: "/folders/bo-chi-so" },
  { name: "Nhà máy nước sạch", href: "/" },
  { name: "Liên hệ - góp ý", href: "/" },
];

const getChildCategory = (data, slug) => {
  const childrend = data.filter((element) => element.category?.slug === slug).map((element) => element.slug);
  return childrend;
};

const getAllCategoriesBySlug = (data, slug) => {
  let childrent = getChildCategory(data, slug);
  if (childrent.length === 0) return childrent;
  else {
    childrent.forEach((element) => {
      const slugs = getAllCategoriesBySlug(data, element);
      childrent = childrent.concat(slugs);
    });
    return childrent;
  }
};

const queryRequest = (slug) => {
  const slugs = slug.map((element) => ({ "category.slug": element }));
  const query = qs.stringify({
    _where: {
      _or: [...slugs],
    },
  });
  return query;
};

const Menu = () => {
  useEffect(() => {
    fetch(url_base + "/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <nav className="shadow-xl bg-white">
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
    <li className="mr-8 menu-item font-base flex relative items-center  py-4">
      <Link href={element.href}>
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
        .menu-item:hover > a {
          color: black;
        }
        .menu-item:hover .sub {
          display: block;
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
    <ul className="sub absolute rounded-xs bg-white shadow-2xl">
      {props.sub.map((element, index) => (
        <li className="sub-item" key={index}>
          <Link href={element.href || "/"}>
            <a className="py-4 px-6 block whitespace-nowrap font-medium hover:text-white hover:bg-blue-700 transition duration-300 ">
              {element.name}
            </a>
          </Link>
        </li>
      ))}
      <style jsx>{`
        .sub {
          top: 100%;
          left: -10px;
          display: none;
          z-index: 1;
          border-top: 2px solid #cfcfcf;
        }
      `}</style>
    </ul>
  );
};
