import React, { useState, useRef  } from "react";
import "./App.css";
import audioFile from './assets/sound/shine.mp3';
function App() {
  const [phrase, setPhrase] = useState(""); // State to hold the selected phrase
  const [animate, setAnimate] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    setAnimate(true);
    audioRef.current.play();
    setTimeout(() => setAnimate(false), 1100); // Reset animation after 1 second
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
      <p id="toggle-heart" className={`heart ${animate ? "animate" : ""} `} > </p>
      <label for="toggle-heart" aria-label="like" onClick={handleClick}>❤</label>
      <audio ref={audioRef} src={audioFile} type="audio/mpeg" />
      </div>
      <div className="box" style={{ top: "30%" }}>
      <p className="phrase">{phrase} </p>
      </div>
    </div>
  );
}

export default App;