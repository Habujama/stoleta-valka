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
            hodnota věhlasu vám může{' '}
            <strong>otevřít různá příběhová rozhodnutí</strong> nebo vám
            <strong>umožní rozšiřovat vaši flotilu</strong>.
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
      <StyledTable
        tableHead={['Potřebný věhlas', 'Cena', 'Co dostaneš']}
        mergeBodyColumns={[0]}
        tableBodyRow={[
          ['4', '7 stříbrných', '1 válečnou kogu do vybrané flotily'],
          ['7', '5 stříbrných', 'přidá 1 ★ vybrané flotile'],
          ['7', '9 stříbrných', '1 obléhací loď do vybrané flotily'],
          ['7', '12 stříbrných', '1 střelecká koga do vybrané flotily'],
          ['10', '4 stříbrné', 'schopnost admirála do jedné z tvých flotil'],
          [
            '15',
            '10 stříbrných',
            '★ kartu flotily s jednou kogou někde na okraji mapy',
          ],
        ]}
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='POSLEDNÍ ZÁCHRANA'
        paragraph={
          <p>
            Dá se použít, pokud dojde k&nbsp;zamknutí pirátské flotily
            v&nbsp;námořním boji. Útočník zaútočí na piráta, pirát prohraje
            a&nbsp;chce se odpoutat z&nbsp;bitvy; útočník však hraje dříve a
            zaútočí znovu na už oslabeného piráta -&nbsp;hrozí tedy, že bude
            pirátova flotila zničena bez možnosti záchrany. V&nbsp;tomto případě
            je možné <strong>odevzdat svého špeha</strong> u&nbsp;mapy
            a&nbsp;automaticky tak vyřadit provozu loď útočníka{' '}
            <strong>na jedno kolo</strong>, aby mohl pirát utéct. Agent se
            z&nbsp;této akce nevrátí, ale může to pirátovi zachránit život.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='OBCHODNÍ KONVOJE'
        paragraph={
          <p>
            Vozí cenné věci, které lze ukořistit jen s&nbsp;minimálním rizikem!
            Jen je potřeba být ve správnou chvíli na správném místě. Kdo by tak
            mohl vědět, kdy a&nbsp;kde se pohybují ty obchodní konvoje? Hmmm….
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='ZAJIŠTĚNÍ PIRÁTSKÉ FLOTILY'
        paragraph={
          <div className='flex flex-col gap-y-2'>
            <p>
              Námořníky je třeba živit a&nbsp;platit - je potřeba za každou svou
              figurku flotil zaplatit každé sudé kolo jednu kartu komodity jídla
              (ovoce, obilí, skot, olivy, víno, pivo). Je potřeba na to myslet!
            </p>
            <p>
              Platit budeš ty jako kapitán ze všech kapitánů nejkapitánovatější,
              a&nbsp;to každé kolo 1&nbsp;stříbrný za každou figurku flotily.
            </p>
            <p>
              Místo placení jídla je možné také nechat flotilu plundrovat
              pobřeží nebo zaplatit 4&nbsp;stříbrné za každou chybějící kartu
              jídla.
            </p>
          </div>
        }
      />
    </RulesWrapper>
  );
};

export default PiratesHandbook;
