import PropTypes from "prop-types";
import { useAppContext } from "../contexts/app-context";
import { CardList } from "./CardList";
import { Filter } from "./Filter";
import { Summary } from "./Summary";
import { TipCard } from "./TipCard";

export const MainContent = () => {
  const { tips } = useAppContext();

  return (
    <main className="main-container">
      <Summary />
      <Filter />
      <CardList>
        {tips.map((dica, idx) => (
          <TipCard key={idx} tip={dica} />
        ))}
      </CardList>
    </main>
  );
};

MainContent.propTypes = {};
