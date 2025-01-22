import Navbar from "@/components/Navbar";
import styles from "@/public/css/about.module.css";

const About = () => {
  return (
    <>
      <Navbar title={"About Me"} />
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I am a web developer passionate about building user-friendly and
          efficient web applications. I specialize in full-stack development,
          eCommerce solutions, and dynamic websites.
        </p>
        <div className={styles.links}>
          <a
            href="https://www.upwork.com/freelancers/~019ac5950fb374538e?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className={`fab fa-upwork ${styles.icon}`}></i> Upwork Profile
          </a>
          <a
            href="https://github.com/ZARRADIHEB"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className={`fab fa-github ${styles.icon}`}></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/iheb-zarrad-570025241/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <i className={`fab fa-linkedin ${styles.icon}`}></i> LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
