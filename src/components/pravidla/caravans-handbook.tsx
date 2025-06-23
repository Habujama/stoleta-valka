import { StaticImage } from 'gatsby-plugin-image';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';
import RulesWrapper from '../shared/rules-wrapper';

const CaravansHandbook = () => {
  return (
    <RulesWrapper
      title='Příručka karavany'
      subtitle='Cílem členů karavany je získat co největší vliv. Ten, který bude mít
          na konci hry největší vliv, získá kontrolu nad pokladnicí a&nbsp;může
          s&nbsp;ní naložit dle své libosti.'
    >
      <SmallTextBlockWithTitle
        title='KARTA KARAVANY'
        paragraph={
          <p>
            Na své kartě karavany vidíš svůj aktuální vliv, svou roli postavy a
            jsou na ní znázorněna města/hrady, které chce tvá postava navštívit.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='VLIV'
        paragraph={
          <>
            Za každé město/hrad ze své karty, které navštívíš, získáš 1&nbsp;bod
            vlivu a&nbsp;4&nbsp;stříbrné (poznačí a&nbsp;předá{' '}
            <strong>Správce karavany - toto bude CP</strong>). Všechny postavy
            hráčů mají u&nbsp;karavany určenou svou specifickou roli (vypsáno na
            kartě). Pokud svoji roli každé kolo splní, získávají vliv. Pokud se
            jim to nedaří, vliv ztrácejí.
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='PODKOPÁVÁNÍ VLIVU'
        paragraph={
          <>Skrze agenty je možné podkopávat vliv ostatních členů karavany.</>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='VŮDCE KARAVANY'
        paragraph={
          <>
            Jeho slovo má větší váhu při rozhodování, kam karavana vyrazí.
            <strong>Na začátku hry je vůdcem karavany Dion.</strong>
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='HLASOVÁNÍ O VŮDCI KARAVANY'
        paragraph={
          <>
            Při jednání se Správcem karavany může kterýkoliv člen karavany
            vyvolat tajné hlasování o novém vůdci karavany. Každá hráčská
            postava v&nbsp;karavaně má jeden hlas. V&nbsp;případě plichty
            zůstává současný vůdce.
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='POHYB KARAVANY'
        paragraph={
          <>
            Všechny členy karavany v&nbsp;každém kole navštíví Správce karavany.
            Ten porovná vliv hráčů hlasující pro různá města a&nbsp;vyhlásí
            následující cestovní cíl karavany.
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='POVINNOSTI'
        paragraph={
          <>
            Pokud nějaká postava opustí karavanu předčasně, ostatní se musí
            starat o&nbsp;povinnosti, které měla daná postava na starosti. Pokud
            nejsou splněny, karavana se dané kolo nepohybuje.
          </>
        }
      />
      <hr className='border-yellow-800' />
      <Title level={TitleLevel.H5}>BOHATNUTÍ A RŮST KARAVANY</Title>
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='POKLADNICE'
        paragraph={
          <>
            Veškeré mince, které karavana během hry získává, se ukládají do
            pokladnice. S&nbsp;obsahem pokladnice se během hry nemanipuluje.
          </>
        }
      />
      <StaticImage
        src='../../assets/karavana.png'
        alt='Jak karavana získává peníze'
        sizes='medium'
      />
    </RulesWrapper>
  );
};

export default CaravansHandbook;
