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
  withoutBottomMargin?: boolean;
  id?: string;
}

const Title = ({
  children,
  level,
  className,
  withoutBottomMargin = false,
  id,
}: TitleProps) => {
  const Tag = level as keyof JSX.IntrinsicElements;

  const levelStyles: Record<TitleLevel, string> = {
    [TitleLevel.H1]:
      'font-serif text-xl lg:text-3xl font-bold underline underline-offset-8 mb-4 md:mb-6',
    [TitleLevel.H2]:
      'font-serif text-xl lg:text-3xl font-bold  underline underline-offset-8 mb-4 md:mb-6',
    [TitleLevel.H3]:
      'font-serif text-xl lg:text-3xl 2xl:text-3xl font-bold underline underline-offset-8',
    [TitleLevel.H4]: 'font-serif text-base lg:text-lg font-bold',
    [TitleLevel.H5]: 'font-serif text-xl lg:text-2xl font-light',
  };

  return (
    <Tag
      className={`${levelStyles[level]}, ${className || ''} ${
        withoutBottomMargin ? 'mb-0' : 'mb-2'
      }`}
      id={id ? id : undefined}
    >
      {children}
    </Tag>
  );
};

export default Title;
