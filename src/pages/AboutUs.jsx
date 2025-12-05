import WhyChooseSection from "../components/ChooseUs";
import HeroSection from "../components/ui/HeroSection";
import AboutSection from "../components/OutdoorActivities";
import StatsSection from "../components/StatsSection";
import TeamSection from "../components/TeamSection";
import VideoSection from "../components/VideoSection";
import ClientsSection from "../components/ClientsSection";

export default function About() {
    return (
        <div className="font-sans antialiased text-gray-700 bg-white">
            <HeroSection title="About Us" subtitle1="Home" subtitle2="About Us" />
            <AboutSection />
            <StatsSection />
            <WhyChooseSection />
            <VideoSection />
            <TeamSection />
            <ClientsSection />
        </div>
    );
}
