import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';

const PlayersHandbook = () => {
  return (
    <div className='md:ml-4 md:mr-12 sm:w-11/12'>
      <div className='flex flex-col px-4 space-y-12'>
        <Title level={TitleLevel.H1} className='text-center'>
          Příručka hráče
        </Title>
        <div className='flex flex-col space-y-5'>
          <hr className='border-yellow-800' />
          <Title level={TitleLevel.H5}>Strategická mapa</Title>
          <hr className='border-yellow-800' />
          <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-8'>
            <SmallTextBlockWithTitle
              title='Armáda'
              paragraph={
                <>
                  <ol className='list-none'>
                    <li>★&nbsp;až 3 oddíly v armádě</li>
                    <li>★&nbsp;★&nbsp;až 5 oddílů v armádě</li>
                    <li>★&nbsp;★&nbsp;★&nbsp;až 7 oddílů v armádě</li>
                  </ol>
                  <p className='mt-2 font-thin'>
                    Armáda se pohybuje podle nejpomalejší jednotky. Nejrychlejší
                    je jízda, pomalejší jsou střelci, pak pěchota
                    a&nbsp;nejpomalejší jsou obléhací stroje.
                  </p>
                </>
              }
            />
            <SmallTextBlockWithTitle
              title='Flotila'
              paragraph={
                <>
                  Může být použita pro převoz pěší armády. Při napadení nebo
                  podpoře města se sama o&nbsp;sobě počítá jako prapor
                  odpovídající síly. Rychlost po vodě je oproti souši zhruba
                  dvojnásobná.
                </>
              }
            />
          </div>
        </div>

        <div className='flex flex-col space-y-5'>
          <hr className='border-yellow-800' />
          <Title level={TitleLevel.H5}>Co umí agenti</Title>
          <hr className='border-yellow-800' />
          <p className='font-thin text-lg'>
            Úspěchy agentů závisí na jejich úrovni (a vaší peněžní podpoře). Čím
            dál je pošlete, tím později se vrátí.
          </p>
          <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-8'>
            <SmallTextBlockWithTitle
              title='Velvyslanec'
              paragraph={
                <>
                  Může zlepšovat vztahy či zažehnávat konflikty. Také může
                  vyvolat rozbroje, povstání, pokoušet se o&nbsp;konverzi nebo
                  přesvědčit k&nbsp;přeběhnutí.
                </>
              }
            />
            <SmallTextBlockWithTitle
              title='Špeh'
              paragraph={
                <>
                  Může špehovat a manipulovat s informacemi, roznášet pomluvy či
                  krást. Úspěch závisí na úrovni.
                </>
              }
            />
            <SmallTextBlockWithTitle
              title='Obchodník'
              paragraph={<>Může být vyslán za účelem získání surovin.</>}
            />
          </div>
        </div>

        <div className='flex flex-col space-y-5'>
          <hr className='border-yellow-800' />
          <Title level={TitleLevel.H5}>Ekonomika</Title>
          <hr className='border-yellow-800' />
          <SmallTextBlockWithTitle
            title='Příjmy'
            paragraph={
              <>
                Příjmy plynou z&nbsp;provincií jen tam, kde nejsou v&nbsp;okolí
                žádné války, povstání apod. Další příjmy plynou z&nbsp;obchodu,
                od ostatních národů (např. výpalné, úplatky) a&nbsp;rabování
                (měst i&nbsp;provincií).
              </>
            }
          />
        </div>

        <div className='flex flex-col space-y-5'>
          <hr className='border-yellow-800' />
          <Title level={TitleLevel.H5}>Dohody mezi národy</Title>
          <hr className='border-yellow-800' />
          <p className='font-thin text-lg'>
            Uznávané dohody (potřeba vložit do BOXU NA SMOUVY):
          </p>
          <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-8'>
            <SmallTextBlockWithTitle
              title='Dohoda o neútočení'
              paragraph={
                <>
                  <ol className='list-disc'>
                    <li>Zakázán vojenský akt</li>
                    <li>Zákaz vstupu vojsk na území bez souhlasu</li>
                  </ol>
                </>
              }
            />
            <SmallTextBlockWithTitle
              title='Obranný pakt'
              paragraph={
                <>
                  <ol className='list-disc'>
                    <li>
                      Pokud je jedna strana napa- dena agresorem, druhá se
                      zavazuje ji bránit: vyhlásit válku a v rámci možností se
                      jí účastnit (např. i finančně)
                    </li>
                    <li>Zákaz vstupu vojsk na území bez souhlasu</li>
                  </ol>
                </>
              }
            />
            <SmallTextBlockWithTitle
              title='Vojenská aliance'
              paragraph={
                <ol className='list-disc'>
                  <li>
                    Vyhlašování války ostatním probíhá vždy po schválení všech
                    členů aliance
                  </li>
                  <li>Volný průchod vojsk po aliančním území</li>
                </ol>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersHandbook;
