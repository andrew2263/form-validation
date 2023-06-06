import { useState } from "react";

const SearchInput = ({
  setToRemove,
}: {
  setToRemove: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        className="border border-white rounded-md p-2 text-white bg-slate-700 w-full"
        placeholder="Search"
        onFocus={() => {
          setFocus(true);
          setToRemove(true);
        }}
      />
      {isFocus && (
        <div className="fixed top-0 left-0 h-screen w-screen z-40 overflow-hidden bg-yellow-200 p-10">
        {/*<div className="fixed top-0 bottom-0 left-0 right-0 overflow-hidden z-40 bg-yellow-200 p-10">*/}
          <input
            type="text"
            name="search"
            id="search"
            className="border border-slate-800 rounded-md p-2 mb-10 text-black bg-blue-100 w-full"
            placeholder="Search"
          />
          <button
            className="border border-slate-800 p-3 bg-red-200"
            onClick={() => {
              setFocus(false);
              setToRemove(false);
            }}
          >
            CLOSE
          </button>
        </div>
      )}
    </>
  );
};

export default SearchInput;
