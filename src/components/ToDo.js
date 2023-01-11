import { useState, useEffect, useRef } from "react";

function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [toDo, setToDo] = useState([]);
  const [counter, setCounter] = useState(0);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  const listItems = toDo.map((string, index) => (
    <li
      key={index}
      className="flex justify-between mt-2 rounded-lg bg-gray-100"
    >
      <a className="mx-2 my-1 cursor-default select-none overflow-auto">
        {index + 1}-{camelCase(string)}
      </a>
      <div>
        <button
          className="bg-red-600 px-5 text-white right-0 rounded-r-lg h-full"
          onClick={(e) => {
            toDo.splice(index, 1);
            setCounter(counter + 1);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toUpperCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  function checkInputBox(e) {
    if (inputValue.length != 0) {
      if (toDo[toDo.length - 1] == inputValue) {
        alert("Just added!");
      } else {
        setToDo([...toDo, inputValue]);
      }
    } else {
      alert("Textbox can not be empty");
    }
  }
  return (
    <div className="flex flex-col justify-center text-center mt-4 pb-8">
      <div>
        <p className="text-3xl">Welcome To Do</p>
        <p className="opacity-50">Render Count: {count.current}</p>
      </div>
      <div className="mt-4">
        <input
          placeholder="What To Do?"
          className="bg-gray-100 px-2 py-1 rounded-l-lg border shadow text-black"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="px-4 py-1 rounded-r-lg shadow border"
          onClick={checkInputBox}
        >
          Add List
        </button>
      </div>

      <div className="mt-4 flex justify-center">
        <ul className="flex flex-col w-80 text-black">{listItems}</ul>
      </div>
    </div>
  );
}

export default ToDo;
