import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://afghangoat.hu/img/agd_icon.png"
          alt="AGD logo"
          width={180}
          height={180}
          priority
        />
        <ol>
          <li>
            This is an example <code>Next JS</code> site.
          </li>
          <li>I was very bored and needed to learn a new technology.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            href="https://afghangoat.hu/me"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            About
          </a>
		  <a
            href="./test"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Don't click this
          </a>
		  <a
            href="./cars"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            The cars
          </a>
        </div>
      </main>
    </div>
  );
}
