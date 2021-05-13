import Head from "next/head";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SlideBar from "@/widgets/slider-bar/index";
import Folders from "@/widgets/folders";
import Folder from "@/widgets/folder";
const FolderPage = ({ folder }) => {
  const content = folder.folders.length > 0 ? <Folders folders={folder.folders} /> : <Folder folder={folder} />;
  return (
    <div>
      <Head>
        <title> Danh sách cần tải </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12"> {content}</div>
        <div className="w-3/12 ml-3">
          <SlideBar />
        </div>
      </main>
      <Footer />
    </div>
  );
};

FolderPage.getInitialProps = async ({ query, ...ctx }) => {
  const res = await fetch("http://103.137.185.86:1337/folders?Slug=" + query.slug);
  const data = await res.json();
  return { folder: data[0] };
};

export default FolderPage;
