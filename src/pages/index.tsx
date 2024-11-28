import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import type { HeadFC } from 'gatsby';

import Hero from '../components/hero';
import PageWrapper from '../components/page-wrapper';

const IndexPage = () => {
  const breakpoints = useBreakpoint();

  return (
    <main className='w-full'>
      <Hero />
      <PageWrapper>
        <p>
          V roce 1337 měli angličtí králové na francouzském území mnoho držav a
          byli tak fakticky leníky francouzské koruny, mocnější, než samotný
          král. První oheň konfliktu zažehly jiskry sporu o nadvládu nad
          obchodem s anglickou vlnou ve Flandrech. Kdy a kde oheň vzplane naplno
          tentokrát?
        </p>
        {breakpoints.sm || breakpoints.md ? <div>Malý to je, Malý!</div> : null}
      </PageWrapper>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
