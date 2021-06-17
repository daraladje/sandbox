import Layout from '../components/Layout';
import '../styles/globals.css';

//Add header or footer you want to show on every page here
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
