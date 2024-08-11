import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { createRoutesAsync } from "../routesSlice";

export default function DistanceForm() {
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
          Enter Travel Details
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            dispatch(
              createRoutesAsync([
                {
                  origin: data.origin,
                  destination: data.destination,
                  distance: data.distance,
                },
              ])
            );
          })}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="origin"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Origin
            </label>
            <div className="mt-2">
              <input
                id="origin"
                {...register("origin", {
                  required: "Origin is required",
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.origin && (
                <p className="text-red-500">{errors.origin.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="destination"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Destination
            </label>
            <div className="mt-2">
              <input
                id="destination"
                {...register("destination", {
                  required: "Destination is required",
                })}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.destination && (
                <p className="text-red-500">{errors.destination.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="distance"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Distance (in km)
            </label>
            <div className="mt-2">
              <input
                id="distance"
                {...register("distance", {
                  required: "Distance is required",
                  valueAsNumber: true,
                })}
                type="number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.distance && (
                <p className="text-red-500">{errors.distance.message}</p>
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
