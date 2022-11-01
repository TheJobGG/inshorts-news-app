import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp


export async function getData(category = 'all') {
  const API_URL = `https://inshorts.deta.dev/news?category=${category}`
  let news;
  const fetchResponse = await fetch(`${API_URL}`)
  const response = await fetchResponse.json()

  return {
    props: {
      response
    }
  }
}