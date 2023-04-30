import axios from "axios";
import React, { useState, useEffect } from "react";

const Form: React.FC = () => {
  const [nameSymbols, setNameSymbols] = useState(0);
  const [emailSymbols, setEmailSymbols] = useState(0);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  let isEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  useEffect(() => {
    setFormIsValid(emailIsValid && nameIsValid);
  }, [emailIsValid, nameIsValid]);

  const nameChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNameSymbols(ev.target.value.length);
    setNameIsValid(ev.target.value.length >= 2);
    setNameValue(ev.target.value);
  };

  const emailChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmailSymbols(ev.target.value.length);
    setEmailIsValid(isEmail.test(ev.target.value));
    setEmailValue(ev.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const sendData = async (data: object, onSuccess: (a: string) => void) => {
    const response = await fetch(
      "https://formnext-e6766-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Fetch error");
    } else {
      onSuccess("Form is submitted!");
    }
  };

  const instance = axios.create({
    baseURL: "https://formnext-e6766-default-rtdb.firebaseio.com/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  const sendAxiosData = async (data: { name: string; email: string }) => {
    /*
    await axios
      .post(
        "https://formnext-e6766-default-rtdb.firebaseio.com/axios-data.json",
        {
          name: data.name,
          email: data.email,
        }
      )
      .then((response) => {
        alert("Form is submitted!");
      })
      .catch((error) => {
        throw new Error(error);
      });
*/
    await instance.post("axios-data.json", {
      name: data.name,
      email: data.email,
    })
    .then((response) => {
      alert("Form is submitted!");
    })
    .catch((error) => {
      throw new Error(error);
    });
  };

  const formSubmitHandler = (ev: any) => {
    ev.preventDefault();
    const user = {
      name: nameValue,
      email: emailValue,
    };

    //sendData(user, alert);
    sendAxiosData(user);

    setNameValue("");
    setEmailValue("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className="mb-10">
        <div className="mb-2">
          <input
            className={`border-2 rounded-lg mr-3 ${
              nameIsTouched && !nameIsValid
                ? "border-red-600"
                : "border-gray-400"
            }`}
            id="name"
            type="text"
            value={nameValue}
            placeholder="Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          <span className={!nameIsValid ? "text-red-600" : "text-slate-800"}>
            {nameSymbols} / 50
          </span>
        </div>
        <div className="mb-2">
          <input
            id="email"
            className={`border-2 rounded-lg mr-3 ${
              emailIsTouched && !emailIsValid
                ? "border-red-600"
                : "border-gray-800"
            }`}
            type="email"
            value={emailValue}
            placeholder="E-mail"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          <span className={!emailIsValid ? "text-red-600" : "text-slate-800"}>
            {emailSymbols} / 50
          </span>
        </div>
        <button
          type="submit"
          className="bg-slate-500 px-10 py-4 text-slate-100 rounded-lg disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-400"
          disabled={!formIsValid}
        >
          Submit
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
        <div className="h-20 bg-red-950 sm:col-span-3 shadow-xl shadow-slate-400"></div>
        <div className="h-20 bg-red-950 sm:col-span-1"></div>
      </div>
    </>
  );
};

export default Form;
