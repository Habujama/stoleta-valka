interface SellingPointProps {
  title: string;
  text: string;
  staticImage: any;
}

const SellingPoint = ({ title, text, staticImage }: SellingPointProps) => {
  const sectionWithImage =
    'grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-x-2 md:gap-x-0 md:gap-y-2';

  return (
    <li className={sectionWithImage}>
      <>{staticImage}</>
      <div className='flex flex-col justify-center'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default SellingPoint;
