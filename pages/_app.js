import { PayPalScriptProvider } from '@paypal/react-paypal-js'
import Layout from '../components/Layout'
import '../styles/globals.css'
import { PAYPAL_CLIENT_ID } from '../utils/constants'

function MyApp({ Component, pageProps }) {
  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENT_ID.clientId }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PayPalScriptProvider>

  )
}

export default MyApp
