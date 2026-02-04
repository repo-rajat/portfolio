import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import data from "./data/data";

function App() {
  return (
    <BrowserRouter>
      {/* <FireflyField /> */}
      <Routes>
        <Route path="/" element={<Index data={data} />} />
        <Route
          path="/about"
          element={<About data={data} page={data.pages.about} />}
        />
        <Route
          path="/skills"
          element={<Skills data={data} page={data.pages.skills} />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio data={data} page={data.pages.portfolio} />}
        />
        <Route
          path="/contact"
          element={<Contact data={data} page={data.pages.contact} />}
        />
        <Route path="*" element={<NotFound data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
