import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'
const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
    <Link
      href="/blog?cat=styles"
      className={`${styles.categoryItem} ${styles.style} `}
    >
      スタイル
    </Link>
    <Link
      href="/blog"
      className={`${styles.categoryItem} ${styles.fashion} `}
    >
      ファッション
    </Link>
    <Link
      href="/blog"
      className={`${styles.categoryItem} ${styles.food} `}
    >
      食べ物
    </Link>
    <Link
      href="/blog"
      className={`${styles.categoryItem} ${styles.travel} `}
    >
      旅行
    </Link>
    <Link
      href="/blog"
      className={`${styles.categoryItem} ${styles.culture} `}
    >
      文化
    </Link>
    <Link
      href="/blog"
      className={`${styles.categoryItem} ${styles.coding} `}
    >
      コーディング
    </Link>
  </div>
  )
}

export default MenuCategories