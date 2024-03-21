import Menu from "../../components/Menu/Menu"
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "../../components/comments/Comments"

const SiglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            これは、印刷やグラフィックデザインで使用されるダミーテキスト
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Yushing Dev</span>
              <span className={styles.date}>01.1.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。
            </p>
            <h2>
              これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。
            </h2>
            <p>
              これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。
            </p>
            <p>
              これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。これは、印刷やグラフィックデザインで使用されるダミーテキストです。このテキストは意味を持たず、完成されたテキストの形を模倣するために使用されます。
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SiglePage;
