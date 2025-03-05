import type { HeadFC } from 'gatsby';

import PageWrapper from '../components/shared/page-wrapper';
import Layout from '../components/shared/layout';
import Gallery from '../components/gallery';
import SellingPointsGroup from '../components/shared/selling-points-group';
import TextBlockWithTitle from '../components/shared/text-block-with-title';
import MainCTAButton from '../components/shared/main-CTA-button';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <main>
      <PageWrapper>
        <div className='md:mt-24 md:mb-16 lg:mb-32'>
          <TextBlockWithTitle
            title='Vaše role v příběhu'
            paragraph={
              <>
                Přeneseme se do roku 1337, kdy napětí mezi anglickými a
                francouzskými králi vrcholí ve sporu o&nbsp;obchod
                s&nbsp;anglickou vlnou ve Flandrech. Jaké budou další kroky? Kdo
                získá moc a kdo ji ztratí?
                <strong>
                  &nbsp;Postavte se do centra dění a&nbsp;ovlivněte osud Evropy!
                </strong>
                <br />
                <br />
                Tato jedinečná hra&nbsp;
                <strong>
                  spojuje atmosféru dramatických larpů s&nbsp;taktickými prvky
                  deskové hry
                </strong>
                . Budete plánovat, vyjednávat a&nbsp;rozhodovat na bitevním poli
                i&nbsp;mimo něj. Čekají na vás role anglických vyslanců, irských
                vzbouřenců, prohnaných obchodníků, odvážných korzárů, rytířů
                i&nbsp;slavných umělců. Každé rozhodnutí může změnit běh dějin.
              </>
            }
          />
        </div>
      </PageWrapper>
      <SellingPointsGroup />
      <PageWrapper withMenu={false}>
        <TextBlockWithTitle
          title='Proč si zahrát?'
          paragraph={
            <>
              Zažijete příběh, který vás vtáhne do středověku, kde intriky
              a&nbsp;odvaha rozhodují o&nbsp;osudech království. K&nbsp;tomu vás
              oblékneme <strong>do&nbsp;dobových kostýmů</strong>{' '}
              v&nbsp;kulisách <strong>Státního hradu Švihov</strong> nebo fary
              v&nbsp;
              <strong>Domaslavi</strong> a &nbsp;připravíme pro vás deskovou hru
              <strong> nevídaných rozměrů</strong>.
              <br />
              <br />
              <strong className='text-xl xl:text-3xl'>
                Budete v tomto diplomatickém larpu, historické simulaci a&nbsp;
                tahové strategii zastávat jednu z&nbsp;klíčových rolí? Budete
                mít odvahu pohnout figurkami na šachovnici dějin? Nebo budete
                tiše tahat za nitky ze stínů? Zvládnete čelit svému osudu
                jakožto vyslanec anglického krále, flanderský obchodník, odvážný
                korzár, ušlechtilý rytíř či&nbsp;nebojácná diplomatka?
              </strong>
            </>
          }
        />
      </PageWrapper>
      <MainCTAButton />
      <Gallery />
    </main>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
