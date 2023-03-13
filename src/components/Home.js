//import { useEffect, useState } from "react";
import BMI from "./BMI";
import DailyCalorie from "./DailyCalorie";

function Home() {

    return (
        <div>
            <h1>FitMax</h1>
            <div><BMI /></div>
            <div><DailyCalorie /></div>
        </div>
    );

}

export default Home;