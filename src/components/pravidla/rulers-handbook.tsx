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
      <SmallTextBlockWithTitle
        title='VÁLEČNÉ DANĚ'
        paragraph={
          <p>
            Vládci zemí budou mít možnost v&nbsp;případě konfliktu vyhlásit{' '}
            <strong>mimořádné válečné daně</strong>. Ty budou rovnat cca
            polovině aktuálního příjmu země (bez výdajů). Hlásí se jedno kolo
            dopředu u&nbsp;mapy!
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='PŮJČKY'
        paragraph={
          <p>
            Je možné brát si půjčky od místních obchodníků a&nbsp;duchovenstva.
            Pokud potřebujete půjčku, poptej se u&nbsp;mapy.
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
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='STAVBY'
        paragraph={
          <p>
            Za jedno kolo můžeš postavit v&nbsp;každém městě/hradu jednu lokální
            stavbu (hradby) a&nbsp;v&nbsp;každé provincii jednu provinční
            stavbu. Pokud nemáš celou provincii pod kontrolou (např. jedno
            z&nbsp;měst patří jinému vládci, nebo v&nbsp;provincii řádí rebelie
            a&nbsp;nebo se zde nachází armáda nepřítele), pak není možné
            v&nbsp;této provincii stavět žádné provinční stavby. Můžeš stavět
            lokální stavby ve městech, která nejsou pod útokem.
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
        title='TECHNOLOGIE'
        paragraph={
          <>
            <p>
              Na začátku hry obdržíš první technologii, kterou si vybereš do své{' '}
              <strong>technologické karty</strong>.
            </p>
            <br />
            <p>
              <strong>V kolech 3, 6, 9, a&nbsp;12</strong> získáš možnost
              technologii zvýšit na další stupeň nebo rozvinout novou
              technologii na první stupeň.
            </p>
            <br />
            <p>
              Další způsob, jak technologický pokrok urychlit, je stavba{' '}
              <strong>univerzit</strong>. Při postavení univerzity se náhodně
              určí, ve kterém odvětví tvá země udělala pokrok. Pokud při stavbě
              odevzdáš komoditu <strong>knihy</strong>, získáš místo toho
              technologii, kterou si vybereš.
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
              <ol className='list-[upper-roman]'>
                <li className='pl-4'>Zakázán vojenský akt</li>
                <li className='pl-4'>
                  Zákaz vstupu vojsk na území bez souhlasu
                </li>
              </ol>
            </div>

            <div className='mb-4'>
              <h4 className='text-lg font-bold'>OBRANNÝ PAKT</h4>
              <ol className='list-[upper-roman]'>
                <li className='pl-4'>
                  Pokud je jedna strana napadena agresorem, druhá se zavazuje ji
                  bránit: vyhlásit válku a&nbsp;v&nbsp;rámci možností se jí
                  účastnit (např. finančně)
                </li>
                <li className='pl-4'>
                  Zákaz vstupu vojsk na území bez souhlasu
                </li>
              </ol>
            </div>

            <div className='mb-4'>
              <h4 className='text-lg font-bold'>VOJENSKÁ ALIANCE</h4>
              <ol className='list-[upper-roman]'>
                <li className='pl-4'>
                  Vyhlašování války ostatním probíhá vždy po schválení všech
                  členů aliance
                </li>
                <li className='pl-4'>
                  Volný průchod vojsk přes alianční území
                </li>
                <li className='pl-4'>Jinak jako obranný pakt</li>
              </ol>
            </div>
          </>
        }
      />
    </RulesWrapper>
  );
};

export default RulersHandbook;
