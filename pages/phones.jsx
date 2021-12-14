import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./Components/Header";
//Components
import Rightbar from "./Components/RightbarPhones";
import Leftbar from "./Components/Leftbar";
import Footer from "./Components/Footer";
//End of Components

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>weShop</title>
          <meta name="description" content="Generated by create next app" />
          <link
            rel="icon"
            href="https://we.shop/s/static/images/weshop-logo-square.png"
          />
        </Head>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.bars}>
          <div className={styles.left_bar}>
            <Leftbar />
          </div>
          <div className={styles.right_bar}>
            <h1>Find The </h1>
            <RightbarPhones />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}