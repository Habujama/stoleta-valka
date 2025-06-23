import { ReactNode } from 'react';
import Title, { TitleLevel } from './title';

interface TextBlockWithTitleProps {
  title?: string;
  paragraph: ReactNode;
  id?: string;
  withoutTopMargin?: boolean;
}

const TextBlockWithTitle = ({
  title,
  paragraph,
  id,
  withoutTopMargin,
}: TextBlockWithTitleProps) => (
  <div
    className={`flex flex-col text-center
    max-w-4xl mx-auto gap-y-4${
      withoutTopMargin ? '' : 'mt-16 xl:mt-32'
    } mb-8 xl:mb-4`}
  >
    {title && (
      <Title level={TitleLevel.H3} className='underline-offset-8' id={id}>
        {title}
      </Title>
    )}
    <span className='text-center text-xl xl:text-2xl mt-3'>{paragraph}</span>
  </div>
);

export default TextBlockWithTitle;
