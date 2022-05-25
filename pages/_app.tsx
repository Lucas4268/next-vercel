// import { NextPage } from 'next'
import { NextPageContext } from '../node_modules/next/dist/shared/lib/utils'

import { AppProps } from '../node_modules/next/app'
import '../styles/globals.css'

type NextPageWithLayout = NextPageContext & { //era con NextPage pero no lo pude importar
  getLayout?: (page: JSX.Element) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page: JSX.Element) => page)

  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
