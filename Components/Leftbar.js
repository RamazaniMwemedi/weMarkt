import React from "react";
// import {  Avatar } from "@mui/material";
import Link from "next/link";

import styles from "../styles/leftbar.module.css";
function Leftbar() {
  return (
    <>
      <div className={styles.left_bar}>
        <nav>
          <NavbarLinks />
        </nav>
      </div>
    </>
  );
}

export default Leftbar;

const NavbarLinks = () => {
  return (
    <>
      <div className={styles.navigationshort}>
        {products.map((product) => {
          const { product_name, Product_icon, url } = product;
          return (
            <>
              <Link href={url}>
                <div className={styles.navlink}>
                  {Product_icon}  
                  <h5 style={{marginLeft:"10px"}} >{product_name}</h5>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

const products = [
  {
    product_name: "Menu",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-list"
        viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    ),
    url: "",
  },
  {
    product_name: "Home",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-house-fill"
        viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
        />
        <path
          fill-rule="evenodd"
          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
        />
      </svg>
    ),
    url: "../",
  },
  {
    product_name: "Mobile phones",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-phone-fill"
        viewBox="0 0 16 16">
        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
      </svg>
    ),
    url: "",
  },
  {
    product_name: "Laptops",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-laptop-fill"
        viewBox="0 0 16 16">
        <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg>
    ),
    url: "",
  },
  {
    product_name: "Electonic",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-speaker-fill"
        viewBox="0 0 16 16">
        <path d="M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-2.5 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
      </svg>
    ),
    url: "",
  },
  {
    product_name: "Gaming",
    Product_icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="31"
        height="31"
        fill="orange"
        class="bi bi-controller"
        viewBox="0 0 16 16">
        <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
        <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
      </svg>
    ),
    url: "",
  },
];
