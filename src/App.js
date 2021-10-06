import react from "react";
import "./App.css";
import Pictures from "./components/Pictures/Pictures";
import SearchParameters from "./components/SearchParameters";
import Button from "./components/Button";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <SearchParameters />
      <div className="pictureSet">
        <Pictures />
      </div>
      <Button />
    </DataProvider>
  );
}

export default App;
