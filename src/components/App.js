import "../styles/App.scss";
import objectDataApi from "../services/api.json";
import { useState } from "react";

function App() {
  const [dataApi, setDataApi] = useState(objectDataApi);

  const [dataForm, setDataFrom] = useState({
    quote: "",
    character: "",
  });

  const [inputSearch, setInputSearch] = useState("");

  /*  const [characterFiltered, setCharacterFiltered] = useState("Todos"); */

  const html = dataApi

    .filter((sentence) =>
      sentence.quote
        .toLocaleLowerCase()
        .includes(inputSearch.toLocaleLowerCase())
    )
    .map((oneQuote, index) => (
      <li key={index}>
        {oneQuote.quote} <span> - </span>
        {oneQuote.character}
      </li>
    ));

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInputQuote = (event) => {
    const inputQuote = event.target.value;
    setDataFrom({ ...dataForm, quote: inputQuote });
  };
  const handleInputCharacter = (event) => {
    const inputCharacter = event.target.value;
    setDataFrom({ ...dataForm, character: inputCharacter });
  };

  const handleNewItem = (event) => {
    event.preventDefault();
    setDataApi([...dataApi, dataForm]);
  };

  const handleInputSearchQuote = (event) => {
    setInputSearch(event.target.value);
  };

  /*  const handleCharacterFilter = (event) => {
    setCharacterFiltered(event.currentTarget.value);
  }; */

  return (
    <div className='App'>
      <h1>Frases de Friends</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor='inputSearchQuote'>Filtrar por frase</label>
        <input
          type='text'
          value={inputSearch}
          name='inputSearchQuote'
          onChange={handleInputSearchQuote}
        />
        <label htmlFor='characterFilter'>Filtrar por personaje</label>
        <select
          name='characterFilter'
          id='characterFilter'
          value={dataApi.character}
          /*  onChange={handleCharacterFilter} */
        >
          <option>Todos</option>
          <option>Ross</option>
          <option>Mónica</option>
          <option>Rachel</option>
          <option>Joey</option>
          <option>Chandler</option>
          <option>Phoebe</option>
        </select>
      </form>

      <ul>{html}</ul>

      <h2>Añadir una nueva frase</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='quote'>Frase</label>
        <input
          type='text'
          value={dataForm.quote}
          name='quote'
          onChange={handleInputQuote}
        />
        <label htmlFor='character'>Personaje</label>
        <input
          type='text'
          value={dataForm.character}
          name='character'
          onChange={handleInputCharacter}
        />
        <input
          type='button'
          value='Añadir nueva frase'
          onClick={handleNewItem}
        />
      </form>
    </div>
  );
}

export default App;
