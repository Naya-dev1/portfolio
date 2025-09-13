import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Toaster position="top-center" />

          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
