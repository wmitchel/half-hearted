import React from "react"

import Banner from "../components/banner"
import VideoEmbed from "../components/videoEmbed"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <VideoEmbed />
  </Layout>
)

export default IndexPage
