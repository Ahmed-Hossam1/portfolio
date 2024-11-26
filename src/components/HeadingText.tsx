interface IProps {
  heading: string;
}
const HeadingText = ({ heading }: IProps) => {
  return (
    <h1 className="capitalize w-fit text-2xl md:text-3xl lg:text-5xl font-bold my-10 ml-5 md:ml-0  text-mainColor font-instrument italic relative after:absolute after:-bottom-4 after:left-0 after:w-1/3 after:h-1 after:bg-mainColor after:hover:w-full after:hover:transition-all after:hover:duration-300">
      {heading}
    </h1>
  );
};

export default HeadingText;
