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
import {Container, Row, Col,} from "react-bootstrap"
import BodyFatTable from "./Table";

function BodyFat(props) {
    const [bodyFatData, setBodyFatData] = useState({});

    const [bodyData, setBodyData] = useState({});

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
            params: {
              age: bodyData.age,
              gender: bodyData.gender,
              weight: bodyData.weight,
              height: bodyData.height,
              neck: bodyData.neck,
              waist: bodyData.waist,
              hip: bodyData.hip
            },
            headers: {
              'X-RapidAPI-Key': '48ed8b2f2fmsha28be52d7e6d3d5p1ee835jsn72ba2cbb6727',
              'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
          };
          
          if(Object.keys(bodyData).length !== 0) {
            axios.request(options).then(function (response) {
              setBodyFatData({
                fat: response.data.data["Body Fat (U.S. Navy Method)"]
                });
          }).catch(function (error) {
            alert("Please check your inputs!");
          });

          }
      }, [bodyData, bodyData.age, bodyData.gender, bodyData.height, bodyData.weight, bodyData.neck, bodyData.waist, bodyData.hip]);

      useEffect(() => {
        if(bodyFatData){
          const report = JSON.parse(localStorage.getItem("report"));
              localStorage.setItem("report",JSON.stringify({
                bmi:report ? report.bmi : "",
                health: report ? report.health : "",
                fat: bodyFatData.fat,
                calorie: report ? report.calorie : "",
                ideal: report ? report.ideal : ""
          }));
          props.getLocal();
        }
      }, [bodyFatData]);

      const CalculateBodyFat = () => {
        setBodyData({
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value.toLowerCase(),
            height: document.getElementById("height").value,
            weight: document.getElementById("weight").value,
            neck: document.getElementById("neck").value,
            waist: document.getElementById("waist").value,
            hip: document.getElementById("hip").value,
        });
      }

      return ( 
      <div>

        <Container >
         <Row>
          <Col lg={6} sm={12}>
          <div className=" flex mx-auto">
             <div className="flex max-w-md mx-auto md:max-w-xl">
                 <BodyFatTable />
             </div>
          </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className=" flex mx-auto mt-12 px-2 ">
             <div className="flex max-w-md mx-auto md:max-w-xl">
               <div className="md:flex">   
                <Card className=" bg-maincolor border-2 border-secondcolor  ml-8 p-1 mr-6">
                 <CardHeader
                  variant="gradient"
                  className="grid h-8 text-xl font-bold place-items-center border-2 border-secondcolor  bg-indigo-50 text-maincolor"
                  >
                  Body Fat
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
                    className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3  mt-2 rounded-md flex-1" />
                </div>
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
                  <div className="flex flex-row  items-center gap-4 ">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Weight    
                   </Typography>
                   <input id="weight"
                   placeholder="kg"
                     className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3  mt-2 rounded-md flex-1" />

                  </div>
                  <div className="flex flex-row items-center gap-4">
                   <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Height
                    </Typography>

                    <input id="height" placeholder="cm" className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
                  </div>
                  <div className="flex flex-row items-center gap-4 shrink">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Waist
                    </Typography>

                    <input id="waist" placeholder="cm"
                       className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />

                  </div>
                  <div className="flex flex-row items-center gap-4 shrink">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Neck
                    </Typography>

                    <input id="neck" placeholder="cm"
                       className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />

                  </div>
                  <div className="flex flex-row items-center gap-4 shrink">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Hip
                    </Typography>

                    <input
                       placeholder="cm" id="hip"
                       className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
                  </div>
                 </CardBody>
                 <CardFooter className="pt-0">
                  <Button fullWidth className="text-indigo-800 bg-indigo-50" onClick={CalculateBodyFat}>

                    Calculate
                  </Button>
                 </CardFooter>
               </Card>
              </div>
            </div>
          </div>
         </Col>
       </Row>
      </Container>      
        
        </div>);

}

export default BodyFat;