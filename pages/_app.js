import "tailwindcss/tailwind.css";
import "@/shared/styles/globals.css";
import Header from "@/widgets/header/index";
import Menu from "@/widgets/menu/index";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Menu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
