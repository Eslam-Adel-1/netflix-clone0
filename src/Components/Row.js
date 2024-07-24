import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl }) => {
  const baseUrlImage = "https://image.tmdb.org/t/p/original";
  const [movies, setmovies] = useState([]);
  const [videoOnOff, setVideoOnOff] = useState(false);
  const [movieId, setMovieId] = useState("");
  console.log(process.env.API_KEY);
  //----------------------------------------------------------------------

  const opts = {
    height: "290",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //----------------------------------------------------------------------

  useEffect(() => {
    const fetchdata = () => {
      fetch(fetchUrl)
        .then((data) => {
          return data.json();
        })
        .then((data2) => {
          setmovies(data2);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchdata();
  }, [fetchUrl]);
  //----------------------------------------------------------------------

  console.log(movieId);

  //----------------------------------------------------------------------
  return (
    <div className="main_row_section">
      <h2>{title}</h2>
      <div className="row_section">
        {movies?.results?.map((movie) => {
          return (
            <>
              <div
                onClick={() => {
                  setVideoOnOff(!videoOnOff);
                  movieTrailer(movie.title)
                    .then((url) => {
                      return new URLSearchParams(new URL(url).search);
                    })
                    .then((id) => {
                      setMovieId(id.get("v"));
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                }}
                className="image_rapper"
                key={movie.id}
              >
                <img src={`${baseUrlImage}/${movie?.poster_path}`} />
              </div>
            </>
          );
        })}
      </div>
      {videoOnOff ? (
        <div className="youtube_video">
          <YouTube className="youtube_video_v" videoId={movieId} opts={opts} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Row;
