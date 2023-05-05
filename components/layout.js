import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import logoSVG from "/public/images/LogoSVG.svg";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

const name = "Juani Forclaz";
export const siteTitle = "Portfolio Personal";

export default function Layout({ children, home }) {
  return (
    <div className="container lg:p-60 pt-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio de experiencias y trabajos personales"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.logoHeader}>
              <Image
                src={logoSVG}
                width={100}
                height={100}
                alt="Juani Forclaz Logo"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </div>
            <div className={styles.socialMedia}>
              <AiFillLinkedin className={styles.socialMediaIcon} />
              <AiFillGithub className={styles.socialMediaIcon} />
              <AiOutlineInstagram className={styles.socialMediaIcon} />
              <AiOutlineMail className={styles.socialMediaIcon} />
            </div>
          </>
        ) : (
          <>
            <Image
              src={logoSVG}
              width={65}
              height={65}
              alt="Juani Forclaz Logo"
              className={utilStyles.logo}
            />
            <div className={styles.socialMedia}>
              <AiFillLinkedin className={styles.socialMediaIconS} />
              <AiFillGithub className={styles.socialMediaIconS} />
              <AiOutlineInstagram className={styles.socialMediaIconS} />
              <AiOutlineMail className={styles.socialMediaIconS} />
            </div>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <button className="bg-sky-500 hover:bg-sky-700 decoration-white">
              ← Volver
            </button>
          </Link>
        </div>
      )}
      <footer className={styles.footer}>
        <Link href={"/"}>Hecho por mí con NextJS :)</Link>
      </footer>
    </div>
  );
}
