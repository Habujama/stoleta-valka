import { ReactElement } from 'react';

interface SectionTextContentProps {
  text: ReactElement;
  subtitle?: string;
}

const SectionTextContent = ({ subtitle, text }: SectionTextContentProps) => {
  return (
    <span>
      {subtitle && <h4 className='text-2xl md:text-3xl mb-4'>{subtitle}</h4>}
      {text}
    </span>
  );
};

export default SectionTextContent;
