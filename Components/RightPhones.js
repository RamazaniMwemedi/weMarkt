import React from "react";
import styles from "../styles/rightbar.module.css";
import Image from "next/image";
//componet

//end of componet
function Rightbar(products) {
  console.log(products);
  return (
    <>
      <div className={styles.grids}>
        {items.map((item) => {
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
                    width={250}
                    height={250}
                    src={item_image}
                    alt={item_name}
                  />
                </div>
                <div className={styles.item_name}>
                  <h5>
                    <b>{item_name}</b>
                  </h5>
                  <h5>
                    <i>{brand}</i>
                  </h5>
                </div>
                <div className={styles.descrp}>
                  <div style={{ display: "flex" }}>
                    <p>{display}"</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-square"
                      viewBox="0 0 16 16">
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>{rear_camera}MP</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-camera-fill"
                      viewBox="0 0 16 16">
                      <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                      <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>{ram}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cpu-fill"
                      viewBox="0 0 16 16">
                      <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                      <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
                    </svg>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p>{battery}mAh</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-battery-full"
                      viewBox="0 0 16 16">
                      <path d="M2 6h10v4H2V6z" />
                      <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.item_bottom}>
                  <div className={styles.item_price}>
                    <h4>
                      $ <i>{item_price}</i>
                    </h4>
                  </div>

                  <button type="button">
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
  );
}

export default Rightbar;

const items = [
  {
    id: 1,
    item_name: "Galaxy s21 ultra",
    item_price: 769.95,
    item_image:
      "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg",
    brand: "Samsung",
    realesed_year: 0,
    front_camera: 0,
    rear_camera: 108,
    color: ["", ""],
    battery: 5000,
    display: 6.8,
    ram: 12 / 16,
  },
  // {
  //   id: 2,
  //   item_name: "Apple iPhone 13 Pro Max",
  //   item_price: 1900,
  //   item_image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
  //   brand: "Apple",
  //   realesed_year: 0,
  //   front_camera: 0,
  //   rear_camera: 0,
  //   color: ["", ""],
  //   battery: 4352,
  //   display: 6,
  //   ram: 0,
  // },
  // {
  //   id: 3,
  //   item_name: "",
  //   item_price: 0,
  //   item_image: "",
  //   brand: "",
  //   realesed_year: 0,
  //   front_camera: 0,
  //   rear_camera: 0,
  //   color: ["", ""],
  //   battery: 0,
  //   display: 0,
  //   ram: 0,
  // },
];
