import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Navbar from "components/navbar";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>My page title</title>
    </Head>
    <Navbar />
    <Link href="/profile">
      go to profile
    </Link>
    poncol
  </div>
);

export default Home;
