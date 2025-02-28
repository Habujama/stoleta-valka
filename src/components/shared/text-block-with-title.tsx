import { ReactNode } from 'react';
import Title, { TitleLevel } from './title';

interface TextBlockWithTitleProps {
  title: string;
  paragraph: ReactNode;
  centered?: boolean;
}

const TextBlockWithTitle = ({
  title,
  paragraph,
  centered = true,
}: TextBlockWithTitleProps) => (
  <div
    className={`flex flex-col ${
      centered ? 'text-center' : ''
    } max-w-4xl mx-auto gap-y-4 mt-16 xl:mt-32 mb-24 xl:mb-28`}
  >
    <Title
      level={TitleLevel.H3}
      className={`${centered ? 'underline-offset-8' : 'no-underline'}`}
    >
      {title}
    </Title>
    <p className={`${centered ? 'text-center' : ''} text-xl 2xl:text-2xl`}>
      {paragraph}
    </p>
  </div>
);

export default TextBlockWithTitle;
