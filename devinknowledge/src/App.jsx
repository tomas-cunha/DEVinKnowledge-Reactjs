import { AppContextProvider } from "./contexts/app-context";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  );
};
