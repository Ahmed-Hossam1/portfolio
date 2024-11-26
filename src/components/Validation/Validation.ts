interface IProps {
  firstName: string;
  lastName: string;
  email: string;
}
export const Validation = (Inputs: IProps) => {
  const errors: {
    firstName: string;
    lastName: string;
    email: string;
  } = {
    firstName: "",
    lastName: "",
    email: "",
  };

  if (!Inputs.firstName.trim()) {
    errors.firstName = "firstName required";
  }
  if (!Inputs.lastName.trim()) {
    errors.lastName = "lastName required";
  }
  if (
    !Inputs.email.trim() ||
    !Inputs.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  ) {
    errors.email = "email required or not valid";
  }
  return errors;
};
