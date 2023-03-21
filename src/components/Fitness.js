import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";
import BodyFat from "./BodyFat"
import IdealWeight from "./IdealWeight";
import {Button,} from "@material-tailwind/react"
import { useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap"

function Fitness() {
    const [active, setActive] = useState("BMI");

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
            <Button  className="text-indigo-800 bg-indigo-50 m-2" onClick={() => setActive("BMI")}>
               BMI
            </Button>
            <Button  className="text-indigo-800 bg-indigo-50" onClick={() => setActive("DailyCalories")}>
               Daily Calories
            </Button>
            <Button  className="text-indigo-800 bg-indigo-50" onClick={() => setActive("BodyFat")}>
               Body Fat
            </Button>
            <Button  className="text-indigo-800 bg-indigo-50" onClick={() => setActive("IdealWeight")}>
               Ideal Weight
            </Button>
            <Container className="mt-10">
              <Row >
              <Col lg={8} className="mb-10">
                {active === "BMI" && <BMI getLocal={getLocal}/>}
                {active === "DailyCalories" && <DailyCalorie getLocal={getLocal}/>}
                {active === "BodyFat" && <BodyFat getLocal={getLocal}/>}
                {active === "IdealWeight" && <IdealWeight />}
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