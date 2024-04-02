import React, { useState, useEffect } from 'react';
import Results from './Results.js';
import Photos from './Photos.js';
import './Dictionary.css';
import { Result as ResultT } from "./types"

export default function Dictionary() {
  let [keyword, setKeyword] = useState<string>('sunset');
  let [results, setResults] = useState<null | ResultT[]>(null);
  let [loading, setLoading] = useState<boolean>(false);
  let [photos, _setPhotos] = useState(null);

  
  if (loading) {
    return (
      <div className="Dictionary">
        <div className="row justify-content-end">
          <form className="col-3" onSubmit={handleSubmit}>
            <input onChange={handleKeyword} type="text" placeholder="Search" />
          </form>
        </div>
        <Results results={results} />
        <br />
        <Photos photos={photos} />
      </div>
    );
  } else {
    return 'Loading';
  }
}
