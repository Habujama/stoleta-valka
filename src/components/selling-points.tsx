import Title, { TitleLevel } from './shared/title';

interface SellingPointProps {
  title: string;
  text: string;
  staticImage: any;
}

const SellingPoint = ({ title, text, staticImage }: SellingPointProps) => (
  <li className='gap-x-2 md:gap-x-0'>
    <>{staticImage}</>
    <div className='flex flex-col justify-start'>
      <Title level={TitleLevel.H3}>{title}</Title>
      <p>{text}</p>
    </div>
  </li>
);

export default SellingPoint;
