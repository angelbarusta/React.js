import React from 'react';
import './search.css';

const Search = ()=> (// el parentesis en el arrow dunctio automaticamente dicta el return
    <form className="Search">
      <input type="text"
      placeholder="Buscandor"
       className="Search-input"
      />
    </form>
)
export default Search;