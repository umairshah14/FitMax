import { useEffect, useState } from "react";
import axios from "axios";

function BMI() {
    const [bmi, setBmi] = useState();

    const [bodyData, setBodyData] = useState({
        height: 1.50,
        weight: 50
    });

    useEffect(() => {
        setBodyData({
            height: 1.50,
            weight: 60
        });
        const options = {
            method: 'GET',
            url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
            params: {weight: bodyData.weight, height: bodyData.height},
            headers: {
              'X-RapidAPI-Key': '48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727',
              'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setBmi(response.data.bmi);
          }).catch(function (error) {
              console.error(error);
          });
      }, [bodyData.height, bodyData.weight]);

      return ( <div>{bmi}</div>);

}

export default BMI;