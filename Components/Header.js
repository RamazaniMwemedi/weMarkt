import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { IconButton, Avatar, Badge } from "@mui/material";

import add from './Rightbar'

function Header(props) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.all}>
          <Link href="./">
            <div className={styles.left}>
              <Logo />
            </div>
          </Link>
          <div className={styles.right}>
            <Link href="../search">
              <div className={styles.search}>
                <IconButton>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </IconButton>
                <h5>
                  Search on <i>we</i>
                  <b>Markt</b>
                </h5>
              </div>
            </Link>
            <div className={styles.right_header}>
              <Link href="./account">
                <div style={{display:"inline-flex", alignItems:"center", gap:"2px"}}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg" />
                <h5 style={{color:"white"}}>Hello Sofia </h5></div>
              </Link>
              <Link href="./cart">
              <Badge badgeContent={props.items} color="primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  fill="white"
                  class="bi bi-cart-fill"
                  viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                </Badge>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
