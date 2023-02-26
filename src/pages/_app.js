import Container from '@/Components/Container';
import { store } from '@/Modals/Stores/Store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </Provider>
  );
}
