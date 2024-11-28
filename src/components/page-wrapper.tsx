import { ReactNode } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

interface PageWrapper {
  children: ReactNode;
}

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

  return (
    <div
      className='p-8'
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
      {children}
    </div>
  );
};

export default PageWrapper;
