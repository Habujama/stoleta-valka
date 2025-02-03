import { useState, useRef, useEffect } from 'react';
import { getImage } from 'gatsby-plugin-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import type { CharacterProps, LandDataProps, Text } from './index';
import Character from './character';
import Land from './land';

interface CharacterGroupProps {
  groupName: string;
  landInfo: LandDataProps;
  group: CharacterProps[];
}

const CharacterGroupComponent = ({
  groupName,
  landInfo,
  group,
}: CharacterGroupProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const landDivider = getImage(landInfo.rozdlova);
  const erb = getImage(landInfo.erbZem);

  return (
    <div className='pt-6 pb-4'>
      <Land
        landName={groupName}
        landDescription={landInfo.popisZem}
        landDivider={landDivider}
        erb={erb}
      />
      <div
        ref={listRef}
        className='grid grid-cols-1 row-gap-2 lg:row-gap-0 lg:gap-1 sm:grid-cols-2 md:grid-cols-4'
      >
        {group.map((postava: CharacterProps, index: number) => {
          const image = getImage(postava.rmeekPostavy);
          const description = postava.popisPostavy
            ? documentToReactComponents(
                JSON.parse(postava.popisPostavy.raw),
                options,
              )
            : null;
          return (
            image && (
              <Character
                key={index}
                image={image}
                name={postava.jmnoPostavy}
                description={description}
                taken={postava.obsazeno}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default CharacterGroupComponent;
