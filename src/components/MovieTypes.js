import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import Cards from "./Cards";
import Error from "./Error";

const MovieTypes = ({ childData }) => {
  const { type } = useParams();
  const api_key = "7e5122f42b3d47b2f9c1deaf4e1d2214";
  const [moviesByTypes, setmoviesByTypes] = useState([]);

  useEffect(() => {
    categorywiseData();
  }, [type, childData]);

  const categorywiseData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${api_key}`
    );

    setmoviesByTypes(response.data.results);
  };

  const searchMovies = () => {
    if (moviesByTypes) {
      const filterData = moviesByTypes.filter((item) => {
        return item?.original_title.toLowerCase().includes(childData);
      });

      setmoviesByTypes(filterData);
    }
  };

  if(moviesByTypes.length === 0){
    return <Error />
  }

  return (
    <>
      <div className="moviestype">
        <h2>{type.toUpperCase()}</h2>

        <div className="main-cards">
          {moviesByTypes.map((item) => (
            <Cards {...item} />
          ))}
        </div>

        <button onClick={() => searchMovies()} className="searchBtn">
          Search
        </button>
      </div>
    </>
  );
};

export default MovieTypes;
