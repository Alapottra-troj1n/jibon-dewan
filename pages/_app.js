import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return(
  <>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  <ToastContainer />
  </>
  )
}

export default MyApp
