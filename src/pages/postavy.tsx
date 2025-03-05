import Layout from '../components/shared/layout';
import PageWrapper from '../components/shared/page-wrapper';
import Postavy from '../components/postavy';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

const PostavyPage = () => {
  return (
    <Layout>
      <main>
        <PageWrapper>
          <Postavy />
        </PageWrapper>
      </main>
    </Layout>
  );
};

export default PostavyPage;

export const Head: HeadFC = () => (
  <SEO
    title='Připoj se k bojům Stoleté války, vyber si svou postavu!'
    description='Na této stránce jsou postavy zemí, které na naší hře budou zastoupené. Každá postava má svou kartu, na níž ikonami vyznačeny jsou její hlavní rysy, náročnost a charakter její hry.'
  />
);
