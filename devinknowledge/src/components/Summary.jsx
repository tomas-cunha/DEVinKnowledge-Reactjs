import PropTypes from "prop-types";
import { useAppContext } from "../contexts/app-context";
import { Summarycard } from "./Summarycard";

export const Summary = () => {
  const { allCategories } = useAppContext();

  return (
    <div className="summary-container">
      {allCategories.map((cat, idx) => (
        <Summarycard key={idx} title={cat.title} count={cat.count} />
      ))}
    </div>
  );
};

Summary.propTypes = {};
