import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Layout from '../components/Layout';
import { getData } from './_app';
import MainContent from '../components/MainContent';

/* export default function Home({ news, category }) { */
export default function Home({ response }) {
  const category = response.category;
  const news = response.data;

  return (
    <Layout>
      <MainContent category={category} news={news}/>
    </Layout>
  )
}


export function getServerSideProps() {
  return getData('all')
}