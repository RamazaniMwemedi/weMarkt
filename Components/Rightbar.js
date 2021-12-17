import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"

import styles from "../styles/rightbar.module.css";
//componet
import PhonesItem from './PhonesItem'
//end of componet
function Rightbar()
{
  return (
    <>
     
     <Phones/>
      <Laptops/>
      <br/>
      <Electronic/>
      <br/>
      <Gaming/>
      <Outfits/>
    </>
  );
}
const Phones = () =>
{
  const [add, setAdd] = useState(0);
  return (
    <>
        <div className={styles.title} >
          <h3>Most Wanted Phones</h3>

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
    <div className={styles.grids}>
      <PhonesItem/>
      </div>
      </>
  )
}
// Fetching datas

// 

const Laptops =()=>{
  return(
    <>
      <div className={styles.title} >
          <h3>Laptops</h3>

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
    </>
  )
}
const Electronic =()=>{
  return(
    <>
      <div className={styles.title} >
          <h3>Electonics</h3>

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
    </>
  )
}
const Gaming=()=>{
  return(
    <>
      <div className={styles.title} >
          <h3>Gaming</h3>

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
    </>
  )
}
const Outfits = () =>
{
  let photo =
    "https://m.media-amazon.com/images/I/71lNj3046jL._AC_SL1500_.jpg";
  return (
    <>
      {/* Pants */}
      <h2 style={{ color: "rgba(252, 177, 16, 0.87)" }}>
        Outfits
      </h2>
      <div className={styles.outfitlist}>
        <a href="#pants">Pants</a>
        <a href="#shirts" >Shirts</a>
        <a href="#shoes" >Shoes</a>
      </div>
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