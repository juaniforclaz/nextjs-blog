import Link from "next/link";
import styles from "../../styles/proyects.module.css";

export default function Proyects({ allPostsData }) {
  return (
    <div className={styles.proyects}>
      <ul>
        <li>
          <Link href={"proyects/first-year"}>Primer año</Link>
        </li>
        <li>
          <Link href={"proyects/second-year"}>Segundo año</Link>
        </li>
        <li>
          <Link href={"proyects/third-year"}>Tercer año</Link>
        </li>
      </ul>
    </div>
  );
}
