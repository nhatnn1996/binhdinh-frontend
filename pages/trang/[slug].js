import Head from "next/head";
import { localeTime } from "@/shared/helper/function";
import { url_api, url_base } from "@/shared/container/index";
import NotFound from "@/widgets/notfound";
import ReactMarkdown from "react-markdown";

const PostDeital = ({ data }) => {
  if (!data) return <NotFound />;
  let content = data.content;
  const result = content ? content.replaceAll(/\/uploads\//g, url_base + "/uploads/") : "";
  return (
    <div>
      <Head>
        <title> {data.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        <div className="font-bold text-blue-900 text-xl">{data.title}</div>
        <div className="">
          Tác giả:
          <strong className=""> Quản trị viên </strong>
          {/* {data.admin_user?.firstname } */}
        </div>
        <code className="text block mt-3">{localeTime(data.createdAt)}</code>
        {data.image?.url && (
          <div className="spect-w-16 spect-h-9 my-4">
            <img src={url_base + data.image?.url} />
          </div>
        )}
        <ReactMarkdown className="content-detail">{result}</ReactMarkdown>

        {data.file && (
          <div className="mt-5">
            <a className="font-medium text-blue-700 text-lg" href={url_base + data.file.url} target="_blank">
              Xem nội dung chi tiết
            </a>
          </div>
        )}
      </div>
      <style jsx>{`
        .content p {
          margin: 5px 0px;
        }
      `}</style>
    </div>
  );
};

PostDeital.getInitialProps = async ({ query, ...ctx }) => {
  const res = await fetch(url_api + "/pages?Slug=" + query.slug);
  const data = await res.json();
  return { data: data[0] };
};

export default PostDeital;
