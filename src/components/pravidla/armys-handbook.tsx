import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';
import StyledTable from '../shared/styled-table';
import Title, { TitleLevel } from '../shared/title';

const ArmysHandbook = () => {
  return (
    <RulesWrapper title='Příručka armády'>
      <div className='flex flex-col space-y-5'>
        <SmallTextBlockWithTitle
          title='ARMÁDA'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  Armáda je na mapě znázorněna figurkou vojáka
                  s&nbsp;praporem&nbsp;a všechny potřebné informace o ní má hráč
                  v&nbsp;kartě armády.
                </li>
              </ol>
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='ZAJIŠTĚNÍ VOJSKA'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  Vojáky je třeba <strong>živit a&nbsp;platit</strong>. Za
                  každou svoji figurku armády je třeba zaplatit{' '}
                  <strong>každé sudé kolo jednu kartu jídla</strong>
                  (ovoce, obilí, skot, olivy, víno, pivo). Je potřeba na to
                  myslet! Zároveň stojí každá figurka na mapě{' '}
                  <strong>každé kolo 1&nbsp;stříbrný</strong>, který se strhává
                  vládci z&nbsp;příjmu země.
                </li>
                <li>
                  Místo placení jídla je možné nechat armádu plundrovat danou
                  provincii nebo zaplatit 4&nbsp;stříbrné za každou chybějící
                  kartu jídla.
                </li>
              </ol>
            </>
          }
        />
      </div>
      <div className='justify-items-center my-4'>
        <StyledTable
          tableHead={['Jednotky pozemní', 'Síla', 'Podmínka', 'CENA']}
          tableBodyRow={[
            ['pěchota', '1', '-', '2'],
            ['střelci', '2', 'kasárna', '4'],
            ['pěší rytíři', '3', 'kasárna a kovárna', 'železo'],
            ['jízda', '4', 'kasárna a cvičiště jízdy', 'železo + koně'],
            ['obléhací zbraně', '0/4', 'kasárna a kovárna', '4'],
          ]}
        />
      </div>
      <hr className='border-yellow-800' />
      <div className='flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-1 gap-8 mt-2'>
        <SmallTextBlockWithTitle
          title='AKCE ARMÁD'
          paragraph={
            <>
              <p>Každá figurka má 2 AKCE.</p>
              <ol>
                <li>
                  <strong>1. akce: pohyb</strong>
                </li>
                <li>
                  <strong>2. akce</strong>: verbování / nalodění / vylodění /
                  plenění / útok / zahájení obléhání / rozpuštění armády /
                  přesun praporů mezi kartami
                </li>
              </ol>
            </>
          }
        />
        <div className='flex flex-col gap-2'>
          <SmallTextBlockWithTitle
            title='Pohyb armády'
            paragraph={
              <p>
                Každá jednotka ujde po mapě určitou vzdálenost v&nbsp;závislosti
                na složení vojska. Jsou zde faktory, které mohou pohyb zkrátit
                (terén, počasí, sabotáž) - to bude mapařem sděleno. Armáda se
                pohybuje <strong>podle rychlosti nejpomalejší jednotky</strong>{' '}
                ve vojsku. Lodě obecně ujedou mnohem větší vzdálenost, než
                pozemní vojsko. Jednotlivé vzdálenosti jsou dopředu určené
                a&nbsp;budou představeny před hrou.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Verbování'
            paragraph={
              <p>
                V&nbsp;provincii, kde se daná armáda po ukončení pohybu nachází,
                lze naverbovat v&nbsp;jednom kole do armády tolik jednotek,
                kolik se v&nbsp;provincii nachází měst. Podmínka: potřeba mít
                v&nbsp;provincii postavené potřebné stavby +&nbsp;zaplatit cenu
                jednotky. Pokud je v&nbsp;provincii nepřátelská
                armáda&nbsp;/&nbsp;rebelové, pak verbovat nelze.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Nalodění / Vylodění'
            paragraph={
              <p>
                V provincii s&nbsp;přístavem probíhá nalodění během jednoho
                kola. Armáda tedy například dojde do Londýna a&nbsp;nalodí se na
                připravenou loď. Příští kolo může flotila s&nbsp;armádou plout
                a&nbsp;vylodit se a&nbsp;nebo dokonce přímo z&nbsp;lodí
                zaútočit.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Útok'
            paragraph={
              <p>
                Když figurka armády zakončí svůj pohyb kontaktem s&nbsp;jinou
                figurkou, může ji napadnout. Napadený, pokud hraje po
                útočníkovi, nemá možnost s&nbsp;figurkou utéct. Mezi koly se
                vyhodnotí vítěz střetnutí. Při útoku na město je potřeba
                figurkou dojít k&nbsp;městu. Pokud má město základní hradby
                o&nbsp;velikosti 4&nbsp;a&nbsp;méně, proběhne na konci kola boj
                o&nbsp;město.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Obléhání'
            paragraph={
              <p>
                Pokud má město/hrad, na které se útočí, základní sílu hradeb{' '}
                <strong>5&nbsp;a&nbsp;více</strong>, je potřeba mít
                u&nbsp;armády <strong>Obléhací zbraně</strong> a&nbsp;
                <strong>jedno kolo</strong> u města/hradu
                <strong>stát a&nbsp;obléhat</strong>. Další kolo proběhne boj.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Rozpuštění armády'
            paragraph={
              <p>
                Armádu je možné rozpustit, ať už z&nbsp;důvodu úspor nebo
                restrukturalizace. A&nbsp;figurku tak sundat z&nbsp;herní mapy.
                Daná karta armády se dá další kolo opět použít k&nbsp;vytvoření
                armády kdekoliv v&nbsp;provincii hráče tím, že se do ní
                naverbuje.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Přesuny jednotek mezi kartami'
            paragraph={
              <p>
                Armády musí stát vedle sebe. Obě armády, které se přesunu
                účastní, se po přesunu již nepohnou.
              </p>
            }
          />
          <SmallTextBlockWithTitle
            title='Plenění'
            paragraph={
              <p>
                Armáda, která plení, získá{' '}
                <strong>dvojnásobek příjmu pleněné provincie</strong>. Tato
                provincie 2 kola pak příjem negeneruje. Plenění je považováno
                také jako krmení armády. Plení-li konkrétní{' '}
                <strong>město/hrad</strong>: dle velikosti města/hradu armáda
                získá <strong>4/8/12 stříbrných</strong>.
              </p>
            }
          />
        </div>
      </div>
      <div className='flex flex-col space-y-4'>
        <hr className='border-yellow-800' />
        <SmallTextBlockWithTitle
          title='HRADY'
          paragraph={
            <p>
              Střeží provincie a&nbsp;bývá složité je dobýt. Hrady mají své
              vojenské posádky a&nbsp;poskytují zázemí městům v&nbsp;okolí.
              Jejich dobytí vám dává výhodu na dobývání měst v&nbsp;okolí. Hrady
              poskytují obrannou sílu městům v&nbsp;provincii, v&nbsp;níž stojí,
              a&nbsp;to silou&nbsp;+1. Pokud někdo dobude hrad v&nbsp;cizí
              provincii, získá tím naopak sílu&nbsp;+1 na dobývání měst
              v&nbsp;dané provincii. Hrady nepodporují hrady.
            </p>
          }
        />
        <hr className='border-yellow-800' />
        <SmallTextBlockWithTitle
          title='GENERÁLOVÉ'
          paragraph={
            <p>
              Některé hráčské postavy mají speciální schopnost ve chvíli, kdy
              jsou u&nbsp;armády. Zároveň je možné přes příběh nebo technologie
              získat další generály se speciální schopností a&nbsp;umístit je do
              jiných armád.
            </p>
          }
        />
      </div>
    </RulesWrapper>
  );
};

export default ArmysHandbook;
