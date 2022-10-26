import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { animate, motion } from "framer-motion"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Jibon Dewan</title>
        <meta name="description" content="Solo Track Released for Charity" />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/651/651717.png" />
      </Head>





      <div className="bg-[url('/jibon.jpg')] bg-cover bg-center lg:bg-[center_top_-56rem] h-[100vh] bg-no-repeat w-full bg-fixed flex gap- flex-col justify-center items-center text-white px-4 lg:px-0" >
        <motion.div
        initial={{
          opacity: 0,
          y: -200
        }}
        animate={{y:0, opacity:1}}
        transition={{ delay: 1,duration: 0.8 }}
       
        
        >
          <h2 className="font-display text-3xl lg:text-7xl font-light italic" >New Track: <span className="not-italic font-normal border-b-2" >Mide Bhuyer</span> </h2>
        </motion.div>

        <motion.div className="py-5 lg:ml-24 ml-14" 
        
        initial={{opacity: 0}}

        animate={{opacity: 1}}
        transition={{delay: 2 , duration: 0.8}}
        
        
        >
          <Image src={'/album.png'} height="420" alt='album' width="606" />
        </motion.div>

        <motion.div className="flex flex-col justify-center items-center"
        
        initial={{
          opacity: 0,
          y: 500
        }}
        animate={{y:0, opacity:1}}
        transition={{ delay: 1,duration: 0.8 }}
        
        >

          <div>
            <Link href={'/buynow'} ><button className="bg-white  text-slate-700 lg:px-12 px-8 py-3 lg:py-4 font-semibold font-type cursor-pointer hover:bg-gray-300 transition-all lg:rounded-md ">BUY NOW !</button></Link>
          </div>

          <div className='flex flex-col justify-center items-center' >
            <h2 className="mt-10  font-style text-xl font-semibold">Fundraiser for <a className="underline text-red-400" href="https://www.facebook.com/permalink.php?story_fbid=pfbid0kxYnrQENX3pzJSFeyUhQFJPR2mbLDbmenjFqusf3LpMwWaT14Yw2187TtmJZSuGyl&id=100011291106798">Joya Talukder</a></h2>
            <h2 className="text-center text-neutral-300">All the money earned from this track will be donated for her cancer treatment</h2>
          </div>



        </motion.div>


      </div>

    </div>
  )
}
