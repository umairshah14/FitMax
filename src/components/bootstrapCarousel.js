import Carousel from 'react-bootstrap/Carousel';
import old_people from '../assets/images/old_people.jpeg';
import running from '../assets/images/running_img.jpg';
import running_2 from '../assets/images/running_2.jpg';

function UncontrolledExample() {
  return (
    <> 
    
      <Carousel> {/* carousel parent container */}
        <Carousel.Item> {/* carousel container for the 1st image  */}
          <img
            className="d-block w-100"
            src={running}
            alt="running before sunrise"
          />
          <Carousel.Caption> {/* carousel container for the 1st image's caption  */}
            <h3> 5 Scientific Reasons to run before 7 AM</h3>
            <p> Learn More </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> {/* carousel container for the 2nd image  */}
          <img
            className="d-block w-100"
            src= {old_people}
            alt="old people exercising"
          />

          <Carousel.Caption> {/* carousel container for the 2nd image's caption */}
            <h3>Why staying active after 50 reduces health risk  </h3>
            <p> Learn more </p>
          </Carousel.Caption>
        </Carousel.Item>

        
        <Carousel.Item> {/* carousel container for the 3rd image  */}
          <img
            className="d-block w-100"
            src= {running_2}
            alt="home_workouts"
          />

          <Carousel.Caption> {/* carousel container for the 3rd image's caption  */}
            <h3> Struggling to being consistent with exercises ? 
              3 Tips that will make you be consistent </h3>
            <p>
              Learn More
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>  
  );
}


export default UncontrolledExample;