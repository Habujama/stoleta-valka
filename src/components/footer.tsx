import classNames from 'classnames';

const Footer = () => {
  const link = classNames('underline hover:no-underline');
  return (
    <footer
      className='w-full px-8 py-12 bg-white text-sm h-card'
      data-testid='app-footer'
    >
      <div className='grid grid-rows-2 grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 gap-y-2 sm:gap-x-4 max-w-screen-xl'>
        <div className='row-start-2 sm:row-start-1 row-span-1 sm:col-start-1 col-span-1 flex flex-col'>
          <address className='not-italic' id='kontakt'>
            <h4 className='font-bold mb-2'>Stoletá válka roku 1337</h4>
            <p className='my-2'>
              Tel.:&nbsp;
              <a href='tel:736414277' className={link}>
                +420&nbsp;736&nbsp;414&nbsp;277
              </a>
            </p>
            <p>
              E-mail:&nbsp;
              <a
                href='mailto:info@stoletavalka.cz?subject=Dotaz z webu'
                className={link}
              >
                info@stoletavalka.cz
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className='text-right pt-4'>
        <a href='https://www.gatsbyjs.com'>Gatsby JS</a>
        {` `}© {new Date().getFullYear()},
      </div>
    </footer>
  );
};

export default Footer;
