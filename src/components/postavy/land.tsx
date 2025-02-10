import { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import type { Text } from './index';
import Title, { TitleLevel } from '../shared/title';

interface LandProps {
  landName: string;
  landDescription: any;
  landDivider?: IGatsbyImageData;
  erb?: IGatsbyImageData;
}

const Land = ({ landName, landDescription, landDivider, erb }: LandProps) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: Text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text: Text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text: Text) => <u>{text}</u>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: unknown, children: Text) => <p>{children}</p>,
    },
  };

  const description = landDescription
    ? documentToReactComponents(JSON.parse(landDescription.raw), options)
    : null;

  return (
    <div>
      <div className='flex justify-center'>
        {landDivider ? (
          <GatsbyImage image={landDivider} alt={landName} />
        ) : (
          <Title level={TitleLevel.H2}>{landName}</Title>
        )}
      </div>
      {erb && (
        <div className='flex justify-self-center w-10 md:w-24 xl:w-32 md:-mt-10 xl:-mt-14'>
          <GatsbyImage image={erb} alt={landName} />
        </div>
      )}
      <div className='flex pt-6 pb-8'>{description}</div>
    </div>
  );
};

export default Land;
