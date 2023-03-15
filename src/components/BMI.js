import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
  Textarea
} from "@material-tailwind/react";


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

      return ( <div>
        <div className="flex justify-center">
  <Card className="w-min bg-indigo-800 mt-12 ml-12 p-1" >
      <CardHeader
        variant="gradient"
        className="grid h-8 place-items-center bg-indigo-50 text-indigo-800"
      > BMI
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input   variant='static' label="Age" size="lg" />
        <Input  className="" label="Kg" size="lg" />
        <Input  className="" label="cm" size="lg" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button  fullWidth className="text-indigo-800 bg-indigo-50">
          Calculate my BMI
        </Button>
      </CardFooter>
    </Card>
    
    </div>
       {/*} <div className="shadow-lg rounded-lg bg-white p-6">
          
           
           <div className="flex flex-col">
             <input className="border border-gray-400 p-2 rounded-lg  mb-2" type="text"  />
             <input className="border border-gray-400 p-2 rounded-lg  mb-2" type="text"  />
           </div>
           <div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3 rounded-md border-2 border-indigo-800">
    <h2 className="text-lg font-bold mb-2">BMI</h2>
    <div className="flex flex-col items-end">
             <input className="mr-5 w-24 border border-gray-400 p-2 rounded-lg  mb-2" type="text"  />
             <input className="mr-5 w-24 border border-gray-400 p-2 rounded-lg  mb-2" type="text"  />
           </div>
  </div>
  <div class="col-span-3 rounded-md ">02</div>
  
</div>
      </div>*/}
      
      </div>);

}

export default BMI;