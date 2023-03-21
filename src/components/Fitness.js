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
        bmi: localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")).bmi : "",
        health: localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")).health : "",
        fat: localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")).fat : "",
        calorie: localStorage.getItem("report") ? JSON.parse(localStorage.getItem("report")).calorie : ""
    });
    // useEffect(() => {
    //     getLocal();
    // }, [active])

    useEffect(() => {
        if(localData) {
            setResultData({
                bmi: localData.bmi,
                health: localData.health,
                fat: localData.fat,
                calorie: localData.calorie
            });
        }
        console.log(resultData);
    }, [localData]);

    const getLocal= () => {
        const report = JSON.parse(localStorage.getItem("report"));
        if(report) {
            setLocalData({
                bmi: report.bmi,
                health: report.health,
                fat: report.fat,
                calorie: report.calorie
            })
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
              <Row >
              <Col lg={8} className="mb-10">
                {searchTerm === "BMI" && <BMI getLocal={getLocal}/>}
                {searchTerm === "DailyCalories" && <DailyCalorie getLocal={getLocal}/>}
                {searchTerm === "BodyFat" && <BodyFat getLocal={getLocal}/>}
                {searchTerm === "IdealWeight" && <IdealWeight />}
              </Col>
              <Col lg={4} className=" pt-2 border-2 border-indigo-800 rounded-lg px-8">
                
                  <p><span className="font-bold text-xl">Your BMI is: </span>{resultData.bmi}</p>
                  <p><span className="font-bold text-xl">Your Health is: </span>{resultData.health}</p> 
                  <p><span className="font-bold text-xl">Your Body Fat Percentage is: </span>{resultData.fat}</p> 
                  <p><span className="font-bold text-xl">Calorie to Maintain Weight is: </span>{resultData.calorie}</p> 
               
              </Col>
              </Row>  
            </Container>
            
        </div>
    );

}

export default Fitness;
