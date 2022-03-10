import Head from "next/head"
import Header from "../Header/Header"

const Layout = ({ children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout