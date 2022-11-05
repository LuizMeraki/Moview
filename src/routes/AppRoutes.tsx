import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/MovieDetails";
import { MovieSearch } from "../pages/MovieSearch";

//components
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie-details/:id" element={<MovieDetails />}/>
        <Route path="/search" element={<MovieSearch />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}