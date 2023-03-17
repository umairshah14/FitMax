
import Button from "@mui/material/Button"; // importing the Material-UI button component
import Row from "react-bootstrap/Row"; // importing the Bootstrap row component
import Container from "react-bootstrap/Container"; // importing the Bootstrap container component
import Col from "react-bootstrap/Col"; // importing the Bootstrap column component

import { useEffect, useState } from "react";
import axios from "axios";


const YTvideoss = () => {
  const [searchTerm, setSearchTerm] = useState("body workouts"); // state to hold the search term entered by the user
  const [allVideos, setAllVideos] = useState([]); // state to hold an array of videos returned by the API

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://simple-youtube-search.p.rapidapi.com/search",
      params: { query: searchTerm, safesearch: "false" },
      headers: {
        "X-RapidAPI-Key": "f7b94b1a54msh3c3038557e37090p1526ecjsna94e501ae6dc",
        "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
      },
    };

    axios
      .request(options) // making an API call with the search term entered by the user
      .then(function (response) {
        let result = [];
        response.data.results.slice(0, 6).map((doc) => {
          return result.push({
            ...doc,
            Videolink: "https://www.youtube.com/embed/" + doc.thumbnail.id,
          }); // creating an array of objects containing video information and their embed links
        });
        setAllVideos(result); // updating the state with the array of videos
      })

      .catch(function (error) {});
  }, [searchTerm]); // useEffect hook to make the API call when the search term changes

  const buttons = [
    { label: "Shoulders", searchTerm: "shoulder workout" },
    { label: "Chest", searchTerm: "chest workout" },
    { label: "Biceps", searchTerm: "bicep workout" },
    { label: "Triceps", searchTerm: "tricep workout" },
    { label: "Back", searchTerm: "back workout" },
    { label: "Legs", searchTerm: "leg workout" },
    { label: "Abs", searchTerm: "abs workout" },
  ]; // an array of objects containing labels and search terms for different workout categories.

  const [activeIndex, setActiveIndex] = useState(null); // state to hold the index of the currently active button

  const handleClick = (index) => {
    setSearchTerm(buttons[index].searchTerm); // updating the search term state with the term associated with the clicked button
    setActiveIndex(index); // updating the active button index state

  };

  return (
    <div>
      <Container className="exerciseTitle">
        <h1>Workouts</h1>
        <h5>Click on one of the buttons below to find videos of exercises relating to your choice</h5>
      </Container>

      {/* ALL BUTTONS TO PICK DIFFERENT WORKOUTS */}
      <Container id="workOutBtns">
        {buttons.map((button, index) => (
          <Button
            key={index}
            variant={activeIndex === index ? "contained" : "outlined"}
            onClick={() => handleClick(index)}
          >
            {button.label}
          </Button>
        ))}
      </Container>

      {/* RETURN 3 VIDEOS FROM CHOSEN EXERCISE */}
      <Container className="youtubeVideos">
        <Row>
          {allVideos.map((item, key) => {
                
            return (
              <Col key={item.id} lg={4}>
                <div>
                  <button></button>
                  <iframe
                    style={{ borderRadius: "10px" }}
                    width="400"
                    height="250"
                    src={item.Videolink}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default YTvideoss;
