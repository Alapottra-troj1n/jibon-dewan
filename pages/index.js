import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { animate, motion } from "framer-motion"
import { FaPlay, FaPause } from 'react-icons/fa';
import { useRef, useState } from 'react';

export default function Home() {



  const song = useRef();

  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnded = () => {
    setIsPlaying(false);
  }

  return (
    <div>
      <Head>
        <title>Jibon Dewan</title>
        <meta
          property="og:title"
          content="Jibon Dewan | Musician"
        />
        <meta name="description" content="Solo Track Released | Midhe Boiar " />
        <meta property="og:image" content={"/jibon.jpg"} />
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/651/651717.png" />
      </Head>





      <motion.div className="bg-[url('/jibon.jpg')] bg-cover bg-center bg-no-repeat h-[100vh] lg:bg-fixed flex  flex-col justify-center items-center text-white px-4 lg:px-0 overflow-hidden" >
        <motion.div
          initial={{
            opacity: 0,
            y: -200
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          exit={{ y: -200, opacity: 0 }}

        >
          <h2 className="font-display text-3xl lg:text-7xl font-light italic" >New Track: <span className="not-italic font-normal border-b-2" >Midhe Boiar</span> </h2>
        </motion.div>

        <motion.div className="py-5 lg:ml-24 ml-14"

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          exit={{ opacity: 0, transition:{delay: 0.5} }}
        >

          <div>
            <Image src={'/album.png'} height="420" alt='album' width="606" />
            <audio onEnded={handleEnded} ref={song} src="/songdemo.wav"></audio>
          </div>




        </motion.div>

        <motion.div className="flex flex-col justify-center items-center"

          initial={{
            opacity: 0,
            y: 200
          }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          exit={{ y: 200, opacity: 0 }}

        >

          <div>
            <Link href={'/buynow'} ><button className="bg-white  text-slate-700 lg:px-12 px-8 py-3 lg:py-4 font-semibold font-type cursor-pointer hover:bg-gray-300 transition-all rounded-md ">BUY NOW !</button></Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3" >
            {isPlaying ? <FaPause className="text-xl cursor-pointer" onClick={() => {
              song.current.pause()
              setIsPlaying(!isPlaying)
            }} /> : <FaPlay className="text-xl cursor-pointer" onClick={() => {

              song.current.play()
              setIsPlaying(!isPlaying)

            }

            } />}
            <h2 className="font-display" >Play Demo</h2>
          </div>



          <div className='flex flex-col justify-center items-center' >
            <h2 className="mt-10  font-style text-xl font-semibold">Fundraiser for <a className="underline text-red-400" href="https://www.facebook.com/permalink.php?story_fbid=pfbid0kxYnrQENX3pzJSFeyUhQFJPR2mbLDbmenjFqusf3LpMwWaT14Yw2187TtmJZSuGyl&id=100011291106798">Joya Talukder</a></h2>
            <h2 className="text-center text-neutral-300">All the money earned from this track will be donated for her cancer treatment</h2>
          </div>



        </motion.div>


      </motion.div>

    </div>
  )
}
