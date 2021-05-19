import Head from "next/head";

import PostMain from "@/widgets/posts/main";
import PostContent from "@/widgets/posts/content";
import PostRecommed from "@/widgets/posts/recommend";
import Video from "@/widgets/video/index";
import Footer from "@/widgets/footer/";
import SliderBar from "@/widgets/slider-bar/index";
import { url_api } from "@/shared/container/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export async function getStaticProps() {
  const result = await fetch(url_api + "/posts?image_null=false");
  const data = await result.json();
  return {
    props: { posts: data },
  };
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title> Trang chủ </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12">
          <PostMain posts={posts} />
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
