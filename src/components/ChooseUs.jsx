import SectionTitle from "./ui/SectionTitle";
import ProgressBar from "./ui/ProgressBar";
const IMAGES = {
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    about1: "https://images.unsplash.com/photo-1512918580421-32c29925e123?q=80&w=800&auto=format&fit=crop", // Fireplace/Indoor
    about2: "https://images.unsplash.com/photo-1572331165267-854da2dc72af?q=80&w=800&auto=format&fit=crop", // Pool/Outdoor
    whyChoose: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1000&auto=format&fit=crop", // Resort view
    whyChooseSmall: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop", // Patio
    team1: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop", // Chef
    team2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop", // Suit guy
    team3: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop", // Staff woman
    team4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", // Suit guy 2
};
const WhyChooseSection = () => (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16">

            {/* Left Content */}
            <div className="order-2 lg:order-1">
                <SectionTitle tag="Our Skills" title="Why Choose for us?" />
                <p className="text-gray-500 mb-10">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                </p>

                <div className="space-y-2">
                    <ProgressBar label="Services" percentage={95} />
                    <ProgressBar label="Chef Master" percentage={85} />
                    <ProgressBar label="Design" percentage={92} />
                    <ProgressBar label="It Solution" percentage={98} />
                </div>
            </div>

            {/* Right Image Grid */}
            <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src={IMAGES.whyChoose} alt="Resort View" className="w-full h-[500px] object-cover" />

                    {/* Decorative dots background element simulation */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/dot-pattern.png')] opacity-20 -z-10"></div>
                </div>

                <div className="absolute bottom-10 -left-10 w-48 h-48 border-4 border-white rounded-2xl overflow-hidden shadow-xl hidden md:block">
                    <img src={IMAGES.whyChooseSmall} alt="Detail" className="w-full h-full object-cover" />
                </div>
            </div>

        </div>
    </section>
);


export default WhyChooseSection;
