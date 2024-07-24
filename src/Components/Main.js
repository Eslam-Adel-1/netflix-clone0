import React, { useEffect, useState } from "react";
import "./Main.css";

const Main = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const baseUrlImage = "https://image.tmdb.org/t/p/original";
  let imageUrl = "";
  //---------------------------------------------------
  useEffect(() => {
    const fetchData = () => {
      fetch(fetchUrl)
        .then((data) => {
          return data.json();
        })
        .then((data2) => {
          setMovies(data2);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, [fetchUrl]);
  //---------------------------------------------------

  const checkUnDefined = (movies) => {
    if (movies?.results) {
      return <h1>{movies.results[random_array_number].title}</h1>;
    } else {
      return <h1></h1>;
    }
  };

  const checkUnDefinedReleaseDate = (movies) => {
    if (movies?.results) {
      return <h1>{movies.results[random_array_number].release_date}</h1>;
    } else {
      return <h1></h1>;
    }
  };

  const checkUnDefinedOverview = (movies) => {
    if (movies?.results) {
      return (
        <h1>
          {truncate_dots(movies.results[random_array_number].overview, 200)}
        </h1>
      );
    } else {
      return <h1></h1>;
    }
  };

  const checkUnDefinedImage = () => {
    if (movies?.results) {
      return (imageUrl = `url(${baseUrlImage}${movies?.results[random_array_number]?.backdrop_path})`);
    } else {
      return (imageUrl = "");
    }
  };

  //---------------------------------------------------

  const random_array_number = Math.floor(
    Math.random() * (movies?.results?.length - 1)
  );

  const truncate_dots = (string, size) => {
    return string.length > size ? string.slice(0, size - 1) + "  ..." : string;
  };

  //---------------------------------------------------

  return (
    <div
      className="main_rapper"
      style={{
        backgroundImage: checkUnDefinedImage(),
      }}
    >
      <div className="fade_class_up"></div>

      <div className="main_content_rapper">
        <h4>{checkUnDefined(movies)}</h4>
        <h6>{checkUnDefinedReleaseDate(movies)}</h6>
        <div className="buttons">
          <button className="bt1">Play Now</button>
          <button className="bt2">Details</button>
        </div>
        <div className="overview">
          <p>{checkUnDefinedOverview(movies)}</p>
        </div>
      </div>
      <div className="fade_class"></div>
    </div>
  );
};

export default Main;
