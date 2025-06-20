import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';
import Title, { TitleLevel } from '../shared/title';

const ArtistsHandbook = () => {
  return (
    <RulesWrapper title='Příručka umělce'>
      <SmallTextBlockWithTitle
        paragraph={
          <p>
            Umělci ve hře hrají podstatnou roli a skrze své umění mohou měnit,
            jak vás bude vnímat veřejnost. Jejich myšlenky a názory můžou hýbat
            světovým děním a rozproudit další pokrok.
          </p>
        }
      />
      <div className='bg-yellow-50 bg-opacity-25 p-4 border-2 border-yellow-800 rounded-xl'>
        <p className='text-center text-xl text-yellow-800'>
          Tip pro ostatní hráče: nebojte se zaplatit umělcům, aby pro vás
          vyhotovili dílo!
          <br /> Váš věhlas vám možná vytrhne trn z&nbsp;paty v&nbsp;okamžiku
          nouze!
        </p>
      </div>
      <p className='text-xl'>
        Pokud jste zařazeni mezi umělce, neznamená to, že musíte mít reálné
        umělecké schopnosti, i když umělecká vystoupení vítáme! (Ve hře jsou
        mechaniky, které nepotřebují uměleckou znalost.)
      </p>
      <SmallTextBlockWithTitle
        title='Umělecké okénko'
        paragraph={
          <p>
            Před uzavřením každého kola máš šanci vystoupit před všemi
            a&nbsp;přednést či ukázat svoje dílo. Umělci nemusí vystupovat každé
            kolo, ale je to pro ně vždy výborná příležitost, jak ovlivnit dění
            ve hře. (Pokud bys nechtěl, může někdo tvým jménem dílo představit
            za tebe.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Trojúhelník vlivu'
        paragraph={
          <p>
            Tato mechanika umožňuje umělcům hýbat veřejným míněním
            o&nbsp;ostatních. Cestu k&nbsp;trojúhelníku má zaručenou umělec,
            který si to kolo předplatí pozici mecenáše. Zároveň se tam mohou
            dostat i&nbsp;další umělci. Každé dílo má na trojúhelník vlivu
            účinek, akorát &nbsp; němu nepůjdete přímo vy, ale upraví jej
            organizátor.
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Renesance'
        paragraph={
          <p>
            Pokud se umělcům podaří ve hře společnými silami vytvořit pokroková
            umělecká díla a&nbsp;rozšířit svěží myšlenky, může se jim podařit
            odstartovat renesanci, která může mít blahý vliv na celou hru.
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Buřičství'
        paragraph={
          <p>
            Umělci byli vždy nositelé svobodných myšlenek, ale zároveň jsou na
            očích všem, kterým by se jejich vystupování nemuselo líbit.
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Umělecké klání'
        paragraph={
          <p>
            Ve hře proběhne umělecké klání, kde budou moct umělci získat různé
            výhody či suroviny.
          </p>
        }
      />
      <hr className='border-yellow-800' />
      <Title level={TitleLevel.H5}>Co můžete na hře dělat za umění?</Title>
      <hr className='border-yellow-800' />
      <p className='text-xl'>
        Některé z&nbsp;postav už mají napsané konkrétní umění, kterému se
        věnují. Pokud ale chceš zkusit něco jiného, máš naprosto volnou ruku!
      </p>
      <SmallTextBlockWithTitle
        title='Básně'
        paragraph={
          <p>
            Neboj se chopit brk do ruky a&nbsp;popustit uzdu své fantazii. Mohou
            to být krátké verše, či moderní volná poezie. (Pokud nechceš
            recitovat, někdo to tvým jménem přednese.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Malířství'
        paragraph={
          <p>
            Ve hře budou dostupné základní malířské potřeby (pár pláten,
            akrylové barvy, štětce, vodovky). Pokud se malířství věnuješ, klidně
            si vem vlastní potřeby. Zkus si vzít i&nbsp;nějakou zástěru nebo
            hadry, ať si omylem neušpiníš při malování kostým. (Případně můžeš
            vybarvit vodovkami historickou malbu.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Sochaření'
        paragraph={
          <p>
            Zachyťte důležité okamžiky na věčnost! Sochařství probíhá principem
            hry na sochy. Vyberete hráče, která má socha ztvárňovat a postavte
            je do sousoší. Jde si domluvit i&nbsp;jednoduché rekvizity (roucho,
            svíčka, růže atd.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Hudba'
        paragraph={
          <p>
            Můžete vystoupit a zahrát či zazpívat, co budete mít na srdci. Pokud
            hrajete na dobový nástroj, určitě se nebojte ho vzít s sebou! Na hře
            bude pár lidí, co mají nějaké takové nástroje. (Případně můžeme
            pustit na reproduktoru vybranou středověkou písničku.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Divadelní hry'
        paragraph={
          <p>
            Proč nepřipravit pro ostatní podívanou, na kterou zapomenou? Zkus
            sepsat krátkou (dvě až tři minutky) scénku, kterou pobavíš,
            rozesmutníš nebo překvapíš publikum. Využij další hráče, nebo se
            domluv s&nbsp;cépky. (Delší divadelní představení je třeba zahrát
            v&nbsp;průběhu kola.)
          </p>
        }
      />
      <SmallTextBlockWithTitle
        title='Taneční vystoupení'
        paragraph={
          <p>
            Umíš nějaké dobové tance? A&nbsp;můžeme je vidět? Jestli se na to
            cítíš, zařídíme ti tu správnou hudbu, klidně můžeš naučit tancovat
            i&nbsp;další umělce.
          </p>
        }
      />
      <p className='text-xl text-yellow-800 text-center'>
        Něco tu chybí? Múza tě ráda vyslechne a něco společně vymyslíme.
      </p>
    </RulesWrapper>
  );
};

export default ArtistsHandbook;
