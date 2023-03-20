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
        bmi: localStorage.getItem("bmiData") ? JSON.parse(localStorage.getItem("bmiData")).bmi : "",
        health: localStorage.getItem("bmiData") ? JSON.parse(localStorage.getItem("bmiData")).health : ""
    });

    useEffect(() => {
        if(localData) {
            setResultData({
                bmi: localData.bmi,
                health: localData.health
            })
        }
    }, [localData]);

    const getLocal= () => {
        const local = JSON.parse(localStorage.getItem("bmiData"));
        if(local) {
            setLocalData({
                bmi: local.bmi,
                health: local.health
            });
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
                {active === "DailyCalories" && <DailyCalorie />}
                {active === "BodyFat" && <BodyFat />}
                {active === "IdealWeight" && <IdealWeight />}
              </Col>
              <Col lg={4} className=" pt-2 border-2 border-indigo-800 rounded-lg px-8">
                
                  <p><span className="font-bold text-xl">Your BMI is: </span>{resultData.bmi}</p>
                  <p><span className="font-bold text-xl">Your Health is: </span>{resultData.health}</p> 
               
              </Col>
              </Row>  
            </Container>
            
        </div>
    );

}

export default Fitness;