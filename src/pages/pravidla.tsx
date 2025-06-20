import Layout from '../components/shared/layout';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';
import Pravidla from '../components/pravidla';

const PostavyPage = () => {
  return (
    <Layout>
      <main>
        <Pravidla />
      </main>
    </Layout>
  );
};

export default PostavyPage;

export const Head: HeadFC = () => (
  <SEO
    title='Připoj se k bojům Stoleté války, vyber si svou postavu!'
    description='Na této stránce jsou stručná pravidla hry a příručky pro hráče'
  />
);
