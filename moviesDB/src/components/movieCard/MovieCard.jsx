import { React, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import "./MovieCard.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function MovieCard({ poster, id, video, data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="movie">
      <img
        onClick={() => video(id)}
        className="movie__image"
        src={` http://image.tmdb.org/t/p/w185/${poster}`}
      />

      <InfoIcon className="movie__modalbutton" onClick={handleOpen}></InfoIcon>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.title}
          </Typography>
          <img
            onClick={() => video(id)}
            className="movie__image"
            src={` http://image.tmdb.org/t/p/w185${poster}`}
            alt="movie poster"
          ></img>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.overview}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rating: {data.vote_average}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Release date: {data.release_date}
          </Typography>
          <Button
            className="modal__closebutton"
            onClick={handleClose}
            variant="contained"
          >
            close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default MovieCard;
