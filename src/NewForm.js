import { useState } from "react";

const NewForm = () => {
  const [word, setWord] = useState("");

  const handleChange = (evt) => {
    setWord(evt.target.value);
  };

  return (
    <div className="newItem">
      <h4>New Item</h4>
      <input className="input" type="text" onChange={handleChange} value={word} />
      {}
      <h1>{word}</h1>
    </div>
  );
};

export default NewForm;
