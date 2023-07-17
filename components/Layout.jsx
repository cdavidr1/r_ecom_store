import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Basic Store</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout