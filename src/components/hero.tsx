import { StaticImage, getSrc } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

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

  return (
    <div
      className='content-end lg:px-32 w-full pt-2 lg:pt-12'
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <h1 className='md:text-9xl text-xl text-center'>Stoletá válka</h1>
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
    </div>
  );
};

export default Hero;
