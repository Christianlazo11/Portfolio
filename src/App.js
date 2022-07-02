import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import FormContact from "./pages/FormContact";
import useGlobalData from "./hooks/useGlobalData";
function App() {
  const { theme } = useGlobalData();
  return (
    <div className={`${theme === "dark" ? "theme__dark" : "theme__white"}`}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/formcontact" element={<FormContact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
