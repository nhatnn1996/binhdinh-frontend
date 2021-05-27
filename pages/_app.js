import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";
import Footer from "@/widgets/footer/";
import SliderBar from "@/widgets/slider-bar/index";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import GlobalContext from "../context/global";

import "tailwindcss/dist/tailwind.min.css";
import "@/shared/styles/globals.css";

const progress = new ProgressBar({
  size: 5,
  color: "#00539f",
  className: "bar-of-progress",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Header />
      <Menu />
      <main className="container mx-auto flex mt-10">
        <div className="w-9/12">
          <Component {...pageProps} />
        </div>
        <div className="w-3/12 ml-3">
          <SliderBar />
        </div>
      </main>
      <Footer />
    </GlobalContext>
  );
}

export default MyApp;
