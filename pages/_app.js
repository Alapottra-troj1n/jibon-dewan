import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence>

        <Component key={router.pathname} {...pageProps} />


      </AnimatePresence>
      <ToastContainer />
      <Footer />
    </>
  )
}

export default MyApp
