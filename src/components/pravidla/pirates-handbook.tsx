import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';
import StyledTable from '../shared/styled-table';

const PiratesHandbook = () => {
  return (
    <RulesWrapper title='Příručka piráta'>
      <SmallTextBlockWithTitle
        title='VĚHLAS'
        paragraph={
          <p>
            Vaše činy mohou zvyšovat ale i&nbsp;snižovat váš věhlas. Pokud
            zvítězíte v&nbsp;námořní bitvě, vypleníte pobřeží nebo dokonce
            dobudete přístavní město a&nbsp;vypleníte jej, váš věhlas bude růst.
            Pokud naopak v&nbsp;bitvě prohrajete, váš věhlas utrpí. Vysoká
            hodnota věhlasu vám může otevřít různá příběhová rozhodnutí nebo vám
            umožní rozšiřovat vaši flotilu.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='ROZŠÍŘENÍ FLOTILY'
        paragraph={
          <p>
            Když se budete topit v&nbsp;penězích a&nbsp;věhlas vás bude na míle
            předcházet, můžete si <strong>u&nbsp;Stratéga</strong> pořídit další
            loď do flotily nebo dokonce i&nbsp;celou novou flotilu. Loď je
            k&nbsp;dispozici hned po zaplacení. Nejedná se o&nbsp;stavbu lodí,
            vaše sláva a&nbsp;peníze vám umožnily naverbovat kapitána na volné
            noze.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <StyledTable
        tableHead={[
          'Rozšíření flotily',
          'Potřebný věhlas',
          'Cena',
          'Co dostaneš',
        ]}
        tableBodyRow={[
          [
            'Válečná koga',
            '4',
            '7 stříbrných',
            '1 válečnou kogu do vybrané flotily',
          ],
          ['-', '8', '10 stříbrných', 'přidá 1 ★ vybrané flotile'],
          [
            'Obléhací loď',
            '8',
            '12 stříbrných',
            '1 obléhací loď do vybrané flotily',
          ],
          [
            'Střelecká koga',
            '8',
            '12 stříbrných',
            '1 střelecká koga do vybrané flotily',
          ],
          [
            'Flotila',
            '12',
            '20 stříbrných',
            '★ ★ karta flotily s jednou kogou někde na okraji mapy',
          ],
        ]}
      />
    </RulesWrapper>
  );
};

export default PiratesHandbook;
