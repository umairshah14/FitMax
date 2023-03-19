
import UncontrolledExample from "./bootstrapCarousel";

function Home() {

    // const slides = 
    // [
    //     {
    //         url: "../assets/images/running.jpg"
    //     },
    //     {
    //         url: "./assets/images/running2.jpg"
    //     },
    //     {
    //         url: "./assets/images/old_people.jpg"
    //     },
    // ];

    return (
        <>
    
            <main>
                {/* div for carousel */}
                <div className="carouselParent">
                    <div> <UncontrolledExample /> </div>
                </div>
                
                {/* div for importance of health */}
                <div className="">
                    <h2> Hello World</h2>
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