import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from './components/Footer';
import SingleArticlePage from "./pages/SingleArticlePage";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsCondition";





function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='blog' element={<Blog />} />

        <Route path='blog/:id' element={<SingleArticlePage />}>
          <Route path='' element={<SingleArticlePage />} />
        </Route>

        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TermsConditions />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
