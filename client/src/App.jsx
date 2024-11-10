import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const demo = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full  bg-black">
      <div className="container min-h-screen mx-auto flex items-center justify-center">
        <form
          onSubmit={handleSubmit(demo)}
          className="w-full max-w-lg py-8 px-12 rounded-xl shadow-lg shadow-red-500 transition duration-300 flex flex-col gap-8"
        >
          <h2 className="text-white text-center text-4xl tracking-wide font-extralight">
            Register Form
          </h2>

          <input
            id="name"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter name.."
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 10,
            })}
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-white">Fill the gap!!!</span>
          )}

          <select
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            id="gender"
            {...register("gender", {
              required: true,
            })}
          >
            <option className="text-black" value="male">
              Male
            </option>
            <option className="text-black" value="female">
              Female
            </option>
          </select>
          {errors.gender && errors.gender.type === "required" && (
            <span className="text-white">Gender qeyd edin</span>
          )}

          <input
            id="email"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter email.."
            {...register("email", {
              required: true,
              minLength: 2,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-white">Fill the gap!!!</span>
          )}

          <input
            id="age"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter age.."
            {...register("age", {
              required: true,
              min: 2,
              max: 100,
              pattern: /^[0-9]+$/i,
            })}
          />
          {errors.age && errors.age.type === "required" && (
            <span className="text-white">Fill the gap!!!</span>
          )}
          {errors.age && errors.age.type === "min" && (
            <span className="text-white">Min 2 years old!!!</span>
          )}
          {errors.age && errors.age.type === "max" && (
            <span className="text-white">Not more than 100 years old!!!</span>
          )}
          {errors.age && errors.age.type === "pattern" && (
            <span className="text-white">FUse correct patterns!!!</span>
          )}

          <input
            id="password"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter password.."
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-white">Fill the gap!!!</span>
          )}

          <input
            id="resetPassword"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter resetPassword.."
            {...register("resetPassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
          />
          {errors.resetPassword && errors.resetPassword.type === "required" && (
            <span className="text-white">Write the password again!!!</span>
          )}
          {errors.resetPassword && errors.resetPassword.type === "validate" && (
            <span className="text-white">Write the password again!!!</span>
          )}

          <button
            className="text-white bg-red-500 py-2 text-2xl uppercase font-bold tracking-wider transition-all duration-300 hover:rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;