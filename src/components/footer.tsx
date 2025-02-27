import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

const Footer = () => {
  const { contentfulFooterMenu } = useStaticQuery(graphql`
      query FooterContentQuery {
        contentfulFooterMenu {
          kontaktnEmail
          kontaktnTelefon1
          kontaktnTelefon2
          facebookLink
        }
      }
    `);

  const link = classNames('underline hover:no-underline mb-2 md:mb-0');

  const formatPhoneNumber = (phone: string) => {
    return `+420 ${phone.replace(/(\d{3})(?=\d)/g, '$1\u00A0')}`;
  };

  return (
    <>
      <footer className='w-full px-8 py-12 mt-8 text-sm h-card'>
        <div className='row-start-2 sm:row-start-1 row-span-1 sm:col-start-1 col-span-1 flex flex-col'>
          <address
            className='flex flex-col not-italic text-xl gap-y-4'
            id='kontakt'
          >
            <h4 className='font-bold text-xl text-center'>
              Stoletá válka roku 1337
            </h4>
            <div className='flex flex-col md:flex-row justify-center mt-2 text-sm font-bold'>
              {contentfulFooterMenu.kontaktnTelefon1 && (
                <>
                  <a
                    href={`tel:${contentfulFooterMenu.kontaktnTelefon1}`}
                    className={link}
                  >
                    {formatPhoneNumber(contentfulFooterMenu.kontaktnTelefon1)}
                  </a>
                  <div className='mx-4 hidden md:block'>|</div>
                </>
              )}
              {contentfulFooterMenu.kontaktnTelefon2 && (
                <>
                  <a
                    href={`tel:${contentfulFooterMenu.kontaktnTelefon2}`}
                    className={link}
                  >
                    {formatPhoneNumber(contentfulFooterMenu.kontaktnTelefon2)}
                  </a>
                  <div className='mx-4 hidden md:block'>|</div>
                </>
              )}
              {contentfulFooterMenu.kontaktnEmail && (
                <>
                  <a
                    href={`mailto:${contentfulFooterMenu.kontaktnEmail}?subject=Dotaz z webu`}
                    className={link}
                  >
                    {contentfulFooterMenu.kontaktnEmail}
                  </a>
                  <div className='mx-4 hidden md:block'>|</div>
                </>
              )}
              <a
                href='https://www.facebook.com/groups/743333052902010'
                target='_blank'
                className='mb-2 md:mb-0'
              >
                facebook
              </a>
              <div className='mx-4 hidden md:block'>|</div>
              <div>
                Hana Matoušková in&nbsp;
                <a href='https://www.gatsbyjs.com'>Gatsby JS</a>
                {` `}© {new Date().getFullYear()}
              </div>
            </div>
          </address>
        </div>
      </footer>
      <div className='xl:flex xl:flex-col self-center'>
        <StaticImage
          src='../assets/paticka.png'
          alt='paticka'
          placeholder='blurred'
          className='mb-4'
        />
      </div>
    </>
  );
};

export default Footer;
