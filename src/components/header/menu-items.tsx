import { useRef, useState } from 'react';

import AboutGame from './about-game';
import useClickAway from '../../utilities/use-click-away';
import Practical from './practical';
import Register from './register';
import MenuItem from './single-menu-item';

const MenuItems = () => {
  const [isGameOpen, setGameOpen] = useState<boolean>(false);
  const [isPracticalOpen, setPracticalOpen] = useState<boolean>(false);
  const [isRegisterOpen, setRegisterOpen] = useState<boolean>(false);

  const gameRef = useRef<HTMLDivElement>(null);
  const practicalRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  useClickAway(gameRef, () => setGameOpen(false));
  useClickAway(practicalRef, () => setPracticalOpen(false));
  useClickAway(registerRef, () => setRegisterOpen(false));

  return (
    <div className='bg-neutral-800 bg-blend-screen bg-opacity-15 pb-16 w-full'>
      <div className='flex space-y-4 sm:space-y-0 justify-self-center -mt-9 max-w-4xl'>
        <MenuItem
          navRef={gameRef}
          isOpen={isGameOpen}
          setIsOpen={setGameOpen}
          variant='BIG'
          title='O hře'
        >
          <AboutGame toggleOpen={setGameOpen} />
        </MenuItem>
        <MenuItem
          navRef={practicalRef}
          isOpen={isPracticalOpen}
          setIsOpen={setPracticalOpen}
          variant='BIG'
          title='Praktické'
        >
          <Practical toggleOpen={setPracticalOpen} />
        </MenuItem>
        <MenuItem
          navRef={registerRef}
          isOpen={isRegisterOpen}
          setIsOpen={setRegisterOpen}
          title='Registrace'
          variant='BIG'
        >
          <Register toggleOpen={setRegisterOpen} />
        </MenuItem>
      </div>
    </div>
  );
};

export default MenuItems;
