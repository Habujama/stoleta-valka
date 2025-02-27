import type { HeadFC } from 'gatsby';

import PageWrapper from '../components/shared/page-wrapper';
import Layout from '../components/shared/layout';
import Button, { ButtonType } from '../components/shared/button';
import Title, { TitleLevel } from '../components/shared/title';
import Gallery from '../components/gallery';
import SellingPointsGroup from '../components/shared/selling-points-group';

const IndexPage = () => (
  <Layout>
    <main>
      <PageWrapper>
        <div className='flex flex-col text-center max-w-4xl mx-auto gap-y-4 mt-16 xl:mt-32 mb-24 xl:mb-28'>
          <Title level={TitleLevel.H3} className='underline-offset-8'>
            Vaše role v příběhu
          </Title>
          <p className='text-center text-xl 2xl:text-3xl'>
            Postavíte se do centra dění a&nbsp;ovlivníte osud Evropy. Tato
            jedinečná hra&nbsp;
            <strong>
              spojuje atmosféru dramatických larpů s&nbsp;taktickými prvky
              deskové hry
            </strong>
            . Budete plánovat, vyjednávat a&nbsp;rozhodovat na bitevním poli
            i&nbsp;mimo něj. Čekají na vás role anglických vyslanců, irských
            vzbouřenců, prohnaných obchodníků, odvážných korzárů, rytířů
            i&nbsp;slavných umělců. Každé rozhodnutí může změnit běh dějin.
          </p>
        </div>
      </PageWrapper>
      <SellingPointsGroup />
      <PageWrapper withMenu={false}>
        <div className='flex flex-col text-center max-w-4xl mx-auto gap-y-4 mt-16'>
          <Title level={TitleLevel.H3} className='underline-offset-8'>
            Proč si zahrát?
          </Title>
          <p>
            Zažijete příběh, který vás vtáhne do středověku, kde intriky
            a&nbsp;odvaha rozhodují o&nbsp;osudech království. K&nbsp;tomu vás
            oblékneme <strong>do&nbsp;dobových kostýmů</strong> v&nbsp;kulisách{' '}
            <strong>Státního hradu Švihov</strong> nebo fary v&nbsp;
            <strong>Domaslavi</strong> a &nbsp;připravíme pro vás deskovou hru
            <strong> nevídaných rozměrů</strong>.
          </p>
          <p className='font-semibold'>
            Budete v tomto diplomatickém larpu, historické simulaci a&nbsp;
            tahové strategii zastávat jednu z&nbsp;klíčových rolí? Budete mít
            odvahu pohnout figurkami na šachovnici dějin? Nebo budete tiše tahat
            za nitky ze stínů? Zvládnete čelit svému osudu jakožto vyslanec
            anglického krále, flanderský obchodník, odvážný korzár, ušlechtilý
            rytíř či&nbsp;nebojácná diplomatka?
          </p>
        </div>
        <Button
          href='https://forms.gle/13pdNp5YJQ1uUnKr6'
          target='_blank'
          buttonType={ButtonType.SECONDARY}
          className='h-24 lg:w-96 mx-auto mt-10 mb-20'
        >
          <h5 className='md:text-2xl uppercase -mt-3 lg:-mt-5'>Přihlas se</h5>
        </Button>
      </PageWrapper>
      <Gallery />
    </main>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Stoletá válka roku 1337</title>;
