import Head from "next/head";
import { localeTime } from "@/shared/helper/function";
import { url_api, url_base } from "@/shared/container/index";
import Markdown from "@/components/ReactMarkdown";
import NotFound from "@/widgets/notfound";

const PostDeital = ({ data }) => {
  if (!data) return <NotFound />;

  let content = data.content;
  const result = content ? content.replace(/\/uploads\//g, url_base + "/uploads/") : "";
  return (
    <div>
      <Head>
        <title> {data.title} </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pb-10 pr-10">
        {/* <div className="div">Quay lại</div> */}
        <div className="font-bold text-blue-900 text-xl">{data.title}</div>
        <div className=" mt-3">
          Tác giả:
          <strong className="ml-3">
            Quản trị viên
            {/* {data.admin_user?.firstname} */}
          </strong>
        </div>
        <code className="text block mt-3">{localeTime(data.createdAt)}</code>
        {data.image?.url && (
          <div className="spect-w-16 spect-h-9 my-4">
            <img src={url_base + data.image?.url} />
          </div>
        )}
        <Markdown className="content-detail">{result}</Markdown>
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

export async function getServerSideProps({ query, ...ctx }) {
  const res = await fetch(url_api + "/posts?slug=" + query.slug);
  const data = await res.json();
  return {
    props: { data: data[0] },
  };
}

export default PostDeital;
