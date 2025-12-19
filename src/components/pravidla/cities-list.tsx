import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import RulesWrapper from '../shared/rules-wrapper';
import { useRef } from 'react';

const CitiesList = () => {
  const data = useStaticQuery(graphql`
    query CityListQuery {
      allContentfulSeznamMest {
        edges {
          node {
            seznamMest{
              small: gatsbyImageData(width: 700, placeholder: BLURRED)
                  large: gatsbyImageData(placeholder: BLURRED)
                  title
            }
          }
        }
      }
    }
  `);
  const maps = data.allContentfulSeznamMest.edges[0]?.node.seznamMest ?? [];
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <RulesWrapper title='Seznam měst'>
      <div ref={galleryRef} className='flex flex-col gap-8 p-4 w-[90%]'>
        {maps.map(
          (
            photo: {
              small: { gatsbyImageData: IGatsbyImageData };
              large: IGatsbyImageData;
              title: string;
            },
            index: number,
          ) => {
            const image = getImage(photo.large);
            return (
              <div key={photo.title}>
                {' '}
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={photo.title}
                    className='h-auto w-full object-contain rounded-md shadow-xl mx-1'
                  />
                )}{' '}
              </div>
            );
          },
        )}
      </div>
    </RulesWrapper>
  );
};

export default CitiesList;
