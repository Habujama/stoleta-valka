import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';
import StyledTable from '../shared/styled-table';

const FleetsHandbook = () => (
  <RulesWrapper title='Příručka flotily'>
    <SmallTextBlockWithTitle
      title='Flotila'
      paragraph={
        <>
          <ol className='list-disc'>
            <li>
              Flotila je na mapě znázorněna figurkou lodě s praporem. Každý
              prapor má své označení číslem.
            </li>
            <li>
              Podle úrovně, kterou má hráč ve své kartě armády
              (&nbsp;★/★★/★★★&nbsp;), může mít jeho flotila 3/5/7 oddílů.
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
    <div className='justify-items-center my-4'>
      <StyledTable
        tableHead={['Námořní jednotky', 'Síla', 'Podmínka', 'CENA']}
        tableBodyRow={[
          ['válečná koga', '2', 'loděnice', '5'],
          ['střelecká koga', '4', 'loděnice a kasárna', 'železo a dřevo'],
          ['obléhací loď', '1/5', 'loděnice a kovář', '8'],
        ]}
      />
    </div>
    <div className='flex flex-col px-4 space-y-4'>
      <SmallTextBlockWithTitle
        title=''
        paragraph={
          <>
            Námořníky je třeba živit a&nbsp;tak je potřeba za každou ze svých
            flotil zaplatit <strong>každé sudé kolo jednu kartu jídla</strong>.
            Je potřeba na to myslet! Piráti a&nbsp;ti méně dbalí zákona mohou
            získat potřebné prostředky plundrováním.{' '}
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
            Jednotlivé vzdálenosti jsou dopředu určené a&nbsp;budou představeny
            před hrou. Rychlost pohybu flotil je dvojnásobná vůči rychlosti
            armád.
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
            Pokud je základní síla obrany města 5 a&nbsp;více, útočník musí dané
            město nebo hrad předem obléhat, aby s&nbsp;dobytím uspěl. Obléhání
            vyhlásí hráč ve svém tahu u&nbsp;mapy. Může tak učinit pouze
            s&nbsp;flotilou, která je v dosahu cíle a má na své kartě jednotku
            obléhací lodě.
          </>
        }
      />
    </div>
  </RulesWrapper>
);
export default FleetsHandbook;
