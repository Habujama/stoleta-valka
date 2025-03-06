import { useState } from 'react';
import { useMedia } from 'react-use';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import theme from 'tailwindcss/defaultTheme';

const { screens } = theme;

interface ImageProps {
  image: IGatsbyImageData;
  order: number;
}

const Gallery = () => {
  const { contentfulFotogalerie } = useStaticQuery(graphql`
        query GalleryQuery {
          contentfulFotogalerie {
            fotky {
              small: gatsbyImageData(jpegProgressive: true, placeholder: BLURRED, width: 400)
              large: gatsbyImageData(jpegProgressive: true, placeholder: BLURRED)
              title
            }
          }
        }
      `);

  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);
  const isMobile = useMedia(`(max-width: ${screens.lg})`);

  return (
    <>
      <div className='grid grid-flow-col auto-cols-max gap-1 w-full whitespace-nowrap overflow-x-scroll no-scrollbar p-4 bg-neutral-800 bg-blend-screen bg-opacity-15'>
        {contentfulFotogalerie.fotky.map(
          (
            photo: {
              small: { gatsbyImageData: IGatsbyImageData };
              large: IGatsbyImageData;
              title: string;
            },
            index: number,
          ) => {
            const image = getImage(photo.small);
            return (
              <div
                key={photo.title}
                onClick={() =>
                  !isMobile &&
                  setSelectedImage(
                    photo.large ? { image: photo.large, order: index } : null,
                  )
                }
              >
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={photo.title}
                    className='h-64 w-auto object-contain rounded-md shadow-xl mx-1 lg:hover:cursor-pointer lg:active:scale-150 transition-transform lg:active:z-10'
                  />
                )}
              </div>
            );
          },
        )}
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 hover:cursor-pointer flex items-center justify-center z-50'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative p-44'>
            <button
              className='absolute left-10 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-5xl xl:text-7xl font-bold'
              onClick={(e) => {
                e.stopPropagation();
                if (selectedImage.order > 0) {
                  const prevImage =
                    contentfulFotogalerie.fotky[selectedImage.order - 1].large;
                  setSelectedImage({
                    image: prevImage,
                    order: selectedImage.order - 1,
                  });
                }
              }}
            >
              {'<'}
            </button>
            <button
              className='absolute top-20 right-20 text-white text-3xl md:text-5xl xl:text-7xl font-bold'
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <GatsbyImage
              image={selectedImage.image}
              alt=''
              className='max-w-full max-h-full object-contain'
            />
            <button
              className='absolute right-10 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-5xl xl:text-7xl font-bold'
              onClick={(e) => {
                e.stopPropagation();
                if (
                  selectedImage.order <
                  contentfulFotogalerie.fotky.length - 1
                ) {
                  const nextImage =
                    contentfulFotogalerie.fotky[selectedImage.order + 1].large;
                  setSelectedImage({
                    image: nextImage,
                    order: selectedImage.order + 1,
                  });
                }
              }}
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
