import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import avengerImg from "../avenger-banner.jpg";
import Cards from "./Cards";

const Row = ({ title, moviesArr }) => {
  return (
    <div className="mainDiv">
      <h4>{title}</h4>

      <div className="main-cards">
        {moviesArr?.map(
          (item) => (
       (<Cards key={item?.id} {...item} />)
          )
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const api_key = "7e5122f42b3d47b2f9c1deaf4e1d2214";

  const [upcomingMovies, setupcomingMovies] = useState([]);
  const [nowPlayingMovies, setnowPlayingMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topratedMovies, settopratedMovies] = useState([]);
  const [allgenreMovies, setallgenreMovies] = useState([]);


  //   upcoming
  const upcomingMoviesData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`
    );
    await setupcomingMovies(response.data.results);
  };

  //   now_playing
  const nowPlayingData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
    );
    await setnowPlayingMovies(response.data.results);
  };

  //   popular
  const popularMoviesData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
    );
    setpopularMovies(response.data.results);
  };

  //   top_rated
  const topRated = async () => {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
    );
    settopratedMovies(results);
  };

  //   genre

  const allgenre = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
    );

    setallgenreMovies(data.genres);
  };

  useEffect(() => {
    upcomingMoviesData();
    nowPlayingData();
    popularMoviesData();
    topRated();
    allgenre();
  }, []);


  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "white" }}
        to={`/movie/${popularMovies[0]?.id}`}
      >
        <div
          className="banner"
          style={{
            backgroundImage: popularMovies[0]
              ? `url(${`https://image.tmdb.org/t/p/original/${popularMovies[0].poster_path}`})`
              : "rgb(16, 16, 16)",
          }}
        >
          {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
          {popularMovies[0] && <p>{popularMovies[0].overview}</p>}
        </div>
      </Link>

      <Row title={"Popular on Netflix"} moviesArr={upcomingMovies} />
      <Row title={"Trending Now"} moviesArr={nowPlayingMovies} />
      <Row title={"Popular"} moviesArr={popularMovies} />
      <Row title={"Top Rated"} moviesArr={topratedMovies} />

      <div className="genre">
        {allgenreMovies.map((item) => (
          <Link to={`/>genre/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
