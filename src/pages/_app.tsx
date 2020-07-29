import App from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const title: string = 'Online store'

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
