import HeroSection from "../components/ui/HeroSection";
import Appointments from "../components/Appointments";
import RoomCard from "../components/RoomCards";

export default function Booking() {
    return (
        <div className="font-sans antialiased text-gray-700 bg-white">
            <HeroSection title="Booking" subtitle1="Home" subtitle2="Booking" />
            <Appointments />
            <RoomCard />
        </div>
    );
}
