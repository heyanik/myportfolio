import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <Outlet />
    </>
  );
}

export default App;
