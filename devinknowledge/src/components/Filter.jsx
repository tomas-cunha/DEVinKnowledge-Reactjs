import PropTypes from "prop-types";
import { useRef, useState } from "react";

import { useAppContext } from "../contexts/app-context";

export const Filter = () => {
  const { filterTips } = useAppContext();
  const [data, setData] = useState("");
  console.log(data);

  return (
    <div className="filter-container">
      <input
        value={data}
        placeholder="Busque por uma dica..."
        type="text"
        className="inputField"
        onChange={(e) => setData(e.target.value)}
      />
      <button className="searchButton" onClick={() => filterTips(data)}>
        Buscar
      </button>
      <button
        className="searchButton"
        onClick={() => {
          setData("");
          filterTips();
        }}
      >
        Limpar
      </button>
    </div>
  );
};
