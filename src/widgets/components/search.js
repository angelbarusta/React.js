import React from 'react';
import './search.css';

const Search = (props) => (// el parentesis en el arrow dunctio automaticamente dicta el return
    <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      ref={props.setRef}
      type="text"
      placeholder="Busca tu video favorito"
      className="Search-input"
      name="search"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search