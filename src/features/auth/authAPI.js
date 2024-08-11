import axios from "axios";

export function createUser(userData) {
  return new Promise(async (resolve, reject) => {
    // console.log(userData);
    axios
      .post("http://localhost:8080/api/signup", userData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        resolve({ data: response.data });
      })
      .catch((error) => {
        reject({
          message: error.response?.data?.message || "Login failed",
        });
      });
  });
}

// For Admin

export function checkAdmin(loginInfo) {
  return new Promise((resolve, reject) => {
    console.log("checkAdmin called");
    axios
      .post("http://localhost:8080/api/signin/admin", loginInfo, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        resolve({ data: response.data });
      })
      .catch((error) => {
        reject({
          message: error.response?.data?.message || "Login failed",
        });
      });
  });
}

// For User
// export function checkUser(loginInfo) {
//   return new Promise(async (resolve, reject) => {
//     const response = await fetch("http://localhost:8080/api/signin/user", {
//       method: "POST",
//       body: JSON.stringify(loginInfo),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     if (response.ok) {
//       resolve({ data });
//     } else {
//       reject({ message: data.message || "Login failed" });
//     }
//   });
// }

export function checkUser(loginInfo) {
  console.log("check usercalled");
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    // console.log(email);
    const response = await fetch("http://localhost:3000/users?email=" + email);
    const data = await response.json();
    // console.log({ data });
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "wrong credentials" });
      }
    } else {
      reject({ message: "user not found" });
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

// export function updateUser(update) {
//   return new Promise(async (resolve) => {
//     const response = await fetch("http://localhost:8080/users/" + update.id, {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: { "content-type": "application/json" },
//     });
//     const data = await response.json();
//     // TODO: on server it will only return some info of user (not password)
//     resolve({ data });
//   });
// }

export function signOut(userId) {
  return new Promise(async (resolve) => {
    // TODO: on server we will remove user session info
    resolve({ data: "success" });
  });
}
