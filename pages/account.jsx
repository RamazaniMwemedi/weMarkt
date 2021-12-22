import Head from "next/head";
import Image from 'next/image'

import styles from "../styles/account.module.css";
import Datas from '../Data/accountpage'
import Footer from '../Components/Footer'
import Header from "../Components/Header";
function account() {
  return (
    <>
      <Head>
        <title>Account</title>
      </Head>
      <Header />
        <h1 style={{marginLeft:"150px"}}>My Account</h1>
        <div className={styles.accountPage}>
      <div className={styles.account}>
        {Datas.map((data)=>{
          const {id,title, description, image}=data
          return(
            <div className={styles.items}>
              <div className={styles.item}>
                <Image
                  src={image}
                  width={60}
                  // height={5}
                />
                <div>
                <h4>{title}</h4>
                <p>{description}</p>
                </div>
              </div>
            </div>
          )
        })} 
      </div>
        </div>
        <Footer/>
    </>
  );
}

export default account;
