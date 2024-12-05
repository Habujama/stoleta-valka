import { Dispatch, SetStateAction } from 'react';
import Button, { ButtonType } from '../shared/button';

interface RegisterProps {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}

const Register = ({ toggleOpen }: RegisterProps) => (
  <div className='flex flex-col items-center'>
    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40 mt-10'
    >
      <p className='whitespace-nowrap text-2xl'>Hráči</p>
    </Button>

    <Button
      to='/'
      onClick={() => toggleOpen(false)}
      buttonType={ButtonType.GHOST}
      className='w-40'
    >
      <p className='whitespace-nowrap text-2xl'>Pomocníci</p>
    </Button>
  </div>
);

export default Register;
