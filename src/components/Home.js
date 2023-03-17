
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
                <div className="max-w- h-[50%] w-full m-auto py-16 px-4 relative">
                    <div> <UncontrolledExample /> </div>
                </div>
                
                {/* div for importance of health */}
                <div>
                    
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