import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import { motion } from 'framer-motion';
import theme from 'tailwindcss/defaultTheme';

import MobileNav from '../mobile-nav/index';
import Hero from '../hero';
import Title from '../../assets/titulek.svg';
import TitleCircle from '../../assets/title-circle.svg';

const { screens } = theme;

const Header = () => {
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
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const isTablet = useMedia(`(max-width: ${screens.lg})`);

  return (
    <div
      className='h-1/2 content-end'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      {isMobile && <MobileNav />}
      <motion.div
        layout
        className='h-1/2 xl:h-[calc(80vh-98px)] content-end xl:px-32'
        style={{
          backgroundImage: isMobile ? `url(${TitleCircle})` : `url(${Title})`,
          backgroundSize: '70% 135%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: isMobile
            ? '50% 135%'
            : isTablet
            ? '50% 150%'
            : '50% 100%',
          backgroundAttachment: 'fixed',
        }}
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default Header;
