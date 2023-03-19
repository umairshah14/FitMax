
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
                <div className="metricsCard">
                    <Row>

                    </Row>
                    
                </div>  

                {/* div for our sponsors */}
                <div className="sponsors">

                </div>

                {/* div for google ads */}
                <div>

                </div>
            </main>    
        </>
    );

}

export default Home;