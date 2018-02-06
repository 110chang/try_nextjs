import 'isomorphic-unfetch'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Logo from '../components/logo'

const Index = data => (
  <div>
    <Head>
      <title>Title daze!!!</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0" />
    </Head>
    <p>Hello world!</p>
    <p>{data.stars}</p>
    <Logo />
    <Link href="/about"><a href="">About us</a></Link>
  </div>
)

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Index
