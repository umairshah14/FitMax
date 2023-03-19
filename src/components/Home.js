
import { Row, Col} from "react-bootstrap";
import UncontrolledExample from "./bootstrapCarousel";

function Home() {

    return (
        <>
    
            <main>
                {/* div for carousel */}
                <div className="carouselParent">
                    <div> <UncontrolledExample /> </div>
                </div>
                
                {/* div for importance of health */}
                <section className="metricsCard">
                    <Row>
                        <Col className="BMICardinHome" lg={4} sm={12}>
                            <div>
                                <h2>BMI</h2>
                            </div>
                        </Col>

                        <Col className="FatCardinHome" lg={4} sm={12}>
                            <div>
                                <h2>Fat</h2>
                            </div>
                        </Col>

                        <Col className="CaloriesCardinHome" lg={4} sm={12}>
                            <div>
                                <h2>Calories</h2>
                            </div>
                        </Col>
                    </Row>
                    
                </section>  

                {/* div for our BMI Info. */}
                <section className="bmiInfo">
                    <Row>
                        
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