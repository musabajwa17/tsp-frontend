import { Play } from "lucide-react";
const PRIMARY_GREEN = "bg-[#21906b]";
const VideoSection = () => (
    <section className={`${PRIMARY_GREEN} py-15 relative overflow-hidden flex items-center justify-center text-center`}>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
            <span className="bg-white text-[#21906b] text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm mb-3 inline-block">
                Amazing Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-15 max-w-3xl mx-auto leading-tight">
                Relax And Enjoy With Our <br /> Hotel & Resort
            </h2>
            <div className="w-full my-40 flex items-center justify-center">
                <button className="bg-white text-black w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play size={24} fill="currentColor" />
                </button>
            </div>
        </div>
    </section>
);

export default VideoSection;
