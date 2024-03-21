import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import MenuPosts from "../menuPosts/menuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"何が暑いですか"}</h2>
      <h1 className={styles.title}>だいにんき</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>トピックごとに発見されました</h2>
      <h1 className={styles.title}>カテゴリー</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>編集者に選ばれた</h2>
      <h1 className={styles.title}>編集者が選ぶ</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
