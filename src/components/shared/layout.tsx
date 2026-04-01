import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import Header from '../header';
import Footer from '../footer';

const { screens } = theme;

console.log(screens);

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
  query {
    background: file(relativePath: { eq: "pozadi.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    mobileBackground: file(relativePath: { eq: "pozadi-mobilni.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
  }
  `);

const imageSrc = getSrc(data.background?.childImageSharp?.gatsbyImageData);
const mobileImageSrc = getSrc(
  data.mobileBackground?.childImageSharp?.gatsbyImageData,
);

const isMobile = useMedia(`(max-width: 1024px)`, false);

const activeBackground = isMobile && mobileImageSrc ? mobileImageSrc : imageSrc;

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${activeBackground})`,
          backgroundSize: `${!isMobile ? 'cover' : isMobile ? '' : 'contain'}`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center center',
          backgroundAttachment: isMobile ? 'scroll' : 'fixed',
          width: '100%',
        }}
      >
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
