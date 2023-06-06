import { useState, useEffect, Dispatch, SetStateAction } from "react";

export default function Modal({
  isModal,
  setModal,
}: {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [i1Value, setI1Value] = useState("");
  const [i2Value, setI2Value] = useState("");
  const [i3Value, setI3Value] = useState("");
  const [i4Value, setI4Value] = useState("");
  const [i5Value, setI5Value] = useState("");
  const [i6Value, setI6Value] = useState("");
  const [i7Value, setI7Value] = useState("");
  const [i8Value, setI8Value] = useState("");
  const [i9Value, setI9Value] = useState("");
  const [i10Value, setI10Value] = useState("");
  const [i11Value, setI11Value] = useState("");

  useEffect(() => {
    if (!isModal) {
    document.body.removeAttribute("style");
    document.documentElement.removeAttribute("style");
    }
    if (isModal) {
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.position = "fixed";
      document.documentElement.style.top = "0";
      document.documentElement.style.left = "0";
      document.documentElement.style.right = "0";
      document.documentElement.style.bottom = "0";

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.bottom = "0";
      document.body.style.touchAction = "none"
    }
  }, [isModal]);

  const fChangeHangler = (e: any) => {
    e.preventDefault();
    setI1Value(e.target.value);
  };

  const sChangeHangler = (e: any) => {
    e.preventDefault();
    setI2Value(e.target.value);
  };

  const tChangeHangler = (e: any) => {
    e.preventDefault();
    setI3Value(e.target.value);
  };

  const fourChangeHangler = (e: any) => {
    e.preventDefault();
    setI4Value(e.target.value);
  };

  const fiveChangeHangler = (e: any) => {
    e.preventDefault();
    setI5Value(e.target.value);
  };

  const sixChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI6Value(ev.target.value);
  };

  const sevenChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI7Value(ev.target.value);
  };

  const eightChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI8Value(ev.target.value);
  };

  const nineChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI9Value(ev.target.value);
  };

  const tenChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI10Value(ev.target.value);
  };

  const elChangeHangler = (ev: any) => {
    ev.preventDefault();
    setI11Value(ev.target.value);
  };

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-slate-800/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-[400px] max-h-[100%] overflow-y-scroll">
            <div className="mb-10 flex">
              <label htmlFor="i1" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i1"
                onChange={fChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input1"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i2" className="mb-5">
                Input 2
              </label>
              <input
                type="text"
                id="i2"
                onChange={sChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input2"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i3" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i3"
                onChange={tChangeHangler}
                value={i3Value}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input3"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i4" className="mb-5">
                Input 2
              </label>
              <input
                type="text"
                id="i4"
                onChange={fourChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input4"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i5" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i5"
                onChange={fiveChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input5"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i6" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i1"
                onChange={sixChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input6"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i7" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i7"
                onChange={sevenChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input7"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i8" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i8"
                onChange={eightChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input8"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i9" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i9"
                onChange={nineChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input9"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i10" className="mb-5">
                Input 1
              </label>
              <input
                type="text"
                id="i10"
                onChange={tenChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg w-full"
                placeholder="Input10"
              />
            </div>
            <div className="mb-10 flex">
              <label htmlFor="i11" className="mb-5">
                Input 1
              </label>
              <textarea
                id="i11"
                onChange={elChangeHangler}
                className="border border-slate-500 rounded-xl p-2 text-lg h-[200px] w-full"
                placeholder="Input11"
              />
            </div>
            <button
            type="button"
            onClick={() => setModal(false)}
            className="border border-black rounded-xl py-5 px-10 text-xl bg-slate-200 mb-10"
          >
            Close Modal
          </button>
          </div>
        </div>
      )}
    </>
  );
}
