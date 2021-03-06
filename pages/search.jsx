import React from "react";
import { useState } from "react";
import Logo from "../Components/Logo";
import Link from "next/link";
import styles from "../styles/header.module.css";
import { IconButton, Avatar, Badge } from "@mui/material";

function search()
{
  const [searchItem, setSearchItem] = useState('')
  return (
    <>
      <div >
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
                <input
                  type="search"
                    placeholder="  Search on weMarkt"
                    value={searchItem}
                  onChange={(e)=>setSearchItem(e.target.value)}
                  />
                  {console.log(searchItem)}
              </div>
            </Link>
            <div className={styles.right_header}>
              <Link href="./login">
                <Avatar />
              </Link>
              <Badge badgeContent={4} color="primary">
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
            </div>
          </div>
        </div>
      </div>
        
      </div>
      {/* Items */}
      <div className={styles.Items}>
        {names.map((name) =>
        {
          return (
            <div className={styles.name}>
              <p>{name.name}</p>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

export default search;

const names = [
  {name:"Mosh"},
  {name:"Rama"},
  {name:"Claudine"},
  {name:"Esther"},
  {name:"Mosh"},
]

