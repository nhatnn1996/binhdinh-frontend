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
  console.log("🚀 ~ file: index.js ~ line 15 ~ Home ~ folder", folder)
  return (
    <div>
      <Head>
        <title> Trang chi tiết </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12">
          <Folder folder={folder}  />
        </div>
        <div className="w-3/12 ml-3">
          <SlideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
