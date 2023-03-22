import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";
import BodyFat from "./BodyFat";
import IdealWeight from "./IdealWeight";
import Button from "@mui/material/Button"; // importing the Material-UI button component
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Fitness() {
  function clearSearch() {
    localStorage.clear();
    location.reload();
  }
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
    bmi: localStorage.getItem("report")
      ? JSON.parse(localStorage.getItem("report")).bmi
      : "",
    health: localStorage.getItem("report")
      ? JSON.parse(localStorage.getItem("report")).health
      : "",
    fat: localStorage.getItem("report")
      ? JSON.parse(localStorage.getItem("report")).fat
      : "",
    calorie: localStorage.getItem("report")
      ? JSON.parse(localStorage.getItem("report")).calorie
      : "",
    ideal: localStorage.getItem("report")
      ? JSON.parse(localStorage.getItem("report")).ideal
      : "",
  });

  useEffect(() => {
    if (localData) {
      setResultData({
        bmi: localData.bmi,
        health: localData.health,
        fat: localData.fat,
        calorie: localData.calorie,
        ideal: localData.ideal,
      });
    }
  }, [localData]);

  const getLocal = () => {
    const report = JSON.parse(localStorage.getItem("report"));
    if (report) {
      setLocalData({
        bmi: report.bmi,
        health: report.health,
        fat: report.fat,
        calorie: report.calorie,
        ideal: report.ideal,
      });
    }
  };

  return (
    <div>
      <Container className="exerciseTitle" style={{ color: "white" }}>
        <h1>Fitness Calculators</h1>
        <h5>
          Click on one of the buttons below to find out what your ideal health
          levels should be
        </h5>
      </Container>

      <Container id="fitnessBtns">
        {buttons.map((button, index) => (
          <Button
            className="fitnessBtnWidth"
            key={index}
            variant={
              activeIndex === index
                ? "contained containedBtn "
                : "outlined outlinedBtn"
            }
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
            {searchTerm === "DailyCalories" && (
              <DailyCalorie getLocal={getLocal} />
            )}
            {searchTerm === "BodyFat" && <BodyFat getLocal={getLocal} />}
            {searchTerm === "IdealWeight" && (
              <IdealWeight getLocal={getLocal} />
            )}
          </Col>
          <Col
            lg={4}
            style={{ height: "fit-content" }}
            className=" pt-2 border-2 border-secondcolor rounded-lg bg-indigo-50 px-8"
          >
            <div>
              <p>
                <span className="font-bold text-xl">Your BMI is: </span>
                {resultData.bmi}
              </p>
              <p>
                <span className="font-bold text-xl">Your Health is: </span>
                {resultData.health}
              </p>
              <p>
                <span className="font-bold text-xl">
                  Your Body Fat Percentage is: {" "}
                </span>
                {resultData.fat}
              </p>
              <p>
                <span className="font-bold text-xl">
                  Calories to Maintain Weight is: {" "}
                </span>
                {resultData.calorie}
              </p>
              <p>
                <span className="font-bold text-xl">
                  Your Ideal Weight is: {" "}
                </span>
                {resultData.ideal}
              </p>
            </div>


            <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={clearSearch}
                className="text-white bg-maincolor focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Clear
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Fitness;
