import PropTypes from "prop-types";

export const Summarycard = ({ title, count }) => {
  return (
    <div className="summary-container__card">
      <span className="title">{title}</span>
      <span className="value">{count}</span>
    </div>
  );
};

Summarycard.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
