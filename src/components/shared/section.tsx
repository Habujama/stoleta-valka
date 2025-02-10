import { ReactElement } from 'react';
import SectionTextContent from './section-text-content';

interface SectionProps {
  text: ReactElement;
  subtitle?: string;
  image?: ReactElement;
  imageRight?: boolean;
  reverseOnMobile?: boolean;
}

const Section = ({
  text,
  subtitle,
  image,
  imageRight = false,
  reverseOnMobile = false,
}: SectionProps) => (
  <div className='mt-12 mb-6'>
    <div
      className={`flex {${reverseOnMobile} ? flex-col-reverse : flex-col} md:grid md:grid-rows-1 md:grid-cols-6 md:gap-x-4 text-center items-center md:text-left pb-4`}
    >
      <div className={imageRight ? 'md:col-span-4' : 'md:col-span-2'}>
        {imageRight ? (
          <SectionTextContent text={text} subtitle={subtitle} />
        ) : (
          image
        )}
      </div>
      <div className={imageRight ? 'md:col-span-2' : 'col-span-4'}>
        {imageRight ? (
          image
        ) : (
          <SectionTextContent text={text} subtitle={subtitle} />
        )}
      </div>
    </div>
  </div>
);

export default Section;
