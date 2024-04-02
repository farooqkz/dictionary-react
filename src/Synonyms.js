import "./Synonyms.css";

export default function Synonyms({ synomyms } { synomyms?: string[] }) {
  if (synonyms) {
    return (
      <ul className="Synonyms">
        {synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
