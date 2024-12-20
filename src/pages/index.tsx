import type { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import PageWrapper from '../components/page-wrapper';
import Layout from '../components/layout';
import Section from '../components/section';
import Button, { ButtonType } from '../components/shared/button';
import SellingPoint from '../components/selling-points';

const IndexPage = () => {
  const sectionWithImage =
    'grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-x-2 md:gap-x-0 md:gap-y-2';

  return (
    <Layout>
      <PageWrapper>
        <main>
          <h3 className='font-serifSmall text-2xl md:text-5xl text-center pb-4 pt-8 md:pt-0'>
            Přepište historii ve hře plné osudových rozhodnutí!
          </h3>
          <p>
            Píše se rok 1337. Angličtí králové drží na francouzském území
            rozsáhlé statky, čímž zpochybňují autoritu samotného francouzského
            krále. Napětí vrcholí ve sporu o&nbsp;obchod s&nbsp;anglickou vlnou
            ve Flandrech. Jaké budou další kroky? Kdo získá moc a&nbsp;kdo ji
            ztratí?
          </p>
          <Section
            imageRight
            subtitle='Vaše role v příběhu'
            image={
              <StaticImage
                src='../assets/princezna.png'
                width={300}
                alt='Zahraj si středověkou deskovku'
                className='bg-contain'
                placeholder='blurred'
              />
            }
            text={
              <p>
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
            }
          />

          <div className='mt-6 mb-10'>
            <h4 className='font-serifSmall text-2xl md:text-5xl text-center mb-6'>
              Co vás čeká?
            </h4>
            <ul className='grid grid-rows-4 gap-y-6 md:gap-y-0 md:grid-rows-1 md:grid-cols-4 md:gap-x-6 items-center'>
              <SellingPoint
                title='Dynamická diplomacie'
                text='Vyjednávejte, intrikujte, utvářejte a&nbsp;ničte spojenectví.'
                staticImage={
                  <StaticImage
                    src='../assets/bitva.png'
                    alt='Vyzkoušejte si středověkou diplomacii na vlastní kůži!'
                    className='bg-contain mb-4'
                    placeholder='blurred'
                  />
                }
              />
              <SellingPoint
                title='Osobní konflikty'
                text='Čelte cizím agentům, přepadejte cizí lodě, braňte svá města,
                    nechte o&nbsp;sobě nebo o&nbsp;svém nepříteli skládat básně
                    a&nbsp;hlavně - prožijte si&nbsp;dopady svých činů.'
                staticImage={
                  <StaticImage
                    src='../assets/diplomacie.png'
                    alt='Vyzkoušejte si, jak složité bylo přežít na vrcholku středověkého světa.'
                    className='bg-contain mb-4'
                    placeholder='blurred'
                  />
                }
              />
              <SellingPoint
                title='Válečná strategie'
                text='Veďte své armády k&nbsp;vítězství... nebo k&nbsp;záhubě.'
                staticImage={
                  <StaticImage
                    src='../assets/stategie.png'
                    alt='Zahrajte si středověkou deskovku'
                    className='bg-contain mb-4'
                    placeholder='blurred'
                  />
                }
              />
              <SellingPoint
                title='Výběr z 39 rolí'
                text='27 mužských a 12 ženských postav, z nichž každá má vlastní
                    propracovaný příběh a možnost ovlivnit svůj osud.'
                staticImage={
                  <StaticImage
                    src='../assets/pribehy.png'
                    alt='Prožijte si vlastní příběh'
                    className='bg-contain mb-4'
                    placeholder='blurred'
                  />
                }
              />
            </ul>
          </div>

          <Section
            image={
              <StaticImage
                src='../assets/kral.png'
                width={300}
                alt='Zahraj si středověkou deskovku'
                className='bg-contain'
                placeholder='blurred'
              />
            }
            subtitle='Proč si zahrát?'
            text={
              <p>
                Zažijete příběh, který vás vtáhne do středověku, kde intriky
                a&nbsp;odvaha rozhodují o&nbsp;osudech království. K tomu vás
                oblékneme do <strong>dobových kostýmů</strong> v kulisách{' '}
                <strong>Státního hradu Švihov</strong>&nbsp; nebo{' '}
                <strong>fary v&nbsp;Domaslavi</strong> a&nbsp;připravíme pro vás{' '}
                <strong>deskovou hru nevídaných rozměrů</strong>.
              </p>
            }
          />
          <p className='text-center'>
            Budete v tomto diplomatickém larpu, historické simulaci a&nbsp;
            tahové strategii zastávat jednu z&nbsp;klíčových rolí? Budete mít
            odvahu pohnout figurkami na šachovnici dějin? Nebo budete tiše tahat
            za nitky ze stínů? Zvládnete čelit svému osudu jakožto vyslanec
            anglického krále, flanderský obchodník, odvážný korzár, ušlechtilý
            rytíř či&nbsp;nebojácná diplomatka?
          </p>
          <Button
            to='/'
            buttonType={ButtonType.PRIMARY}
            className='h-20 w-80 md:h-40 md:w-96 mx-auto mt-6 mb-4'
          >
            <p className='md:text-3xl pt-10 md:pt-20 font-serifSmall'>
              Přihlásit se
            </p>
          </Button>
        </main>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stoletá válka roku 1337</title>;
