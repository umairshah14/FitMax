import Carousel from 'react-bootstrap/Carousel';
import tennis from '../assets/images/tennis.jpg';
import running from '../assets/images/running_img.jpg';
import running_2 from '../assets/images/running_2.jpg';
import body_positivity from '../assets/images/body-positivity.jpg';

function UncontrolledExample() {
  return (
    <> 
    
      <Carousel> {/* carousel parent container */}
        <Carousel.Item> {/* carousel container for the 1st image  */}
          <img
            className="imgSlider"
            src={running}
            alt="running before sunrise"
          />
          <Carousel.Caption className='imgCaption'> {/* carousel container for the 1st image's caption  */}
            <h3> Benefits of a morning run</h3>
            <p> <a href= "https://www.shape.com/fitness/cardio/5-reasons-mornings-are-best-time-run"> Learn More </a>  </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> {/* carousel container for the 2nd image  */}
          <img
            className="imgSlider"
            src= {tennis}
            alt="old people exercising"
          />

          <Carousel.Caption className='imgCaption'> {/* carousel container for the 2nd image's caption */}
            <h3>Why staying active after 50 reduces health risk  </h3>
            <p> <a href = "https://www.fitandwell.com/features/benefits-of-exercise-over-50"> Learn more </a> </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item> {/* carousel container for the 2nd image  */}
          <img
            className="imgSlider"
            src= {body_positivity}
            alt="body positivity"
          />

          <Carousel.Caption className='imgCaption'> {/* carousel container for the 2nd image's caption */}
            <h3> It's never too late to start exercising.   </h3>
            <p> <a href="https://www.nhs.uk/live-well/exercise/exercise-health-benefits/"> Learn more </a> </p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item> {/* carousel container for the 3rd image  */}
          <img
            className="imgSlider"
            src= {running_2}
            alt="home_workouts"
          />

          <Carousel.Caption className='imgCaption'> {/* carousel container for the 3rd image's caption  */}
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