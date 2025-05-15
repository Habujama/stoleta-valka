import SmallTextBlockWithTitle from '../shared/small-text-block';
import Title, { TitleLevel } from '../shared/title';

const FleetsHandbook = () => {
  return (
    <div className='md:ml-4 md:mr-12 sm:w-11/12'>
      <div className='flex flex-col px-4'>
        <Title level={TitleLevel.H1} className='text-center'>
          Příručka flotily
        </Title>
        <div className='flex flex-col space-y-5'>
          <SmallTextBlockWithTitle
            title='Flotila'
            paragraph={
              <>
                <ol className='list-disc'>
                  <li>
                    Flotila je na mapě znázorněna figurkou lodě s praporem.
                    Každý prapor má své označení číslem.
                  </li>
                  <li>
                    Podle úrovně, kterou má hráč ve své kartě armády
                    (&nbsp;★/★★/★★★&nbsp;), může mít jeho flotila 3/5/7 oddílů.
                  </li>
                  <li>
                    V provincii, kde se daná flotila nachází, lze v&nbsp;jednom
                    kole verbovat tolik jednotek, kolik se v&nbsp;ní nachází
                    přístavních měst.
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
              <th className='border border-stone-500 p-2 '>Námořní jednotky</th>
              <th className='border border-stone-500 p-2 '>síla</th>
              <th className='border border-stone-500 p-2 '>podmínka</th>
              <th className='border border-stone-500 p-2 '>CENA</th>
            </tr>
          </thead>
          <tbody className='border border-stone-500 p-2 '>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>
                válečná koga
              </td>
              <td className='border border-stone-500 p-2'>2</td>
              <td className='border border-stone-500 p-2'>loděnice</td>
              <td className='border border-stone-500 p-2'>5</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>
                střelecká koga
              </td>
              <td className='border border-stone-500 p-2'>4</td>
              <td className='border border-stone-500 p-2'>
                loděnice a kasárna
              </td>
              <td className='border border-stone-500 p-2'>železo a dřevo</td>
            </tr>
            <tr className='border border-stone-500 p-2 hover:bg-stone-400 hover:bg-opacity-30 hover:cursor-pointer'>
              <td className='font-semibold border border-stone-500'>
                obléhací loď
              </td>
              <td className='border border-stone-500 p-2'>1/5</td>
              <td className='border border-stone-500 p-2'>
                loděnice&nbsp;a&nbsp;kovář
              </td>
              <td className='border border-stone-500 p-2'>8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex flex-col px-4 space-y-4'>
        <SmallTextBlockWithTitle
          title=''
          paragraph={
            <>
              Námořníky je třeba živit a&nbsp;tak je potřeba za každou ze svých
              flotil zaplatit <strong>každé sudé kolo jednu kartu jídla</strong>
              . Je potřeba na to myslet! Piráti a&nbsp;ti méně dbalí zákona
              mohou získat potřebné prostředky plundrováním.{' '}
              <strong>
                Strava pro námořníky se neplatí, pokud se flotila nachází ve
                spojeneckém přístavu
              </strong>
              .
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Pohyb flotil'
          paragraph={
            <>
              Jednotlivé vzdálenosti jsou dopředu určené a&nbsp;budou
              představeny před hrou. Rychlost pohybu flotil je dvojnásobná vůči
              rychlosti armád.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Vliv'
          paragraph={
            <>
              Může se stát, že se jím nemusíte celou hru zabývat. Jindy ale může
              vliv plnit ve vaší hře důležitou roli. Představte si situaci, kdy
              váš admirál nesouhlasí s&nbsp;rozkazem, který dostal. Může to být
              proto, že je tento rozkaz příliš riskantní, že generál vidí lepší
              příležitost nebo má na věc jiný názor. To, jaký je vliv vaší
              postavy, může ovlivnit, jak se admirál zachová.
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Obléhání'
          paragraph={
            <>
              Pokud je základní síla obrany města 5 a&nbsp;více, útočník musí
              dané město nebo hrad předem obléhat, aby s&nbsp;dobytím uspěl.
              Obléhání vyhlásí hráč ve svém tahu u&nbsp;mapy. Může tak učinit
              pouze s&nbsp;flotilou, která je v dosahu cíle a má na své kartě
              jednotku obléhací lodě.
            </>
          }
        />
      </div>
    </div>
  );
};

export default FleetsHandbook;
