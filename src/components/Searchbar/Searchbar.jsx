import { useState } from "react";
import css from './searchbar.module.css'


const Searchbar = ({onSubmit}) => {
  const [search, setSearch] = useState('');
  
  const handleChange = ({ target }) => {
    setSearch(target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch('')
  }

    return (<header className={css.searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

        <input onChange={handleChange}
          value={search}
          name="search"
          className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>)
  }


export default Searchbar;

