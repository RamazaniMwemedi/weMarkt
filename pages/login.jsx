import React from "react";
import Logo from "../Components/Logo";
import Link from "next/link";
import Head from 'next/head'
import { useState } from "react";

import styles from "../styles/login.module.css";

function login()
{
  
//   const onlogi = async (email, password) =>
//   {
//     try {
//       await firebase.auth().signInWithEmailAndPassword(email, password);
//       console.log("🔥 firebase login succesfully 🔥", email, password);
//     } catch (error) {
//       console.log(error.message);
//     }
  // }
const [userEmail, setUserEmail] = useState(" ");
  return (
    <>
      <Head>
        <title>Login To weMarkt</title>
        <link
          rel="icon"
          href="https://we.shop/s/static/images/weshop-logo-square.png"
        />
      </Head>
      <div className={styles.login_form}>
        <Logo />
        <h3>Login </h3>
        <form
          action="submit"
          onSubmit={() => {
            console.log(email, password);
          }}>
          <label htmlFor="#">
            <p>Email</p>
            <input
              type="email"
              type="text"
              value={userEmail}
              placeholder="  Enter Your Email "
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
          <br />
          {console.log(userEmail)}
          <label htmlFor="#">
            <p>Password</p>
            <input type="password" placeholder="  Enter Your Password" />
          </label>
          <br />
          <div className={styles.checkbox}>
            <input type="checkbox" style={{ width: "1.3vw" }} />
            <p>Keep me Signed In</p>
          </div>
          {/* <Link href="./login">
          </Link> */}
          <button type="submit">Sign In</button>
        </form>
        <br />
        <Link href="#">
          <a>
            {" "}
            <p style={{ marginRight: "210px", cursor: "pointer" }}>
              Forgot password?
            </p>{" "}
          </a>
        </Link>
        <Link href="#">
          <a>
            {" "}
            <p style={{ marginRight: "290px", cursor: "pointer" }}>
              Sign Up
            </p>{" "}
          </a>
        </Link>
        <br />
      </div>
    </>
  );
}

export default login;
