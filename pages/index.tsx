import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => (
  <div className="container">
    <Head>
      <title>Favicon tool</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Welcome to Favicon tool!</h1>

      <p className="description">
        Get started by editing <code>pages/index.tsx</code>
      </p>
    </main>

    <style jsx>
      {`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}
    </style>
  </div>
)

export default Home
