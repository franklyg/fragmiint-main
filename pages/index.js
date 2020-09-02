import Head from 'next/head'
import { homePageData } from '../lib/api'
import HomePage from '../components/home-page'
import Layout from '../components/layout'

import ReactGA from 'react-ga';
const trackingId = "UA-177158230-1";

export default function Index({ preview, allPosts }) {

  ReactGA.initialize(trackingId);
  ReactGA.pageview('/');
  
  const background = allPosts[0].node.background_image.url;
  const logo = allPosts[0].node.logo_image.url;

  return (
    <>
      <Layout>
        <HomePage
          logo={logo}
        />
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await homePageData(previewData)
  return {
    props: { preview, allPosts },
  }
}
