import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div className="container-fluid p-0 max-vh-100 max-vw-100"><Component {...pageProps} /></div>
    )
}

export default MyApp
