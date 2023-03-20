import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import {Container, Row, Col} from "react-bootstrap"

function BMI(props) {

  const [bmiData, setBmiData] = useState();

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
        let h = "";
        if(response.data.data.bmi < 18.5) {
          h= "Underweight";
        } else if(18.5 <= response.data.data.bmi && response.data.data.bmi  < 25) {
          h= "Healty weight";
        } else if(25 <= response.data.data.bmi && response.data.data.bmi < 30) {
          h= "Overweight";
        } else if(response.data.data.bmi >= 30) {
          h= "Obesity";
        }
        setBmiData({
            bmi:response.data.data.bmi,
            health: h
        });
      })
      .catch(function (error) {
        alert("Please check your inputs!")
      });
    }
  }, [bodyData, bodyData.age, bodyData.height, bodyData.weight]);

  useEffect(() => {
    if(bmiData){
      localStorage.setItem("bmiData", JSON.stringify(bmiData));
      props.getLocal();
    }
  }, [bmiData]);

  const CalculateBMI = () => {
    setBodyData({
        age: document.getElementById("age").value,
        height: document.getElementById("height").value,
        weight: document.getElementById("weight").value,
    });
  }

  return (
  <div>
    <Container>
     <Row>
      <Col lg={6} sm={12}>
      <div className="flex flex-col justify-center items-center mt-10 gap-4">
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
      </Col>
      <Col lg={6} sm={12}>
        <div className=" flex mx-auto px-2 mt-28 mb-15">
         <div className="flex max-w-md mx-auto md:max-w-xl">
           <div className="md:flex">   
            <Card className=" bg-indigo-800 mt-12 ml-8 p-1 mr-6">
             <CardHeader
              variant="gradient"
              className="grid h-8 text-xl font-bold place-items-center border-2 border-indigo-800  bg-indigo-50 text-indigo-800"
              >
              {" "}
              BMI
             </CardHeader>
             <CardBody className="flex flex-col gap-2">
              <div className="flex flex-row  items-center gap-4 ">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className=" pt-3 font-medium text-indigo-50 text-xl"
                    style={{width: "100px"}}
                >
                    Age    
               </Typography>
               <input id="age"
                 className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3  mt-2 rounded-md flex-1" />
              </div>
              <div className="flex flex-row items-center gap-4">
               <Typography
                    variant="small"
                    color="blue-gray"
                    className=" pt-3 font-medium text-indigo-50 text-xl"
                    style={{width: "100px"}}
                >
                    Weight
                </Typography>
                <input id="weight"
                   variant="outlined" label="Kg"
                   placeholder="Kg" 
                   className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
              </div>
              <div className="flex flex-row items-center gap-4 shrink">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className=" pt-3 font-medium text-indigo-50 text-xl"
                    style={{width: "100px"}}
                >
                    Height
                </Typography>
                <input id="height"
                    placeholder="cm" 
                   className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
              </div>
             </CardBody>
             <CardFooter className="pt-0">
              <Button fullWidth className="text-indigo-800 bg-indigo-50" onClick={CalculateBMI}>
                Calculate my BMI
              </Button>
             </CardFooter>
           </Card>
          </div>
        </div>
      </div>
     </Col>
   </Row>
  </Container>      
</div>
  );
}

export default BMI;

