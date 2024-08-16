import axios from "axios";
export function createBusOperator(operators) {
  return new Promise(async (resolve, reject) => {
    console.log("Sending request with data:", operators);
    axios
      // .post("http://localhost:8080/api/bus-opeartors", operators,
      .post("http://localhost:3000/operators", operators, {
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
