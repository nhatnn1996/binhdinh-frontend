import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SlideBar from "@/widgets/slider-bar/index";
import { url_api, url_base } from "@/shared/container/index";
import ReactMarkdown from "react-markdown";

const PostDeital = ({ data }) => {
  console.log(data);
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
          <div className="pb-4">
            <div className="font-bold text-blue-700 text-xl">{data.title}</div>
            {data.image?.url && (
              <div className="spect-w-16 spect-h-9 my-4">
                <img src={url_base + data.image?.url} />
              </div>
            )}
            <ReactMarkdown>{data.content}</ReactMarkdown>
          </div>
        </div>
        <div className="w-3/12 ml-3">
          <SlideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

PostDeital.getInitialProps = async ({ query, ...ctx }) => {
  const res = await fetch(url_api + "/posts?slug=" + query.slug);
  const data = await res.json();
  return { data: data[0] };
};

export default PostDeital;
