import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"

import Layout from "../../components/Layout"
import styles from '../../styles/Id.module.css'

export default function Id() {
  const router = useRouter()
  const data = router.query

  const { author, content, date, id, imageUrl, readMoreUrl, time, title, url } = data

  // Simply to add space after the comma
  const formatDate = date.replace(',', ', ')
  return (
    <>
      <Layout>
        <div className={styles.news} >
          <h1>{title}</h1>
          <p className={styles.date}>{formatDate} - {time}</p>
          <div className={styles.contentLayout}>
            <Image
              src={imageUrl}
              alt={'image about ' + title}
              width={0}
              height={0}
              sizes="50vw"
            />
            <div className={styles.contentText}>

              <p className={styles.description}>{content}</p>
              <p className={styles.author}>{author}</p>
              <p className={styles.readMore}>If you want to read the complete new go to <Link href={readMoreUrl} target='_blank'>this site</Link></p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
