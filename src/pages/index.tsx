import type { HeadFC } from 'gatsby';

import PageWrapper from '../components/page-wrapper';
import Layout from '../components/layout';

const IndexPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <main>
          <p>
            V roce 1337 měli angličtí králové na francouzském území mnoho držav
            a byli tak fakticky leníky francouzské koruny, mocnější, než samotný
            král. První oheň konfliktu zažehly jiskry sporu o nadvládu nad
            obchodem s anglickou vlnou ve Flandrech. Kdy a kde oheň vzplane
            naplno tentokrát? Kdo si udrží moc a kdo ji získá?
          </p>
          <p>
            Stoletá válka se zapsala do dějin jako konflikt překračující
            hranice, čas i lidské osudy. Nikdo ve známém světě neunikl jejím
            následkům. Teď však stojíme na začátku toho všeho a nikdo netuší, s
            jakou silou se tento konflikt prožene Evropu.
          </p>
          <p>
            Budeš v tomto diplomatickém larpu, historické simulaci a zároveň
            tahové strategii zastávat jednu z klíčových rolí? Budeš mít odvahu
            pohnout figurkami na šachovnici dějin? Zvládneš čelit svému osudu
            jakožto vyslanec anglického krále, flanderský obchodník, odvážný
            korzár, ušlechtilý rytíř či nebojácná diplomatka?
          </p>
          <p>
            Vichry války ještě nezačaly dout, vítr z Flander však donesl útržky
            vzdálené písně o rebelii. Nad životy všech se stahují temná mračna a
            je jen na každém hráči, jak se s nimi vypořádá.
          </p>
          <p>
            Hra nabízí 27 mužských a 12 ženských rolí. Intriky, sláva, boj, čest
            i zrada. Na to všechno se můžete těšit. Diplomatická jednání budou
            střídat střety agentů, obchodníků, potměšilých našeptávačů i
            plamenných kazatelů. Ukončí je střety armád, ve kterých se bude
            rozhodovat o všem a o všech. Přidej se k nám!
          </p>
        </main>
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Stoletá válka roku 1337</title>;
