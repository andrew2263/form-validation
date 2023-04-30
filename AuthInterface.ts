import axios from "axios";

const instance = axios.create({
  baseURL: "https://mlmtyid-app.apms.io/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export class AuthInterface {
  static register(data: {"first_name": string, "last_name": string, "login": string, "password": string}) {
    instance.post("register/", {
      "first_name": data["first_name"],
      "last_name": data["last_name"],
      "login": data["login"],
      "password": data["password"]
    })
    .then((response) => {
      alert("Form is submitted!");
    })
    .catch((error) => {
      throw new Error(error);
    });
  };

  static getCatFact() {
    axios.get("https://catfact.ninja/breeds?limit=443")
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) })
  };

  static getUser() {
    axios.get("https://mlmtyid-app.apms.io/api/user/4")
      .then((response) => { console.log(response) })
      .catch((error) => console.log(error))
  };
}