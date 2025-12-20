import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';
import StyledTable from '../shared/styled-table';
import Title, { TitleLevel } from '../shared/title';

const MerchantsHandbook = () => {
  return (
    <RulesWrapper
      title='Příručka obchodníka'
      subtitle='V obchodu se točí velké peníze. Pokud jej dobře využijete, přijdete si na nemalé jmění. Obdrželi jste alespoň jednu kartu obchodníka? Tato příručka je pro vás.'
    >
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        paragraph={
          <>
            Obchod probíhá u&nbsp;
            <strong>stanoviště Vrchního obchodníka</strong>. Na jeho stole
            najdete obchodní mapu, na které můžete pohybovat se svými
            obchodníky. Ve hře také existují národy, které nejsou zastoupeny
            žádným hráčem. Vedle mapy se nachází karty, které reprezentují
            hráčské i&nbsp;nehráčské země. Na nich jsou položené{' '}
            <strong>lícem</strong> nahoru kartičky{' '}
            <strong>všední/obyčejné suroviny</strong>. Jsou to suroviny,
            o&nbsp;kterých jakožto lidé zběhlí v obchodu víte, že se v dané zemi
            nachází a že je země vyváží. Oproti tomu kartičky surovin položené{' '}
            <strong>rubem</strong> nahoru jsou <strong>vzácné suroviny</strong>.
            Ty se v dané zemi nachází, ale v malém množství a&nbsp;země je
            neprodukuje ve velkém. Jedná se většinou o vzácné komodity, které se
            na daném území objeví jen na chvíli. Na kartě zemí (na mapě
            u&nbsp;Vrchního obchodníka) jsou vypsány jedna nebo dvě suroviny,
            které země shání. Tato informace je veřejná.
          </>
        }
      />
      <StyledTable
        tableHead={['ZEMĚ', 'SHÁNÍ']}
        headColSpan={{ SHÁNÍ: 2 }}
        tableBodyRow={[
          ['Anglie', 'Tvrdé dřevo', 'Látky'],
          ['Aragon', 'Střelný prach', 'Barviva'],
          ['Avignon', 'Víno', 'Šedý mramor'],
          ['Bretaň', 'Látky', 'Sůl'],
          ['Kastilie', 'Železo', 'Hedvábí'],
          ['Flandry', 'Vlna', 'Šperky'],
          ['Francie', 'Tvrdé dřevo', 'Železo'],
          ['Genevois', 'Vlna', 'Sůl'],
          ['Irsko', 'Obilí', 'Skot'],
          ['Janov', 'Drahé kamení', 'Sklo'],
          ['Maroko', 'Kadidlo', 'Koně'],
          ['Navarra', 'Kožešiny', 'Obilí'],
          ['Neapol', 'Šedý mramor', 'Látky'],
          ['Piráti', 'Stříbro', 'Šperky'],
          ['Porto', 'Hedvábí', 'Látky'],
          ['Rosello', 'Šperky', 'Víno'],
          ['Savojsko', 'Skot', 'Ryby'],
          ['Sicílie', 'Látky', 'Stříbro'],
          ['Skotsko', 'Železo', 'Střelný prach'],
          ['SVŘŘ', 'Hedvábí', 'Sklo'],
          ['Švédsko', 'Uhlí', 'Obilí'],
          ['Tunis', 'Nevěstky', 'Tvrdé dřevo'],
        ]}
      />
      <hr className='border-yellow-800' />
      <Title level={TitleLevel.H5}>PRÁCE S OBCHODNÍKY</Title>
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='VYSÍLÁNÍ OBCHODNÍKA: ZISK KOMODIT'
        paragraph={
          <>
            U Vrchního obchodníka se hráč představí, řekne, jakou zemi
            reprezentuje, v&nbsp;jaké zemi by chtěl nakupovat a&nbsp;následně
            odevzdá kartu svého obchodníka.
            <br />
            Vrchní obchodník kartu vezme, poznačí si cíl cesty a&nbsp;položí
            kartu na hranice země, ze které obchodník vychází (domovská země
            hráče). Počátkem <strong>dalšího kola</strong> všichni obchodníci na
            mapě vyráží vstříc svému cíli. Pokud do cíle dorazí už v tom daném
            kole, karta obchodník i komodita jsou připraveny k&nbsp;vyzvednutí.
            Pokud ne, bude obchodník pokračovat v&nbsp;cestě a&nbsp;obchodník
            i&nbsp;surovina bude připravena až v&nbsp;dalších kolech. Ve chvíli,
            kdy se obchodník vyhodnocuje, si hráč vybere pro sebe jednu
            z&nbsp;kartiček surovin a zároveň{' '}
            <strong>zaplatí 1&nbsp;stříbrný vrchnímu obchodníkovi</strong> za
            její pořízení. V&nbsp;případě, že hráč zaplatí{' '}
            <strong>1&nbsp;stříbrný navíc</strong>, získá přístup ke hromádce{' '}
            <strong>vzácných surovin</strong> a&nbsp;může si místo běžně
            dostupné vzít některou z&nbsp;nich. Pokud už kartičky suroviny na
            mapě nejsou, není možné si v&nbsp;daném tahu žádnou surovinu vzít.
          </>
        }
      />
      <SmallTextBlockWithTitle
        title='KARTU OBCHODNÍKA NENÍ POTŘEBA, KDYŽ:'
        paragraph={
          <>
            <p>
              <strong>Prodáváte suroviny ve vlastní zemi</strong> - stačí přijít
              k Vrchnímu obchodníkovi s komoditou a okamžitě ji prodat.
            </p>
            <p>
              <strong>Prodáváte suroviny v zemi jiného hráče</strong> - je
              potřeba přivést hráče, který uskuteční prodej ve své zemi a být
              předem domluveni na jeho podílu z transakce.
            </p>
          </>
        }
      />
      <SmallTextBlockWithTitle
        title='JIŽNÍ VS. SEVERNÍ MAPA:'
        paragraph={
          <>
            Hráči ze severní mapy mohou obchodovat se zeměmi z mapy jižní, a
            naopak. Doporučujeme to dělat - daleké země (zejména např. Benátky
            či Janov) poskytují vzácné komodity!
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='DOBRÉ VĚDĚT'
        paragraph={
          <ol className='flex flex-col gap-2 list-[upper-roman] px-6'>
            <li className='pl-4'>
              Prodejní <strong>cena</strong> surovin se liší v&nbsp;závislosti
              na zájmu dané země a&nbsp;pohybuje se mezi{' '}
              <strong>2&nbsp;až&nbsp;8&nbsp;stříbrnými</strong>. Ačkoliv víte,
              že danou surovinu země shání, neznamená to, že za ni automaticky
              dostanete maximální cenu (8&nbsp;mincí), určitě ale nedostanete
              cenu minimální (2&nbsp;mince).
            </li>
            <li className='pl-4'>
              Množství peněz, které za surovinu při prodeji obdržíš, zjistíš až
              ve chvíli, kdy se surovinu rozhodneš prodat. V tu chvíli už{' '}
              <strong>nejde z obchodu vycouvat</strong> ani v případě, že cena
              není podle tvých představ. Důkladně rozmýšlej, kdy a&nbsp;kam
              budeš surovinu prodávat.
            </li>
            <li className='pl-4'>
              Prodej suroviny ve vlastní zemi většinou není příliš výhodný ve
              chvíli, kdy země surovinu sama produkuje.
            </li>
            <li className='pl-4'>
              <strong>
                Běžně se doplňuje jedna surovina za tah do každé země.
              </strong>{' '}
              V&nbsp;případě rozsáhlých bojů k&nbsp;doplnění dojít vůbec nemusí
              - rozhoduje Vrchní obchodník. Pokud je nějaká surovina kompletně
              vykoupená, doplní se primárně ta.
            </li>
            <li className='pl-4'>
              <strong>
                Pokud země vyhlásila embargo, není možné do dané země obchodníka
                poslat.
              </strong>
            </li>
            <li className='pl-4'>
              Je možné poslat obchodníka pro surovinu i&nbsp;do vlastní země.
              V&nbsp;takovém případě to trvá jedno kolo. Následně je potřeba
              zaplatit za komoditu jako při nákupu v&nbsp;cizí zemi.
            </li>
            <li className='pl-4'>
              Pokud budete jednu a&nbsp;tu samou věc prodávat opakovaně na
              jednom místě, zahltíte místní trh a&nbsp;její cena se sníží.
            </li>
          </ol>
        }
      />
    </RulesWrapper>
  );
};

export default MerchantsHandbook;
