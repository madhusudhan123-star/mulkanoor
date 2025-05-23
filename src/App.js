import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import Awards from "./page/Awards";
import Farmersvoice from "./page/Farmersvoice";
import Winning from "./page/Winning";
import CursorDot from "./components/CursorDot";
import Financial from "./page/pillars/Financial";
import Agrinput from "./page/pillars/Agrinput";
import Extension from "./page/pillars/Extension";
import Values from "./page/pillars/Values";
import Insurance from "./page/pillars/Insurance";
import Welfare from "./page/pillars/Welfare";
import Contact from "./page/Contact";
import Loading from "./components/Loading";
import usePageLoading from "./hooks/usePageLoading";
import SearchResults from "./page/SearchResults";
import Cta from './page/Cta'
// import Media from "./page/Media";
import { HelmetProvider } from "react-helmet-async";
import Product from "./page/product/Product";
import Marketing from "./page/Marketing";
import Videos from "./page/media/Videos";
import Gallery from "./page/media/Gallery";
import Articeles from "./page/media/Articeles";
import Paper from "./page/media/Paper";
import Report from "./page/Report";
import Processing from "./page/Processing";
import Consumer from "./page/Consumer";

// Create a ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const isLoading = usePageLoading();

  return (
    <>
      {isLoading && <Loading />}
      {/* <ScrollToTop /> */}
      <Navbar />
      <div className="min-h-screen">
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
          <Route path="/awards" element={<Awards />} />
          <Route path="/farmer" element={<Farmersvoice />} />
          <Route path="/winning" element={<Winning />} />
          <Route path="/pillars/winning" element={<Financial />} />
          <Route path="/pillars/agri" element={<Agrinput />} />
          <Route path="/pillars/extension" element={<Extension />} />
          <Route path="/pillars/values" element={<Values />} />
          <Route path="/pillars/insurance" element={<Insurance />} />
          <Route path="/pillars/Welfare" element={<Welfare />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cta" element={<Cta />} />
          <Route path="/processing" element={<Processing />} />
          {/* <Route path="/media" element={<Media />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/media/videos" element={<Videos />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/articles" element={<Articeles />} />
          <Route path="/media/paper" element={<Paper />} />
          <Route path='/report' element={<Report />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="*" element={<div className="text-center mt-20">404 Not Found</div>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App font-custom overflow-x-hidden">
      {/* <CursorDot /> */}
      <HelmetProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
