import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout';

/* export default function Home({ news, category }) { */
export default function Home({ response }) {
  const category = response.category;
  const news = response.data;

  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.title}>
          {category == 'all'
            ? `Most recently news`
            : `All about ${category}`}
        </h2>
        {news.length === 0
          ? <p>Parece que sucedió un error...</p>
          :
          <div className={styles.newsContainer}>
            {news.map(item => {
              const { author, content, date, id, imageUrl, readMoreUrl, time, title, url } = item
              return <div key={id} className={styles.card}>
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
              </div>
            })}
          </div>
        }
      </main>
    </Layout>
  )
}


export async function getServerSideProps() {
  const API_URL = 'https://inshorts.deta.dev/news?category=all'
  let news;
  const fetchResponse = await fetch(`${API_URL}`)
  const response = await fetchResponse.json()


  return {
    props: {
      response
    }
  }
}