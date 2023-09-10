
// import './App.scss';
// import api from './api/axiosConfig';
// import { useState, useEffect } from 'react';
// import Layout from './components/layout.component/layout.component';
// import { Routes, Route } from 'react-router-dom';
// import Home from './components/layout.component/home.component/home.component';
// import Header from './components/header.component/header.component';
// import Trailer from './components/trailer.component/trailer.component';
// import Reviews from './components/reviews.component/reviews.component';

// function App() {

//   const [movies, setMovies] = useState([]);
//   const [movie, setMovie] = useState();
//   const [reviews, setReviews] = useState();
//   const [test, setTest] = useState();

//   const getMovies = async () => {

//     try{

//       const response = await api.get("/api/v1/movies");
//       console.log(response.data)
//       setMovies(response.data);
//       console.log("where reviews?: ", reviews)


//     } catch(err){
//       console.log(err);
//     }
  
//   }


//   const getMovieData = async (movieId) => {
//     try{
//       const response = await api.get(`/api/v1/movies/${movieId}`);

//       const singleMovie = response.data;


//       setMovie(singleMovie);
  

//       setReviews(singleMovie.reviews);

//       setTest(response.data);

//       // setReviews(test);

//     }catch(error){
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, [])

//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home movies={movies} />} ></Route>
//             <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
//             <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie}  reviews={reviews} setReviews={setReviews} test={test} />}></Route>
//         </Route>

//       </Routes>
//     </div>
//   );
// }

// export default App;
import './App.scss';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/layout.component/layout.component';
import { Routes, Route } from 'react-router-dom';
import Home from './components/layout.component/home.component/home.component';
import Header from './components/header.component/header.component';
import Trailer from './components/trailer.component/trailer.component';
import Reviews from './components/reviews.component/reviews.component';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]); // Initialize as an empty array
  const [test, setTest] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews); 
      setTest(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home movies={movies} />} ></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} test={test} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
