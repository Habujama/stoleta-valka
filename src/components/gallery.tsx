import { useState, useRef } from 'react';
import { useMedia } from 'react-use';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import theme from 'tailwindcss/defaultTheme';

import ArrowLight from '../assets/sipka-svetla.svg';
import Cross from '../assets/krizek-svetly.svg';

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
  const isMobile = useMedia(`(max-width: ${screens.md})`);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const updateScrollState = () => {
    if (galleryRef.current) {
      setIsAtStart(galleryRef.current.scrollLeft === 0);
      setIsAtEnd(
        galleryRef.current.scrollLeft + galleryRef.current.clientWidth >=
          galleryRef.current.scrollWidth,
      );
    }
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 500;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
    setTimeout(updateScrollState, 300);
  };

  const changeSelectedImage = (e: any, substract: boolean) => {
    e.stopPropagation();
    if (selectedImage) {
      if (substract) {
        if (selectedImage.order > 0) {
          const prevImage =
            contentfulFotogalerie.fotky[selectedImage.order - 1].large;
          setSelectedImage({
            image: prevImage,
            order: selectedImage.order - 1,
          });
        }
      }
      if (selectedImage.order < contentfulFotogalerie.fotky.length - 1) {
        const nextImage =
          contentfulFotogalerie.fotky[selectedImage.order + 1].large;
        setSelectedImage({
          image: nextImage,
          order: selectedImage.order + 1,
        });
      }
    }
  };

  return (
    <>
      <div id='galerie' className='relative w-full'>
        {!isMobile && !isAtStart && (
          <button
            className='absolute left-10 top-28 z-20'
            onClick={() => scrollGallery('left')}
          >
            <img
              src={ArrowLight}
              alt='Posuň galerii doleva'
              className='transform rotate-180 hover:scale-110'
            />
          </button>
        )}
        <div
          ref={galleryRef}
          className='grid grid-flow-col auto-cols-max gap-1 w-full whitespace-nowrap overflow-x-scroll no-scrollbar p-4 bg-neutral-800 bg-blend-screen bg-opacity-15'
        >
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
        {!isMobile && !isAtEnd && (
          <button
            className='absolute right-10 bottom-28'
            onClick={() => scrollGallery('right')}
          >
            <img
              src={ArrowLight}
              alt='Posuň galerii doprava'
              className='hover:scale-110'
            />
          </button>
        )}
      </div>

      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-80 hover:cursor-pointer flex items-center justify-center z-50'
          onClick={() => setSelectedImage(null)}
        >
          <div className='relative p-44'>
            <button
              className='absolute left-10 top-1/2 transform -translate-y-1/2'
              onClick={(e) => changeSelectedImage(e, true)}
            >
              <img
                src={ArrowLight}
                alt='Posuň galerii doleva'
                className='transform rotate-180 hover:scale-110'
              />
            </button>
            <button
              className='absolute top-40 right-20 '
              onClick={() => setSelectedImage(null)}
            >
              <img src={Cross} alt='Zavři detail galerie' />
            </button>
            <GatsbyImage
              image={selectedImage.image}
              alt=''
              className='max-w-full max-h-full object-contain'
            />
            <button
              className='absolute right-10 top-1/2 transform -translate-y-1/2'
              onClick={(e) => changeSelectedImage(e, false)}
            >
              <img
                src={ArrowLight}
                alt='Posuň galerii doprava'
                className='hover:scale-110'
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
