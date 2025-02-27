interface SellingPointProps {
  text: string;
  title: string;
  staticImage: any;
}

const SellingPoint = ({ text, title, staticImage }: SellingPointProps) => (
  <li className='gap-x-2 md:gap-x-0'>
    {staticImage}
    <h3 className='text-center -translate-y-16 -mt-3 md:-mt-0 md:-translate-y-24 lg:-translate-y-16 w-fit mx-auto'>
      {title}
    </h3>
    <p className='flex flex-col justify-start font-bold text-center text-xl 2xl:text-3xl max-w-md'>
      {text}
    </p>
  </li>
);

export default SellingPoint;
