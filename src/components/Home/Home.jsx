import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./home.css";

export const Home = ({ title, fetchURL, isLargeRow }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div style={{ marginLeft: "20px", color: "white" }}>
      <h2>{title}</h2>
      <div className="posters">
        {movies &&
          movies.map((item) => {
            return (
              <img
                key={item.id}
                className={`poster ${isLargeRow && "posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
              />
            );
          })}
      </div>
    </div>
  );
};
