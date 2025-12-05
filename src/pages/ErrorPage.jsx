import HeroSection from "../components/ui/HeroSection";
import Error from "../components/Error";

export default function ErrorPage() {
    return (
        <div className="font-sans antialiased text-gray-700 bg-white">
            <HeroSection title="404 Error" subtitle1="Home" subtitle2="Error" />
            <Error />
        </div>
    );
}
