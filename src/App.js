import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
