import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';
import RulesWrapper from '../shared/rules-wrapper';
import StyledTable from '../shared/styled-table';

const PlayersHandbook = () => (
  <RulesWrapper title='Příručka hráče'>
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
                Armáda se pohybuje podle nejpomalejší jednotky. Nejrychlejší je
                jízda, pomalejší jsou střelci, pak pěchota a&nbsp;nejpomalejší
                jsou obléhací stroje.
              </p>
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Flotila'
          paragraph={
            <>
              Může být použita pro převoz pěší armády. Při napadení nebo podpoře
              města se sama o&nbsp;sobě počítá jako prapor odpovídající síly.
              Rychlost po vodě je oproti souši zhruba dvojnásobná.
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
        Úspěchy agentů závisí na jejich úrovni (a vaší peněžní podpoře). Čím dál
        je pošlete, tím později se vrátí.
      </p>
      <div className='grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-8'>
        <SmallTextBlockWithTitle
          title='Velvyslanec'
          paragraph={
            <>
              Může zlepšovat vztahy či zažehnávat konflikty. Také může vyvolat
              rozbroje, povstání, pokoušet se o&nbsp;konverzi nebo přesvědčit
              k&nbsp;přeběhnutí.
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
            žádné války, povstání apod. Další příjmy plynou z&nbsp;obchodu, od
            ostatních národů (např. výpalné, úplatky) a&nbsp;rabování (měst
            i&nbsp;provincií).
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
                  Pokud je jedna strana napa- dena agresorem, druhá se zavazuje
                  ji bránit: vyhlásit válku a v rámci možností se jí účastnit
                  (např. i finančně)
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
                Vyhlašování války ostatním probíhá vždy po schválení všech členů
                aliance
              </li>
              <li>Volný průchod vojsk po aliančním území</li>
            </ol>
          }
        />
      </div>

      <div className='flex flex-col space-y-4 pt-8'>
        <hr className='border-yellow-800' />
        <Title level={TitleLevel.H5}>Ceník staveb</Title>
        <hr className='border-yellow-800' />
        <StyledTable
          tableHead={[
            'Stavby místní',
            'Stavby, které se staví v konkrétním městě/hradu.',
            'CENA',
          ]}
          tableBodyRow={[
            [
              'Opevnění',
              'Zvýší obranu mësta/hradu o 3 do maxima 10. Stavbu je možné opakovat.',
              '4',
            ],
            [
              'Divy',
              'Jsou zmíněny u většiny postav přímo v popisu postavy',
              'speciální',
            ],
          ]}
        />
        <StyledTable
          tableHead={[
            'Stavby provinční',
            'Stavby, které se staví na celou provincii',
            'CENA',
          ]}
          tableBodyRow={[
            ['Cech zlodějů', 'Chrání proti agentům o síle +2 až +3.', '5'],
            [
              'Cvičiště jízdy',
              'V kombinaci s kasárnou umožňuje verbovat jízdu.',
              '5',
            ],
            [
              'Kanalizace',
              'Odolnost proti moru (pokud je stavěna v době moru, získá imunitu až v příštím tahu).',
              '3',
            ],
            [
              'Kasárna',
              'Umožňuje verbovat střelce, v kombinaci s loděnicí střelecké lodě.',
              '4',
            ],
            [
              'Kovář',
              'V kombinaci s kasárnou lze vytvářet obléhací zbraně, v kombinaci s loděnicí obléhací lodě.',
              '4',
            ],
            ['Loděnice', 'Umožňuje stavbu lodí.', '3'],
            [
              'Přístav',
              'Při postavení získáš surovinu ryby, umožňuje rychleji nalodit vojsko.',
              '3',
            ],
            ['Správní středisko', 'Zvyšuje příjem provincie z daní o 1.', '5'],
            [
              'Sýpky',
              'Prodloužení dobývání měst a hradů o 1 kolo (1 půlrok).',
              '4',
            ],
            [
              'Univerzita',
              'Odemkne jednu dosud nevyzkoumanou náhodnou technologii.',
              '10',
            ],
            [
              'Cesty',
              'Procházející jednotky nemají postih za přesun přes nehostinný terén (řeka, kopce, lesy)',
              '4',
            ],
            [
              'Zahrady',
              'Zvelebují dané město, zvyšují prestiž a vliv vládce.',
              '3',
            ],
            [
              'Zavlažování',
              'Při postavení získáš kartu suroviny (obilí, ovoce, olivy).',
              '3',
            ],
          ]}
        />

        <StyledTable
          tableHead={[
            'Stavby zemské',
            'Stavby, které se staví za celou zemi.',
            'CENA',
          ]}
          tableBodyRow={[
            [
              'Těžba',
              'Získáš typickou surovinu dané země + obnovuje suroviny na obchodnické mapě.',
              '10',
            ],
          ]}
        />
      </div>
      <div className='flex flex-col space-y-4 pt-8'>
        <hr className='border-yellow-800' />
        <Title level={TitleLevel.H5}>Ceník jednotek</Title>
        <hr className='border-yellow-800' />
        <StyledTable
          tableHead={['Pozemní jednotky', 'Cena', 'Síla', 'Podmínka']}
          tableBodyRow={[
            ['pěchota', '2', '1', '-'],
            ['střelci', '4', '2', 'kasárna'],
            ['Pěší rytíři', 'železo', '3', 'kasárna a kovárna'],
            ['Jízda', 'železo', '4', 'kasárna a cvičiště jízdy'],
            ['Obléhací zbraně', '4', '0/4', 'kasárna a kovárna'],
          ]}
        />
        <StyledTable
          tableHead={['Námořní jednotky', 'Cena', 'Síla', 'Podmínka']}
          tableBodyRow={[
            ['Válečná koga', '5', '2', 'loděnice'],
            ['Střelecká koga', 'železo a dřevo', '4', 'loděnice a kasárna'],
            ['Obléhací loď', '8', '1/5', 'loděnice a kovárna'],
          ]}
        />
      </div>
    </div>
  </RulesWrapper>
);

export default PlayersHandbook;
