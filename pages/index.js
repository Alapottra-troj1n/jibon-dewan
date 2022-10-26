import Head from 'next/head'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Jibon Dewan</title>
        <meta name="description" content="Solo Track Released for Charity" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/651/651717.png" />
      </Head>

    <Navbar/>
        
    </div>
  )
}
