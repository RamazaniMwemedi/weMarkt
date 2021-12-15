import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/cart.module.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import kettel from '../assets/kettle.svg'

function cart()
{
    return (
      <>
        <Head>
          <title>Cart</title>
          <link
            rel="icon"
            href="https://we.shop/s/static/images/weshop-logo-square.png"
          />
        </Head>
        <Header />
        <div className={styles.cart}>
          
          <div className={styles.items}>
            <Image 
              src={kettel}
              width={400}
              height={350}
            />
            <div className={styles.messages}>
              <h1>Your weMarkt Cart is Empty</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <button>Start Shopping </button>
            
            </div>
          </div>
          <div className={styles.suggestions}>
            <h3>Suggestions</h3>
          </div>
        </div>
        <Footer/>
      </>
    );
}

export default cart
