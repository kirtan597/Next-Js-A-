import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/navbar.css';
import '../styles/theme.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}