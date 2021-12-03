import type { AppProps } from 'next/app'
import { AuthProvider } from '../src/contexts/AuthContext';

import '../styles/home.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
       <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
