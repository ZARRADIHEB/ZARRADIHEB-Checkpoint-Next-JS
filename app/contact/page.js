import Navbar from "@/components/Navbar";
import styles from "@/public/css/contact.module.css";

const Contact = () => {
  return (
    <>
      <Navbar title={"Contact Me"} />
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>
          Feel free to reach out to me for collaborations, projects, or
          inquiries.
        </p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder="Your Name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              placeholder="Your Email"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
