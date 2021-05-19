import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SlideBar from "@/widgets/slider-bar/index";
import { url_api, url_base } from "@/shared/container/index";
import ReactMarkdown from "react-markdown";

const PostDeital = ({ data }) => {
  let content = data.content;
  const result = content.replace("/uploads/", url_base + "/uploads/");
  return (
    <div>
      <Head>
        <title> Danh sách cần tải </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12 pr-7">
          <div className="pb-10">
            <div className="font-bold text-blue-900 text-xl">{data.title}</div>
            {data.image?.url && (
              <div className="spect-w-16 spect-h-9 my-4">
                <img src={url_base + data.image?.url} />
              </div>
            )}
            <ReactMarkdown className="content-detail">{result}</ReactMarkdown>
          </div>
        </div>
        <div className="w-3/12 ml-3">
          <SlideBar />
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .content p {
          margin: 5px 0px;
        }
      `}</style>
    </div>
  );
};

PostDeital.getInitialProps = async ({ query, ...ctx }) => {
  const res = await fetch(url_api + "/posts?slug=" + query.slug);
  const data = await res.json();
  return { data: data[0] };
};

export default PostDeital;
