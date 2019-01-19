import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome, students!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Footer />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
