
import { Row, Col, Container, Card} from "react-bootstrap";
import UncontrolledExample from "./bootstrapCarousel";
import '../assets/styles/Home.css';

function Home() {

    return (
        <>
    
            <main>
                {/* div for carousel */}
                <section className="carouselParent">
                    <div> <UncontrolledExample /> </div>
                </section>
                
                {/* div for importance of health */}
                <section className="metricsCardContainer">
                    <Row>
                        <Col className="BMICardinHome" lg={4} sm={12}>
                            <Card className="metricsCard">
                                <h2>BMI</h2>
                            </Card>
                        </Col>

                        <Col className="FatCardinHome" lg={4} sm={12}>
                            <Card className="metricsCard">
                                <h2>Fat</h2>
                            </Card>
                        </Col>

                        <Col className="CaloriesCardinHome" lg={4} sm={12}>
                            <Card className="metricsCard">
                                <h2>Calories</h2>
                            </Card>
                        </Col>
                    </Row>
                    
                </section>  

                {/* section for our BMI Info. */}
                <section className="bmiInfo">
                    <Row>
                        <div className="metricInfoHeaderContainer">
                            <div className="metricInfoHeader">
                                <h2> BMI </h2>
                            </div>    
                        </div>

                        <div className="bmiInfoDescription">
                            <h4> 
                                The body mass index (BMI) is a measure that uses your height and weight to work out if your weight is healthy.
                                The BMI calculation divides an adult's weight in kilograms by their height in metres squared. For example, A BMI of 25 means 25kg/m2.
                            </h4>
                            <h5> 
                                Check if you're healthy by calculating your BMI. 
                            </h5>
                        </div>
                    </Row>
                </section>

                <section className="calorieInfo">
                    <Row>
                        <div className="metricInfoHeaderContainer">
                            <div className="metricInfoHeader">
                                <h2> Daily Calories </h2>
                            </div>    
                        </div>

                        <div className="caloriesInfoDescription">
                            <h4> 
                                The amount of energy in an item of food or drink is measured in calories.
                                When we eat and drink more calories than we use up, our bodies store the excess as body fat. If this continues, over time we may put on weight.
                                As a guide, an average man needs around 2,500kcal (10,500kJ) a day to maintain a healthy body weight.
                                For an average woman, that figure is around 2,000kcal (8,400kJ) a day.
                                These values can vary depending on age, size and levels of physical activity, among other factors.
                            </h4>
                        </div>
                    </Row>
                </section>

                <section className="bodyFatInfo">
                    <Row>
                        <div className="metricInfoHeaderContainer">
                            <div className="metricInfoHeader">
                                <h2> Body Fat </h2>
                            </div>
                        </div>

                        <div className="bodyFatInfoDescription">
                            <h4> 
                                The body fat percentage is a measure of fitness level, since it is the only body measurement which directly 
                                calculates a person's relative body composition without regard to height or weight. 
                                The widely used body mass index (BMI) provides a measure that allows the comparison of the adiposity of individuals of different heights and weights. 
                                While BMI largely increases as adiposity increases, due to differences in body composition, other indicators of body fat give more accurate results; 
                                for example, individuals with greater muscle mass or larger bones will have higher BMIs. 
                                As such, BMI is a useful indicator of overall fitness for a large group of people, but a poor tool for determining the health of an individual.
                            </h4>
                        </div>
                    </Row>
                </section>


                {/* div for google ads */}
                <section>

                </section>
            </main>    
        </>
    );

}

export default Home;