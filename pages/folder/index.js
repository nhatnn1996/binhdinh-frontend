import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SlideBar from "@/widgets/slider-bar/index";
import Folder from "@/widgets/folder";

export const getStaticProps = async () => {
  const res = await fetch("http://103.137.185.86:1337/folders?Slug=bo-chi-so");
  const result = await res.json();
  return { props: { folder: result[0] } };
};

export default function Home({ folder }) {
  return (
    <div>
      <Head>
        <title> Trang chi tiết </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Folder folder={folder} />
      </div>
    </div>
  );
}
