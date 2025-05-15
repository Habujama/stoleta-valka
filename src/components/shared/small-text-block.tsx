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
  <div
    className="flex flex-col text-centerspace-y-3"
    id={id}
  >
    {title && (
      <Title level={TitleLevel.H4} className='text-center'>
        {title}
      </Title>
    )}
    <p className='text-center text-xl'>{paragraph}</p>
  </div>
);

export default SmallTextBlockWithTitle;
