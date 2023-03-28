import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
} from "react-bootstrap";
import UncontrolledExample from "./bootstrapCarousel";
import "../assets/styles/Home.css";
function Home() {
  return (
    <>
      <main>
        {/* div for carousel */}
        <section className="carouselParent">
          <div>
            {" "}
            <UncontrolledExample />{" "}
          </div>
        </section>

        <section className="fitnessMetricsHeader">
          <Row>
            <h2>Fitness Metrics </h2>
          </Row>
        </section>

        {/* div for importance of health */}
        <section className="metricsCardContainer">
          <Container>

          <Row>
            <Col className="BMICardinHome" lg={4} sm={12}>
              <Card style={{ width: "22rem", minHeight:"23rem" }} className="cardStyle">
                <Card.Body>
                  <Card.Title className="cardTitle">BMI</Card.Title>
                  <Card.Text>
                    The body mass index (BMI) is a measure that uses your height
                    and weight to work out if your weight is healthy. The BMI
                    calculation divides an adult's weight in kilograms by their
                    height in metres squared. For example, A BMI of 25 means
                    25kg/m2.
                  </Card.Text>
                  <Card.Link href="#">Calculate your BMI</Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className="FatCardinHome" lg={4} sm={12}>
              <Card style={{ width: "22rem", minHeight:"23rem" }} className="cardStyle">
                <Card.Body>
                  <Card.Title>Calories</Card.Title>
                  <Card.Text>
                    When we eat and drink more calories than we use
                    up, our bodies store the excess as body fat. If this
                    continues, over time we may put on weight. As a guide, an
                    average man needs around 2,500kcal a day and for women, 2000kcal
                  </Card.Text>
                  <Card.Link href="#">
                    Calculate your ideal Daily Calorie intake
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>

            <Col className="CaloriesCardinHome" lg={4} sm={12}>
              <Card style={{ width: "22rem", minHeight:"23rem"}} className="cardStyle">
                <Card.Body>
                  <Card.Title>Body Fat %</Card.Title>
                  <Card.Text>
                  The body fat percentage is a measure of fitness level, since it
                is the only body measurement which directly calculates a
                person's relative body composition without regard to height or
                weight. The widely used body mass index (BMI) provides a measure
                that allows the comparison of the adiposity of individuals of
                different heights and weights.
                  </Card.Text>
                  <Card.Link href="#">
                    Calculate your Body Fat % intake
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;
