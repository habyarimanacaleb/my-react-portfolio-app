import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Project from "./pages/project";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  return (
    <Router>
      <NavigationBar />
      <hr />
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
