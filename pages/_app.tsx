import { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div style={{ width: '1200 auto', margin: 0, height: 'auto', alignContent: 'center'}}>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
