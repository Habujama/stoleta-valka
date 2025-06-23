import { ReactNode } from 'react';
import Title, { TitleLevel } from './title';

interface SmallTextBlockWithTitleProps {
  title?: string;
  paragraph: ReactNode;
  id?: string;
}

const SmallTextBlockWithTitle = ({
  title,
  paragraph,
  id,
}: SmallTextBlockWithTitleProps) => (
  <div className='flex flex-col' id={id}>
    {title && <Title level={TitleLevel.H4}>{title}</Title>}
    <div className='text-xl font-serif'>{paragraph}</div>
  </div>
);

export default SmallTextBlockWithTitle;
