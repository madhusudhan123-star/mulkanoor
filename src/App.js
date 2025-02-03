import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Storys from "./page/discover/Storys";
import Mission from "./page/discover/Mission";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover/story" element={<Storys />} />
          <Route path="/discover/mission" element={<Mission />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
