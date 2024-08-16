import axios from "axios";
export function createRoutes(RoutesData) {
  return new Promise(async (resolve, reject) => {
    console.log("Sending request with data:", RoutesData);
    axios
      // .post("http://localhost:8080/api/routes", RoutesData,
      .post("http://localhost:3000/routes", RoutesData, {
        headers: { "Content-Type": "application/json" },
      })

      .then((response) => {
        console.log("Server response:", response);
        resolve({ data: response.data });
      })
      .catch((error) => {
        console.error("Error in request:", error);
        reject({
          message: error.response?.data?.message || "Request failed",
        });
      });
  });
}
export function fetchRoutes() {
  return new Promise(async (resolve, reject) => {
    axios
      .get("http://localhost:3000/routes")
      .then((response) => {
        // console.log(response);
        resolve({ response: response.data });
      })
      .catch((error) => {
        console.error("Error in request:", error);
        reject({
          message: error.response?.data?.message || "Request failed",
        });
      });
  });
}
