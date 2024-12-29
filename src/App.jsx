import { Outlet } from "react-router-dom";
import Navitems from "./components/Navitems";
import "./App.css";

function App() {
  return (
    <>
      <Navitems />
      <Outlet />
    </>
  );
}

export default App;
