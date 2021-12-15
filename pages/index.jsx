import Head from "next/head";
import Link from "next/link";
// Styles
import styles from "../styles/Home.module.css";
//Components
import Header from "../Components/Header";
import SlideShow from "../Components/SlideShow"
import Rightbar from "../Components/Rightbar";
import Leftbar from "../Components/Leftbar";
import Footer from "../Components/Footer";
//End of Components

export default function Home()
{
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <div >
        <SlideShow/>
        </div>
        <br />
        <div className={styles.bars}>
          <div className={styles.left_bar}>
            <Leftbar />
          </div>
          <div className={styles.right_bar}>
            <Rightbar />
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
