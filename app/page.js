import Navbar from "@/components/Navbar";
import styles from "@/public/css/home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar title={"iZ17 Portfolio"} />
      <div className={styles.greeting}>
        <h1 className={styles.title}>Welcome To iZ17 Portfolio</h1>
        <p className={styles.paragraph}>
          Hi, I&apos;m Iheb Zarrad, a passionate full-stack web developer
          specializing in building dynamic, multi-language, and multi-currency
          eCommerce stores using Shopify. With a strong background in web
          technologies like JavaScript, React, and Node.js, I craft intuitive,
          responsive websites that drive user engagement. Whether it&apos;s
          designing seamless UI/UX experiences or implementing efficient
          back-end systems, I&apos;m dedicated to delivering high-quality
          results for every project. Let&apos;s create something great together!
        </p>
      </div>
    </div>
  );
}
