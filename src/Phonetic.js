import "./Phonetic.css";

export default function Phonetic({ text }: { text: string }) {
  return (
    <div className="Phonetic">
      <div>{text}</div>
    </div>
  );
}
