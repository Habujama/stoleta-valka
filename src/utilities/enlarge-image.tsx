import ArrowLight from '../assets/sipka-svetla.svg';
import Cross from '../assets/krizek-svetly.svg';
import { Dispatch, SetStateAction } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

export interface ImageProps {
  image: IGatsbyImageData;
  order: number;
}

interface EnlargeImageProps {
  selectedImage: ImageProps | null;
  setSelectedImage: Dispatch<SetStateAction<ImageProps | null>>;
  changeSelectedImage: (e: React.MouseEvent, substract: boolean) => void;
}
const EnlargeImage = ({
  selectedImage,
  setSelectedImage,
  changeSelectedImage,
}: EnlargeImageProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 ">
      {/* KLIKACÍ POZADÍ */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40"
        onClick={() => setSelectedImage(null)}
      />

      {/* VIEWPORT */}
      <div className="relative w-screen h-screen bg-black bg-opacity-40">
        {/* OVLÁDÁNÍ – VŽDY NAVRCHU */}
        <button
          className="absolute top-10 right-10 z-20"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedImage(null);
          }}
        >
          <img src={Cross} alt="Zavřít" />
        </button>

        <button
          className="absolute left-5 top-[50%] -translate-y-1/2 z-20"
          onClick={(e) => {
            e.stopPropagation();
            changeSelectedImage(e, true);
          }}
        >
          <img src={ArrowLight} className="rotate-180" alt="Předchozí" />
        </button>

        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 z-20"
          onClick={(e) => {
            e.stopPropagation();
            changeSelectedImage(e, false);
          }}
        >
          <img src={ArrowLight} alt="Další" />
        </button>

        {/* OBRÁZEK – POD OVLÁDÁNÍM */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-5 pointer-events-none">
          <GatsbyImage
            image={selectedImage.image}
            alt=""
            imgClassName="object-contain"
          />
        </div>
      </div>
    </div>
  );
};




export default EnlargeImage
