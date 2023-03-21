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


function DailyCalorie(props) {
    const [calorieData, setCalorie] = useState();

    const [personData, setPersonData] = useState({});

    useEffect(() => {
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

          if(Object.keys(personData).length !== 0) {
            axios.request(options).then(function (response) {
              setCalorie({calorie:response.data.data.goals["maintain weight"]});
            }).catch(function (error) {
              alert("Please check your inputs!");
            });
          }
      }, [personData, personData.age, personData.gender, personData.height, personData.weight, personData.activitylevel]);

      useEffect(() => {
        if(calorieData){
          const report = JSON.parse(localStorage.getItem("report"));
            localStorage.setItem("report",JSON.stringify({
              bmi:report ? report.bmi : "",
              health: report ? report.health : "",
              fat: report ? report.fat : "",
              calorie: calorieData.calorie
          }));
          props.getLocal();
        }
      }, [calorieData]);

      const CalculateCalorie = () => {
        setPersonData({
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value.toLowerCase(),
            height: document.getElementById("height").value,
            weight: document.getElementById("weight").value,
            activitylevel: document.getElementById("actLevel").value,
        });
      }

      return ( 
      <div>
        <Container>
         <Row>
          <Col lg={6} sm={12}>
          <Container className="p-0 mt-14">
           <Row>
            <Col lg={6} md={6} sm={6}>
             <div className="flex flex-col justify-center items-center mt-10 gap-4">
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md  leading-4">
                <p className="text-2xl font-bold text-center">Level 1</p>
                <p className="text-center font-semibold">Sedentary little or no exercise</p>
               </div>
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md  leading-4">
                <p className="text-2xl font-bold text-center">Level 2</p>
                <p className="text-center font-semibold">Exercise 1-3 times/week</p>
               </div>
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md  leading-4">
                <p className="text-2xl font-bold text-center">Level 3</p>
                <p className="text-center font-semibold">Exercise 4-5 times/week</p>
               </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
             <div className="flex flex-col justify-center items-center mt-10 gap-4">
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md leading-4">
                <p className="text-2xl font-bold text-center">Level 4</p>
                <p className="text-center font-semibold">Daily exercise or intense exercie 3-4 times/week</p>
               </div>
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md  leading-4">
                <p className="text-2xl font-bold text-center">Level 5</p>
                <p className="text-center font-semibold">Intense exercie 6-7 times/week</p>
               </div>
               <div className="box-border h-36 w-auto p-3 border-4 border-indigo-800  bg-indigo-50 text-indigo-800 rounded-md leading-4">
                <p className="text-2xl font-bold text-center">Level 6</p>
                <p className="text-center font-semibold">Very Intense exercie daily, or Physical job</p>
               </div>
             </div>
            </Col>
           </Row>
          </Container>
          </Col>
          <Col lg={6} sm={12}>
            <div className=" flex mx-auto px-2 mt-20 mb-15">
             <div className="flex max-w-md mx-auto md:max-w-xl">
               <div className="md:flex">   
                <Card className=" bg-indigo-800 mt-12 ml-8 p-1 mr-6">
                 <CardHeader
                  variant="gradient"
                  className="grid h-8 text-xl font-bold place-items-center border-2 border-indigo-800  bg-indigo-50 text-indigo-800"
                  >
                  {" "}
                  Daily Calories
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
                 <div className="flex flex-row  items-center gap-4 ">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Gender   
                   </Typography>
                   <select id="gender" className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3  mt-2 rounded-md flex-1">
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
                     className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3  mt-2 rounded-md flex-1" />
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
                    <input id="height"
                       className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3 form-input mt-2 rounded-md flex-1" />
                  </div>
                  <div className="flex flex-row items-center gap-4 shrink">
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className=" pt-3 font-medium text-indigo-50 text-xl"
                        style={{width: "100px"}}
                    >
                        Activity level
                    </Typography>
                    <select id="actLevel" className="text-right text-indigo-50 bg-indigo-800 border w-full py-2 px-3  mt-2 rounded-md flex-1">
                      <option style={{display:"none"}}></option>
                      <option>level_1</option>
                      <option>level_2</option>
                      <option>level_3</option>
                      <option>level_4</option>
                      <option>level_5</option>
                      <option>level_6</option>
                   </select>
                  </div>
                 </CardBody>
                 <CardFooter className="pt-0">
                  <Button fullWidth className="text-indigo-800 bg-indigo-50" onClick={CalculateCalorie}>
                    Calculate Daily Calories
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

export default DailyCalorie;