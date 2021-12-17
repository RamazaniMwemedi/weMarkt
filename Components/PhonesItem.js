import Image from "next/image";
import Link from "next/link"

import phonesData from "../Data/phone"

import styles from "../styles/rightbar.module.css";
function PhonesItem() {
    return (
        <>
            {phonesData.map((item) => {
        const {
          display,
          ram,
          brand,
          battery,
          color,
          front_camera,
          rear_camera,
          item_image,
          item_name,
          item_price,
          id
        } = item;
        return (
          <>
            <Link href="/phones/[id]" as={`/phones/${item_name}`} >
            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  width={170}
                  height={180}
                  src={item_image}
                  alt={item_name}
                  className={styles.image}
                />
              </div>
              <div className={styles.item_name}>
                <h5>
                  <b>{item_name}</b>
                </h5>
              </div>
              
              <div className={styles.item_bottom}>
                <div className={styles.item_price}>
                  <h4>
                    $ <i>{item_price}</i>
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => setAdd(console.log({ item_name }))}>
                  Add to Cart
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    fill="white"
                    class="bi bi-cart-plus"
                    viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </button>
              </div>
            </div>
            </Link>
          </>
        );
      })}
        </>
    )
}

export default PhonesItem