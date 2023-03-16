import { useEffect, useState } from "react";
import axios from "axios";

function BodyFat() {
    const [bodyFatData, setBodyFatData] = useState({});

    const [personData, setPersonData] = useState({
        age: '25',
        gender: 'male',
        height: '180',
        weight: '70',
        neck: '50',
        waist: '96',
        hip: '92'
    });

    useEffect(() => {
        setPersonData({
            age: '25',
            gender: 'female',
            height: '170',
            weight: '70',
            neck: '50',
            waist: '96',
            hip: '92'
        });
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
            params: {
              age: personData.age,
              gender: personData.gender,
              height: personData.height,
              weight: personData.weight,
              neck: personData.neck,
              waist: personData.waist,
              hip: personData.hip
            },
            headers: {
              'X-RapidAPI-Key': '48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setBodyFatData({
                Category: response.data.data["Body Fat Category"]
                });
          }).catch(function (error) {
              console.error(error);
          });
      }, [personData.age, personData.gender, personData.height, personData.weight, personData.neck, personData.waist, personData.hip]);

      return ( <div>{bodyFatData.Category}</div>);

}

export default BodyFat;