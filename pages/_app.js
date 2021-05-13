import "@/shared/styles/globals.css";
import "tailwindcss/tailwind.css";
import useSwr from 'swr'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
