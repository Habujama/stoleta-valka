import { ReactElement } from 'react';

export enum TitleLevel {
  'H1' = 'h1',
  'H2' = 'h2',
  'H3' = 'h3',
  'H4' = 'h4',
  'H5' = 'h5',
}

interface TitleProps {
  children: string | ReactElement;
  level: TitleLevel;
  className?: string;
}

const Title = ({ children, level, className }: TitleProps) => {
  const Tag = level as keyof JSX.IntrinsicElements;

  const levelStyles: Record<TitleLevel, string> = {
    [TitleLevel.H1]: 'text-5xl font-bold',
    [TitleLevel.H2]: 'text-xl font-semibold',
    [TitleLevel.H3]: 'text-2xl font-medium underline underline-offset-8',
    [TitleLevel.H4]: 'text-xl font-normal',
    [TitleLevel.H5]: 'text-lg font-light',
  };

  return (
    <Tag className={`${levelStyles[level]}, ${className || ''}`}>
      {children}
    </Tag>
  );
};

export default Title;
