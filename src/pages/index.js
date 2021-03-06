import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer/footer'
import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Links from '../components/links/links'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Welcome, students!</h2>
    <p>Here, you will find your step by step tutorial for your hackathon project. Below, you'll notice the steps you'll need to follow, and above you'll notice the links to the milestones and add-ons page</p>
    <p>Now let's go build something great.</p>
    <Links />
    <Footer />
  </Layout>
)

export default IndexPage
