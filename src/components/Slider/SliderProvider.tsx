interface IProps {
  className?: string;
  children: React.ReactNode;
}
const SliderProvider = ({ children, className }: IProps) => {
  return (
    <div className="slider mask mx-auto relative overflow-hidden w-full ">
      <div
        className={`slider-track ${className}  flex items-center space-x-5 whitespace-nowrap`}
      >
        {children}
      </div>
    </div>
  );
};

export default SliderProvider;
