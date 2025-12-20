import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';

const GeneralRules = () => {
  return (
    <RulesWrapper
      title='Obecná pravidla'
      subtitle='Milí hráči, kromě pravidel, týkajících se hry a&nbsp;herní mechaniky,
        existuje i&nbsp;pár pravidel, která nám zajistí příjemné společné
        fungování. Věříme, že používáte svůj mozek k tomu, k&nbsp;čemu je určen,
        pro případ výpadku zde však uvádíme základní přehled.'
    >
      <div className='flex flex-col space-y-5'>
        <SmallTextBlockWithTitle
          title='Jak probíhá hra'
          paragraph={`Hra se odehrává v jednotlivých kolech, během
            kterých chodí většina hráčů postupně k\u00A0mapě.
            Pokud hráči zrovna nejsou u\u00A0mapy, interagují

            s\u00A0ostatními hráči, CP, obchodníkem nebo agentem. Každé kolo se uzavírá tzv. moderováním,

            kde se vyhlašují nejdůležitější události, které
            se v\u00A0daném kole staly. Jedno kolo trvá půl roku
            (jaro+léto, podzim+zima).`}
        />
        <SmallTextBlockWithTitle
          title='Zlaté pravidlo'
          paragraph='Organizátor má vždycky pravdu. Vždycky.'
        />
        <SmallTextBlockWithTitle
          title='Obecná pravidla'
          paragraph={
            <>
              <ol className='list-disc'>
                V závislosti na konkrétním běhu má hra jeden nebo dva herní dny.
                Před hrou jsou krátké workshopy, které pomáhají hráčům lépe
                pochopit herní mechaniky.
                <li>
                  Herní doba je doba, po kterou hráč drží roli a&nbsp;chová se
                  jako daná postava. Tato doba začíná prvním kolem v&nbsp;pátek
                  a &nbsp;končí posledním kolem v&nbsp;sobotu.
                </li>
                <li>
                  Celou herní dobu se hráči vyhýbají neherním tématům.
                  K&nbsp;posezení s&nbsp;přáteli mimo roli slouží brzký příjezd
                  před hrou nebo afterparty po&nbsp;hře.
                </li>
                <li>
                  Protože je hra náročná, hráči mají možnost se vzdálit. Prostor
                  k&nbsp;uklidnění pro kuřáky i nekuřáky bude určen na místě.
                  Počítejte však s&nbsp;tím, že vás nikdo nebude dlouho hledat
                  a&nbsp;musíte si sami pohlídat, kdy máte jít k&nbsp;mapě.
                </li>
                <li>
                  I&nbsp;když osobní věci nejsou herní předměty, dávejte si na
                  ně pozor a&nbsp;mějte je ideálně označené. Za své věci si
                  každý zodpovídá sám. Ztráty a&nbsp;nálezy se po akci řeší na
                  Facebooku a&nbsp;majitel má možnost do měsíce se o&nbsp;ně
                  přihlásit. Hra je 18+, protože se ve hře vyskytuje
                  v&nbsp;malém množství alkohol. Děti a&nbsp;psy nechte doma,
                  pokud není uvedeno jinak (ve hře jsou 2&nbsp;páry postav,
                  které umožňují vzít hráčům s&nbsp;sebou děti - ve věku do
                  cca&nbsp;2 až&nbsp;3 let, o&nbsp;které se během hry sami
                  starají).
                </li>
                <li>
                  Pokud je hráčka těhotná, uváží účast na této akci, kde se
                  odehrávají emočně vypjaté situace. Pokud se přesto chceš
                  přihlásit, konzultuj to individuálně s&nbsp;orgy, případně
                  napiš poznámku do přihlášky. (Je to z&nbsp;důvodu psychického
                  bezpečí.)
                </li>
              </ol>
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Jídlo'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  Na hře zajišťujeme jídlo v&nbsp;následujících variantách:
                  masožravé / vegetariánské / bezlepkové.
                </li>
                <li>
                  Variantu spolu s&nbsp;alergiemi a&nbsp;intolerancemi na různé
                  potraviny uvede hráč v&nbsp;přihlášce. Pokud hráč nic neuvede,
                  má se za to, že je masožravý, bez intolerance či alergie.
                </li>
                <li>
                  Na hře zajišťujeme snídani, svačinu, oběd a&nbsp;večeři
                  a&nbsp;nápoje (káva, čaj, voda). Pokud si chceš vzít vlastní
                  jídlo, dbej, abys nenarušil atmosféru akce moderními obaly.
                </li>
                <li>
                  Jídlo je součást hry a&nbsp;není na ně přesně vymezen čas.
                  Mezi jednotlivými koly akce je ale dostatek času na to, aby se
                  hráč najedl.
                </li>
              </ol>
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Alkohol'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  Ve hře je v&nbsp;malé míře k&nbsp;dispozici alkohol na
                  uklidnění rozjitřených nervů.
                </li>
                <li>
                  Žádáme hráče, aby při hře nepili větší množství alkoholu,
                  k&nbsp;tomu slouží afterparty po hře.
                </li>
                <li>
                  Alkohol na afterparty si každý zajišťuje sám. Každý hráč si
                  také po afterparty uklidí své lahve (a&nbsp;je jedno, jestli
                  jsou prázdné nebo v&nbsp;nich ještě něco zbylo).
                </li>
              </ol>
            </>
          }
        />

        <SmallTextBlockWithTitle
          title='Základní mechanismy hry'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  <strong>Rudá stop</strong>: použijete, pokud je vám nějak
                  situace krajně nepříjemná. Pokud to použijete, nemusíte nic
                  vysvětlovat. Ten, na koho byla použita “rudá stop” se beze
                  slova otočí a&nbsp;dojde za orgama, kde jim to oznámí. Orgové
                  se následně postarají o&nbsp;psychickou pohodu obou hráčů.
                </li>
                <li>
                  <strong>Ruka na hlavě</strong>: hráč/CP/org je neviditelný,
                  nelze na něj mluvit ani s&nbsp;ním jinak interagovat Postava
                  v&nbsp;masce - pokud vidíte postavu v masce, tak ji vlastně
                  nevidíte, ani s&nbsp;ní nijak nemůžete interagovat. Jedinou
                  výjimkou je hráč, za kterým postava sama přijde a&nbsp;začne
                  na něj mluvit.
                </li>
                <li>
                  <strong>Zdravotník</strong>: ve hře se primárně nevyskytuje
                  herní doktor, některé postavy však mohou hledat jistou léčbu.
                  Budete-li reálně zraněni, použijte slova “zdravotník”.
                </li>
              </ol>
            </>
          }
        />

        <SmallTextBlockWithTitle
          title='Dobovost'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>
                  Na jídlo si s&nbsp;sebou vezměte dobové nádobí (miska, lžíce,
                  kalíšek).
                </li>
                <li>Nejsme LH akce, ale dbáme na&nbsp;atmosféru akce.</li>
                <li>Moderní výrazné boty proto nechte doma.</li>
                <li>
                  Pokud hráč nosí brýle, vymění je na akci za čočky. Pokud to
                  z&nbsp;individuálních důvodů nejde, brýle jsou tolerovatelné.
                </li>
                <li>
                  Pokud si berete vlastní kostým, výchozím bodem je pro něj móda
                  13.–14. století v&nbsp;Evropě. (Ideální je koukatelné minimum,
                  pokud si nejste jistí, konzultujte to s&nbsp;orgy.)
                </li>
                <li>
                  Pokud hráči nemají vlastní kostým, půjčujeme ho. Hráči jsou za
                  kostým zodpovědní od chvíle, kdy si ho převezmou v cépkárně až
                  do chvíle, než ho tam osobně vrátí.
                </li>
                <li>
                  Pokud si na akci potřebujete posvítit, využijte umělých svíček
                  na baterie nebo jiných světelných zdrojů schovaných uvnitř
                  dobových lamp.
                </li>
                <li>
                  Přenosné ohniště si lze přivézt po individuální domluvě, jeho
                  majitel je odpovědný za jeho provoz.
                </li>
                <li>
                  Pro zvýšení vlastního pohodlí si lze přivézt vlastní dobový
                  nábytek. Majitel je za něj zodpovědný.
                </li>
                <li>
                  Věci na spaní (spacák, karimatka, pyžamo,...) lze mít nedobové
                  a moderní.
                </li>
                <li>
                  Pro urozené pány: železný meč je krásný doplněk kostýmu, ve
                  hře ho však nevyužijete.
                </li>
              </ol>
            </>
          }
        />
        <SmallTextBlockWithTitle
          title='Focení'
          paragraph={
            <>
              <ol className='list-disc'>
                <li>Na hře se fotí a&nbsp;fotí se hodně.</li>
                <li>Fotky používáme k&nbsp;propagaci hry.</li>
                <li>
                  Fotografie po hře dáváme prvně do facebookové
                  skupiny/události, kde jsou k&nbsp;dispozici hráčům.
                </li>
                <li>
                  Pokud zde hráči naleznou fotografii, kde se jim nelíbí, jak je
                  fotograf zachytil, organizátoři zařídí stažení fotografie.
                  Hráči mají měsíc od zveřejnění fotografií možnost takto
                  učinit.
                </li>
                <li>
                  Pokud hráči nechtějí být na fotkách vůbec, domluví se PŘED
                  ZAČÁTKEM akce s&nbsp;fotografem.
                </li>
              </ol>
            </>
          }
        />
      </div>
      <p className='text-center text-xl mt-6'>
        Věříme, že tato stručná pravidla byla pro vás jen připomenutím
        a&nbsp;akci si společně bez problémů užijeme. Doteď jste byli skvělí,
        doufáme, že to bude tak i&nbsp;nadále.
        <br />
        <br />
        Váš orgtým
      </p>
    </RulesWrapper>
  );
};

export default GeneralRules;
