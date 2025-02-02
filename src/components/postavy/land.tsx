import { ReactNode } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import type { Text } from './index';

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
      {landDivider ? (
        <GatsbyImage image={landDivider} alt={landName} />
      ) : (
        <h2>{landName}</h2>
      )}
      {erb && (
        <GatsbyImage
          image={erb}
          alt={landName}
          className='flex justify-self-center w-20 -mt-8'
        />
      )}
      <div className='flex pt-6 pb-8'>{description}</div>
    </div>
  );
};

export default Land;
