import PropTypes from "prop-types";
import { useAppContext } from "../contexts/app-context";
import { CardList } from "./CardList";
import { Filter } from "./Filter";
import { Summary } from "./Summary";
import { TipCard } from "./TipCard";

const umaDica = {
  titulo: "Uma dica",
  descricao: "Uma bela diquinha pra você",
  categoria: "Front-End",
  linguagem: "ReactJs",
  video: "https://www.youtube.com/watch?v=pDbcC-xSat4",
};

export const MainContent = () => {
  const result = useAppContext();
  console.log(result);
  return (
    <main className="main-container">
      <Summary />
      <Filter />
      <CardList>
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
        <TipCard tip={umaDica} />
      </CardList>
    </main>
  );
};

MainContent.propTypes = {};
