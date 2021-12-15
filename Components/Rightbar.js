import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
// Datas
import phonesData from "../Data/phone"

// End of Datas

import styles from "../styles/rightbar.module.css";
//componet

//end of componet
function Rightbar()
{
  return (
    <>
      <h2 style={{ color: "rgba(252, 177, 16, 0.87)" }}>
        Most wanted smart phones 📱
      </h2>
     <Phones/>
      <h2 style={{ color: "rgba(252, 177, 16, 0.87)" }}>
        Outfits
      </h2>
      <div className={styles.outfitlist}>
        <a href="#pants">Pants</a>
        <a href="#shirts" >Shirts</a>
        <a href="#shoes" >Shoes</a>
      </div>
      <Outfits/>
    </>
  );
}
const Phones = () =>
{
  const [add, setAdd] = useState(0);
  return (
    <>
    <div className={styles.grids}>
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
        } = item;
        return (
          <>

            <div className={styles.item}>
              <div className={styles.image}>
                <Image
                  width={170}
                  height={180}
                  src={item_image}
                  alt={item_name}
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
          </>
        );
      })}
      </div>
      </>
  )
}
const Outfits = () =>
{
  let photo =
    "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-ultra-5g-.jpg";
  return (
    <>
      {/* Pants */}

      <div className={styles.outfits}id="pants">
        <div className={styles.title} >
          <h3>Pants</h3>

          <h4>
            see all{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </h4>
        </div>
        <div className={styles.outFitsContainer}>
          <div className={styles.outFit}>
            <Image src={photo} width={120} height={100} />
            <p>$10.98</p>
          </div>
        </div>
      </div>

      {/* Shirts */}


      <div className={styles.outfits}id="shirts">
        <div className={styles.title} >
          <h3>Shirts</h3>
          <h4>
            see all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </h4>
        </div>
        <div className={styles.outFitsContainer}>
          <div className={styles.outFit}>
            <Image src={photo} width={120} height={100} />
            <p>$10.98</p>
          </div>
        </div>
      </div>

      {/* Shoes */}

      <div className={styles.outfits}id="shoes">
        <div className={styles.title} >
          <h3>Shoes</h3>
          <h4>
            see all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-right-circle"
              viewBox="0 0 16 16">
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          </h4>
        </div>
        <div className={styles.outFitsContainer}>
          <div className={styles.outFit}>
            <Image src={photo} width={120} height={100} />
            <p>$10.98</p>
          </div>
        </div>
      </div>
    </>
  );
}


export default Rightbar  ;