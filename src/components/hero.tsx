import { StaticImage, getSrc } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';
import { useMedia } from 'react-use';
import theme from 'tailwindcss/defaultTheme';

const { screens } = theme;

const Hero = () => {
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
      className='content-end xl:px-32 w-full pt-2 lg:pt-12'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      {isMobile ? (
        <div className='flex items-center sm:gap-x-11'>
          <StaticImage
            src='../assets/rytir.png'
            alt='Staň se chrabrým rytířem'
            width={250}
            placeholder='blurred'
          />
          <h1 className='sm:text-5xl text-xl text-center'>
            Stoletá válka
            <br />
            roku 1337
          </h1>
        </div>
      ) : (
        <>
          <h1 className='md:text-7xl text-xl text-center'>
            Stoletá válka roku 1337
          </h1>
          <div className='flex justify-between items-baseline'>
            <StaticImage
              src='../assets/sachy.png'
              alt='Zahraj si středověkou deskovku'
              width={320}
              placeholder='blurred'
            />
            <StaticImage
              src='../assets/rytir.png'
              alt='Staň se chrabrým rytířem'
              width={250}
              placeholder='blurred'
            />
            <StaticImage
              src='../assets/johanka.png'
              alt='Veď svoje vojsko k vítězství'
              width={350}
              placeholder='blurred'
              className='-mr-10'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
