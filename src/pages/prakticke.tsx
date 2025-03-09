import { HeadFC } from 'gatsby';

import Layout from '../components/shared/layout';
import { SEO } from '../components/seo';
import PracticalPage from '../components/prakticke';

const Prakticke = () => (
  <Layout>
    <main>
      <PracticalPage />
    </main>
  </Layout>
);

export default Prakticke;

export const Head: HeadFC = () => (
  <SEO
    title='Kde a kdy se na Stoletou válku sejdeme?'
    description='Zjisti, kde se larp Stoletá válka letos bude odehrávat, kdy přijet, co si vzít s sebou, co je a co není v ceně hry a jaký bude přibližný harmonogram.'
  />
);
