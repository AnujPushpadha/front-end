import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoutesAsync, selectRoutes } from "../features/routes/routesSlice";

const SetBuses = () => {
  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    dispatch(fetchRoutesAsync());
  }, [dispatch]);

  const handleRouteChange = (route) => {
    setSelectedRoute(route);
    console.log("Selected Route:", route);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Select a Route:</h2>
      <div className="space-y-4">
        {routes.map((route, index) => (
          <label key={index} className="flex items-center space-x-2">
            <input
              type="radio"
              name="route"
              value={route.id}
              onChange={() => handleRouteChange(route)}
              className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="text-gray-700">
              {route.origin} to {route.destination} ({route.distance} km)
            </span>
          </label>
        ))}
      </div>
      {selectedRoute && (
        <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
          <h3 className="text-lg font-medium">Selected Route Details:</h3>
          <p>
            <strong>Origin:</strong> {selectedRoute.origin}
          </p>
          <p>
            <strong>Destination:</strong> {selectedRoute.destination}
          </p>
          <p>
            <strong>Distance:</strong> {selectedRoute.distance} km
          </p>
        </div>
      )}
    </div>
  );
};

export default SetBuses;
