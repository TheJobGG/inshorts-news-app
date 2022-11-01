import Link from "next/link";
import Image from "next/image"

import styles from "../styles/Layout.module.css"
import Vercel from '../public/vercel.svg'

export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <Link href='/'><h1>Inshorts News</h1></Link>
                {/* <ul>
                    <li>All</li>
                    <li>Business</li>
                    <li>Sport</li>
                    <li>Technology</li>
                    <li>Startup</li>
                </ul> */}
            </header>
            {children}
            <footer className={styles.footer}>
                <p>This app is using the </p>
                <Link
                    href='https://github.com/cyberboysumanjay/Inshorts-News-API'
                    target="_blank">
                    Inshorts News API
                </Link>
            </footer>
        </>
    )
}
