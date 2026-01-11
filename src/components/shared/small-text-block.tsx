import { ReactNode } from 'react';
import Title, { TitleLevel } from './title';

interface SmallTextBlockWithTitleProps {
  title?: string;
  paragraph: ReactNode;
  id?: string;
  withBg?: boolean;
  className?: string;
}

const SmallTextBlockWithTitle = ({
  title,
  paragraph,
  id,
  withBg = false,
  className,
}: SmallTextBlockWithTitleProps) => (
  <div
    className={`flex flex-col 
      ${
        withBg &&
        'p-4 bg-yellow-50 bg-opacity-15 rounded-md border-opacity-25 border-solid border-2 border-yellow-50 shadow-sm shadow-yellow-50'
      } ${className}`}
    id={id}
  >
    {title && <Title level={TitleLevel.H4}>{title}</Title>}
    <div className='text-xl font-serif'>{paragraph}</div>
  </div>
);

export default SmallTextBlockWithTitle;
