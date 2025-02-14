import { StaticImage } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import Title, { TitleLevel } from './shared/title';

const { screens } = theme;

const Hero = () => {
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div>
      {isMobile ? (
        <div className='flex flex-col items-center sm:gap-x-11 px-8'>
          <StaticImage
            src='../assets/kostra.png'
            alt='Staň se chrabrým rytířem'
            width={150}
            placeholder='blurred'
            className='mt-6 mx-4'
          />
          <div className='pb-8 pl-4 text-center'>
            <Title level={TitleLevel.H2} className='mb-4'>
              Ty, kdož právě čteš tyto řádky, pojď s&nbsp;námi objevit
              a&nbsp;prožít události, které vedly ke vzniku stoleté války.
            </Title>
            <p>
              Přenesme se do roku 1337. V té době měli angličtí králové na
              francouzském území mnoho držav a byli tak leníky, mocnějšími, než
              byl samotný král.Napětí vrcholí ve sporu o&nbsp;obchod
              s&nbsp;anglickou vlnou ve Flandrech. Jaké budou další kroky? Kdo
              získá moc a&nbsp;kdo ji ztratí?
            </p>
          </div>
        </div>
      ) : (
        <div className='flex justify-between xl:items-center max-w-8xl mx-auto'>
          <StaticImage
            src='../assets/kostra.png'
            alt='Zahraj si středověkou deskovku'
            width={600}
            placeholder='blurred'
          />
          <div className='pb-20 pl-4 -mr-40 max-w-2xl text-center'>
            <Title level={TitleLevel.H2} className='mb-4'>
              Ty, kdož právě čteš tyto řádky, pojď s&nbsp;námi objevit
              a&nbsp;prožít události, které vedly ke vzniku stoleté války.
            </Title>
            <p>
              Přenesme se do roku 1337. V té době měli angličtí králové na
              francouzském území mnoho držav a byli tak leníky, mocnějšími, než
              byl samotný král.Napětí vrcholí ve sporu o&nbsp;obchod
              s&nbsp;anglickou vlnou ve Flandrech. Jaké budou další kroky? Kdo
              získá moc a&nbsp;kdo ji ztratí?
            </p>
          </div>
          <StaticImage
            src='../assets/husy.png'
            alt='Veď svoje vojsko k vítězství'
            width={900}
            placeholder='blurred'
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
