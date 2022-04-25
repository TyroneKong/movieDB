import { React, useState, useEffect } from "react";
import "./nowPlayingCard.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InfoIcon from "@mui/icons-material/Info";
import axios from  'axios'

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

function NowPlayingCard({ poster, video, id, data,review, setReview}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [availableData, setAvailableData] = useState(true)

  const fetchReviews = async () => {
    try {
     const response = await axios
        .get(`http://localhost:8789/movieReview/${data.id}`)
        const filteredData = response.data.results.filter((item) => item);
        if (filteredData.length === 0) {
          console.log("no data");
          setAvailableData(false)
        } else {
          setReview(filteredData[0]);
          setAvailableData(true)
          

        }
    } 
    catch(err){
      console.log(err)
 
       
        
       }
     
   };
 
  

  return (
    <div className="nowPlayingCard">
    
      <img
        onClick={() => video(id)}
        className="nowPlayingCard__image"
        src={` http://image.tmdb.org/t/p/w185${poster}`}
        alt="movie poster"
      ></img>
      <InfoIcon
        className="nowPlayingCard__modalbutton"
        onClick={handleOpen}
      ></InfoIcon>
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
            className="nowPlayingCard__image"
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
        

{availableData?

<div>

<div className="modal__review-container">
 <Typography className="modal__review" id="modal-modal-title" variant="h6" component="p">


        {review.content}
        </Typography>
  </div>
 
  <Button className="modal__review-button" onClick={()=>fetchReviews(data.id)} variant="contained"> reviews</Button>
  </div>

:null

}

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

export default NowPlayingCard;
