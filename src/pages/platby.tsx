import { HeadFC } from 'gatsby';

import Layout from '../components/shared/layout';
import { SEO } from '../components/seo';
import Payments from '../components/payments';

const Prakticke = () => (
  <Layout>
    <main>
      <Payments />
    </main>
  </Layout>
);

export default Prakticke;

export const Head: HeadFC = () => (
  <SEO title='Jak zaplatit účastnický poplatek za Stoletou válku?' />
);
