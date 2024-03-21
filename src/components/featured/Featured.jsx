import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>やあ, グエンフーフン!</b>
        私のストーリーと創造的なアイデアを発見してください
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            ローレム・イプサム・ドール・シット・アメット・コンセクテトゥール。
          </h1>
          <p className={styles.postDesc}>
            ローレム・イプサム・ドール・シット・アメット・コンセクテトゥール・アディピシング・エリート。あらゆる状況に応じて、あらゆる状況に応じて、犯罪行為や結果を自由に選択し、腐敗した犯罪行為を防止することができます
          </p>
          <button className={styles.button}>ReadMore</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
