import { useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Button, { ButtonType } from '../shared/button';
import SubMenu from './submenu';
import AboutGame from './about-game';
import useClickOutside from '../../utilities/use-click-away';

const MenuItems = () => {
  const [isGameOpen, setGameOpen] = useState<boolean>(false);
  const [isPracticalOpen, setPracticalOpen] = useState<boolean>(false);
  const [isRegisterOpen, setRegisterOpen] = useState<boolean>(false);

  const gameRef = useRef<HTMLDivElement>(null);
  const practicalRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  useClickOutside(gameRef, () => setGameOpen(false));
  useClickOutside(practicalRef, () => setPracticalOpen(false));
  useClickOutside(registerRef, () => setRegisterOpen(false));

  return (
    <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-between outline-none mt-2'>
      <div className='flex flex-col items-center' ref={gameRef}>
        <Button
          onClick={() => setGameOpen(!isGameOpen)}
          buttonType={ButtonType.SECONDARY}
          className='text-2xl w-80 z-20'
        >
          <h2 className=''>O hře</h2>
        </Button>
        <AnimatePresence>
          {isGameOpen && (
            <SubMenu isOpen={isGameOpen}>
              <AboutGame toggleOpen={setGameOpen} />
            </SubMenu>
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col items-center' ref={practicalRef}>
        <Button
          onClick={() => setPracticalOpen(!isPracticalOpen)}
          buttonType={ButtonType.SECONDARY}
          className='text-2xl w-80 z-20'
        >
          <h2>Praktické</h2>
        </Button>
        <AnimatePresence>
          {isPracticalOpen && (
            <SubMenu isOpen={isPracticalOpen}>
              <AboutGame toggleOpen={setPracticalOpen} />
            </SubMenu>
          )}
        </AnimatePresence>
      </div>
      <div className='flex flex-col items-center' ref={registerRef}>
        <Button
          onClick={() => setRegisterOpen(!isRegisterOpen)}
          buttonType={ButtonType.SECONDARY}
          className='text-2xl w-80 z-20'
        >
          <h2>Registrace</h2>
        </Button>
        <AnimatePresence>
          {isRegisterOpen && (
            <SubMenu isOpen={isRegisterOpen}>
              <AboutGame toggleOpen={setRegisterOpen} />
            </SubMenu>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MenuItems;
