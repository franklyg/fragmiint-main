import { aboutPageData } from '../../lib/api'
import Layout from '../../components/layout'
import About from '../../components/about-page'


export default function AboutPage({ preview, allPosts }){
  const portrait = allPosts[0].node.about_image.url,
        copy     = allPosts[0].node.about_copy[0].text
  return(
    <Layout>
      <About
        portrait={portrait}
        copy={copy}
      />
    </Layout>
  )
}


export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await aboutPageData(previewData)
  return {
    props: { preview, allPosts },
  }
}
