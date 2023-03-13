import { useEffect, useState } from "react";
import axios from "axios";

function DailyCalorie() {
    const [calories, setCalories] = useState({});

    const [personData, setPersonData] = useState({
        age: '25',
        gender: 'male',
        height: '180',
        weight: '70',
        activitylevel: 'level_1'
    });

    useEffect(() => {
        setPersonData({
            age: '25',
            gender: 'female',
            height: '170',
            weight: '70',
            activitylevel: 'level_2'
        });
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
            params: {
              age: personData.age,
              gender: personData.gender,
              height: personData.height,
              weight: personData.weight,
              activitylevel: personData.activitylevel
            },
            headers: {
              'X-RapidAPI-Key': '48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              setCalories({
                BMR: response.data.data.BMR
               });
          }).catch(function (error) {
              console.error(error);
          });
      }, [personData.age, personData.gender, personData.height, personData.weight, personData.activitylevel]);

      return ( <div>{calories.BMR}</div>);

}

export default DailyCalorie;