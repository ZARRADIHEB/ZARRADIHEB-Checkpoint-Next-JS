import Link from "next/link";
import styles from "@/public/css/navbar.module.css";
import Image from "next/image";

const Navbar = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2>{title}</h2>
        <ul className={styles.list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
          </li>
          <li>
            <Image
              src={"/images/profile.png"}
              width={40}
              height={40}
              alt="profile-pic"
              style={{ borderRadius: "50%" }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
