import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataApi from "../services/fetch";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [dataForm, setDataFrom] = useState({
    quote: "",
    character: "",
  });
  const [inputSearch, setInputSearch] = useState("");
  const [inputSelectCharacter, setInputSelectCharacter] = useState("");

  useEffect(() => {
    if (dataApi.length === 0) {
      getDataApi().then((cleanData) => {
        setDataApi(cleanData);
      });
    }
  }, []);

  function paintList() {
    if (inputSearch !== "") {
      const filterQuote = dataApi
        .filter((data) =>
          data.quote
            .toLocaleLowerCase()
            .includes(inputSearch.toLocaleLowerCase())
        )
        .map((data, index) => (
          <li key={index}>
            {data.quote} <span> - </span>
            {data.character}
          </li>
        ));
      return filterQuote;
    }
    if (inputSelectCharacter !== "") {
      const filtroCharacter = dataApi
        .filter((data) => data.character === inputSelectCharacter)
        .map((data, index) => (
          <li key={index}>
            {data.quote} <span> - </span>
            {data.character}
          </li>
        ));
      return filtroCharacter;
    } else {
      const List = dataApi.map((data, index) => (
        <li key={index}>
          {data.quote} <span> - </span>
          {data.character}
        </li>
      ));
      return List;
    }
  }

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

  const handleCharacterFilter = (event) => {
    setInputSelectCharacter(event.currentTarget.value);
  };

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
          onChange={handleCharacterFilter}
        >
          <option value=''> Todos</option>
          <option value={dataApi.character}> Ross</option>
          <option value={dataApi.character}> Mónica</option>
          <option value={dataApi.character}> Rachel</option>
          <option value={dataApi.character}> Joey</option>
          <option value={dataApi.character}> Chandler</option>
          <option value={dataApi.character}> Phoebe</option>
        </select>
      </form>

      <ul>{paintList()}</ul>

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
