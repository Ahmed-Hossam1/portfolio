interface IProps {
  error: string ;
}
const Error = ({ error }: IProps) => {
  return <div className="text-sm text-red-600 ">{error}</div>;
};

export default Error;
