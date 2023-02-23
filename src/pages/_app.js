import { Scontainer } from '@/Components/Components';
import Navbar from '@/Components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Scontainer>
      <Navbar />
      <Component {...pageProps} />
    </Scontainer>
  );
}
