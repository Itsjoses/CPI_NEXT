import '../styles/globals.css'
import DatabaseComponents from '@/context/databaseComponents'

function MyApp({ Component, pageProps }) {
  return(
    <DatabaseComponents>
      <Component {...pageProps} />
    </DatabaseComponents>
  ) 
}
export default MyApp
