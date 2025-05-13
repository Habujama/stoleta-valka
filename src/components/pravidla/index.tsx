import Layout from '../shared/layout';
import { HeadFC } from 'gatsby';
import { SEO } from '../seo';
import Pravidla from './pravidla'

const PravidlaPage = () => {
  return (
        <Pravidla />
  );
};

export default PravidlaPage;

export const Head: HeadFC = () => (
  <SEO
    title='Připoj se k bojům Stoleté války, vyber si svou postavu!'
    description='Na této stránce jsou stručná pravidla hry a příručky pro hráče'
  />
);
