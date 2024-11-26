import { ContactInfo, FormInputs } from "../data";
import HeadingText from "../HeadingText";
import Btn from "../UI/Btn";
import InputForm from "../UI/InputForm";
import { ChangeEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Validation } from "../Validation/Validation";
import Error from "../Error/Error";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const sendEmail = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = Validation({
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
    });

    setErrors(errors);

    const emptyValues =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!emptyValues) {
      return;
    }

    emailjs
      .sendForm("service_qwf0yvj", "template_ofvo0fg", form.current, {
        publicKey: "16v88YXOSnjk_IzN9",
      })
      .then(
        () => {
          toast.success("Message sent successfully");
          setTimeout(() => {
            location.replace("/");
          }, 1500);
        },
        (error) => {
          toast.error("something went wrong", error);
        }
      );
  };

  return (
    <section id="contact">
      <div className="container mx-auto">
        <HeadingText heading="contact" />

        <div className="contact-body flex  flex-col-reverse lg:flex lg:flex-row  justify-between space-x-10">
          <form
            ref={form}
            className=" px-10 lg:px-0 mt-5 lg:mt-0  lg:max-w-full flex-1"
            onSubmit={sendEmail}
          >
            {FormInputs.map(({ name, placeholder, type }, idx) => (
              <div className="mb-5" key={idx}>
                <label
                  htmlFor={name}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {placeholder}
                </label>
                <InputForm name={name} type={type} />
                <Error error={errors[name]} />
              </div>
            ))}

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={5}
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 mb-5 bg-gray-50 rounded-lg border focus:outline-none border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>

            <Btn type="submit"> send message </Btn>
          </form>

          <div className="info flex-1">
            <p className="capitalize leading-7 mb-5 text-sm md:text-lg">
              Driven by a passion for innovation and design, committed to
              delivering seamless user experiences by combining technical
              proficiency with creative problem-solving. my ability to adapt to
              new challenges and stay updated with the latest trends in web
              development makes me a valuable contributor to any team or
              project. Whether it's building intuitive dashboards, dynamic
              portfolios, or scalable applications, I strive to turn ideas into
              reality with precision and dedication.
            </p>

            {ContactInfo.map(({ icon, contact }, idx) => (
              <div key={idx} className="flex items-center space-x-4 mb-3">
                <span>{icon}</span>
                <span>{contact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
