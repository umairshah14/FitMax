import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";
import {Button,} from "@material-tailwind/react"
 import { useState } from "react";

function Fitness() {
    const [active, setActive] = useState("")

    return (
        <div>
            <Button  className="text-indigo-800 bg-indigo-50 m-2" onClick={() => setActive("BMI")}>
               BMI
            </Button>
            <Button  className="text-indigo-800 bg-indigo-50" onClick={() => setActive("DailyCalories")}>
               Daily Calories
            </Button>
            <div>
                {active === "BMI" && <BMI />}
                {active === "DailyCalories" && <DailyCalorie />}
            </div>
            <div></div>
        </div>
    );

}

export default Fitness;