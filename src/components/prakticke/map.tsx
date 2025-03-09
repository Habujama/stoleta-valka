interface MapProps {
  link: string;
}

const Map = ({ link }: MapProps) => (
  <div>
    <iframe
      src={link}
      className='rounded-xl h-32 md:h-96 w-32 md:w-96 shadow-2xl border-solid border-[1px] border-neutral-600'
      loading='lazy'
    />
  </div>
);

export default Map;
