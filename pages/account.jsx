import Head from "next/head";

import styles from "../styles/account.module.css";
import Datas from '../Data/accountpage'
import Header from "../Components/Header";
function account() {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Header />
      <div className={styles.account}>
        {Datas.map((data)=>{
          const {id,title, description, url}=data
          return(
            <div className={styles.items}>
              <div className={styles.item}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          )
        })} 
      </div>
    </>
  );
}

export default account;
