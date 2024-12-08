import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { useMedia } from 'react-use';
import { motion } from 'framer-motion';
import theme from 'tailwindcss/defaultTheme';

import MobileNav from '../mobile-nav/index';
import Hero from '../hero';
import Title from '../../assets/titulek.svg';

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
      className='content-end'
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
        className='xl:h-[calc(100vh-200px)] content-end xl:px-32'
        style={{
          backgroundImage: !isMobile ? `url(${Title})` : '',
          backgroundSize: '80% 120%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50% 100%',
          backgroundAttachment: 'fixed',
          height: 'calc(100vh - 115px)',
        }}
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default Header;
