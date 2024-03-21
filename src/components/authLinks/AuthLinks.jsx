"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import {signOut, useSession} from "next-auth/react"

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {status} = useSession();
  
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link} >ログイン</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>書く</Link>
          <span className={styles.link} onClick={signOut} >ログアウト</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)} >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">ホーム</Link>
          <Link href="/">だんじ</Link>
          <Link href="/">コンタック</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">ログイン</Link>
          ) : (
            <>
              <Link href="/write">書く</Link>
              <span className={styles.link}>ログオフ</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
