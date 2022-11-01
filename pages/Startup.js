import Layout from "../components/Layout"

import MainContent from "../components/MainContent"
import { getData } from "./_app";

export default function Startup({ response }) {
    const category = response.category;
    const news = response.data;
    return (
        <>
            <Layout>
            <MainContent category={category} news={news} />
            </Layout>
        </>
    )
}


export function getServerSideProps() {
    return getData('startup')
}