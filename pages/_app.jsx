import '@/styles/globals.scss'
import { Provider } from 'react-redux';
import store from '@/src/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}
export default MyApp;