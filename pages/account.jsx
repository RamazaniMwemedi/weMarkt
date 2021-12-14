import Head from "next/head";
import styles from "../styles/account.module.css";
import Header from "../Components/Header";
function account() {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Header />
      <div className={styles.account}>
        <h2>The account</h2>
      </div>
    </>
  );
}

export default account;
