import { CreateUser, SignUserIn, SignUserInGoogle } from "@/config/firebase";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormProps {
  formType: "login" | "register";
}

const defaultFormFields = {
  email: "",
  password: ""
};

export function Form({ formType }: FormProps) {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();
  const { email, password } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formType === "login") {
      const result = await SignUserIn(email, password);
      if (result.error) {
        setErrorMsg(result.error);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      }
    } else if (formType === "register") {
      const result = await CreateUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      } else if (result.error) {
        setErrorMsg(result.error);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      }
    }
  };

  return (
    <>
      {errorMsg && (
        <div className="text-slate-600 border border-red-400 bg-red-200 dark:bg-red-800 dark:text-white p-3 rounded-md">
          {errorMsg}
        </div>
      )}
      <motion.div
        initial={{ y: 50, opacity: 0 }} // Start off-screen and transparent
        animate={{ y: 0, opacity: 1 }} // Move to original position, fully visible
        transition={{ ease: "easeOut", duration: 0.5 }} // Smooth out with duration
        className="
        flex flex-col space-y-4 
        p-5 rounded-lg shadow w-full max-w-sm md:max-w-md lg:max-w-lg 
        bg-slate-50/50 dark:bg-gray-700/50 
        border border-slate-200 dark:border-gray-700
      ">
        <form className="flex flex-col space-y-3" onSubmit={handleForm}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-md tracking-wide font-medium text-slate-600 dark:text-slate-200">
              Email
            </label>
            <input
              className=" 
            text-slate-600 dark:text-slate-200
            block w-full p-2.5 rounded-lg text-sm
            border hover:border-slate-400
            focus:outline-none
            dark:bg-slate-600 dark:border-slate-600 dark:hover:border-slate-400
          "
              type="email"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              placeholder="Email"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-md tracking-wide font-medium text-slate-600 dark:text-slate-200">
              Password
            </label>
            <input
              className=" 
            text-slate-600 dark:text-slate-200
            block w-full p-2.5 rounded-lg text-sm
            border hover:border-slate-400
            focus:outline-none
            dark:bg-slate-600 dark:border-slate-600 dark:hover:border-slate-400
          "
              type={!passwordVisible ? "password" : "text"}
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e)
              }
              minLength={8}
              placeholder="Password"
              required
            />
            <div
              className="absolute -inset-y-3 right-0 top-5 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <i className="fa-regular fa-eye"></i>
              ) : (
                <i className="fa-regular fa-eye-slash"></i>
              )}
            </div>
          </div>
          {/* Form Buttons depending on type */}
          <div className="pt-3 flex flex-col space-y-5 items-center">
            <button
              type="submit"
              className="
              w-72 rounded-full text-sm xs:w-48 px-5 py-2.5 bg-[#CADDFF] hover:bg-[#F3D7F4] dark:bg-slate-700 dark:hover:bg-slate-500
              text-slate-600 dark:text-slate-200 font-medium tracking-wide
              bg-transparent hover:bg-slate-200 dark:hover:bg-gray-600/50 
              border border-slate-300 dark:border-slate-600 
              transition-colors duration-300
            ">
              {formType === "login" ? "Log In" : "Register"}
            </button>
            {formType === "login" && (
              <div
                onClick={SignUserInGoogle}
                className="
                flex flex-row items-center space-x-10
                w-72 rounded-full xs:w-48 bg-blue-700 hover:bg-blue-600
                text-sm text-white dark:text-slate-200 font-medium tracking-wide
                px-5 py-2.5 cursor-pointer
              ">
                <img src="/img/google-icon.png" width={20} alt="Google Icon" />
                <span>Log In w/ Google</span>
              </div>
            )}
            <Link
              to={formType === "login" ? "/register" : "/login"}
              className="
              w-72 m-3 rounded-full text-sm xs:w-48 px-5 py-2.5
              text-center text-slate-600 dark:text-slate-200 font-medium tracking-wide
              bg-transparent hover:bg-slate-200 dark:hover:bg-gray-600/50 
              border border-slate-300 dark:border-slate-600 
              transition-colors duration-300
            ">
              {formType === "login" ? (
                "Create Account"
              ) : (
                <>
                  <i className="fa-solid fa-arrow-left-long"></i> Back to Login
                </>
              )}
            </Link>
          </div>
        </form>
      </motion.div>
    </>
  );
}
