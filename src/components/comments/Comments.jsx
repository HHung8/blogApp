import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>コメント</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="コンメンを書く..." className={styles.input} />
          <button className={styles.button}>送信する </button>
        </div>
      ) : (
        <Link href="/login">ログインしてコンメンとを書く</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>グエンフーフン</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
          これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
