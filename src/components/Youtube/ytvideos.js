import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const YTvideoss = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [allVideos, setAllVideos] = useState([]);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://simple-youtube-search.p.rapidapi.com/search",
    params: { query: searchTerm, safesearch: "false" },
    headers: {
      "X-RapidAPI-Key": "f7b94b1a54msh3c3038557e37090p1526ecjsna94e501ae6dc",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        let result = [];
        response.data.results.slice(0, 6).map((doc) => {
          return result.push({
            ...doc,
            Videolink: "https://www.youtube.com/embed/" + doc.thumbnail.id,
          });
        });
        setAllVideos(result);
      })
      .catch(function (error) {});
  }, [searchTerm]);

  const buttons = [
    { label: "Shoulders", searchTerm: "shoulder workout" },
    { label: "Chest", searchTerm: "chest workout" },
    { label: "Biceps", searchTerm: "bicep workout" },
    { label: "Triceps", searchTerm: "tricep workout" },
    { label: "Back", searchTerm: "back workout" },
    { label: "Legs", searchTerm: "leg workout" },
    { label: "Abs", searchTerm: "abs workout" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setSearchTerm(buttons[index].searchTerm);
    setActiveIndex(index);
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
          {allVideos.map((item) => {
            return (
              <Col lg={4}>
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
