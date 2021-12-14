import Link from "next/link";
import Logo from './Logo'
import styles from "../styles/footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.top}>
          <Logo />
          <Email/>
        </div>
        <hr />
        <div className={styles.footerA}>
          <div className={styles.footer1}>
            <h5>Customers Assistance</h5>
            {footer1.map((one) => {
              const { text, url } = one;
              return (
                <div className={styles.one}>
                  <p>
                    <Link href="url">{text}</Link>
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.footer2}>
            <h5>Get To Know Us</h5>
            {footer2.map((two) => {
              const { text, url } = two;
              return (
                <div className={styles.one}>
                  <p>
                    <Link href="url">{text}</Link>
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.footer3}>
            <h5>
              Comerce on <i>we</i>
              <b>Markt</b>
            </h5>
            {footer3.map((three) => {
              const { text, url } = three;
              return (
                <div className={styles.one}>
                  <p>
                    <Link href="url">{text}</Link>
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.footer4}>
            <h5>Trade Services</h5>
            {footer4.map((four) => {
              const { text, url } = four;
              return (
                <div className={styles.one}>
                  <p>
                    <Link href="url">{text}</Link>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
          
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A illum eum fugiat assumenda beatae excepturi? Accusantium commodi provident eaque quia vitae tempora enim esse aut, hic deserunt itaque libero maiores.</p>
      </div>
    </>
  );
}

export default Footer;

const Email = () =>
{
  return (
    <>
      <div className={styles.email}>
        <p style={{fontSize:"13px"}}>
          Trade Alert - Delivering the latest product trends <br /> and industry news
          straight to your inbox.
        </p>
        <div className={styles.email1}>
          <input type="email" name="email" id="email" placeholder=" Your Email"/>
          <button type="submit">Subscribe</button>
        </div>
      </div>
    </>
  );
}


const footer1 = [
  // Costermer services
  {
    text: "Help Center",
    url: "/",
  },
  {
    text: "Contact Us",
    url: "/",
  },
  {
    text: "Report Abuse",
    url: "/",
  },
  {
    text: "Submit a Dispute",
    url: "/",
  },
  {
    text: "Policies & Rules",
    url: "/",
  },
  {
    text: "Get Paid for Your Feedback",
    url: "/",
  },
];

const footer2 = [
  // Get to know us
  {
    text: "About weMarkt",
    url: "/",
  },
  {
    text: "weMarkt Carrers",
    url: "/",
  },
  {
    text: "weMarkt Express",
    url: "/",
  },
  {
    text: "weMarkt Black Friday",
    url: "/",
  },
];

const footer3 = [
  // Sell on wemarkt
  {
    text: "Supplier Memberships",
    url: "/",
  },
  {
    text: "Learning Center",
    url: "/",
  },
  {
    text: "Partner Program",
    url: "/",
  },
];

const footer4 = [
  // Trade services
  {
    text: "Trade Assurance",
    url: "/",
  },
  {
    text: "Business Identity",
    url: "/",
  },
  {
    text: "Logistics Service",
    url: "/",
  },

  {
    text: "Letter of Credit",
    url: "/",
  },
];
            