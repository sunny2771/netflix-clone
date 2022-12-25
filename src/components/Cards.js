import React, { useEffect, useState } from "react";
import "../App.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const Cards = ({ poster_path, id, title, release_date, overview }) => {
  const [loading, setloading] = useState(true);

  const imgUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="ske-cards">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${id}`}
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <div className="cards">
            <img src={`${imgUrl}${poster_path}`} alt="" />
            <div className="card-overlay">
              <div className="card-title">{title ? title : null}</div>
              <div className="card-date">
                {release_date ? release_date : null}
              </div>
              <div className="card-overview">
                {overview ? overview.slice(0, 118) + "..." : null}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
