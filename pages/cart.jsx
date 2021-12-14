import Head from  'next/head'

import styles from '../styles/cart.module.css'
import Header from '../Components/Header'

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
          <h3>The cart</h3>
        </div>
      </>
    );
}

export default cart
