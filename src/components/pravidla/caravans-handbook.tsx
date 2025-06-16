import { StaticImage } from 'gatsby-plugin-image';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';

const CaravansHandbook = () => {
  return (
    <div className='md:ml-4 md:mr-12 sm:w-11/12'>
      <div className='flex flex-col px-4'>
        <Title level={TitleLevel.H1} className='text-center'>
          Příručka karavany
        </Title>
        <p className='text-center text-lg xl:text-xl my-3'>
          Cílem členů karavany je získat co největší vliv. Ten, který bude mít
          na konci hry největší vliv, získá kontrolu nad pokladnicí a&nbsp;může
          s&nbsp;ní naložit dle své libosti.
        </p>

        <div className='flex flex-col px-4 space-y-4'>
          <SmallTextBlockWithTitle
            title='Karta karavany'
            paragraph={
              <p>
                Na své kartě karavany vidíš svůj aktuální vliv, svou roli
                postavy a jsou na ní znázorněna města/hrady, které chce tvá
                postava navštívit.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Vliv'
            paragraph={
              <>
                Za každé město/hrad ze své karty, které navštívíš, získáš
                1&nbsp;bod vlivu a&nbsp;4&nbsp;stříbrné (poznačí a&nbsp;předá{' '}
                <strong>Správce karavany - toto bude CP</strong>). Všechny
                postavy hráčů mají u&nbsp;karavany určenou svou specifickou roli
                (vypsáno na kartě). Pokud svoji roli každé kolo splní, získávají
                vliv. Pokud se jim to nedaří, vliv ztrácejí.
              </>
            }
          />
          <SmallTextBlockWithTitle
            title='Podkopávání vlivu'
            paragraph={
              <>
                Skrze agenty je možné podkopávat vliv ostatních členů karavany.
              </>
            }
          />
          <SmallTextBlockWithTitle
            title='Vůdce karavany'
            paragraph={
              <>
                Jeho slovo má větší váhu při rozhodování, kam karavana vyrazí.
                <strong>Na začátku hry je vůdcem karavany Dion.</strong>
              </>
            }
          />
          <SmallTextBlockWithTitle
            title='Hlasování o vůdci karavany'
            paragraph={
              <>
                Při jednání se Správcem karavany může kterýkoliv člen karavany
                vyvolat tajné hlasování o novém vůdci karavany. Každá hráčská
                postava v&nbsp;karavaně má jeden hlas. V&nbsp;případě plichty
                zůstává současný vůdce.
              </>
            }
          />
          <SmallTextBlockWithTitle
            title='Pohyb karavany'
            paragraph={
              <>
                Všechny členy karavany v&nbsp;každém kole navštíví Správce
                karavany. Ten porovná vliv hráčů hlasující pro různá města
                a&nbsp;vyhlásí následující cestovní cíl karavany.
              </>
            }
          />
          <SmallTextBlockWithTitle
            title='Povinnosti'
            paragraph={
              <>
                Pokud nějaká postava opustí karavanu předčasně, ostatní se musí
                starat o&nbsp;povinnosti, které měla daná postava na starosti.
                Pokud nejsou splněny, karavana se dané kolo nepohybuje.
              </>
            }
          />
          <hr className='border-yellow-800' />
          <Title level={TitleLevel.H5}>BOHATNUTÍ A RŮST KARAVANY</Title>
          <hr className='border-yellow-800' />
          <SmallTextBlockWithTitle
            title='Pokladnice'
            paragraph={
              <>
                Veškeré mince, které karavana během hry získává, se ukládají do
                pokladnice. S&nbsp;obsahem pokladnice se během hry nemanipuluje.
              </>
            }
          />
          <div className=''>
            <StaticImage
              src='../../assets/karavana.png'
              alt='Jak karavana získává peníze'
              sizes='medium'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaravansHandbook;
