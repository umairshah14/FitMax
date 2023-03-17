import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

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

      return ( <div>
        <div className="flex flex-row justify-center  items-center gap-20">
          <Card className="w-min bg-indigo-800 mt-12 ml-12 p-1">
            <CardHeader
              variant="gradient"
              className="grid h-8 text-xl font-bold place-items-center border-2 border-indigo-800  bg-indigo-50 text-indigo-800"
            >
              Daily Calories
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <div className="flex flex-row gap-4">
              <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium text-indigo-50 text-xl"
                    >
                    Gender
              </Typography>
              <Select size="md" className="text-indigo-50 px-1">
                <Option>Male</Option>
                <Option>Female</Option>
              </Select>
              </div>
              <div className="flex flex-row justify-center gap-4">
            <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium text-indigo-50 text-xl"
                    >
                      Weight
              </Typography>
              <Input  className="text-indigo-50" />
              </div>
              <div className="flex flex-row justify-center gap-4">
            <Typography
                      variant="small"
                      color="blue-gray"
                      className=" font-medium text-indigo-50 text-xl"
                    >
                      Height 
              </Typography>
              <Input  className="text-indigo-50" />
              </div>
              <div className="flex flex-row justify-center gap-4">
            <Typography
                      variant="small"
                      color="blue-gray"
                      className=" font-medium text-indigo-50 text-xl"
                    >
                      Activity Level
              </Typography>
              <Input  className="text-indigo-50" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button fullWidth className="text-indigo-800 bg-indigo-50">
                Calculate
              </Button>
            </CardFooter>
          </Card>
  
          <div className=" h-10  pt-1 border-2 border-indigo-800 rounded-lg px-8 max-w-1">
            {calories.BMR}
          </div>
        </div>
        <div className="md:flex flex-row justify-center  items-center gap-20 flex-nowrap mt-14">
             <div className="box-border h-32 w-64 p-4 border-4 border-pink-200 rounded-md bg-pink-300 ">
              <p className="text-2xl font-bold text-center"></p>
              <p className="text-center font-semibold"></p>
             </div>
             <div className="box-border h-32 w-64 p-4 border-4 border-green-200 rounded-md bg-green-400">
              <p className="text-2xl font-bold text-center"></p>
              <p className="text-center font-semibold"></p>
             </div>
             <div className="box-border h-32 w-64 p-4 border-4 border-orange-200 rounded-md bg-orange-500 ">
              <p className="text-2xl font-bold text-center"></p>
              <p className="text-center font-semibold"></p>
             </div>
             <div className="box-border h-32 w-64 p-4 border-4 border-red-200 rounded-md bg-red-500">
              <p className="text-2xl font-bold text-center"></p>
              <p className="text-center font-semibold"></p>
             </div>
        </div>
        
      </div>);

}

export default DailyCalorie;