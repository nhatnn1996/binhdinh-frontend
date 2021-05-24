import Head from "next/head";
import Folders from "@/widgets/folders";
import Folder from "@/widgets/folder";
const FolderPage = ({ folder, ...rest }) => {
  if (folder === null) {
    return (
      <div className="px-10">
        <img src="/images/notfound.jpg" className="w-full h-100" />
      </div>
    );
  }

  const content = folder.folders.length > 0 ? <Folders folders={folder.folders} /> : <Folder folder={folder} />;
  return (
    <div>
      <Head>
        <title> Danh sách cần tải </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {content}
    </div>
  );
};

export async function getServerSideProps({ query, ...ctx }) {
  const res = await fetch("http://103.137.185.86:1337/folders?Slug=" + query.slug);
  const data = await res.json();

  return {
    props: { folder: data ? data[0] : null },
  };
}

export default FolderPage;
