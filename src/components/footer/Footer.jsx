import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="yushing dev"
            width={50}
            height={50}
          />
          <h1 className={styles.logoText}>グエンフーフン</h1>
        </div>
        <p className={styles.desc}>
          申し訳ありませんが、私は英語と関連する言語にしか対応していません。他の言語への翻訳に関しては、以下のようなオンライン翻訳ツールを利用することをお勧めします
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} /> 
        </div>
      </div>
      <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>リンク</span>
            <Link href="/">ホーム</Link>
            <Link href="/">ブログ</Link>
            <Link href="/">紹介</Link>
            <Link href="/">問い合わせ</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>タグ</span>
            <Link href="/">スタイル</Link>
            <Link href="/">ファッション</Link>
            <Link href="/">コーディング</Link>
            <Link href="/">旅行</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>ソーシャル</span>
            <Link href="/">フェイスブック</Link>
            <Link href="/">インスタグラム</Link>
            <Link href="/">ティックトック</Link>  
            <Link href="/">ユーチューブ</Link>
          </div>
      </div>
    </div>
  );
};

export default Footer;
