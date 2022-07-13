import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import SWRWrapper from '@/components/SWR/SWRWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRWrapper>
  );
}

export default MyApp;
