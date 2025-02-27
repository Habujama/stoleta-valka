import { ReactNode } from 'react';
import Title, { TitleLevel } from './title';

interface TextBlockWithTitleProps {
  title: string;
  paragraph: ReactNode;
}

const TextBlockWithTitle = ({ title, paragraph }: TextBlockWithTitleProps) => (
  <div className='flex flex-col text-center max-w-4xl mx-auto gap-y-4 mt-16 xl:mt-32 mb-24 xl:mb-28'>
    <Title level={TitleLevel.H3} className='underline-offset-8'>
      {title}
    </Title>
    <p className='text-center text-xl 2xl:text-3xl'>{paragraph}</p>
  </div>
);

export default TextBlockWithTitle;
