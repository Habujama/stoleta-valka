import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';

const ArmysHandbook = () => {
  return (
    <div className='md:ml-4 md:mr-12 sm:w-11/12'>
      <div className='flex flex-col px-4'>
        <Title level={TitleLevel.H1} className='text-center'>
          Příručka armády
        </Title>
        <div className='flex flex-col space-y-5'>
          <SmallTextBlockWithTitle
            title='Armáda'
            paragraph={
              <>
                <ol className='list-disc'>
                  <li>
                    Armáda je na mapě znázorněna figurkou vojáka
                    s&nbsp;praporem. Každý prapor má své označení číslem.
                  </li>
                  <li>
                    Podle úrovně, kterou má hráč ve své kartě armády
                    (&nbsp;★/★★/★★★&nbsp;), může mít jeho armáda 3/5/7 oddílů.
                  </li>
                  <li>
                    V provincii, kde se daná armáda nachází, lze naverbovat
                    v&nbsp;jednom kole tolik jednotek, kolik se v&nbsp;ní
                    nachází měst.
                  </li>
                </ol>
              </>
            }
          />
        </div>
      </div>
      <div className='justify-items-center my-4'>
        <table className='text-center table-auto border border-stone-500 p-8'>
          <thead className='bg-stone-600 bg-opacity-40'>
            <tr>
              <th className='border border-stone-500 p-2 '>Jednotky pozemní</th>
              <th className='border border-stone-500 p-2 '>síla</th>
              <th className='border border-stone-500 p-2 '>podmínka</th>
              <th className='border border-stone-500 p-2 '>CENA</th>
            </tr>
          </thead>
          <tbody className='border border-stone-500 p-2 '>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>pěchota</td>
              <td className='border border-stone-500 p-2'>1</td>
              <td className='border border-stone-500 p-2'>-</td>
              <td className='border border-stone-500 p-2'>2</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>střelci</td>
              <td className='border border-stone-500 p-2'>2</td>
              <td className='border border-stone-500 p-2'>kasárna</td>
              <td className='border border-stone-500 p-2'>4</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>
                pěší rytíři
              </td>
              <td className='border border-stone-500 p-2'>3</td>
              <td className='border border-stone-500 p-2'>
                kasárna&nbsp;a&nbsp;kovárna
              </td>
              <td className='border border-stone-500 p-2'>železo</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>jízda</td>
              <td className='border border-stone-500 p-2'>4</td>
              <td className='border border-stone-500 p-2'>
                kasárna&nbsp;a&nbsp;cvičiště jízdy
              </td>
              <td className='border border-stone-500 p-2'>železo</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>
                obléhací zbraně
              </td>
              <td className='border border-stone-500 p-2'>0/4</td>
              <td className='border border-stone-500 p-2'>
                kasárna&nbsp;a&nbsp;kovárna
              </td>
              <td className='border border-stone-500 p-2'>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-col px-4 space-y-4'>
        <SmallTextBlockWithTitle
          title=''
          paragraph={
            <>
              Vojáky je třeba živit a&nbsp;tak je potřeba za každou ze svých
              armád zaplatit <strong>každé sudé kolo</strong> (podzim/zima){' '}
              <strong>jednu kartu jídla</strong>. Je potřeba na to myslet! Místo
              placení jídla je možné nechat armádu plundrovat danou provincii.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Pohyb jednotek'
          paragraph={
            <>
              Každá jednotka ujde po mapě určitou vzdálenost a&nbsp;to
              v&nbsp;závislosti na složení vojska, schůdnosti terénu
              a&nbsp;počasí (stavba <strong>Vylepšená infrastruktura</strong>{' '}
              umožňuje na mapě dojít dál). Armáda se pohybuje podle rychlosti
              nejpomalejší jednotky ve vojsku. Lodě obecně ujedou mnohem větší
              vzdálenost, než pozemní vojsko. Jednotlivé vzdálenosti jsou
              dopředu určené a&nbsp;budou představeny před hrou. Pokud se
              v&nbsp;pozemní armádě nachází pouze jezdectvo, tak ujede také
              mnohem dále. Armáda bez jednotek (prázdná karta armády) se
              pohybuje rychlostí jezdectva.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Vliv'
          paragraph={
            <>
              Může se stát, že se jím nemusíte celou hru zabývat. Jindy ale může
              vliv plnit ve vaší hře důležitou roli.
              <br />
              Představte si situaci, kdy váš generál nesouhlasí s&nbsp;rozkazem,
              který dostal. Může to být proto, že je tento rozkaz příliš
              riskantní, že generál vidí lepší příležitost nebo má na věc jiný
              názor. To, jaký je vliv vaší postavy, může ovlivnit, jak se
              generál zachová.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Hrady'
          paragraph={
            <>
              Střeží provincie a&nbsp;bývá složité je dobýt. Nelze v nich stavět
              nic dalšího, můžete pouze zesilovat jejich obranu. Hrady mají své
              vojenské posádky a&nbsp;poskytují zázemí městům v&nbsp;okolí.
              Jejich dobytí vám dává výhodu na dobývání měst v&nbsp;okolí. Hrady
              poskytují obrannou sílu městům v&nbsp;provincii, v níž stojí, a to
              silou +2. Pokud někdo dobude hrad v&nbsp;cizí provincii, získá tím
              naopak sílu +2 na dobývání měst v&nbsp;dané provincii.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Obléhání'
          paragraph={
            <>
              Pokud je město opevněno (základní obrana 5 a&nbsp;víc), útočník
              musí dané město nebo hrad předem obléhat, aby s&nbsp;dobytím
              uspěl.
              <br />
              Obléhání vyhlásí hráč ve svém tahu u&nbsp;mapy. Může tak učinit
              pouze s&nbsp;armádou, která je v dosahu cíle a má na své kartě
              jednotku <strong>obléhací stroje</strong>. Další kolo probíhá
              obléhání a&nbsp;teprve pak proběhne bitva. V tomto čekacím kole je
              možné, aby obléhaný hrad či město získalo okolní posily.
              <br />
              Pokud je síla útočníka v&nbsp;případě obléhání města vyšší
              o&nbsp;5 a&nbsp;více, město se pravděpodobně vzdá. Hrady se ani v
              tomto případě nevzdají (stále se ale dá vyjednávat o jejich
              kapitulaci přímo s jinými hráči a&nbsp;nezapomínejme na schopnosti
              agentů).
            </>
          }
        />
      </div>
    </div>
  );
};

export default ArmysHandbook;
