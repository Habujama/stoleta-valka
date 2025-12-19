import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import RulesWrapper from '../shared/rules-wrapper';
import { useRef } from 'react';

const Maps = () => {
  const data = useStaticQuery(graphql`
  query MapQuery {
    allContentfulMapy {
      edges {
        node {
          mapy {
            small: gatsbyImageData(width: 400, placeholder: BLURRED)
            large: gatsbyImageData(placeholder: BLURRED)
            title
          }
        }
      }
    }
  }
`);
  const maps = data.allContentfulMapy.edges[0]?.node.mapy ?? [];

  /* const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null); */
  const galleryRef = useRef<HTMLDivElement>(null);

  /*   const changeSelectedImage = (e: any, substract: boolean) => {
    e.stopPropagation();
    if (selectedImage) {
      if (substract) {
        if (selectedImage.order > 0) {
          const prevImage = maps[selectedImage.order - 1].large;
          setSelectedImage({
            image: prevImage,
            order: selectedImage.order - 1,
          });
        }
      }
      if (selectedImage.order < maps.length - 1) {
        const nextImage = maps[selectedImage.order + 1].large;
        setSelectedImage({
          image: nextImage,
          order: selectedImage.order + 1,
        });
      }
    }
  }; */

  return (
    <RulesWrapper title='Mapy'>
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

export default Maps;
