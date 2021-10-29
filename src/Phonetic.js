import React from "react";
import "./Phonetic.css";
import audio from "./audio.png";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
       <img src={audio} className="Phonetic-logo img-fluid" alt="audio" />
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
