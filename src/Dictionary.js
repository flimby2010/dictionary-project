import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Search from "./Search.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [meaning, setMeaning] = useState(null);

  function handleResponse(response) {
    setMeaning(response.data[0]);
  }

  function finding(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={finding}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Meaning meaning={meaning} />
    </div>
  );
}
