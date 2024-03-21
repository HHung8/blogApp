import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
        <h1>ロレムイプサムドーロシットアメットコンセクテトゥール</h1>
        </Link>    
        <p className={styles.desc}>
          ロレムイプサムドロセットアメットコンセクテトゥルアディピシンギンギット、エリト。イプサコンセクンテュール、マイヌス、クイラボリオサンプラエセンティウムインベントール、オディオエイウスインペディットディスティンクティオディグニッシモセリギェンディシミリケヴェニアムクアシサンタ?...
        </p>
        <Link href={`/posts`} className={styles.link}>もっと読む</Link>
      </div>
    </div>
  );
};

export default Card;
