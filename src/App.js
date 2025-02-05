import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Storys from "./page/discover/Storys";
import Mission from "./page/discover/Mission";
import Leadership from "./page/discover/Leadership";
import Milestones from "./page/discover/Milestones";
import Endorsed from "./page/discover/Endorsed";
import Organization from "./page/discover/Organization";
import Rice from "./page/product/Rice";
import Paddy from "./page/product/Paddy";
import Cotton from "./page/product/Cotton";

function App() {
  return (
    <div className="App font-custom">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover/story" element={<Storys />} />
          <Route path="/discover/mission" element={<Mission />} />
          <Route path="/discover/leadership" element={<Leadership />} />
          <Route path="/discover/milestones" element={<Milestones />} />
          <Route path="/discover/endorsed" element={<Endorsed />} />
          <Route path="/discover/organization" element={<Organization />} />
          <Route path="/product/rice" element={<Rice />} />
          <Route path="/product/paddy" element={<Paddy />} />
          <Route path="/product/cotton" element={<Cotton />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
