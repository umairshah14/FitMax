import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";
import BodyFat from "./BodyFat";
import IdealWeight from "./IdealWeight";
import Button from "@mui/material/Button"; // importing the Material-UI button component
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Fitness() {
  const [searchTerm, setSearchTerm] = useState("BMI"); // state to hold the search term entered by the user

  const buttons = [
    { label: "BMI", searchTerm: "BMI" },
    { label: "Daily Calories", searchTerm: "DailyCalories" },
    { label: "Body Fat", searchTerm: "BodyFat" },
    { label: "Ideal Weight", searchTerm: "IdealWeight" },
  ];
  const [activeIndex, setActiveIndex] = useState(null); // state to hold the index of the currently active button

  const handleClick = (index) => {
    setSearchTerm(buttons[index].searchTerm); // updating the search term state with the term associated with the clicked button
    setActiveIndex(index); // updating the active button index state
  };

  const [localData, setLocalData] = useState();

  const [resultData, setResultData] = useState({
    bmi: localStorage.getItem("bmiData")
      ? JSON.parse(localStorage.getItem("bmiData")).bmi
      : "",
    health: localStorage.getItem("bmiData")
      ? JSON.parse(localStorage.getItem("bmiData")).health
      : "",
  });

  useEffect(() => {
    if (localData) {
      setResultData({
        bmi: localData.bmi,
        health: localData.health,
      });
    }
  }, [localData]);

  const getLocal = () => {
    const local = JSON.parse(localStorage.getItem("bmiData"));
    if (local) {
      setLocalData({
        bmi: local.bmi,
        health: local.health,
      });
    }
  };

  return (
    <div>
      <Container className="exerciseTitle">
        <h1>Fitness Calculators</h1>
        <h5>
          Click on one of the buttons below to find out what your ideal health levels should be
        </h5>
      </Container>

      <Container id="fitnessBtns">
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

      <Container className="mt-10">
        <Row>
          <Col lg={8} className="mb-10">
            {searchTerm === "BMI" && <BMI getLocal={getLocal} />}
            {searchTerm === "DailyCalories" && <DailyCalorie />}
            {searchTerm === "BodyFat" && <BodyFat />}
            {searchTerm === "IdealWeight" && <IdealWeight />}
          </Col>
          <Col
            lg={4}
            className=" pt-2 border-2 border-indigo-800 rounded-lg px-8"
          >
            <p>
              <span className="font-bold text-xl">Your BMI is: </span>
              {resultData.bmi}
            </p>
            <p>
              <span className="font-bold text-xl">Your Health is: </span>
              {resultData.health}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fitness;
