import Link from "next/link";
import Image from "next/image"
import Head from "next/head";

import styles from "../styles/Layout.module.css"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>In-shorts News</title>
            </Head>
            <div className={styles.Layout}>
                <header className={styles.header}>
                    <Link href='/'><h1>Inshorts News</h1></Link>
                    <ul>
                        <li className={styles.linkDefault}><Link href='/Business'>Business</Link></li>
                        <li className={styles.linkDefault}><Link href='/Sports'>Sports</Link></li>
                        <li className={styles.linkDefault}><Link href='/Technology'>Technology</Link></li>
                        <li className={styles.linkDefault}><Link href='/Startup'>Startup</Link></li>
                    </ul>
                </header>
                {children}
                <footer className={styles.footer}>
                    <p>This app is using</p>
                    <Link
                        href='https://github.com/cyberboysumanjay/Inshorts-News-API'
                        target="_blank">
                        Inshorts News API
                    </Link>
                </footer>
            </div>
        </>
    )
}
