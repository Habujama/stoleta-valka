import { ReactNode } from 'react';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

import Header from '../header';
import Footer from '../footer';

const { screens } = theme;

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
}
  `);

  const imageSrc = getSrc(data.background.childImageSharp.gatsbyImageData);

  const isBig = useMedia(`(max-width: ${screens['2xl']})`);

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: `${isBig ? 'contain' : 'cover'}`,
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
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
