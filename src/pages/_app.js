import '@/styles/globals.css'
import UpperStatusBar from './components/UpperStatusBar'
import LowerStatusBar from './components/LowerStatusBar'

export default function App({ Component, pageProps }) {
  return <>
    <UpperStatusBar/>
    <LowerStatusBar/>
    <Component {...pageProps} />
  </>
}
