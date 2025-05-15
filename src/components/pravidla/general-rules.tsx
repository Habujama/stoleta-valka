import SmallTextBlockWithTitle from '../shared/small-text-block';
import TextBlockWithTitle from '../shared/text-block-with-title';
import Title, { TitleLevel } from '../shared/title';

const GeneralRules = () => {
  return (
    <div className='flex flex-col px-4 w-full sm:w-11/12'>
      <Title level={TitleLevel.H1} className='text-center'>
        Obecná pravidla
      </Title>
      <p className='text-center text-xl mb-6'>
        Milí hráči, kromě pravidel, týkajících se hry a\u00A0herní mechaniky,
        existuje i&nbsp;pár pravidel, která nám zajistí příjemné společné
        fungování. Věříme, že používáte svůj mozek k tomu, k&nbsp;čemu je určen,
        pro případ výpadku zde však uvádíme základní přehled.
      </p>
      <SmallTextBlockWithTitle
        title='Jak probíhá hra'
        paragraph={`Hra se odehrává v jednotlivých kolech, během
            kterých chodí většina hráčů postupně k\u00A0mapě.
            Pokud hráči zrovna nejsou u\u00A0mapy, interagují

            s\u00A0ostatními hráči, CP, obchodníkem nebo agen-
            tem. Každé kolo se uzavírá tzv. moderováním,

            kde se vyhlašují nejdůležitější události, které
            se v\u00A0daném kole staly. Jedno kolo trvá půl roku
            (jaro+léto, podzim+zima).`}
      />
    </div>
  );
};

export default GeneralRules;
