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
        <h2>
          {category == 'all'
            ? `Most recently news`
            : `All about ${category}`}
        </h2>
        {/* <h2> title of news </h2> */}
        {news.length === 0
          ? <p>Parece que sucedió un error...</p>
          :
          <div className={styles.container}>
            {news.map(item => {
              const { author, content, date, id, imageUrl, readMoreUrl, time, title, url } = item
              return <div key={id} className={styles.card}>
                <Image
                  src={imageUrl}
                  alt={'image about ' + title}
                  width={700}
                  height={475}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '250px',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
                <span style={styles.date}>{date}</span>
                <h3>{title}</h3>
              </div>
            })}
          </div>
        }
      </main>
    </Layout>
  )
}


export async function getServerSideProps() {
  const API_URL = 'https://inshorts.deta.dev/news?category=startup'
  let news;
  const fetchResponse = await fetch(`${API_URL}`)
  const response = await fetchResponse.json()


  return {
    props: {
      response
    }
  }
}