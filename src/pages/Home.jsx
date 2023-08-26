import EventList from "../components/organism/EventList";
import HomePage from "../components/organism/HomePage";
import Navbar from "../components/organism/Navbar";

function Home() {
    return ( 
    <>
        <Navbar/>
        <HomePage/>
        <EventList/>
    </> 
    );
}

export default Home;