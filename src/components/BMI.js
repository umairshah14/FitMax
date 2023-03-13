import { useEffect, useState } from "react";
import axios from "axios";

function BMI() {
    const [bmi, setBmi] = useState();

    const [bodyData, setBodyData] = useState({
        age: 30,
        height: 150,
        weight: 50
    });

    useEffect(() => {
        setBodyData({
            age: 30,
            height: 150,
            weight: 60
        });
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bmi',
            params: {age: bodyData.age, weight: bodyData.weight, height: bodyData.height},
            headers: {
              'X-RapidAPI-Key': '48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setBmi(response.data.data.bmi)
          }).catch(function (error) {
              console.error(error);
          });
      }, [bodyData.age, bodyData.height, bodyData.weight]);

      return ( <div>{bmi}</div>);

}

export default BMI;