import WhyChooseSection from "../components/ChooseUs";
import HeroSection from "../components/HeroSection";
import OutdoorActivities from "../components/OutdoorActivities";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import VideoSection from "../components/VideoSection";
import ClientsSection from "../components/ClientsSection";

export default function About() {
    return (
        <div className="w-full overflow-hidden">
            <HeroSection />
            <OutdoorActivities />
            <StatsSection />
            <WhyChooseSection />
            <VideoSection />
            <TeamSection />
            <ClientsSection />
        </div>
    );
}
