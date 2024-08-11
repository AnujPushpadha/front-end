import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUserInfo } from "../userSlice";
// import { updateUserAsync } from "../userSlice";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserInfo);

  console.log(user);
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        User Details
      </h1>
      <div className="space-y-2">
        <p>
          <strong className="text-gray-600">First Name:</strong>{" "}
          <span className="text-gray-800">{user.firstname}</span>
        </p>
        <p>
          <strong className="text-gray-600">Last Name:</strong>{" "}
          <span className="text-gray-800">{user.lastname}</span>
        </p>
        <p>
          <strong className="text-gray-600">Email:</strong>{" "}
          <span className="text-blue-600">{user.email}</span>
        </p>
        <p>
          <strong className="text-gray-600">Phone Number:</strong>{" "}
          <span className="text-gray-800">{user.phoneNumber}</span>
        </p>
        <p>
          <strong className="text-gray-600">Role:</strong>{" "}
          <span className="text-gray-800">{user.role}</span>
        </p>
        <p>
          <strong className="text-gray-600">Username:</strong>{" "}
          <span className="text-gray-800">{user.username}</span>
        </p>
        <p>
          <strong className="text-gray-600">ID:</strong>{" "}
          <span className="text-gray-800">{user.id}</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
