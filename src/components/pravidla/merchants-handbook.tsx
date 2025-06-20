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
      <SmallTextBlockWithTitle
        paragraph={
          <>
            Obchod probíhá u <strong>stanoviště Vrchního obchodníka</strong>. Na
            jeho stole najdete obchodní mapu, na které můžete pohybovat se svými
            obchodníky. Ve hře také existují národy, které nejsou zastoupeny
            žádným hráčem. Vedle mapy se nachází karty, které reprezentují
            hráčské i nehráčské země. Na nich jsou položené{' '}
            <strong>lícem</strong> nahoru kartičky{' '}
            <strong>všední/obyčejné suroviny</strong>. Jsou to suroviny, o
            kterých jakožto lidé zběhlí v obchodu víte, že se v dané zemi
            nachází a že je země vyváží. Oproti tomu kartičky surovin položené
            <strong>rubem</strong> nahoru jsou <strong>vzácné suroviny</strong>.
            Ty se v dané zemi nachází, ale v malém množství a země je
            neprodukuje ve velkém. Jedná se většinou o vzácné komodity, které se
            na daném území objeví jen na chvíli. Na kartě zemí (na mapě u
            Vrchního obchodníka) jsou vypsány jedna nebo dvě suroviny, které
            země shání. Tato informace je veřejná.
          </>
        }
      />
      <StyledTable
        tableHead={['ZEMĚ', 'SHÁNÍ']}
        tableBodyRow={[
          ['Anglie', 'Tvrdé dřevo, Látky'],
          ['Aragon', 'Střelný prach, Barviva'],
          ['Avignon', 'Víno, Šedý mramor'],
          ['Bretaň', 'Látky, Sůl'],
          ['Kastilie', 'Železo, Hedvábí'],
          ['Flandry', 'Vlna, Šperky'],
          ['Francie', 'Tvrdé dřevo, Železo'],
          ['Genevois', 'Vlna, Sůl'],
          ['Irsko', 'Obilí, Skot'],
          ['Janov', 'Drahé kamení, Sklo'],
          ['Navarra', 'Kožešiny, Obilí'],
          ['Neapol', 'Šedý mramor, Látky'],
          ['Piráti', 'Stříbro, Šperky'],
          ['Porto', 'Hedvábí, Látky'],
          ['Rosello', 'Šperky, Víno'],
          ['Savojsko', 'Skot, Ryby'],
          ['Skotsko', 'Železo, Střelný prach'],
          ['SVŘŘ', 'Hedvábí, Sklo'],
          ['Švédsko', 'Uhlí, Obilí'],
        ]}
      />
      <hr className='border-yellow-800' />
      <Title level={TitleLevel.H5}>PRÁCE S OBCHODNÍKY</Title>
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='1) VYSÍLÁNÍ OBCHODNÍKA: ZISK KOMODIT'
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
        title='2) VYSÍLÁNÍ OBCHODNÍKA: ZJIŠTĚNÍ CENY'
        paragraph={
          <>
            Ve chvíli, kdy obchodník dorazí do cíle, může zjistit přesnou cenu
            dvou surovin na daném území.
          </>
        }
      />
      <SmallTextBlockWithTitle
        title='3) VYSÍLÁNÍ OBCHODNÍKA: PRODEJ KOMODIT'
        paragraph={
          <>
            Ve hře existují národy, které nejsou zastoupeny žádným hráčem. I v
            těchto zemích je však možné prodávat komodity, které hráč vlastní.
            Ovšem i v tomto případě je potřeba použít kartu obchodníka - stejně
            jako v předchozích případech musí obchodník dojít do cílové země.
            Následně může v zemi hráč prodat libovolný počet surovin, které
            vlastní. Zároveň je možné koupit běžnou komoditu, nikoliv však
            vzácnou.
          </>
        }
      />
      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='KARTU OBCHODNÍKA NENÍ POTŘEBA, KDYŽ:'
        paragraph={
          <>
            <strong>Prodáváte suroviny ve vlastní zemi</strong> - stačí přijít k
            Vrchnímu obchodníkovi s komoditou a okamžitě ji prodat.
            <br />
            <strong>Prodáváte suroviny v zemi jiného hráče</strong> - je potřeba
            přivést hráče, který uskuteční prodej ve své zemi a být předem
            domluveni na jeho podílu z transakce.
          </>
        }
      />

      <hr className='border-yellow-800' />
      <SmallTextBlockWithTitle
        title='DOBRÉ VĚDĚT'
        paragraph={
          <>
            <p>
              Prodejní <strong>cena</strong> surovin se liší v&nbsp;závislosti
              na zájmu dané země a&nbsp;pohybuje se mezi 2&nbsp;až
              8&nbsp;mincemi. Ačkoliv víte, že danou surovinu země shání,
              neznamená to, že za ni automaticky dostanete maximální cenu
              (8&nbsp;mincí), určitě ale nedostanete cenu minimální
              (2&nbsp;mince).
            </p>
            <br />
            <p>
              Množství peněz, které za surovinu při prodeji obdržíš, zjistíš až
              ve chvíli, kdy se surovinu rozhodneš prodat. V tu chvíli už{' '}
              <strong>nejde z obchodu vycouvat</strong> ani v&nbsp;případě, že
              cena není podle tvých před- stav.{' '}
              <strong>
                Důkladně rozmýšlej, kdy a&nbsp;kam budeš surovinu prodávat.
              </strong>
            </p>
            <br />
            <p>
              Prodej suroviny ve vlastní zemi většinou není příliš výhodný ve
              chvíli, kdy země surovinu sama produkuje.
            </p>
            <br />
            <strong>
              <p>Běžně se doplňuje jedna surovina za tah do každé země.</p>
            </strong>{' '}
            <p>
              V&nbsp;případě rozsáhlých bojů k&nbsp;doplnění dojít vůbec nemusí
              - rozhoduje Vrchní obchodník. Pokud je nějaká surovina kompletně
              vykoupená, doplní se primárně ta. Pokud bude na daném území
              postavena stavba „Těžba“, Vrchní obchodník obnoví skrze efekt této
              stavby i&nbsp;druhou surovinu.
            </p>
            <br />
            <strong>
              Pokud země vyhlásila embargo, není možné do dané země obchodníka
              poslat.
            </strong>
            <br />
            <p>
              Je možné poslat obchodníka pro surovinu i&nbsp;do vlastní země. V
              takovém případě to trvá jedno kolo. Následně je potřeba zaplatit
              za komoditu jako při nákupu v&nbsp;cizí zemi.
            </p>
            <br />
            <p>
              Na jihu Pyrenejského poloostrova (Španělska) leží muslimská
              Granada. Je mimo mapu, vzdálená jedno kolo od okraje. Je možné
              k&nbsp;ní vysílat obchodníky.
            </p>
            <br />
            <p>
              Pokud budete jednu a&nbsp;tu samou věc prodávat opakovaně na
              jednom místě, zahltíte místní trh a&nbsp;její cena se sníží.
            </p>
          </>
        }
      />
    </RulesWrapper>
  );
};

export default MerchantsHandbook;
