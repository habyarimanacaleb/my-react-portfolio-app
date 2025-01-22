import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <hr className="font-bold shadow" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
