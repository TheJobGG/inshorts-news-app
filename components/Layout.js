import Link from "next/link";
import Image from "next/image"

import styles from "../styles/Layout.module.css"
import Vercel from '../public/vercel.svg'

export default function Layout({ children }) {
    return (
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
    )
}
