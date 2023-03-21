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

function IdealWeight(props) {

  const [idealData, setIdeal] = useState();

  const [bodyData, setBodyData] = useState({});

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://fitness-calculator.p.rapidapi.com/idealweight",
      params: {
        gender: bodyData.gender,
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
        setIdeal(response.data.data["Hamwi"]);
      })
      .catch(function (error) {
        alert("Please check your inputs!");
      });

    }

  }, [bodyData, bodyData.gender, bodyData.height]);

  useEffect(() => {
    if(idealData){
      const report = JSON.parse(localStorage.getItem("report"));
        localStorage.setItem("report",JSON.stringify({
          bmi:report ? report.bmi : "",
          health: report ? report.health : "",
          fat: report ? report.fat : "",
          calorie: report ? report.calorie : "",
          ideal: idealData
      }));
      props.getLocal();
    }
  }, [idealData]);

  const CalculateIdeal = () => {
    setBodyData({
        gender: document.getElementById("gender").value.toLowerCase(),
        height: document.getElementById("height").value,
    });
  }

  return (
    <div>
      <Container>
       <Row>
        <Col lg={6} sm={12}>
         <div className="mt-20">
            <div className="box-border h-auto w-auto leading-5 py-3 border-4 border-secondcolor bg-indigo-50 text-maincolor rounded-md  leading-4">
                <h2 className="text-2xl font-bold text-center underline">HAMWI METHOD</h2>
                <p className="text-center font-semibold">The Hamwi method is used to calculate the ideal body weight 
                of the general adult: </p>
                <p className="text-center px-2">Male ideal body weight = 48 kilograms (106 lb) + 1.1 kilograms (2.4 lb) × (height (cm) − 152)</p>
                <p className="text-center px-2">Female ideal body weight = 45.4 kilograms (100 lb) + 0.9 kilograms (2.0 lb) × (height (cm) − 152)</p>
            </div>
        </div>
        </Col>
        <Col lg={6} sm={12}>
        <div className=" flex mx-auto px-2 mt-18 mb-15">
         <div className="flex max-w-md mx-auto md:max-w-xl">
           <div className="md:flex">   
            <Card className=" bg-maincolor border-2 border-secondcolor mt-12 ml-8 p-1 mr-6">
             <CardHeader
              variant="gradient"
              className="grid h-8 text-xl font-bold place-items-center border-2 border-secondcolor  bg-indigo-50 text-maincolor"
              >
              {" "}
              Ideal Weight
             </CardHeader>
             <CardBody className="flex flex-col gap-2">
              <div className="flex flex-row  items-center gap-4 ">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className=" pt-3 font-medium text-indigo-50 text-xl"
                    style={{width: "100px"}}
                >
                    Gender    
               </Typography>
               <select id="gender" className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3  mt-2 rounded-md flex-1">
                      <option style={{display:"none"}}></option>
                      <option>Male</option>
                      <option>Female</option>
                   </select>
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
                   className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
              </div>
             </CardBody>
             <CardFooter className="pt-0">
              <Button fullWidth className="text-indigo-800 bg-indigo-50 text-maincolor" onClick={CalculateIdeal}>
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

export default IdealWeight;