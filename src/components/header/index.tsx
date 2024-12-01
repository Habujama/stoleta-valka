import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

import MobileNav from '../mobile-nav/index';
import Hero from '../hero';
import Cara from '../Cara';

interface Props {
  siteTitle: string;
}

const { screens } = theme;

const Header = ({ siteTitle }: Props) => {
  const data = useStaticQuery(graphql`
    query {
        background: file(relativePath: { eq: "hero.png" }) {
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
      className='md:h-[calc(100vh-106px)] content-end px-32 w-full pt-12 pb-2'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      {isMobile && <MobileNav />}
      <Hero />
      <Cara />
    </div>
  );
};

export default Header;
