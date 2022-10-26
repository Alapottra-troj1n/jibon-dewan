import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Jibon Dewan</title>
        <meta name="description" content="Solo Track Released for Charity" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/651/651717.png" />
      </Head>





   <div className="bg-[url('/jibon.jpg')] bg-cover bg-center lg:bg-[center_top_-56rem] h-[100vh] bg-no-repeat w-full bg-fixed flex gap- flex-col justify-center items-center text-white " >
        <div >
            <h2 className="font-display text-4xl lg:text-7xl font-light italic" >New Track: <span className="not-italic font-normal border-b-2" >Jinghani</span> </h2>
        </div>

        <div className="py-10 lg:ml-24" >
        <Image src={'/album.png'} height="420" width="606" />
        </div>

        <div>
        <Link href={'/buynow'} ><button className="bg-white mr-10  text-slate-700 lg:px-12 px-8 py-4 text-xl font-type cursor-pointer hover:bg-gray-300 transition-all">BUY NOW !</button></Link>
        </div>

  
    </div>
   
    </div>
  )
}
