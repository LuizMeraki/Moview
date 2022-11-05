import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import styles from "./style.module.css";


export const SearchBar = () => {

  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate(`/search?q=${query}`);
    
    setQuery("");
  }


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="buscar filmes e séries"
        required
      />
      <button>
        <BiSearch />
      </button>
    </form>
  );
}