import { ReactNode, useRef } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import useClickAway from '../../utilities/use-click-away';
import Title, { TitleLevel } from '../shared/title';

interface CharacterProps {
  name: string;
  description: ReactNode;
  taken: boolean;
  image: IGatsbyImageData;
  isOpen: boolean;
  onClick: () => void;
}

const Character = ({
  image,
  name,
  description,
  taken,
  isOpen,
  onClick,
}: CharacterProps) => {
  const characterRef = useRef<HTMLDivElement>(null);
  useClickAway(characterRef, () => isOpen && onClick);

  return (
    <div ref={characterRef} typeof='button' onClick={onClick}>
      {isOpen ? (
        <div className='bg-beige p-4 rounded-lg shadow-lg w-full h-96 lg:w-72 lg:h-96 text-center overflow-scroll'>
          <Title level={TitleLevel.H3}>{name}</Title>
          {description}
        </div>
      ) : (
        <GatsbyImage
          image={image}
          alt={name}
          style={{
            filter: taken ? 'grayscale(100%)' : 'none',
          }}
          className='hover:cursor-pointer hover:scale-105 active:scale-95'
        />
      )}
    </div>
  );
};

export default Character;
