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

function IdealWeight() {

  const [ideal, setIdeal] = useState();

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
        console.error(error);
      });

    }

  }, [bodyData, bodyData.gender, bodyData.height]);

  const CalculateIdeal = () => {
    setBodyData({
        gender: document.getElementById("gender").value,
        height: document.getElementById("height").value,
    });
  }

  return (
    <div>
      {ideal}
      <Container>
       <Row>
        <Col lg={6} sm={12}>
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
               <select className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3  mt-2 rounded-md flex-1">
                      <option style={{display:"none"}}></option>
                      <option>Male</option>
                      <option>Female</option>
                   </select>
              </div>
              <div className="flex flex-row items-center gap-4">
               <Typography
                    variant="small"
                    color="blue-gray"
                    className=" pt-3 font-medium text-indigo-50 text-xl"
                    style={{width: "100px"}}
                >
                    Age
                </Typography>
                <input id="weight"
                   variant="outlined" 
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
              <Button fullWidth className="text-indigo-800 bg-indigo-50" onClick={CalculateIdeal}>
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