import React, { useState, useRef } from "react";
import "./AudioPlayer.css";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

export default function AudioPlayer({ audio }: { audio?: string }) {
  // console.log(props.audio.phonetics);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const audioPlay = useRef();

  const togglePlayPause = () => {
    if (!isPlaying) {
      audioPlay.current.play();
    } else {
      audioPlay.current.pause();
    }
    setPlaying(!isPlaying);
  };
  if (audio) {
    return (
      <div>
        <audio
          ref={audioPlay}
          src={audio}
          preload="metadata"
        ></audio>
        <button onClick={togglePlayPause} className="btn btn-light playPause">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    );
  } else {
    return null;
  }
}
