import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataApi from "../services/fetch";
import frame from "../images/frame-vector2.png";

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
          <li className='element' key={index}>
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
          <li className='element' key={index}>
            {data.quote} <span> - </span>
            {data.character}
          </li>
        ));
      return filtroCharacter;
    } else {
      const List = dataApi.map((data, index) => (
        <li className='element' key={index}>
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
    setDataFrom({ ...dataForm, quote: "", character: "" });
  };

  const handleInputSearchQuote = (event) => {
    setInputSearch(event.target.value);
  };

  const handleCharacterFilter = (event) => {
    setInputSelectCharacter(event.currentTarget.value);
  };

  return (
    <div className='App'>
      <header className='header'>
        <img className='frame' src={frame} alt='' />
        <h1 className='title'>Frases de F·R·I·E·N·D·S</h1>
      </header>
      <form className='form' onSubmit={handleSubmit}>
        <label className='label-input' htmlFor='inputSearchQuote'>
          Filtrar por frase
        </label>
        <input
          className='input'
          type='text'
          value={inputSearch}
          name='inputSearchQuote'
          onChange={handleInputSearchQuote}
          placeholder="Ej: I grew up in a house with Monica, okay. If you didn't eat fast, you didn't eat. - Ross"
        />
        <label className='label-input' htmlFor='characterFilter'>
          Filtrar por personaje
        </label>
        <select
          className='input'
          name='characterFilter'
          id='characterFilter'
          value={inputSelectCharacter}
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
      <section className='sectionForm'>
        <h2 className='title-section'>¡Añáde una nueva frase mítica!</h2>
        <form className='form-section' onSubmit={handleSubmit}>
          <label className='label-input2' htmlFor='quote'>
            Frase
          </label>
          <input
            className='input'
            type='text'
            value={dataForm.quote}
            name='quote'
            placeholder='Ej: Oh Dios mio!'
            onChange={handleInputQuote}
          />
          <label className='label-input2' htmlFor='character'>
            Personaje
          </label>
          <input
            className='input'
            type='text'
            value={dataForm.character}
            name='character'
            placeholder='Janice'
            onChange={handleInputCharacter}
          />
          <input
            className='button'
            type='button'
            value='Añadir frase memorable'
            onClick={handleNewItem}
          />
        </form>
      </section>
    </div>
  );
}

export default App;
