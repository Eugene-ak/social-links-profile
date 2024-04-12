import Image from "next/image";
import profile from "@/public/assets/images/avatar-jessica.jpeg";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.section} ${styles.top_section}`}>
        <Image
          src={profile}
          className={styles.image}
          width={100}
          height={100}
          alt="profile"
        />
        <div className={styles.div}>
          <h1 className={styles.name}>Jessica Randall</h1>
          <h2 className={styles.location}>London, United Kingdom</h2>
        </div>
        <p>&quot;Front-end developer and avid reader&quot;</p>
      </section>

      <section className={`${styles.section} ${styles.bottom_section}`}>
        <a>GitHub</a>
        <a>Frontend Mentor</a>
        <a>LinkedIn</a>
        <a>Twitter</a>
        <a>Instagram</a>
      </section>
    </main>
  );
}
