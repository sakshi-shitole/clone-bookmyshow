import './App.css';
import axios from 'axios';
//Routing
import { Routes, Route, useLocation } from "react-router-dom";
//React slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//pages
import Homepage from './pages/Home.page';
import Moviepage from './pages/Movie.page';
import Playpage from './pages/Play.page';
import { useEffect } from 'react';


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "a945e6de3e4bd50b32887315576a99f6";

function App() {
  //scrollTo property added
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname])


  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/movie/:id' element={<Moviepage />} />
      <Route path='/plays' element={<Playpage />} />
    </Routes>
  );
}

export default App;

