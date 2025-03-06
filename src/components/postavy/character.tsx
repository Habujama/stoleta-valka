import { ReactNode, useRef } from 'react';
import { useMedia } from 'react-use';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import theme from 'tailwindcss/defaultTheme';

import useClickAway from '../../utilities/use-click-away';
import Title, { TitleLevel } from '../shared/title';
import characterSheet from '../../assets/character-sheet.png';
import Cross from '../../assets/krizek.svg';

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
  const isMobile = useMedia(`(max-width: ${screens.sm})`);

  return (
    <div ref={characterRef} typeof='button' onClick={onClick}>
      {isOpen ? (
        <div
          className='relative text-center overflow-y-scroll styled-scrollbar p-4 z-10'
          style={{
            backgroundImage: `url(${characterSheet})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: isMobile ? 240 : 213,
            height: isMobile ? 320 : 282,
          }}
        >
          <button className='absolute top-3 right-3 w-3 h-3' onClick={onClick}>
            <img src={Cross} alt='Zavři detail postavy' />
          </button>
          <Title level={TitleLevel.H4}>{name}</Title>
          <span className='text-sm mt-2'>{description}</span>
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
