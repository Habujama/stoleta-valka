import { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import MenuItems from '../components/header/menu-items';

interface PageWrapper {
  children: ReactNode;
}

const { screens } = theme;

const PageWrapper = ({ children }: PageWrapper) => {
  const data = useStaticQuery(graphql`
        query {
            background: file(relativePath: { eq: "bg.png" }) {
            childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
        }
    }

      `);

  const imageSrc = getSrc(data.background.childImageSharp.gatsbyImageData);
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div
      className='px-4 lg:px-32'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat-y',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100vh',
      }}
    >
      {!isMobile && (
        <header
          className='flex text-lg px-6 justify-center'
          style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className='flex-1 bg- flex items-center justify-center max-w-laptop mx-auto mb-12'>
            <MenuItems />
          </div>
        </header>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
