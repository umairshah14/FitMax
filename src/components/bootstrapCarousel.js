import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1485&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3> Run now for 30min</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.theinertia.com/wp-content/uploads/2016/01/shutterstock_364742141.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prod-everyoneactive-wp.s3.eu-west-2.amazonaws.com/wp-content/uploads/2020/03/19120257/home-workouts-1.jpg"
          alt="3rd image"
        />

        <Carousel.Caption>
          <h3>Demo Text</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;