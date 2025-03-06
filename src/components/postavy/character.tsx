import { ReactNode, useRef } from 'react';
import { useMedia } from 'react-use';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import theme from 'tailwindcss/defaultTheme';

import useClickAway from '../../utilities/use-click-away';
import Title, { TitleLevel } from '../shared/title';
import characterSheet from '../../assets/character-sheet.png';

const { screens } = theme;

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
  const isMobile = useMedia(`(max-width: ${screens.md})`);

  return (
    <div ref={characterRef} typeof='button' onClick={onClick}>
      {isOpen ? (
        <div
          className='text-center overflow-y-scroll no-scrollbar p-12 sm:p-4'
          style={{
            backgroundImage: `url(${characterSheet})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: isMobile ? 398 : 213,
            height: isMobile ? 530 : 282,
          }}
        >
          <Title level={TitleLevel.H4}>{name}</Title>
          <p className='text-sm mt-2'>{description}</p>
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
