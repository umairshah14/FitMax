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
} from "@material-tailwind/react";

function BMI() {

  const [bmiData, setBmiData] = useState({});

  const [bodyData, setBodyData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/bmi",
      params: {
        age: bodyData.age,
        weight: bodyData.weight,
        height: bodyData.height,
      },
      headers: {
        "X-RapidAPI-Key": "48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    if(Object.keys(bodyData).length !== 0) {
        axios
      .request(options)
      .then(function (response) {
        setBmiData({
            bmi:response.data.data.bmi,
            health:response.data.data.health
        });
      })
      .catch(function (error) {
        console.error(error);
      });

    //   document.getElementById("age").value = "";
    //   document.getElementById("height").value = "";
    //   document.getElementById("weight").value = "";
    }

  }, [bodyData, bodyData.age, bodyData.height, bodyData.weight]);

  const CalculateBMI = () => {
    setBodyData({
        age: document.getElementById("age").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
    });
  }



  return (
    <div>
      <div className="flex flex-row justify-center  items-center gap-20">
        <Card className="w-min bg-indigo-800 mt-12 ml-12 p-1">
          <CardHeader
            variant="gradient"
            className="grid h-8 text-xl font-bold place-items-center border-2 border-indigo-800  bg-indigo-50 text-indigo-800"
          >
            {" "}
            BMI
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-indigo-50 text-xl"
                  >
                    Age
            </Typography>
            <Input id="age" className="text-indigo-50" />
            </div>
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-medium text-indigo-50 text-xl"
                  >
                    Weight
            </Typography>
            <Input id="weight" className="text-indigo-50" />
            </div>
            <div className="flex flex-row justify-center gap-4">
          <Typography
                    variant="small"
                    color="blue-gray"
                    className=" font-medium text-indigo-50 text-xl"
                  >
                    Height
            </Typography>
            <Input id="height" className="text-indigo-50" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button fullWidth className="text-indigo-800 bg-indigo-50" onClick={CalculateBMI}>
              Calculate my BMI
            </Button>
          </CardFooter>
        </Card>

        <div className=" h-10  pt-1 border-2 border-indigo-800 rounded-lg px-8 max-w-1">
          {bmiData.bmi} {bmiData.health}
        </div>
      </div>
      <div className="md:flex flex-row justify-center  items-center gap-20 flex-nowrap mt-14">
           <div className="box-border h-32 w-64 p-4 border-4 border-pink-200 rounded-md bg-pink-300 ">
            <p className="text-2xl font-bold text-center">Underweight</p>
            <p className="text-center font-semibold">Below 18.5</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-green-200 rounded-md bg-green-400">
            <p className="text-2xl font-bold text-center">Healthy Weight</p>
            <p className="text-center font-semibold">18.5—24.9</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-orange-200 rounded-md bg-orange-500 ">
            <p className="text-2xl font-bold text-center">Overweight</p>
            <p className="text-center font-semibold">25.0—29.9</p>
           </div>
           <div className="box-border h-32 w-64 p-4 border-4 border-red-200 rounded-md bg-red-500">
            <p className="text-2xl font-bold text-center">Obesity</p>
            <p className="text-center font-semibold">30.0 and Above</p>
           </div>
      </div>
      
    </div>
  );
}

export default BMI;

