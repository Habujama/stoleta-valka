import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const link = classNames('underline hover:no-underline');
  return (
    <footer
      className='w-full px-8 py-12 bg-blueDark text-gold text-sm h-card'
      data-testid='app-footer'
    >
      <div className='grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-y-2 sm:gap-x-4 max-w-screen-xl'>
        <div className='row-start-2 sm:row-start-1 row-span-1 sm:col-start-1 col-span-1 flex flex-col'>
          <address
            className='not-italic flex flex-col text-xl gap-y-4'
            id='kontakt'
          >
            <h4 className='font-bold  text-3xl'>Stoletá válka roku 1337</h4>
            <a href='tel:736414277' className={link}>
              <FontAwesomeIcon size='1x' icon={faPhone} className='mr-4' />{' '}
              +420&nbsp;736&nbsp;414&nbsp;277
            </a>
            <a
              href='mailto:info@stoletavalka.cz?subject=Dotaz z webu'
              className={link}
            >
              <FontAwesomeIcon size='1x' icon={faEnvelope} className='mr-4' />{' '}
              info@stoletavalka.cz
            </a>
            <a
              href='https://www.facebook.com/groups/743333052902010'
              target='_blank'
            >
              <FontAwesomeIcon size='1x' icon={faFacebook} />
            </a>
          </address>
        </div>
      </div>
      <div className='text-right pt-4'>
        Hana Matoušková in&nbsp;
        <a href='https://www.gatsbyjs.com'>Gatsby JS</a>
        {` `}© {new Date().getFullYear()},
      </div>
    </footer>
  );
};

export default Footer;
