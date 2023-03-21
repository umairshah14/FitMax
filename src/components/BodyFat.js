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

      return ( <div>
        
        <Container >
         <Row>
          <Col lg={6} sm={12}>
          <div className=" flex mx-auto mt-20">
             <div className="flex max-w-md mx-auto md:max-w-xl">
                 <BodyFatTable />
             </div>
          </div>
          </Col>
          <Col lg={6} sm={12}>
            <div className=" flex mx-auto px-2 mt-8 mb-15">
             <div className="flex max-w-md mx-auto md:max-w-xl">
               <div className="md:flex">   
                <Card className=" bg-maincolor border-2 border-secondcolor  ml-8 p-1 mr-6">
                 <CardHeader
                  variant="gradient"
                  className="grid h-8 text-xl font-bold place-items-center border-2 border-secondcolor  bg-indigo-50 text-maincolor"
                  >
                  {" "}
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
                        Gender   
                   </Typography>
                   <select className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3  mt-2 rounded-md flex-1">
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
                   <input
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
                    <input 
                       placeholder="kg"
                       className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
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
                    <input
                       placeholder="kg"
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
                    <input
                       placeholder="kg"
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
                       placeholder="kg"
                       className="text-right text-indigo-50 bg-maincolor border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
                  </div>
                 </CardBody>
                 <CardFooter className="pt-0">
                  <Button fullWidth className="text-maincolor bg-indigo-50" /*onClick={}*/>
                    Calculate Body Fat
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