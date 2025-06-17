import SmallTextBlockWithTitle from '../shared/small-text-block';
import RulesWrapper from '../shared/rules-wrapper';

const ArtistsHandbook = () => {
  return (
    <RulesWrapper title='Příručka umělce'>
      <SmallTextBlockWithTitle
        title='Armáda'
        paragraph={
          <>
            <ol className='list-disc'>
              <li></li>
            </ol>
          </>
        }
      />
    </RulesWrapper>
  );
};

export default ArtistsHandbook;
