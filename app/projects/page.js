"use client";

import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import data from "./data";
import styles from "@/public/css/projects.module.css";

const page = () => {
  return (
    <div>
      <Navbar title={"My Projects"} />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {data.map(({ title, img, description }, index) => (
            <Card key={index} src={img} title={title} des={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
