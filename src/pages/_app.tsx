import type { AppProps } from "next/app";
import {useRouter } from 'next/router';
import Layout from "./components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noLayoutRoutes = ['/Login']

  const isLayoutNeeded = !noLayoutRoutes.includes(router.pathname);

  return isLayoutNeeded ? (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) : (
    <Component {...pageProps} />
  );
}
