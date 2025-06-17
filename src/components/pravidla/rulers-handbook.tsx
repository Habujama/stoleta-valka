import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';

const RulersHandbook = () => {
  return (
    <RulesWrapper
      title='Příručka vládce'
      subtitle='Jakožto pán/paní nemalého území budeš plnit specifickou roli v chodu země.'
    >
      <SmallTextBlockWithTitle
        title='DANĚ'
        paragraph={
          <p>
            Z území, které ti náleží, budeš pravidelně získávat určitý příjem.
            Ten ti bude předán každé kolo u&nbsp;
            <strong>Stratéga (u mapy)</strong>.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='OBCHOD'
        paragraph={
          <p>
            Ač nemáš nad obchodem na svém území přímou kontrolu, přece jen je to
            pro tebe další zdroj příjmů. Občas projdi kolem stanoviště{' '}
            <strong>Vrchního obchodníka</strong> a&nbsp;podívej se na kartu
            reprezentující tvou zemi. Pokud na ní vidíš nějaké mince, jsou to
            daně z&nbsp;obchodu, které ti právem náleží. Představ se Vrchnímu
            obchodníkovi a&nbsp;ten ti tvé peníze předá. Pokud je tvá legitimita
            jako vládce ohrožena (dva lidé se prohlašují legitimními vládci
            daného území a&nbsp;oba na něj mají vliv), Vrchní obchodník peníze
            z&nbsp;daní z&nbsp;obchodu odevzdá, až se tento konflikt vyřeší.
            Pokud budeš mít pocit, že obchod opravdu vynáší, zapřemýšlej nad
            stavbou <strong>„Těžba“</strong>.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='STAVBY'
        paragraph={
          <p>
            Domlouváš je u&nbsp;<strong>Vrchního obchodníka</strong>. Za jedno
            kolo můžeš postavit v&nbsp;každém městě/hradu jednu místní a v každé
            provincii jednu provinční stavbu. Pokud nemáš celou provincii pod
            kontrolou (např. jedno z&nbsp;měst patří jinému vládci, v provincii
            řádí rebelie nebo se zde nachází armáda nepřítele), pak není možné
            v&nbsp;této provincii stavět <strong>žádné</strong> stavby.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='MOR'
        paragraph={
          <p>
            Provincie s&nbsp;morem <strong>neposkytuje daně</strong>. Mor se
            mezi provinciemi šíří primárně obchodem.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='VLIV'
        paragraph={
          <p>
            Může se stát, že se jím nebudeš muset celou hru zabývat. Jindy ale
            může vliv plnit ve tvé hře důležitou roli. Představ si situaci, kdy
            se objeví tvůj bratr s&nbsp;tím, že to on by měl vládnout tvému
            území. Dokonce se začne ohánět podporou jiných šlechticů
            a&nbsp;penězi, které má. Pokud je tvůj vliv v&nbsp;zemi nízký, může
            se stát, že se obyvatelé / nižší šlechta vzbouří.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='TECHNOLOGIE'
        paragraph={
          <>
            <p>
              Mezi dokumenty, které jsi obdržel/a, je{' '}
              <strong>tabulka technologií</strong>. Na začátku hry obdržíš první
              stupeň technologie, který si vybereš.
            </p>
            <br />
            <p>
              <strong>V kolech 3, 6, 9, a 12</strong> získáš možnost technologii
              zvýšit na další stupeň nebo rozvinout novou technologii na první
              stupeň.
            </p>
            <br />
            <p>
              Další způsob, jak technologický pokrok urychlit, je stavba
              <strong>univerzit</strong>. Při postavení univerzity se náhodně
              určí, ve kterém odvětví tvá země udělala pokrok. Poté získáš novou
              technologii na prvním stupni / získáš další stupeň v technologii,
              kterou již vlastníš.
            </p>
            <br />
            <p>
              (Technologie se řeší u&nbsp;<strong>Vrchního obchodníka</strong>,
              který ti tvůj výběr tech- nologie zaznačí do tabulky a také
              vyhodnotí efekt.)
            </p>
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='DOHODY'
        paragraph={
          <>
            <p>
              <strong>
                Dohody jsou důležité dokumenty, kterými můžete potvrzovat
                diplomatické styky s&nbsp;jinou zemí. Pokud je tento dokument
                veřejně vyhlášen a&nbsp;následně jej jedna strana poruší, může
                to mít vážné následky.
              </strong>
            </p>
            <br />
            <div className='mb-4'>
              <h4 className='text-lg font-bold'>DOHODA O NEÚTOČENÍ</h4>
              <ol className='list-none'>
                <li>1) Zakázán vojenský akt</li>
                <li>2) Zákaz vstupu vojsk na území bez souhlasu</li>
              </ol>
            </div>

            <div className='mb-4'>
              <h4 className='text-lg font-bold'>OBRANNÝ PAKT</h4>
              <ol className='list-none'>
                <li>
                  1) Pokud je jedna strana napadena agresorem, druhá se zavazuje
                  ji bránit: vyhlásit válku a v rámci možností se jí účastnit
                  (např. finančně)
                </li>
                <li>2) Zákaz vstupu vojsk na území bez souhlasu</li>
              </ol>
            </div>

            <div className='mb-4'>
              <h4 className='text-lg font-bold'>VOJENSKÁ ALIANCE</h4>
              <ol className='list-none'>
                <li>
                  1) Vyhlašování války ostatním probíhá vždy po schválení všech
                  členů aliance
                </li>
                <li>2) Volný průchod vojsk přes alianční území</li>
                <li>3) Jinak jako obranný pakt</li>
              </ol>
            </div>
          </>
        }
      />
    </RulesWrapper>
  );
};

export default RulersHandbook;
