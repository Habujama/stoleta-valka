import type { HeadFC } from 'gatsby';

import PageWrapper from '../components/page-wrapper';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <main>
          <p>
            V roce 1337 měli angličtí králové na francouzském území mnoho držav
            a byli tak fakticky leníky francouzské koruny, mocnější, než samotný
            král. První oheň konfliktu zažehly jiskry sporu o nadvládu nad
            obchodem s anglickou vlnou ve Flandrech. Kdy a kde oheň vzplane
            naplno tentokrát?
          </p>
        </main>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stoletá válka roku 1337</title>;
