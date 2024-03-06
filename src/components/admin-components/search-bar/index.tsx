import React from "react";

import { Container } from "./style";

import btnSearch from "../../../assets/img/btn-filter.png";

interface SearchBarProps {
  onSearch: (searchText: string) => void; // Alteração na definição da prop
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  // Recebendo onSearch como uma propriedade
  const [text, setText] = React.useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    if (text.trim() !== "") {
      onSearch(text);
    } else {
      onSearch("null");
    }
  };

  return (
    <Container>
      <div className="search-bar">
        <input
          className="input-search"
          type="text"
          placeholder="Pesquisar evento"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-btn" disabled={!text} onClick={handleSearch}>
          <img src={btnSearch} alt="botão de busca de eventos" />
        </button>
      </div>
    </Container>
  );
};

export default SearchBar;
