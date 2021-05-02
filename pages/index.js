import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import PostMain from "@/widgets/posts/main";
import PostContent from "@/widgets/posts/content";
import PostRecommed from "@/widgets/posts/recommend";
import Video from "@/widgets/video/index";
import Footer from "@/widgets/footer/";
import SliderBar from "@/widgets/slider-bar/index"
import Site from "@/widgets/site/index"
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Trang chủ </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12">
          <PostMain />
          <PostContent />
          <PostRecommed />
          <Video />
        </div>
        <div className="w-3/12 ml-3">
          <SliderBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
