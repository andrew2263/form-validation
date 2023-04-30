import React, { useState, useEffect } from "react";
import { AuthInterface } from "@/AuthInterface";

const RegisterForm: React.FC = () => {

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  

  const firstNameChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameValue(ev.target.value);
  };

  const lastNameChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameValue(ev.target.value);
  };

  const nicknameChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(ev.target.value);
  };

  const passwordChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(ev.target.value);
  };

  const sendDataUsingService = (data: {"first_name": string, "last_name": string, "login": string, "password": string}) => {
    AuthInterface.register(data);
  };

  const formSubmitHandler = (ev: any) => {
    ev.preventDefault();
    const user = {
      "first_name": firstNameValue,
      "last_name": lastNameValue,
      "password": passwordValue,
      "login": nicknameValue
    };

    //sendDataUsingService(user);

    //AuthInterface.getUser();

    const formData = new FormData(ev.target);
    console.log(formData);

    setFirstNameValue("");
    setLastNameValue("");
    setPasswordValue("");
    setNicknameValue("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler} className="mb-10">
        <div className="mb-2">
          <input
            className="border-2 rounded-lg mr-3 border-gray-400"
            id="first_name"
            name="first_name"
            type="text"
            value={firstNameValue}
            placeholder="Name"
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className="mb-2">
          <input
            id="last_name"
            className="border-2 rounded-lg mr-3 border-gray-800"
            type="text"
            name="last_name"
            value={lastNameValue}
            placeholder="Last Name"
            onChange={lastNameChangeHandler}
          />
        </div>
        <div className="mb-2">
          <input
            id="nickname"
            className="border-2 rounded-lg mr-3 border-gray-800"
            type="text"
            name="nickname"
            value={nicknameValue}
            placeholder="Nickname"
            onChange={nicknameChangeHandler}
          />
        </div>
        <div className="mb-2">
          <input
            id="password"
            className="border-2 rounded-lg mr-3 border-gray-800"
            type="password"
            name="password"
            value={passwordValue}
            placeholder="Password"
            onChange={passwordChangeHandler}
          />
        </div>
        <button
          type="submit"
          className="bg-slate-500 px-10 py-4 text-slate-100 rounded-lg disabled:bg-slate-200 disabled:cursor-not-allowed disabled:text-slate-400"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
