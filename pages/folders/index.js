import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SlideBar from "@/widgets/slider-bar/index";
import Folders from "@/widgets/folders";
import { url_api } from "@/shared/container/index";

export const getStaticProps = async () => {
  const res = await fetch(url_api + "/folders");
  const result = await res.json();
  console.log("🚀 ~ file: index.js ~ line 12 ~ getStaticProps ~ result", result);
  return { props: { folder: result[0] } };
};

export default function Home({ folder }) {
  return (
    <div>
      <Head>
        <title> Danh sách cần tải </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12">
          <Folders folder={folder} />
        </div>
        <div className="w-3/12 ml-3">
          <SlideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
