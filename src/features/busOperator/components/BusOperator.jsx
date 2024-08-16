import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createBusOperatorAsync } from "../BusOperatorSlice";

export default function BusOperator() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register Bus Operator
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            console.log(data);
            dispatch(
              createBusOperatorAsync({
                operatorName: data.operatorName,
                contactEmail: data.contactEmail,
                contactPhone: data.contactPhone,
                logoUrl: data.logoUrl,
              })
            );
          })}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="operatorName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Operator Name
            </label>
            <div className="mt-2">
              <input
                id="operatorName"
                {...register("operatorName", {
                  required: "Operator Name is required",
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.operatorName && (
                <p className="text-red-500">{errors.operatorName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contact Email
            </label>
            <div className="mt-2">
              <input
                id="contactEmail"
                {...register("contactEmail", {
                  required: "Contact Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.contactEmail && (
                <p className="text-red-500">{errors.contactEmail.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="contactPhone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contact Phone
            </label>
            <div className="mt-2">
              <input
                id="contactPhone"
                {...register("contactPhone", {
                  required: "Contact Phone is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                type="tel"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.contactPhone && (
                <p className="text-red-500">{errors.contactPhone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="logoUrl"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Logo URL
            </label>
            <div className="mt-2">
              <input
                id="logoUrl"
                {...register("logoUrl", {
                  required: "Logo URL is required",
                  pattern: {
                    value: /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/,
                    message: "Enter a valid image URL",
                  },
                })}
                type="url"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.logoUrl && (
                <p className="text-red-500">{errors.logoUrl.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
