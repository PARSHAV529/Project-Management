import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const fields = [
  {
    label: "First Name",
    type: "text",
    placeholder: "Parshav",
    required: true,
    gridCols: 1,
  },
  {
    label: "Last Name",
    type: "text",
    placeholder: "Andhariya",
    required: true,
    gridCols: 1,
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Parshav143@example.com",
    required: true,
    gridCols: 2,
  },
  
  
  {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    gridCols: 1,
  },
  {
    label: "Confirm Password",
    type: "password",
    placeholder: "Confirm your password",
    required: true,
    gridCols: 1,
  },
  
];

export default function RegisterForm({handelloginButton}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handelloginButton()
  };
  return (
    <div className="ml-[250px]">
      <div className="container mx-auto text-stone-600">
        <div className="lg:w-7/12 pb-10 pt-5 w-full p-4 flex flex-wrap justify-center shadow-2xl my-20 rounded-md mx-auto">
          <div className="pb-5 ">
            <h1 className="text-3xl  font-bold">Register Form</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start items-center w-full m-auto"
          >
            <div className="grid grid-cols-1  my-6 md:grid-cols-2 gap-3 w-full">
              {fields.map((field, index) => (
                <div
                  key={index}
                  className={`text-left flex flex-col gap-2 w-full ${
                    field.gridCols === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <label className="font-semibold">{field.label}</label>
                  <input
                    {...register(field.label.toLowerCase(), {
                      required: field.required,
                    })}
                    className={`border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-stone-500 ${
                      field.gridCols === 2 ? "md:w-full" : ""
                    }`}
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                  {errors[field.label.toLowerCase()] && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              ))}
            </div>

            <div className="w-full text-left">
              <button
                type="submit"
                className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-stone-600 text-white text-md font-bold border border-stone-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-stone-500 lg:m-0 md:px-6"
               
                // onClick={}
              >
                <span>Register</span>
                <HiOutlineArrowCircleRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}