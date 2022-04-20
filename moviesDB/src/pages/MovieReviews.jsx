import { React, useState } from "react";
import axios from "axios";
import "../components/movieReviews/movieReviews.scss";
import Button from "@mui/material/Button";

function MovieReviews() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const createComment = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8789/createComment", {
      name: name,
      comment: comment,
    });
  };

  return (
    <div>
      <form className="moviewReviewForm" onSubmit={createComment}>
        <label>
          User review
          <input
            className="movieReviewForm__input"
            type="text"
            placeholder="enter name..."
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <textarea
          className="movieReviewForm__comment"
          type="text"
          placeholder="Enter comment"
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <Button variant="contained" type="submit">
          Add review
        </Button>
      </form>
    </div>
  );
}

export default MovieReviews;
