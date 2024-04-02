import Meaning from "./Meaning";
import Phonetic from "./Phonetic.js";
import AudioPlayer from "./AudioPlayer.js";
import {
  Result as ResultT,
  Phonetic as PhoneticT,
  Meaning as MeaningT
} from "./types"
import "./Results.css";


export default function Result({ results } : { results?: ResultT }) {
  if (results) {
    return (
      <div className="Results">
        <h1 className="word">{results.word}</h1>
        <div className="row">
          <div className="col-8"></div>
          <div className="col-2">
            {results.phonetics.map((phonetic: PhoneticT, index: number) => {
              if (index < 1) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>

          <div className="col-2">
            {results.phonetics.map((phonetic: PhoneticT, index: number) => {
              return (
                <div key={index}>
                  <AudioPlayer audio={phonetic.audio} />
                </div>
              );
            })}
          </div>
        </div>

        <br />
        <div className="horizontal"></div>

        {results.meanings.map((meaning: MeaningT, index: number) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
