import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
const baseURL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title || movie.original_name}
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      {/* <p>{movie.overview}</p> */}
      <h2>{movie.title || movie.original_name}</h2>

      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type} *`}
        {movie.release_date || movie.first_air_date} &bull;
        <ThumbUpOffAltIcon />
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
