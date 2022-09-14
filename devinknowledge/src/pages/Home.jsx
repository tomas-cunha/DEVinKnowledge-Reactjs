import PropTypes from "prop-types";
import { MainContent } from "../components/MainContent";
import { Sidebar } from "../components/Sidebar";

export const Home = () => {
  return (
    <div className="root-container">
      <Sidebar />
      <MainContent />
    </div>
  );
};

Home.propTypes = {};
