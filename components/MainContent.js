import Link from "next/link"
import Image from "next/image"

import styles from '../styles/Home.module.css'

export default function MainContent({ category, news }) {
  return (
    <main className={styles.main}>

      {category == 'all'
        ? <h2 className={styles.title}>Most recently <span className={styles.colorizedText}>news</span></h2>
        : <h2 className={styles.title}>All about <span className={styles.colorizedText}>{category}</span></h2>
      }

      {news.length === 0
        ? <p>Theres an error while loading data. Please try again later</p>
        :
        <div className={styles.newsContainer}>
          {news.map(item => {
            const { author, content, date, id, imageUrl, time, title } = item
            return <Link
              href={{
                query: item,
                pathname: `/news/${id}`,
              }}
              as={`/news/${id}`}
              key={id}
              className={styles.card}>
              <Image
                src={imageUrl}
                alt={'image about ' + title}
                width={0}
                height={0}
                sizes="50vw"
              />
              <span className={styles.date}>{date} - {time}</span>
              <h3>{title}</h3>
              <p className={styles.description}>{content}</p>
              <span className={styles.author}>{author}</span>
            </Link>
          })}
        </div>
      }
    </main>
  )
}
