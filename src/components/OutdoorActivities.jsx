import { ArrowUpRight, Check, Utensils, Bike, Waves } from 'lucide-react';
import SectionTitle from "./ui/SectionTitle";

const AboutSection = () => {
    const PRIMARY_GREEN = "bg-[#2da77a]";
    const HOVER_GREEN = "hover:bg-[#258e68]";

    const IMAGES = {
        about1: "https://www.pexels.com/photo/white-ceramic-sinks-2554517/",
        about2: "https://www.pexels.com/photo/brown-wooden-table-beside-wall-2236946/",
    };

    return (
        <section className="py-25 bg-[#e9f0ec] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Text Content */}
                    <div className="pt-3">
                        <SectionTitle
                            tag="LUXURY HOTEL"
                            title="We Provide Outdoor Activities To All Visitors"
                        />

                        <p className="text-black opacity-60 my-4 leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                        </p>

                        {/* Amenities Grid */}
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div className="flex items-start gap-3">
                                <Waves size={48} className="text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                                <span className="font-bold text-gray-900 text-base leading-tight pt-3">
                                    The Best Swimming<br />Pool
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Bike size={48} className="text-gray-900 flex-shrink-0" strokeWidth={1.5} />
                                <span className="font-bold text-gray-900 text-base leading-tight pt-3">
                                    The Best<br />Stationary Bike
                                </span>
                            </div>
                        </div>

                        {/* Check List */}
                        <ul className="space-y-3 mb-12">
                            {[
                                "It is a long fact that a reader will be distracted by the readable",
                                "Lorem Ipsum is simply dummy of the printing and industry",
                                "There are many variations of Lorem Ipsum majority"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-500 text-sm">
                                    <div className="mt-0.5 min-w-[22px] h-[22px] rounded-full bg-[#2da77a]/10 border border-[#2da77a] flex items-center justify-center text-[#2da77a] flex-shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button className={`${PRIMARY_GREEN} ${HOVER_GREEN} text-white px-7 py-3.5 rounded font-semibold flex items-center gap-2 transition-colors text-sm`}>
                            Discover More
                            <ArrowUpRight size={16} strokeWidth={2.5} />
                        </button>
                    </div>

                    {/* Image Composition */}
                    <div className="relative lg:pt-0">
                        <div className="relative h-[550px]">
                            {/* Left Image - Smaller, offset down */}
                            <div className="absolute left-15 top-65 w-[45%] z-10">
                                <img
                                    src="https://images.pexels.com/photos/2554517/pexels-photo-2554517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="w-full h-[320px] object-cover rounded-3xl shadow-lg"
                                    alt="Luxury Hotel Fireplace"
                                />
                            </div>

                            {/* Right Image - Bigger, overlapping left image */}
                            <div className="absolute right-0 top-0 w-[55%] z-0">
                                <img
                                    src="https://images.pexels.com/photos/2236946/pexels-photo-2236946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="w-full h-[480px] object-cover rounded-3xl shadow-lg"
                                    alt="Luxury Hotel Pool"
                                />
                            </div>

                            {/* Floating Restaurant Card - Centered between both images */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-2xl w-[200px] text-center z-20">
                                <div className="mb-3 flex justify-center">
                                    <Utensils size={40} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Restaurants</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    Donec in quis the asd pellentesque velit. Donec id velit arcu posuere blame.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;