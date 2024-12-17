import React, { useState } from "react";
import "./App.css";

function App() {
  const [phrase, setPhrase] = useState(""); // State to hold the selected phrase
  const [isChecked, setIsChecked] = useState(false); // State to manage checkbox status

  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500); // Reset animation after 1 second

    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(randomPhrase);
  };

  const phrases = [
    "Un petit dragon pense à toi 🐉💖",
    "Ma renarde d'amour 🦊",
    "Je t'aime 😘",
    "Câlin virtuel !! 🥰",
    "Tu vas y arriver ma chérie !! ✨",
    "Il me tarde de rentrer ce soir 🥳",
    "Rayon d'amour !!!!💥❤️‍🔥",
    "Bisous surprise 🥷❤️",
  ];


  return (
    <div className="stage" >
      <div className="box" style={{ top: "10%" }}>
      <p className="phrase">Clique sur le coeur 👇</p>
      </div>
      <div className="box"  style={{ top: "10%", height: "20vh" }}>
      <p id="toggle-heart" className={`heart ${animate ? "animate" : ""}`} > </p>
      <label for="toggle-heart" aria-label="like" onClick={handleClick}>❤</label>
      </div>
      <div className="box" style={{ top: "30%" }}>
      <p className="phrase">{phrase} </p>
      </div>
    </div>
  );
}

export default App;