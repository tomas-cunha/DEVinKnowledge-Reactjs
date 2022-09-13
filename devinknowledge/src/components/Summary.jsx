import PropTypes from "prop-types";
import { Summarycard } from "./Summarycard";

export const Summary = () => {
  return (
    <div className="summary-container">
      <Summarycard title="Back-end" count={6} />
      <Summarycard title="Front-end" count={8} />
    </div>
  );
};

Summary.propTypes = {};
