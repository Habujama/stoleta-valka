import RulesWrapper from '../shared/rules-wrapper';
import SmallTextBlockWithTitle from '../shared/small-text-block';

const Technologies = () => {
    const listStyle = 'list-[upper-roman] list-inside gap-y-2'
  return (
    <RulesWrapper title='Technologie'>
      <p className='text-center text-xl mt-2'>
        Vládci středně velkých a&nbsp;velkých zemí kteří mají ve svých
        materiálech kartu technologie získají na začátku hry první stupeň
        na&nbsp;některém z&nbsp;technologických stromů.
      </p>
      <span className='font-serif text-center text-xl mt-2 mb-6'>
        V&nbsp;kolech <strong>3,&nbsp;6,&nbsp;9, a&nbsp;12</strong> hráči
        získají možnost technologii zvýšit na další stupeň nebo rozvinout novou
        technologii na první stupeň.
      </span>
      <span className='font-serif text-center text-xl mt-2 mb-6'>
        Další způsob, jak technologický pokrok urychlit, je{' '}
        <strong>stavba univerzit</strong>. Při postavení univerzity se náhodně
        určí, ve kterém odvětví tvá země udělala pokrok. Pokud při stavbě
        odevzdáš komoditu knihy, získáš místo toho technologii, kterou si
        vybereš.
      </span>
      <div className='grid md:grid-cols-2 gap-y-4 md:gap-4'>
        <SmallTextBlockWithTitle
          withBg
          title='OBCHOD'
          paragraph={
            <ul className={listStyle}>
              <li>Získáš jednu surovinu z &nbsp;vybrané země dle tvé volby.</li>
              <li>Získáš kartu obchodníka.</li>
              <li>Zajmi obchodníka vybraného hráče.</li>
            </ul>
          }
        />
        <SmallTextBlockWithTitle
          withBg
          title='EKONOMIKA'
          paragraph={
            <ul className={listStyle}>
              <li>Příjem země o&nbsp;2&nbsp;větší.</li>
              <li>Získej 4&nbsp;karty jídla.</li>
              <li>
                Při postavení zavlažování/přístavu/stájí získáš kartu komodity
                navíc.
              </li>
            </ul>
          }
        />
        <SmallTextBlockWithTitle
          withBg
          title='STAVEBNICTVÍ'
          paragraph={
            <ul className={listStyle}>
              <li>Okamžitě zvýšíš hradby dvou měst/pevností o&nbsp;3.</li>
              <li>Postav okamžitě budovy v hodnotě 10 stříbrných.</li>
              <li>Postav cech obchodníků/zlodějů.</li>
            </ul>
          }
        />

        <SmallTextBlockWithTitle
          withBg
          title='TAKTIKA'
          paragraph={
            <ul className={listStyle}>
              <li>Získej 2 generály/admirály.</li>
              <li>
                Armády se přesunují rychlostí jízdy, jízda rychlostí lodí.
              </li>
              <li>Obléhání se zkracuje o&nbsp;kolo.</li>
            </ul>
          }
        />
        <SmallTextBlockWithTitle
          withBg
          title='ROZVĚDKA'
          paragraph={
            <ul className={listStyle}>
              <li>Získej kartu agenta úrovně&nbsp;3.</li>
              <li>Zajmeš prvního agenta, který bude nasazen proti tvé zemi.</li>
              <li>Vylepši jednoho agenta na úroveň&nbsp;5.</li>
            </ul>
          }
        />
        <SmallTextBlockWithTitle
          withBg
          title='VLIV'
          paragraph={
            <ul className={listStyle}>
              <li>
                Můžeš poslat dva dopisy, na které dostaneš okamžitou odpověď.
              </li>
              <li>Službička u&nbsp;papeže nebo císaře SVŘŘ.</li>
              <li>Necháš exkomunikovat libovolného hráče.</li>
            </ul>
          }
        />
        <SmallTextBlockWithTitle
          withBg
          className='md:col-span-2'
          title='ARMÁDA'
          paragraph={
            <ul className={listStyle}>
              <li>
                Získej obléhací stroj/loď a&nbsp;přidej ★&nbsp;dvěma
                armádám/flotilám.
              </li>
              <li>
                Získej obléhací stroj/loď. Válečná koga a&nbsp;střelci se
                verbují o 1&nbsp;levněji.
              </li>
              <li>
                Získej kartu armády/flotily
                ★&nbsp;★&nbsp;s&nbsp;jízdou/střeleckou kogou.
              </li>
            </ul>
          }
        />
      </div>
    </RulesWrapper>
  );
};

export default Technologies;
