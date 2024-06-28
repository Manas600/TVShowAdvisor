import { useState } from "react";
import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon size={25} className={s.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        type="text"
        className={s.input}
        value={value}
        placeholder="Search a TV Show"
      />
    </>
  );
}
