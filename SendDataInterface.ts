import axios from "axios";

const instance = axios.create({
  baseURL: "https://formnext-e6766-default-rtdb.firebaseio.com/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

const petInstance = axios.create({
  baseURL: "https://petstore.swagger.io/v2"
});

export class SendDataInterface {
  static sendForm(data: { name: string; email: string }) {
    instance
      .post("axios-data-serv.json", {
        name: data.name,
        email: data.email,
      })
      .then((response) => {
        alert("Form is submitted!");
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  static sendPet(data: {
    id: number;
    name: string;
    category: { id: number; name: string };
  }) {
    petInstance.post("/pet", {
      "id": data.id,
      "name": data.name,
      "category": {
        name: data.name,
        id: data.category.id,
      },
    })
    .then((response) => {
      alert("Form is submitted!");
    })
    .catch((error) => {
      throw new Error(error);
    });
  }
}
