//https://www.npmjs.com/package/libphonenumber-js
import parsePhoneNumber, { PhoneNumber } from "libphonenumber-js";
import React, { useState, useEffect } from "react";
import { SendDataInterface } from "@/SendDataInterface";

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
  const [messageValue, setMessageValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");

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

  const subjectChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSubjectValue(ev.target.value);
  };

  const messageChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMessageValue(ev.target.value);
  };

  const sendDataUsingService = (data: { name: string; email: string }) => {
    SendDataInterface.sendForm(data);
  };

  const formSubmitHandler = (ev: any) => {
    ev.preventDefault();
    const user = {
      name: nameValue,
      email: emailValue,
    };

    //sendDataUsingService(user);
    SendDataInterface.sendPet({
      id: 102,
      name: user.name,
      category: { id: 103, name: user.name },
    });
    /*axios
      .post("https://mailthis.to/andrew2263@gmail.com", {
        email: "foo@bar.co",
        _subject: "hi!",
        message: "Test",
      })
      .then(() => {
        location.href = "https://mailthis.to/confirm";
      });
*/
    setNameValue("");
    setEmailValue("");
    setSubjectValue("");
    setMessageValue("");
  };

  const phoneNumber1: PhoneNumber | undefined =
    parsePhoneNumber("+37322410273");
  const phoneNumber2: PhoneNumber | undefined =
    parsePhoneNumber("+74957704027");
  const phoneNumber3: PhoneNumber | undefined =
    parsePhoneNumber("+40213036969");
  const phoneNumber4: PhoneNumber | undefined =
    parsePhoneNumber("+380442372060");

  const phone5: string = "+37322410273";
  const phone6: string = "+74957704027";
  const phone7: string = "+40213036969";
  const phone8: string = "+380442372060";

  const oneDigit: string[] = ["1", "7"];
  const twoDigits: string[] = [
    "20",
    "27",
    "28",
    "30",
    "31",
    "32",
    "33",
    "34",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "81",
    "82",
    "84",
    "86",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "98",
  ];

  const numberDigit = (phone: string) => {
    for (let i = 0; i < oneDigit.length; i++) {
      if (phone.substring(1, 2) === oneDigit[i]) {
        return 1;
      }
    }
    for (let j = 0; j < twoDigits.length; j++) {
      if (phone.substring(1, 3) === twoDigits[j]) {
        return 2;
      }
    }
    return 3;
  };

  const parsePhone = (phone: string) => {
    const phoneArr = phone.split("");
    const phoneArrChange = [...phoneArr];
    let el = 4;
    let spaceNumbers = Math.ceil((phoneArr.length - 1) / 3) - 1;

    if (numberDigit(phone) === 1) {
      spaceNumbers = Math.ceil((phoneArr.length - 1) / 3);
      el = 2;
    }
    if (numberDigit(phone) === 2) {
      el = 3;
    }

    for (let i = 0; i < spaceNumbers; i++) {
      phoneArrChange.splice(el, 0, " ");
      if (i === spaceNumbers - 2 && phoneArrChange.length - el < 7) {
        el = el + 3;
      } else {
        el = el + 4;
      }
    }
    return phoneArrChange.join("");
  };

  const addSpaces = (num: string) => {
    return num.replace(/(\d{2,3}(?=(?:\d{2})))/g, "$1" + " ");
  };

  const rexpSpec = /\.|\ |\(|\)|\-/;

  const formatPhone = (phone: string) => {
    const resPhone = /^\+/.test(phone)
      ? phone.split("+")
      : phone.replace(/\\n/g, "").replace(/\\t/g, "");
    const returnedPhone = Array.isArray(resPhone)
      ? resPhone
          .map((el) => {
            if (el) {
              return rexpSpec.test(el)
                ? `+${el.replace(/\n/g, "").replace(/\t/g, "")}`
                : `+${addSpaces(el.replace(/\n/g, "").replace(/\t/g, ""))}`;
            }
            return "";
          })
          .filter((el) => el != "")
      : rexpSpec.test(resPhone)
      ? resPhone
      : addSpaces(resPhone);
    return returnedPhone;
  };

  const phone10: string = "+375 666 744 12 12";
  const phone11: string = "+401234745469";
  const phone12: string = "+(376)444 112 45";
  const phone13: string = "062.144-12 44";
  const phone14: string = "060555489363";
  const phone15: string = "+373-60 811-342";
  const phone16: string = "+375 55 121 444+375 411 88 47\n\t\t";

  console.log(formatPhone(phone10));
  console.log(formatPhone(phone11));
  console.log(formatPhone(phone12));
  console.log(formatPhone(phone13));
  console.log(formatPhone(phone14));
  console.log(formatPhone(phone15));
  console.log(formatPhone(phone16));

  return (
    <>
      <form
        onSubmit={formSubmitHandler}
        action="https://mailthis.to/"
        method="POST"
        encType="multipart/form-data"
        className="mb-10"
      >
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
        <div className="mb-2">
          <input
            id="subject"
            name="_subject"
            className="border-2 rounded-lg mr-3 border-gray-800"
            type="text"
            value={subjectValue}
            placeholder="Subject"
            onChange={subjectChangeHandler}
          />
        </div>
        <div className="mb-2">
          <input
            id="message"
            name="message"
            className="border-2 rounded-lg mr-3 border-gray-800"
            type="text"
            value={messageValue}
            placeholder="Subject"
            onChange={messageChangeHandler}
          />
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
      <div className="border-2 border-gray-700 p-5">
        <p>{phoneNumber1?.formatInternational()}</p>
        <p>{phoneNumber2?.formatInternational()}</p>
        <p>{phoneNumber3?.formatInternational()}</p>
        <p>{phoneNumber4?.formatInternational()}</p>
      </div>
      <div className="border-2 border-gray-700 p-5">
        <p>{parsePhone(phone5)}</p>
        <p>{parsePhone(phone6)}</p>
        <p>{parsePhone(phone7)}</p>
        <p>{parsePhone(phone8)}</p>
      </div>
    </>
  );
};

export default Form;
