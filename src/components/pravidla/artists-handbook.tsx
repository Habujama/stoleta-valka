import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';

const ArtistsHandbook = () => {
  return (
    <RulesWrapper title='Příručka umělce'>
      <SmallTextBlockWithTitle
        paragraph={
          <p>
            Příručku umělce teprve připravujeme. Mějte strpení, prosím. Brzy ji
            dodáme.
          </p>
        }
      />
    </RulesWrapper>
  );
};

export default ArtistsHandbook;
