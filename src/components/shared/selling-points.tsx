interface SellingPointProps {
  text: string;
  title: string;
  staticImage: any;
}

const SellingPoint = ({ text, title, staticImage }: SellingPointProps) => (
  <li className='flex flex-col gap-x-2 md:gap-x-0'>
    {staticImage}
    <h3 className='sr-only'>{title}</h3>
    <p className='flex flex-col justify-start font-bold text-center pt-1 md:pt-0 text-xl 2xl:text-2xl max-w-md'>
      {text}
    </p>
  </li>
);

export default SellingPoint;
