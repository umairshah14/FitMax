import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";
import BodyFat from "./BodyFat"
import IdealWeight from "./IdealWeight";
import {Button,} from "@material-tailwind/react"
import { useState } from "react";
import {Container, Row, Col} from "react-bootstrap"

function Fitness() {
    const [active, setActive] = useState("BMI")

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
                {active === "BMI" && <BMI />}
                {active === "DailyCalories" && <DailyCalorie />}
                {active === "BodyFat" && <BodyFat />}
                {active === "IdealWeight" && <IdealWeight />}
              </Col>
              <Col lg={4} className=" pt-2 border-2 border-indigo-800 rounded-lg px-8">
                
                  <p><span className="font-bold text-xl">Your BMI is: </span></p>
                  <p><span className="font-bold text-xl">Your Health is: </span></p> 
               
              </Col>
              </Row>  
            </Container>
            
        </div>
    );

}

export default Fitness;