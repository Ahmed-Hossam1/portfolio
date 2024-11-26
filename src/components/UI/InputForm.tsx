interface IProps {
  name: string;
  type: string;
  placeholder?: string;
}
const InputForm = ({ name, type , placeholder }: IProps) => {
  return (
    <input
      name={name}
      type={type}
      id={name}
      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      placeholder={placeholder}
      
    />
  );
};

export default InputForm;
