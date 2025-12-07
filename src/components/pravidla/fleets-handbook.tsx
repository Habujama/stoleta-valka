import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';
import StyledTable from '../shared/styled-table';

const FleetsHandbook = () => (
  <RulesWrapper title='Příručka flotily'>
    <SmallTextBlockWithTitle
      title='FLOTILA'
      paragraph={
        <>
          <ol className='list-disc'>
            <li>
              Flotila je na mapě znázorněna figurkou lodě s&nbsp;praporem země.
              Každý prapor má své označení číslem.
            </li>
            <li>
              Podle úrovně, kterou má hráč ve své kartě armády
              (&nbsp;★/★★/★★★&nbsp;), může mít jeho flotila 3/5/7 lodí.
            </li>
            <li>
              V provincii, kde se daná flotila nachází, lze v&nbsp;jednom kole
              verbovat tolik jednotek, kolik se v&nbsp;ní nachází přístavních
              měst.
            </li>
          </ol>
        </>
      }
    />
    <SmallTextBlockWithTitle
      title='ZAJIŠTĚNÍ FLOTILY'
      paragraph={
        <>
          <ol className='list-disc'>
            <li>
              Námořníky je třeba <strong>živit a&nbsp;platit</strong> - je
              potřeba za každou svou figurku flotil zaplatit{' '}
              <strong>každé sudé kolo jednu kartu komodity jídla</strong>{' '}
              (ovoce, obilí, skot, olivy, víno, pivo). Je potřeba na to myslet!
            </li>
            <li>
              Zároveň stojí každá figurka na mapě{' '}
              <strong>každé kolo 1 stříbrný</strong>, který se strhává vládci
              z&nbsp;příjmu země. Pokud v&nbsp;kole, kdy se má krmit, zakotví
              flotila ve spřátelém městě, nemusí řešit krmení. Místo placení
              jídla je možné také nechat flotilu plundrovat pobřeží nebo
              zaplatit 4&nbsp;stříbrné za každou chybějící kartu jídla.
            </li>
          </ol>
        </>
      }
    />
    <hr className='border-yellow-800' />
    <div className='flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 gap-8 mt-2'>
      <SmallTextBlockWithTitle
        title='AKCE FLOTIL'
        paragraph={
          <>
            <p>Každá figurka má 2 AKCE.</p>
            <ol>
              <li>
                <strong>1. akce: pohyb</strong>
              </li>
              <li>
                <strong>2. akce</strong>: vverbování / plenění / útok / zahájení
                obléhání / rozpuštění flotily / přesun praporů mezi kartami
              </li>
            </ol>
          </>
        }
      />
      <div className='flex flex-col gap-2'>
        <SmallTextBlockWithTitle
          title='Pohyb flotily'
          paragraph={
            <p>
              Jednotlivé vzdálenosti jsou dopředu určené a&nbsp;budou
              představeny před hrou. Rychlost pohybu flotil je dvojnásobná vůči
              rychlosti armád.
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Verbování'
          paragraph={
            <div className='flex flex-col gap-2'>
              <p>
                V&nbsp;provincii, kde daná flotila kotví, lze v&nbsp;jednom kole
                verbovat tolik jednotek, kolik se v&nbsp;ní nachází přístavních
                měst.
              </p>
              <StyledTable
                tableHead={['Námořní jednotky', 'Síla', 'Podmínka', 'CENA']}
                tableBodyRow={[
                  ['válečná koga', '2', 'loděnice', '5'],
                  [
                    'střelecká koga',
                    '4',
                    'loděnice a kasárna',
                    'dřevo a látky',
                  ],
                  ['obléhací loď', '1/5', 'loděnice a kovář', '6'],
                ]}
              />
            </div>
          }
        />
        <SmallTextBlockWithTitle
          title='Útok'
          paragraph={
            <div>
              <p>
                Když figurka flotily zakončí svůj pohyb kontaktem s jinou
                figurkou flotily, může jí napadnout. Napadený, pokud hraje po
                útočníkovi, nemá možnost s figurkou utéct. Mezi koly se
                vyhodnotí vítěz střetnutí. Při útoku na město je potřeba
                figurkou doplout k městu. Pokud má město základní hradby o
                velikosti 4 a méně, proběhne na konci kola boj o město.
              </p>
              <p className='mt-1'>
                Flotily mohou útočit pouze na <strong>pobřežní</strong> města a
                hrady (ikonka kotvy).
              </p>
            </div>
          }
        />
        <SmallTextBlockWithTitle
          title='Obrana přístavu'
          paragraph={
            <p>
              Pokud se flotila schová do města, na které je následně podniknut
              útok: v&nbsp;případě, že útočník vyhraje, dojde ke kompletnímu
              zničení flotily (nemá se kam stáhnout).
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Námořní blokády'
          paragraph={
            <p>
              Některé země mají příjem navázaný také na obchod mezi určitými
              oblastmi. To bude na mapě znázorněno. Pokud se v&nbsp;oblasti této
              obchodní trasy zastaví nepřátelská flotila, dojde k&nbsp;blokádě
              a&nbsp;příjem je po dobu přítomnosti nepřítele negován.
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Rozpuštění flotily'
          paragraph={
            <p>
              Flotilu je možné rozpustit, ať už z&nbsp;důvodu úspor nebo
              restrukturalizace, a&nbsp;figurku tak odebrat z&nbsp;herní mapy.
              Daná karta flotily se dá další kolo opět použít k&nbsp;vytvoření
              flotily kdekoli u&nbsp;pobřeží své země tím, že se do ní
              naverbuje.
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Přesuny jednotek mezi kartami'
          paragraph={
            <p>
              Flotily musí stát vedle sebe. Obě flotily, které se přesunu
              účastní, se po přesunu již nepohnou.
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Obléhání'
          paragraph={
            <p>
              Pokud má město/hrad, na které se útočí, základní sílu hradeb&nbsp;
              <strong>5 a&nbsp;více</strong>, je potřeba mít u&nbsp;flotily{' '}
              <strong>Obléhací loď</strong> nebo <strong>Vlajkovou loď</strong>.{' '}
              <strong>Jedno kolo</strong> musí u&nbsp;města/hradu{' '}
              <strong>stát a&nbsp;obléhat</strong>. Další kolo proběhne boj.
            </p>
          }
        />
        <SmallTextBlockWithTitle
          title='Plenění'
          paragraph={
            <>
              <p>
                Flotila, která plení, získá <strong>1&nbsp;stříbrný</strong>{' '}
                a&nbsp;zároveň toto plenění slouží i&nbsp;jako krmení flotily.
                Nesnižuje příjem provincie.
              </p>
              <p>
                <strong>Vyplenění konkrétního města/hradu</strong>: dle
                velikosti města/hradu flotila získá{' '}
                <strong>4/8/12 stříbrných</strong>.
              </p>
            </>
          }
        />
      </div>
    </div>
    <hr className='border-yellow-800' />
    <div className='flex flex-col space-y-4'>
      <SmallTextBlockWithTitle
        title='HRADY'
        paragraph={
          <>
            Střeží provincie a&nbsp;bývá složité je dobýt. Hrady mají své
            vojenské posádky a&nbsp;poskytují zázemí městům v&nbsp;okolí. Jejich
            dobytí vám dává výhodu na dobývání měst v&nbsp;okolí. Hrady
            poskytují obrannou sílu městům v&nbsp;provincii, v&nbsp;níž stojí,
            a&nbsp;to silou&nbsp;+1. Pokud někdo dobude hrad v&nbsp;cizí
            provincii, získá tím naopak sílu&nbsp;+1 na dobývání měst
            v&nbsp;dané provincii. Hrady nepodporují hrady.
          </>
        }
      />
    </div>
  </RulesWrapper>
);
export default FleetsHandbook;
