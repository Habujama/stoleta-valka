import { ReactElement } from 'react';

interface SectionProps {
  text: ReactElement;
  subtitle?: string;
  image?: ReactElement;
  imageRight?: boolean;
}

const Section = ({
  text,
  subtitle,
  image,
  imageRight = false,
}: SectionProps) => (
  <div className='mt-12 mb-6'>
    {subtitle && (
      <h4 className='font-serifSmall text-2xl md:text-5xl text-center mb-4 md:mb-0'>
        {subtitle}
      </h4>
    )}
    <div className='grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-6 md:gap-x-4 text-center items-center md:text-left pb-4'>
      <div className={imageRight ? 'md:col-span-4' : 'md:col-span-2'}>
        {imageRight ? text : image}
      </div>
      <div className={imageRight ? 'md:col-span-2' : 'col-span-4'}>
        {imageRight ? image : text}
      </div>
    </div>
  </div>
);

export default Section;
