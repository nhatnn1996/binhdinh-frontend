import Head from "next/head";
import Header from "@/widgets/header/index";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">UYIUYIUY!</a>
        </h1>
      </main>
    </div>
  );
}
